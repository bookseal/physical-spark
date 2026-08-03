/* Physical Spark — the shared site header (vanilla, no deps).

   Every page used to carry its own <nav>, which is how the brand link ended up
   pointing at a specific mission on four pages and at nothing at all on two
   others. This builds one header for all of them.

   Two things to know before editing:

   1. The pages do NOT share a palette. index.html names its tokens
      --bg/--fg/--red; funding.html and the course pages name theirs
      --paper/--ink/--accent. So every colour below is written as
      var(--token, #fallback) — adopt the host page's token when it exists, fall
      back otherwise. This is the same trick auth.js uses.

   2. Load order matters: this file must come BEFORE auth.js. auth.js renders
      into #pr-auth-slot and returns silently if it is missing, and this script
      is what creates that slot.

   Class names are all ps-nav-*. Do not key anything on .bar — that class is a
   progress bar in courses/index.html and pat-me-on-the-back.html, and a nav bar
   elsewhere. */
(function () {
  var HOME = "/";
  var HEIGHT = 54;

  /* Root-relative hrefs: the site is served with site/ as the docroot, and /docs
     and /join.html are already written this way across the existing pages. */
  /* The top bar serves ONE audience: someone deciding whether this is real.
     Everything a builder or a Korean-domestic reader needs is still one click
     away, in the shared footer below — demoted, not deleted. */
  var LINKS = [
    { href: "/company.html", label: "Company" },
    { href: "/market.html", label: "Market" },
    { href: "/courses/", label: "Missions", match: /^\/courses\/?$/ }
  ];
  var CTA = { href: "/pitch.html", label: "60s pitch" };
  var SECONDARY = [
    { href: "/join.html", label: "Join us" },
    { href: "/funding.html", label: "\uc790\uae08 \uc870\ub2ec" },
    { href: "/docs", label: "Playbook" },
    { href: "https://github.com/bookseal/physical-spark", label: "GitHub", ext: true }
  ];

  var css = "\
.ps-nav{position:sticky;top:0;z-index:50;\
  background:color-mix(in srgb, var(--bg, var(--paper, #fbf5e9)) 88%, transparent);\
  backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);\
  border-bottom:1px solid var(--line, #e8dcc4)}\
@supports not (backdrop-filter:blur(1px)){.ps-nav{background:var(--bg, var(--paper, #fbf5e9))}}\
.ps-nav-in{max-width:1180px;margin:0 auto;padding:0 20px;height:" + HEIGHT + "px;\
  display:flex;align-items:center;gap:14px}\
.ps-nav-brand{display:inline-flex;align-items:center;gap:8px;flex:0 0 auto;\
  font-family:-apple-system,'Segoe UI',Roboto,sans-serif;\
  font-weight:900;font-size:15px;letter-spacing:-.01em;text-transform:uppercase;\
  color:var(--fg, var(--ink, #2b211a));text-decoration:none}\
.ps-nav-brand img{height:24px;width:auto;display:block}\
.ps-nav-brand b{color:var(--red, var(--accent, #e0442e))}\
.ps-nav-links{flex:1 1 auto;display:flex;align-items:center;gap:16px;min-width:0;\
  overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}\
.ps-nav-links::-webkit-scrollbar{display:none}\
.ps-nav-links a{flex:0 0 auto;font-family:-apple-system,'Segoe UI',Roboto,sans-serif;\
  font-size:13px;font-weight:600;white-space:nowrap;text-decoration:none;\
  color:var(--muted, var(--faint, #948468))}\
.ps-nav-links a:hover{color:var(--red, var(--accent, #e0442e))}\
.ps-nav-links a.on{color:var(--red, var(--accent, #e0442e))}\
.ps-nav-links a.accent{color:var(--red, var(--accent, #e0442e));font-weight:800}\
.ps-nav-links a.local{color:var(--fg, var(--ink, #2b211a));font-weight:700}\
.ps-nav-links a.local:hover{color:var(--red, var(--accent, #e0442e))}\
.ps-nav-sep{flex:0 0 auto;width:1px;height:16px;background:var(--line, #e8dcc4)}\
.ps-nav-links a:focus-visible,.ps-nav-brand:focus-visible{outline:2px solid var(--red, var(--accent, #e0442e));\
  outline-offset:3px;border-radius:4px}\
.ps-nav-slot{flex:0 0 auto;font-size:13px;font-weight:600}\
.ps-nav-cta{flex:0 0 auto;font-family:-apple-system,'Segoe UI',Roboto,sans-serif;font-size:13px;\
  font-weight:800;text-decoration:none;white-space:nowrap;padding:8px 15px;border-radius:9px;\
  background:var(--red, var(--accent, #e0442e));color:#fff;\
  box-shadow:0 2px 0 color-mix(in srgb, var(--red, var(--accent, #e0442e)) 45%, #000)}\
.ps-nav-cta:active{transform:translateY(1px)}\
.ps-nav-gh{flex:0 0 auto;display:flex;align-items:center;color:var(--muted, var(--faint, #948468))}\
.ps-nav-gh:hover{color:var(--fg, var(--ink, #2b211a))}\
.ps-nav-gh svg{width:18px;height:18px;display:block;fill:currentColor}\
.ps-foot{border-top:1px solid var(--line, #e8dcc4);margin-top:40px;padding:22px 20px 34px;\
  font-family:-apple-system,'Segoe UI',Roboto,sans-serif}\
.ps-foot-in{max-width:1180px;margin:0 auto;display:flex;align-items:center;gap:8px 18px;flex-wrap:wrap;\
  font-size:13px;color:var(--muted, var(--faint, #948468))}\
.ps-foot-in a{color:var(--muted, var(--faint, #948468));text-decoration:none;font-weight:600}\
.ps-foot-in a:hover{color:var(--red, var(--accent, #e0442e))}\
.ps-foot-in .ps-foot-mark{margin-left:auto;font-weight:800;letter-spacing:.02em;\
  color:var(--fg, var(--ink, #2b211a));text-transform:uppercase;font-size:12px}\
/* Anchors must clear the sticky header, or #missions lands underneath it.\
   Nothing on the site set this before. */\
html{scroll-padding-top:" + (HEIGHT + 10) + "px}\
@media (max-width:820px){\
  .ps-nav-in{padding:0 13px;gap:10px}\
  .ps-nav-brand{font-size:0;gap:0}\
  .ps-nav-brand b{font-size:0}\
  .ps-nav-links{gap:14px}\
}";

  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  /* "/", "/index.html" and "/courses/index.html" all need to resolve to the page
     a reader thinks they are on. */
  var path = location.pathname.replace(/index\.html$/, "");
  if (path !== "/" && path.slice(-1) !== "/" && path.indexOf(".") === -1) path += "/";

  function isCurrent(l) {
    if (l.ext) return false;
    if (l.match) return l.match.test(path);
    return path === l.href;
  }

  var header = document.createElement("header");
  header.className = "ps-nav";

  /* A page can add its own in-page jumps without forking the header:
       <script src="/nav.js" data-extra="Play:#play|Read:#read"></script>
     They render first, closest to the brand, because they are "on this page"
     and the site links are "elsewhere". */
  var me = document.currentScript;
  var extra = (me && me.dataset.extra ? me.dataset.extra.split("|") : [])
    .map(function (pair) {
      var i = pair.lastIndexOf(":");
      return '<a href="' + pair.slice(i + 1) + '" class="local">' + pair.slice(0, i) + "</a>";
    }).join("");
  if (extra) extra += '<span class="ps-nav-sep" aria-hidden="true"></span>';

  var links = LINKS.map(function (l) {
    var cls = (l.accent ? "accent " : "") + (isCurrent(l) ? "on" : "");
    var attrs = l.ext ? ' target="_blank" rel="noopener"' : "";
    var aria = isCurrent(l) ? ' aria-current="page"' : "";
    return '<a href="' + l.href + '" class="' + cls.trim() + '"' + attrs + aria + ">" + l.label + "</a>";
  }).join("");

  header.innerHTML =
    '<div class="ps-nav-in">' +
      '<a class="ps-nav-brand" href="' + HOME + '" aria-label="Physical Spark — home">' +
        '<img src="/assets/brand/logo-mark.svg" alt="">Physical<b>&nbsp;Spark</b>' +
      "</a>" +
      '<nav class="ps-nav-links" aria-label="Site">' + extra + links + "</nav>" +
      '<a class="ps-nav-cta" href="' + CTA.href + '">' + CTA.label + "</a>" +
      '<a class="ps-nav-gh" href="https://github.com/bookseal/physical-spark" target="_blank"' +
        ' rel="noopener" aria-label="GitHub"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg></a>' +
      '<span class="ps-nav-slot" id="pr-auth-slot"></span>' +
    "</div>";

  /* Sticky rather than fixed, inserted first, so it occupies its own space and
     no body padding has to be added — which is what would cause a visible jump
     when this script runs at the end of the body. */
  document.body.insertBefore(header, document.body.firstChild);

  /* The demoted links live here. Page footers are ad hoc and differ per page, so
     this appends one consistent strip rather than editing nine of them. */
  var foot = document.createElement("div");
  foot.className = "ps-foot";
  foot.innerHTML = '<div class="ps-foot-in">' +
    SECONDARY.map(function (l) {
      return '<a href="' + l.href + '"' + (l.ext ? ' target="_blank" rel="noopener"' : "") + ">" + l.label + "</a>";
    }).join("") +
    '<span class="ps-foot-mark">Physical Spark</span></div>';
  document.body.appendChild(foot);
})();
