#!/usr/bin/env python3
"""Build site/pitch-artifact.html from site/pitch.html.

The pitch page is deployed two ways:

  site/pitch.html           the real page, served from the site, loads its SVGs over HTTP
  site/pitch-artifact.html  a self-contained single file, for publishing as a Claude Artifact
                            so it can be opened on a phone without the site

The Artifact host enforces a strict CSP: no external hosts at all, not even for
images. So the only transformation here is inlining every referenced SVG as a
data URI. Everything else — layout, the mobile treatment, the teleprompter,
swipe — lives in pitch.html and is inherited, so there is exactly one source of
truth for behaviour.

Run it after any change to pitch.html:

    python3 ops/build-pitch-artifact.py

Then republish the artifact from the same file path to keep its URL.
"""
import os
import re
import sys
import urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "site", "pitch.html")
OUT = os.path.join(ROOT, "site", "pitch-artifact.html")
ASSETS = os.path.join(ROOT, "site", "assets", "brand")


def svg_data_uri(path):
    """Inline one SVG as a utf8 data URI.

    '#' MUST be percent-encoded. SVG writes colours as fill="#e0442e", and inside
    a data URI a raw '#' starts the fragment — the browser would drop everything
    from the first colour onward and the image would silently fail to decode.
    """
    svg = open(path, encoding="utf-8").read()
    svg = re.sub(r">\s+<", "><", svg).strip()
    svg = re.sub(r"\s{2,}", " ", svg)
    return "data:image/svg+xml;utf8," + urllib.parse.quote(svg, safe="=:/;,()'")


def main():
    src = open(SRC, encoding="utf-8").read()

    style = re.search(r"<style>(.*?)</style>", src, re.S)
    body = re.search(r"<body>(.*?)</body>", src, re.S)
    if not style or not body:
        sys.exit("could not find <style> or <body> in pitch.html")
    style, body = style.group(1), body.group(1)

    names = sorted(set(re.findall(r"assets/brand/([\w-]+\.svg)", body)))
    if not names:
        sys.exit("no brand SVGs referenced — did the asset paths change?")
    for name in names:
        path = os.path.join(ASSETS, name)
        if not os.path.exists(path):
            sys.exit(f"missing asset: {path}")
        body = body.replace(f"assets/brand/{name}", svg_data_uri(path))

    # An artifact is published as page content; the host supplies the document
    # shell, so emit <title> + <style> + markup and no <html>/<head>/<body>.
    out = (
        "<title>Physical Spark — the 60-second pitch</title>\n"
        "<style>" + style + "</style>\n" + body
    )

    # Gates: anything reaching an external host would render blank under the CSP.
    if "assets/brand/" in out:
        sys.exit("an un-inlined asset path survived")
    if "%23" not in out:
        sys.exit("'#' was not percent-encoded — the SVGs will not decode")
    for bad in ("<!DOCTYPE", "<html", "<head", "<body"):
        if bad.lower() in out.lower():
            sys.exit(f"artifact must not contain {bad}")

    open(OUT, "w", encoding="utf-8").write(out)
    print(f"built {os.path.relpath(OUT, ROOT)} — {len(names)} SVGs inlined, {len(out)//1024} KB")


if __name__ == "__main__":
    main()
