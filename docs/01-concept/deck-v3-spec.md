# Deck v3 — 빌드 스펙

> `site/deck-v3.html` 을 만들 때 쓰는 **완성 원고**. 슬라이드 30장, 정확히 600초.
> 문구가 바뀌면 **여기를 먼저 고치고** 그다음 HTML에 반영한다.
>
> 원본 소스: [[founder-notes-raw]] (정민홍 원문) → [[founder-notes]] (정리) → **이 문서** → HTML
> 확정: 2026-08-10

---

## 0. 규칙

| | |
|---|---|
| 총 시간 | **600초 정확히.** `sec` 합이 600이 아니면 빌드 실패로 본다 |
| 대본 예산 | `sec × 2.2` 단어. 비원어민이 쉬운 영어로 또박또박 말하는 속도 |
| 카드 | **세로(portrait) 2~3장.** 가로 띠 금지 |
| 카드 본문 | **명사형 불릿 2~3개.** 줄글 금지 |
| 강조 | 한 장에 **딱 하나**의 카드만 색으로 채움 — *심사위원이 그 장에서 하나만 적는다면 적어야 할 것* |
| 대명사 | it / they / them / that job 금지. 명사를 반복한다 |
| 단정 | 증거 없는 "nobody" 류 금지. 출처 있는 숫자로 말한다 |
| 사진 | 우측 슬롯은 **비워둔다.** 나중에 모션으로 채움 |

## 1. 챕터와 색

| 챕터 | 색 | 슬라이드 | 초 |
|---|---|---|---|
| Open | `#6b543c` 진한 갈색 | 00–01 | 44 |
| Why now | `#d9920c` 금색 | 표지 + 02–05 | 96 |
| Problem | `#e0442e` 빨강 | 표지 + 06–08 | 74 |
| Solution | `#2f6fd0` 파랑 | 표지 + 09–11 | 94 |
| Why we win | `#2f6fd0` 파랑 | 표지 + 12–14 | 76 |
| Market | `#0e9a89` 청록 | 표지 + 15–17 | 82 |
| Business | `#c2410c` 주황 | 표지 + 18–20 | 78 |
| Team | `#6b543c` 진한 갈색 | 표지 + 21–22 | 56 |

표지는 **6초, 대본 없음, 카드 없음.** 챕터 이름만 크게. (발표자가 숨 쉬는 자리)

## 2. 목차 커버리지

| 목차 | 슬라이드 |
|---|---|
| ① exact summary | 01 |
| ② current problems | 06 · 07 · 08 |
| ③ solution | 09 · 10 · 11 |
| ④ what is our unique solution | 12 · 13 · 14 |
| ⑤ competitors | 15 |
| ⑥ market (TAM SAM SOM) | 16 |
| ⑥-1 go to market plan | 17 |
| ⑦ why now, why us | 02 · 03 · 04 · 05 |
| ⑧ financial forecast | 19 · 20 |
| ⑧-1 BM | 18 |
| ⑨ team (picture) | 21 |

---

# 🟤 OPEN

## 00 · PHYSICAL SPARK — 20초

**제목** Three groups, one engineer. / **We are where all three meet.**
*(사진 슬롯 때문에 제목 폭이 62%로 좁다 — 두 줄을 넘기지 말 것)*
**부제** Factories that bought robots. A government that pays to train. Developers who want a way in. Tested on real robot work, not on a CV.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| FACTORIES | Bought robots | • And cannot run the robots |
| GOVERNMENT | Pays to train | • And wants young people employed |
| DEVELOPERS | Want a way in | • And have no path into physical AI |

**말할 것** *"Physical Spark. Three groups need the same engineer. Factories that bought robots and cannot run the robots. A government that already pays to train young people. And developers who want a way in. We are where all three meet."*

## 01 · IN ONE SLIDE — 24초 · 목차①

**제목** We turn a real robot task / **into a hire.**
**부제** A small manufacturer writes the task. Engineers solve the task on a robot, and every run is recorded — so other engineers can grade the run.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| THE TASK | Set by a factory | • Real work a small manufacturer needs done<br>• Not a puzzle, not a quiz |
| ⭐ THE PROOF | Work you can watch | • Simulator first, then a real arm<br>• The robot moves, or the robot does not |
| THE MONEY | Paid twice | • A fee to run the contest<br>• A fee on every hire |

**말할 것** *"Here is the company. A small manufacturer writes down real work the factory needs done. Engineers solve the task on a robot, and every run is recorded so other engineers can grade the run. The best engineers get hired. We are paid to run the contest, and paid again on every hire."*

---

# 🟡 WHY NOW

## 표지 — 6초
**WHY NOW** / *The job exists. And it is about to move onto a factory floor.*

## 02 · WHY NOW — 26초 · 목차⑦

**제목** The fastest-growing job in tech / **is the FDE.**
**부제** A forward deployed engineer — the person who makes AI actually work inside a real company.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ⭐ WHY THE JOB EXISTS | 95% fail | • Enterprise AI pilots with no measurable result<br>• The failure is integration, not the model |
| WHO IS BETTING | $4 billion | • OpenAI's new subsidiary, built on the FDE role<br>• AWS: another $1 billion |
| HOW FAST | +5,230% | • FDE job posts, in one year<br>• The fastest-growing role in tech |

**말할 것** *"The fastest-growing job in tech is the forward deployed engineer. MIT found ninety-five percent of enterprise AI pilots produce no measurable result — and the failure is integration, not the model. Somebody has to close that gap. OpenAI just built a four-billion-dollar subsidiary around the role. AWS put in another billion."*
**출처** MIT Project NANDA · OpenAI Deployment Company, May 2026 · AWS, Jun 2026 · FDE hiring trends 2026

## 03 · WHY NOW — 18초 · 목차⑦

**제목** The FDE moves next / **onto a factory floor.**
**부제** And Korea is where the physical FDE lands first.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ⭐ KOREA TODAY | 1,012 robots | • Per 10,000 factory workers — the most on earth<br>• Ageing faster than any OECD country |
| THE FLOOR | Manufacturing | • The industry young workers avoid most<br>• Robots bought to fill the gap |

**말할 것** *"Next, the FDE moves onto a factory floor, and Korea is where that lands first. Korea has more robots per factory worker than any country on earth, and Korea ages faster than any OECD country."*
**출처** IFR World Robotics

## 04 · WHY NOW — 18초 · 목차⑦

**제목** The robots are there. / **The engineers are not.**
**부제** Every robotics plan in Korea is now limited by hiring, not by ambition.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ⭐ THE GAP | 1 per 3 | • Qualified people per open automation job<br>• The skill gap in manufacturing |
| THE WAIT | 114 days | • How long a specialist robotics role stays empty |
| THE TREND | 47% a year | • Physical AI market growth to 2032 |

**말할 것** *"But the engineers are not there. One qualified person for every three open automation jobs. A specialist role sits empty a hundred and fourteen days. And the market grows forty-seven percent a year."*
**출처** Global Robotics Report 2026 · MarketsandMarkets

## 05 · WHY US — 28초 · 목차⑦

**제목** Three groups are all waiting / **for the same person.**
**부제** And one of the three already pays to train that person.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| THE FACTORIES | Bought the robots | • Ageing — fewer workers for repetitive jobs<br>• Robots bought, engineers missing |
| ⭐ THE GOVERNMENT | Pays for both | • Youth employment as the goal<br>• Budget for robot adoption *and* for training |
| THE ENGINEERS | Want a way in | • Retraining, then a referral<br>• The one path into a real job |

**말할 것** *"Three groups are waiting for the same person. Factories: ageing leaves fewer workers for repetitive jobs, so factories buy robots — then need an engineer who can run the robots. The government wants young people in jobs, so the government already pays for both. And young engineers want a referral into a real job. We are where all three meet."*

---

# 🔴 THE PROBLEM

## 표지 — 6초
**THE PROBLEM** / *Paper does not show who can run a robot.*

## 06 · THE PROBLEM — 26초 · 목차②

**제목** My cofounder hires engineers. / **He cannot tell who is good.**
**부제** Every CV lists the same skills, and typing a skill costs nothing. The truth arrives in week two — after the search has already cost him.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ON PAPER | All the same | • The same skills on every CV<br>• Zero cost to type a skill |
| IN PRACTICE | Week two | • Truth only after the interview and the trial<br>• Two weeks of search, already spent |
| ⭐ SO TODAY | Everyone builds a test | • A private test per company<br>• Paid for by that company alone |

**말할 것** *"Here is where this started. My cofounder hires AI engineers. He cannot tell, from a CV, who can actually do the work. Every candidate lists the same skills, and typing a skill costs nothing. The truth arrives in week two, after the search has already cost him. So every company builds a private test."*

## 07 · THE PROBLEM — 24초 · 목차②

**제목** Big companies build a test. / **Small factories cannot.**
**부제** The companies that need a robot engineer most have the fewest ways to find one.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ⭐ NO STANDARD | Nothing to copy | • No agreed measure of robot skill<br>• Every company starts from zero |
| NO BUDGET | 15–30% | • What a Korean headhunter charges<br>• Two thirds of Korea's 2,509 robot firms earn under ₩1B a year |
| NO BRAND | Nobody applies | • An unknown factory in an unknown town<br>• Talent goes to the names everyone knows |

**말할 것** *"The companies that need a robot engineer most are the least able to solve the problem. No agreed measure of robot skill, so every company starts from zero. A Korean headhunter charges fifteen to thirty percent — and two thirds of Korea's robot firms earn under a billion won a year."*
**출처** KIRIA Robot Industry Survey 2024 · Korean recruiting fee ranges

## 08 · THE PROBLEM — 18초 · 목차②

**제목** A wrong hire does not just / **cost a salary.**
**부제** The robot waits while the seat stays open.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ⭐ THE ROBOT | $500,000 idle | • A line bought and not running<br>• Payback pushed six to twelve months |
| THE SEARCH | 114 days | • Paid recruiters, paid interviews, no hire |
| THE PROJECT | 70% fail | • AI projects that never reach production<br>• People reasons, not technical ones |

**말할 것** *"And a wrong hire does not just cost a salary. A half-million-dollar robot line sits idle, and payback slips six to twelve months. Seventy percent of AI projects never reach production, for people reasons."*
**출처** Gartner

---

# 🔵 THE SOLUTION

## 표지 — 6초
**THE SOLUTION** / *A test that produces something a company can watch.*

## 09 · THE SOLUTION — 26초 · 목차③

**제목** One task. One season. / **One ranked list.**
**부제** Fixed dates, a public board, and grading rules the hiring companies helped write.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| THE TASK | Written by buyers | • Real work from real factories<br>• Grading rules written with the buyers |
| THE SEASON | Six weeks, fixed dates | • Everyone starts on the same day<br>• A public board, updated as runs land |
| ⭐ THE OUTPUT | A ranked list | • Every finisher, with the runs attached<br>• Handed to the companies that paid |

**말할 것** *"So here is how a season works. Two or three companies write down real work and help write the grading rules. A season opens — six weeks, fixed dates, a public board. At the end there is a ranked list of finishers, each with the recorded runs attached."*

## 10 · THE SOLUTION — 26초 · 목차③

**제목** Free in a simulator. / **Proven on a real arm.**
**부제** Nobody needs to own a robot to start. The last step is the one nobody can fake.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| START TONIGHT | $0, laptop only | • A free, open-source simulator<br>• No hardware to buy |
| ⭐ PROVE IT | 100 runs | • The same task, over and over<br>• Skill, not one lucky attempt |
| FINISH | One real session | • A $200 arm, recorded<br>• The robot moves, or the robot does not |

**말할 것** *"Nobody needs to own a robot to start. The first step is a free simulator on a laptop. Then the same task runs a hundred times, so the score shows skill and not one lucky attempt. The last step is one recorded session on a real two-hundred-dollar arm."*

## 11 · THE SOLUTION — 36초 · 목차③ ⭐ 덱의 중심

**카드 대신 문서 한 장을 화면에 크게.** (v1 `deck.html` 11번의 `.report` 레이아웃)

**제목** A company buys a scorecard, / **not a CV.**
**부제** One page per finisher. This is a real one.

```
CANDIDATE REPORT · SEASON ONE
  Pick and place                          87 / 100 runs
  New object, new position                72 / 100 · generalises
  Broken coordinate frame                 fixed in 14 min
  Camera sending, robot not receiving     not found  ✗
  Too slow to run live                    fixed
  Oral defence                            PASS · explained the tradeoffs
  ──────────────────────────────────────────────────────────
  VERDICT    Ready to ship, with hardware onboarding
  Sample · 100 simulated runs and one supervised session on a real arm
```

**말할 것** *"So here is what a company actually buys. Not a CV — a scorecard. The same task run a hundred times, so we know it was skill and not luck. A broken robot handed over, and the repair timed. One line is a failure on purpose, because a report where everybody passes is a brochure. And a human asked them to defend the work out loud. This is one page per finisher."*

> 실패 줄(`not found ✗`)은 **의도적**이다. 전원 합격하는 리포트는 브로슈어다.

---

# 🔵 WHY WE WIN

## 표지 — 6초
**WHY WE WIN** / *The parts a competitor cannot copy.*

## 12 · WHY WE WIN — 26초 · 목차④

**제목** The grading / **is free.**
**부제** Labelling is the most expensive step in this kind of data. Players do the labelling, because grading earns board position.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ⭐ WHY PEERS WORK | Video, not opinion | • A physical outcome, visible to anyone<br>• No answer key needed |
| WHY PLAYERS DO IT | Ranking | • Grading earns board position<br>• Every reviewer is also reviewed |
| WHAT IT COSTS US | $0 | • The priciest step, off our books<br>• Free to play, at the door |

**말할 것** *"Now the part that makes this cheap. Grading is normally the most expensive step, and we do not pay for grading. Players grade each other, because grading earns board position. That works here because the outcome is physical and visible. Anyone can see whether the robot did the job."*

## 13 · WHY WE WIN — 24초 · 목차④

**제목** Every season makes / **the next one cheaper.**
**부제** Nothing is thrown away. The record is the part a competitor cannot copy.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| WHAT IS KEPT | Every run | • Video, score, review, date<br>• Kept whether the run passed or failed |
| WHAT IT BECOMES | A standard | • The first agreed measure of robot skill<br>• Written with the companies who hire |
| ⭐ WHY IT HOLDS | Not copyable | • Missions can be copied in a week<br>• Four seasons of graded runs cannot |

**말할 것** *"And nothing is thrown away. Every run is kept — video, score, review, date — whether the run passed or failed. Over seasons that becomes the first agreed measure of robot skill. Anyone can copy our missions in a week. Nobody can copy four seasons of graded runs."*

## 14 · WHY WE WIN — 20초 · 목차④

**제목** AI broke the coding test. / **AI cannot lift a block.**
**부제** Our test survives because the answer is physical.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ⭐ THE OLD TEST | Solved by AI | • Coding questions answered in seconds<br>• HackerRank and Codility built on sand |
| THE NEW TEST | A physical outcome | • The block is lifted, or dropped<br>• A camera watches, not a compiler |
| WHY IT LASTS | No answer key | • The task changes with the factory<br>• Nothing to memorise |

**말할 것** *"One more thing. AI broke the coding test — those questions are answered in seconds now. AI cannot lift a block. Our answer is physical, and a camera watches. There is nothing to memorise."*

---

# 🟢 THE MARKET

## 표지 — 6초
**THE MARKET** / *Sized from the bottom up, with the arithmetic shown.*

## 15 · COMPETITORS — 26초 · 목차⑤

**제목** Three companies proved this works. / **None of them touch a robot.**
**부제** A crowded market with one empty chair, not an empty market.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| GREPP · KOREA | 600 clients | • Korea's Karat: developer testing and hiring<br>• Kakao, LINE — and software only |
| AX 인재전쟁 | 5,000 applicants | • OpenAI and six companies, July 2026<br>• Every task was software |
| ⭐ KARAT · SEATTLE | $1.1 billion | • Companies pay Karat per interview<br>• Software engineers only |

**말할 것** *"So who else is here. In Korea, Grepp runs developer testing and hiring for six hundred companies, including Kakao and LINE. Last month OpenAI ran a hiring contest with six companies and five thousand applicants. And here in Seattle, Karat is a billion-dollar company paid per interview. All three proved the model. None touch a robot."*
**출처** Grepp/프로그래머스 · OpenAI × 조코딩AX, Jul 2026 · Karat

## 16 · MARKET SIZE — 28초 · 목차⑥

**제목** $950 million a year, / **in one country.**
**부제** Then narrowed twice, to the part we can actually reach.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| TAM | $950M | • $93M public AI training, per year<br>• $857M recruiting fees, per year |
| ⭐ SAM | $19M | • 2,509 Korean robot firms × 2 hires × 10%<br>• Plus the physical slice of public training |
| SOM | $126K | • Season one: 2 courses, 1 contest, 10 hires<br>• 0.7% of what we can reach |

**말할 것** *"So how big is this. In Korea alone, ninety-three million dollars a year goes into public AI training and eight hundred and fifty-seven million into recruiting fees. Our slice is the physical part — two thousand five hundred robot companies hiring — about nineteen million a year. Season one is a hundred and twenty-six thousand of that."*
**출처** MOEL AI Campus · KIRIA 2024 · Korean recruiting market estimate

## 17 · GO TO MARKET — 22초 · 목차⑥-1

**제목** Two doors. / **We are already inside both.**
**부제** Most marketplaces die because nobody shows up. That is the one problem we do not have.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| ⭐ DOOR ONE | The classroom | • Main instructor on the national programme<br>• The first cohort costs us nothing |
| DOOR TWO | The contest | • Two or three companies write the first tasks<br>• Each task is a paid season |
| THEN | A referral chain | • Every placement is the next reference<br>• Cost per candidate stays near zero |

**말할 것** *"Most marketplaces die because nobody shows up. We have two doors and we are already inside both. I am a main instructor on the national programme, so the first cohort costs us nothing. And two or three companies write the first tasks."*

---

# 🟠 THE BUSINESS

## 표지 — 6초
**THE BUSINESS** / *How the money arrives, and what the first years look like.*

## 18 · BUSINESS MODEL — 26초 · 목차⑧-1

**제목** Two ways we get paid. / **Both budgets already exist.**
**부제** We are not asking anybody to create a new line item.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| LINE ONE | $43,000 a course | • Thirty engineers, six weeks<br>• Paid out of a training budget that already exists |
| LINE TWO | 10% of salary | • About $2,300 per hire in Korea<br>• Or we run the whole interview, priced per candidate |
| ⭐ WHY 10% WORKS | Half the going rate | • Korean headhunters charge 15–30%<br>• Headhunters search. We already tested. |

**말할 것** *"Two ways we get paid, and both budgets already exist. Teaching — one course of thirty engineers is about forty-three thousand dollars, out of a public training budget that already exists. Hiring — ten percent of first-year salary, about twenty-three hundred dollars in Korea. A Korean headhunter charges fifteen to thirty."*
**출처** MOEL K-Digital Training · Korean recruiting fee ranges · Korean robot-AI junior salary

## 19 · FINANCIALS — 22초 · 목차⑧

**제목** Small on purpose. / **Every line is a guess.**
**부제** Season one turns each of these numbers into a measurement.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| YEAR ONE | $126,000 | • 2 courses, 1 contest, 10 hires<br>• Korea only |
| YEAR TWO | $297,000 | • 4 courses, 2 contests, 30 hires<br>• First repeat sponsors |
| ⭐ YEAR THREE | $662,000 | • 6 courses, 3 contests, 60 hires<br>• First contest in the United States |

**말할 것** *"And the money. Year one is about a hundred and twenty-six thousand dollars. Year three about six hundred and sixty-two thousand, including the first contest in the United States. Small numbers, shown anyway, because every line is a guess season one replaces."*

## 20 · MILESTONES — 24초 · 목차⑧

**제목** The next twelve months, / **as dates.**
**부제** Three things. Each one either happens or does not.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| Q1–Q2 | The free course | • Open to anyone, simulator only<br>• Proof the funnel fills |
| ⭐ Q2–Q3 | Season one | • 30 engineers, six weeks, in the open<br>• Completion rate and review throughput |
| Q4 | The first sponsor | • One company writes the task<br>• One hire out of that season |

**말할 것** *"And the next twelve months, as dates. First half: the free course opens, and we learn whether the funnel fills. Middle: season one — thirty engineers, six weeks, in the open. End of year: the first company writes a task, and the first hire comes out."*

---

# 🟤 THE TEAM

## 표지 — 6초
**THE TEAM** / *Both sides of this market, in two people.*

## 21 · TEAM — 26초 · 목차⑨

**제목** One of us teaches. / **The other one is the buyer.**
**부제** We are not guessing about either side of this market.

| 카드 | 이름 | 불릿 |
|---|---|---|
| 📷 CHIEF EXECUTIVE OFFICER | Jungmin Hong | • Main instructor — Korea's national AI programme<br>• Main instructor — Seoul, Jung-gu district<br>• Writes and grades the work every week<br>• AI engineer at Upstage |
| 📷 CHIEF PRODUCT OFFICER | Gichan Lee | • Lead of FDE — hires AI engineers today<br>• Industrial engineering — factory lines<br>• Could not judge skill from a CV<br>• Builds our product and infrastructure |

**말할 것** *"So, us. I am a main instructor on Korea's national AI programme and for a Seoul district office. I write and grade that work every week, which is where our test comes from. Gichan hires AI engineers today, so Gichan is our own customer. And Gichan builds our product."*

사진: `assets/brand/face-jungmin.png` · `assets/brand/face-gichan.png`

## 22 · WHERE WE START — 24초

**제목** Korea first. / **Then America.**
**부제** Start where all three groups are already looking for each other. Then take the numbers somewhere bigger.

| 카드 | 큰 글씨 | 불릿 |
|---|---|---|
| WHY KOREA | All three, in one place | • The most robots per worker on earth<br>• Public money already paying for training |
| NEXT 12 MONTHS | Three moves | • A free course, open to anyone<br>• A six-week programme inside the national one<br>• The first physical hiring contest |
| ⭐ THEN AMERICA | No government needed | • Contests and courses carry themselves<br>• Salaries, and fees, about 3× higher |

**말할 것** *"So where do we start. Korea — because all three groups are already looking for each other there. Next year: a free course, a six-week programme inside the national one, and the first hiring contest for robot engineers. Then America, where we need no government at all."*

---

## 부록 A — 단가 근거

| 항목 | 값 | 근거 |
|---|---|---|
| 정부 1인당 훈련 예산 | ₩1,300만 | 🟢 KDT AI 캠퍼스 ₩1,300억 ÷ 1만 명 |
| − 훈련수당 | ₩240~480만 | 🟢 월 40~80만 × 6개월 |
| = 훈련기관 훈련비 | ₩820~1,060만 | 🟡 역산 |
| × 커리큘럼+강의 공급 몫 | 20~25% | 🔴 **제 가정 — 이 덱에서 제일 약한 줄** |
| = 과정 1개(30명) 매출 | **₩6,000만 / $43,000** | |
| 로봇 AI 엔지니어 신입 연봉 | ₩3,000~3,500만 | 🟢 |
| 채용 수수료 10% | **₩320만 / $2,300** | |
| 헤드헌터 관행 | 15~30% | 🟢 |
| 대회 스폰서 1개사 | ₩500만 / $3,600 | 🔴 가정 |

환율 ₩1,400/$

**심사위원이 "그 20~25%는 어디서 나왔나" 라고 물으면:** *"기존 훈련기관에 커리큘럼과 강의를 공급하는 구조로 보수적으로 잡았습니다. 우리가 직접 훈련기관이 되면 이 숫자는 4배가 됩니다."*

## 부록 B — 결정된 것 (2026-08-10)

### 1. 커리큘럼 공급자로 시작한다. 훈련기관은 3년차에 검토.

정민홍의 레버리지는 **기관 안에 있다는 것**이지 기관을 소유한 게 아니다. 훈련기관이 되면
에듀윌·중구청이 채널에서 경쟁자로 바뀌고, 지정 심사·시설·고정비가 붙는다.

- **방어책:** 커리큘럼만 팔지 않는다. **평가 시스템과 묶어서** 판다. 커리큘럼은 베낄 수 있어도
  채점·기록·랭킹은 우리 플랫폼에서만 돌아간다.
- Q&A 답변: *"학교가 될 생각이 없습니다. 이미 있는 기관 안에 들어갑니다."*
- 부록 A의 **20~25% 가정은 이 결정의 결과**다.

### 2. 대회 스폰서 = ₩500만 / $3,600. **헤드헌팅 수수료와 비교해서 말한다.**

| 비교 대상 | 금액 | 무엇을 받나 |
|---|---|---|
| 헤드헌터 (한국 관행 15~30%) | 1명당 **₩525만~1,050만** (연봉 3,500만 기준) | **후보 1명** |
| **시즌 스폰서** | **₩500만** | **채점된 후보 30명 전원** |

한 명 값도 안 되는 돈으로 서른 명의 성적표를 본다. 1인당 **₩17만**.
그리고 실제로 채용하면 그때 10%를 따로 낸다 — **찾아주는 값이 아니라 시험해준 값**이기 때문.

**말하는 법:** *"A headhunter charges five to ten million won to show you one person.
A season costs five million and shows you thirty, all graded."*

### 3. 사진 슬롯 — 전 슬라이드 **우측 상단**에 자리만 잡는다

사진·모션 그래픽을 나중에 넣는다. 지금은 비워둔다. 슬롯 크기가 고정돼 있어야
나중에 채울 때 제목이 다시 밀리지 않는다.

## 부록 C — 아직 안 정해진 것

- 슬롯에 들어갈 사진/모션의 실제 내용
