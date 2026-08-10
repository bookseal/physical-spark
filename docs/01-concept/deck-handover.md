# The 10-minute deck — handover

For whoever picks up `site/deck.html` next. Written 2026-08-10, after a long day
of rebuilding it. Live at <https://physical-spark.bit-habit.com/deck.html>.

The audience it was written for: **8/11–12, Seattle, people acting as investors
and scoring against a checklist.** Most of them do not work in technology and do
not follow industry news. That single fact drove almost every decision below.

---

## Where everything is

The whole deck is one array in one file:

```
site/deck.html   →   const BEATS = [ ... ]
```

Twenty-five objects. Each is a slide: `sec`, `label`, `hero`, `head`, `sub`,
`html`, `say`. The rest of the file is the renderer and the styles. There is no
build step and no framework — edit the array, save, open the page.

Images live in `site/assets/toy/` (the miniatures), `site/assets/div/` (the six
section markers) and `site/assets/brand/` (logos, QR, and a pile of retired line
drawings that nothing references any more).

## Three rules when editing

1. **`sec` must total exactly 600.** Take seconds from one beat if you give them
   to another.
2. **A beat's `say` must be under `sec × 2.5` words.** The teleprompter turns red
   past it, which is the only thing that stops one slide eating the next.
3. **Open it in a browser afterwards.** CI does not check HTML. A broken `<div>`
   deploys green.

Quick check for 1 and 2 — paste in the browser console on the deck:

```js
BEATS.reduce((n,b)=>n+b.sec,0)                                  // must be 600
BEATS.filter(b => (b.say||'').split(/\s+/).length > b.sec*2.5)  // must be empty
```

And to find anything that runs past the projector dead zone (run it at the size
you will actually present at, not on a laptop):

```js
(() => {
  const safe = innerHeight - parseFloat(getComputedStyle(document.querySelector('.stage')).paddingBottom);
  const bad = [];
  document.querySelectorAll('.beat').forEach(b => {
    const i = +b.dataset.i + 1, prev = b.style.display;
    b.style.display = 'block';
    let low = 0;
    b.querySelectorAll('*').forEach(el => { const r = el.getBoundingClientRect(); if (r.height && r.bottom > low) low = r.bottom; });
    b.style.display = prev;
    if (low > safe) bad.push(i + ': ' + Math.round(low - safe) + 'px over');
  });
  return bad.length ? bad : 'all slides fit';
})()
```

## Deploying

Push to `main`. GitHub Actions runs `ops/deploy.sh` on the server, which does
`git reset --hard origin/main` and serves the result. **The repository is the
deploy artifact**: anything tracked is published, so do not commit anything you
would not put on the open web.

If Actions is slow to wake (it sometimes takes minutes), the same deploy can be
run directly: `ssh bit-habit '/home/ubuntu/workspace/physical-spark-deploy.sh'`.

Verify by curling the live URL, not by trusting a green CI run — green runs are
often for the previous commit.

---

## Decisions already made, and why

Re-opening these costs a day. If you disagree, disagree deliberately.

**Category: we are the assessment, not a search firm.** An early draft opened
"we are the search firm for Physical AI" and then spent a later slide arguing we
are not one. Search firms trade at 1–2× revenue; per-assessment businesses trade
much higher. But assessment revenue needs hiring volume that does not exist yet,
so the deck sells placement now and names per-assessment as the destination.

**Fee: 10%, not 20% and not 40%.** 40% was tried and withdrawn. 20% is the
ordinary contingency rate, and the firms we named as customers are precisely the
ones who cannot afford a headhunter — pricing at parity would price us out of
our own segment. 10% is half the standard, and the slide says why: a search firm
does the searching, we did the assessment.

**No cheating angle.** Data exists showing ~48% of technical interviews get
flagged for AI assistance. It is not in the deck on purpose. For this role, using
AI well *is* the job, so "catching AI use" would make us a proctoring company —
adversarial, crowded, and the opposite of our thesis, which is: let them use AI
and measure whether the result works.

**No invented TAM.** Every figure on a wall is either counted by somebody (IFR,
A3, Indeed Hiring Lab, Gartner, Christian & Timbers) or is our own price. The
market slide says out loud that there is no fifty-billion-dollar number, because
a figure the room can check is worth more at seed than one they must accept.

**Market comes after go-to-market.** Unconventional. It puts a breath between the
competitor slide and the arithmetic, and it turns the number into a conclusion
rather than a premise: here is how we reach them, and here is how many that is.

**bit habit is not in this deck.** The 90% retention figure belongs to a
different product and cost a sentence to explain. The teaching load carries the
same claim and is current.

**Miniature photographs everywhere.** Line drawings asked the room to decode a
diagram. A mixed set reads as unfinished rather than as variety, so everything is
one set — one wooden table, one warm light. The exceptions are the two founder
portraits and the opening clip, which is our own arm actually running.

**Presenter aids default off.** Auto-advance, teleprompter and fullscreen all
start off; `A`, `S`, `F` turn them on for rehearsal. They are furniture and they
land in screenshots.

## Three tests worth re-running on anything you write

1. **Count the premises.** Not "is this clear" but "what must the reader already
   know to parse this". Zero is a pass. One is survivable if the answer is beside
   it. Two means rewrite.
2. **Every claim needs an object.** "The CV says yes" — yes to *what*. "70%" — of
   *what*. This one is mechanical, which is why it catches things that reading
   carefully does not. Being close to the material makes you blind to it.
3. **Read the headlines alone, in order.** If that sequence is not a complete
   argument, the deck depends on a voice, and half the room is not listening to
   the voice.

---

## Still open

**1. There is no ask on any slide.** This is the worst thing in the deck. A
checklist has a line for it and ours scores zero. What is missing is a figure and
a date; the shape is ready:

> We are raising **[amount]** to run season one.
> Thirty players, six weeks, and the first grading rules written with a company.
> — what it buys: the record and the review gallery, which are not built
> — what it proves: how many finishers make a shortlist a company will pay for
> — when: season one starts **[month]**

It belongs between the financials beat and the close, and needs about 25 seconds
taken from elsewhere.

**2. The job has no name on the slides.** The deck runs on "the engineer",
"these engineers", "who can run them", "the title" — the role is named in the
spoken script and almost nowhere on a wall. A judge fills that blank with a
guess, and market size, competitors and team credentials all hang off it. Pick
one noun and use it on every slide that refers to the role.

**3. "Real robots" versus the report's fine print.** Beat 2 says we put engineers
on real robots. Beat 11's report says "100 simulated runs and one supervised
session on a real arm". Both are true and they read as a contradiction.

**4. The market beat is the weakest slide.** Its `$20,000 a hire` has no basis
shown — it implies a $200k salary that appears nowhere — it is calculated for
North America while the business runs in Korea, and three slides later the
financials say $22,000 a season, which makes the $56M look unreal.

**5. Sponsorship price appears once, on the second-to-last slide.** "They sponsor
the season" is on slide 2; the $3,000 is on slide 24.

**6. The HUD is visible to the audience.** The clock and the per-slide seconds are
presenter furniture on the wall.

---

## The content bank

`docs/01-concept/deck-content-bank.md` holds every slide of the 18-beat version
that preceded this one, lifted out before the rebuild. Several lines in there are
better than what replaced them. Worth reading before writing anything new.
