# Physical AI 기업 지도 — 큰 나무부터 (가치사슬 × 응용 산업)

> "지금 누가 로봇을 현실에 배치하나"의 기업 지도. **가치사슬(큰 나무) → 응용 산업 버티컬(잔가지)** 순으로 짚는다.
> 뼈대는 **Balerion Space Ventures**의 "Emerging Robotics" 인포그래픽(2026, 인용문은 Claude Shannon 표기, 연락 k.alton@balerionspace.com) — 7개 카테고리 × 8개사. 조사일 2026-07-15, **원본 인포그래픽 대조·보강 2026-07-16** (주장마다 출처 링크).
> 이 문서는 [[02-robot-industry-landscape|산업 지형(규모)]]·[[03-physical-ai-players-and-money|플레이어와 돈(뇌 vs 몸)]]의 **확장판**이자, 인포그래픽을 **그대로 옮기지 않고 웹으로 검증·정정한 상위 버전**이다 — 이름을 바로잡고(FWR→Fluid Wire, ARX, DYNA, Forterra…), 분류 오류를 짚고, 확인 안 되는 건 "⚠️ 미확인"으로 남긴다.
> ✅ 신뢰도 교차검증: 인포그래픽 출처 Balerion이 실제로 아래 **Machina Labs의 투자사**로 확인됨.

---

## 0. 한 장 요약 — 돈과 병목은 어느 "층"에 있나

Physical AI를 한 산업으로 세우면 **5층 가치사슬**이 된다. 응용 산업(우주·국방·물류…)은 맨 위 **잎사귀**일 뿐, 돈과 방어력은 아래 특정 층에 몰린다.

| 층 | 무엇 | 성격 | 돈/병목 |
|---|---|---|---|
| ⑤ **응용 산업** | 우주·국방·물류·제조·건설… | 실수요 시장 | 자본(특히 국방 예산)이 빠르게 유입 |
| ④ **배포·통합 (FDE)** | 현장 세팅·안전·모션플래닝 | **진짜 병목** — 이론↔현실 간극 | 사람이 부족 (우리 각) |
| ③ **파운데이션 모델 (뇌)** | 어떤 로봇에도 얹는 범용 제어 AI(VLA) | 소프트웨어 레버리지·카피 어려움 | **자본이 가장 집중** |
| ② **센서·인지 (눈)** | 카메라·인지 모델 | 조작의 남은 난제 | → [[04-arm-hand-eye|팔·손·눈]] |
| ① **액추에이터·기체 (몸)** | 팔·손·모터·휴머노이드 바디 | **상품화(commodity)** 진행 | 원가 경쟁, 마진 압박 |

> **돈의 흐름 (2025):** 로보틱스·physical AI 스타트업이 1,009건 딜에서 기록적 **$27.6B** 조달(전년 2배+). **"AI 플랫폼(뇌)" 층은 딜 수의 16%인데 자본의 30%를 흡수** — 뇌(③)가 여러 몸에 이식되는 범용 자산이라 "OEM이 아니라 소프트웨어 배수(software multiples)"로 평가받는다. ([The New Stack](https://thenewstack.io/physical-ai-models-frontier/) · [TechTimes](https://www.techtimes.com/articles/319037/20260625/robotics-vc-breaks-annual-records-midyear-why-physical-ai-commands-software-multiples.htm))
> **국방은 자본이 가장 빠르게 흐르는 잎:** 2025 defense-tech VC ~$49.9B(+83%), 2026 미 국방예산 $1조 초과 ([S&P Global](https://www.spglobal.com/market-intelligence/en/news-insights/articles/2026/3/venture-capital-investment-in-defense-tech-surges-while-m-a-activity-slows-99534071)).
>
> **핵심:** 잎(⑤)이 아무리 화려해도, **몸(①)은 상품화되고 뇌(③)에 돈이 몰리며, 정작 현실 배치(④)는 사람이 없다.** 이 문서의 §10이 그 지점.

---

## 1. 큰 나무 — 가치사슬 5층 자세히

- **① 액추에이터·기체(몸)** — 팔은 이미 상품($100~250 SO-101). 휴머노이드 바디도 중국산 부품 원가 경쟁. IP는 **손(그리퍼)** (→ [[04-arm-hand-eye|팔·손·눈]]).
- **② 센서·인지(눈)** — 좌표 이동은 풀린 문제, **인지가 남은 병목.** 2026 최상위 조작 모델은 전부 RGB 카메라만.
- **③ 파운데이션 모델(뇌)** — VLA. "한 모델로 모든 로봇" 베팅. 자본 집중 (→ [[06-robot-learning-ladder|러닝 사다리]] §5).
- **④ 배포·통합(FDE)** — 안전(FORT류)·**모션플래닝(Realtime·Jacobi)**·현장 로봇 브레인(Sereact)·배포 플랫폼(Vention). **가장 안 팔리는 게 사람.**
- **⑤ 응용 산업** — 아래 §2~9. 인포그래픽의 7개 카테고리 순서를 따른다.

---

## 2. 우주 (Space)

| 기업 | 무엇 | 본사 | 최근 상태 (2025~2026) |
|---|---|---|---|
| **Starfish Space** | 자율 랑데부·도킹으로 위성 수리·이동·폐기(기체 Otter) | 🇺🇸 워싱턴 | Series B **$100M+**(2026.04). Space Force $54.5M ([GeekWire](https://www.geekwire.com/2026/starfish-space-54-5m-space-force/)) |
| **ClearSpace** | 로봇팔로 궤도 잔해 포획·제거 (EPFL 스핀오프) | 🇨🇭 로잔 | ClearSpace-1 미션 2026 하반기 발사 예정, ESA €86M ([ESA](https://www.esa.int/Space_Safety/ESA_purchases_world-first_debris_removal_mission_from_start-up)) |
| **GITAI** | 우주용 로봇팔·궤도상 조립·위성 서비싱 (→ 방산 확장) | 🇺🇸 토런스 | ⚠️ **일본 아니라 미국**(2023 이전). MDA SHIELD·우주군 SBI 선정 ([SpaceNews](https://spacenews.com/gitai-gets-funds-to-develop-in-orbit-robotic-servicer/)) |
| **Katalyst Space Technologies** | 위성 서비싱·궤도상 로지스틱스(NEXUS) | 🇺🇸 애리조나 | $12M(2026.06), NASA $30M 계약 ([SpaceNews](https://spacenews.com/katalyst-space-raises-12-million-for-geo-servicing-demo-mission/)) |
| **Icarus Robotics** | 궤도상 "창고 노동" 임바디드 AI 로봇("Joy") | 🇺🇸 뉴욕 | 시드 $6.1M(2025.09). Voyager와 ISS 실증(2027) ([TechCrunch](https://techcrunch.com/2025/09/17/icarus-raises-6-1m-to-take-on-spaces-warehouse-work-with-embodied-ai-robots/)) |
| **OffWorld** | AI 스웜 로봇으로 광산 채굴 자동화(→ 달·우주 자원) | 🇺🇸 패서디나 | 사우디 Ma'aden MOU. 신규 펀딩액 ⚠️ 미확인 ([AI Magazine](https://aimagazine.com/articles/offworld-takes-robot-swarms-to-maaden-mines-in-saudi-arabia)) |
| **Rendezvous Robotics** | 자기조립 모듈 타일(TESSERAE)로 궤도상 자율 조립 | 🇺🇸 콜로라도 | 프리시드 $3M(2025.09 스텔스 탈출). 2026 ISS 데모 목표 ([TechCrunch](https://techcrunch.com/2025/09/10/rendezvous-robotics-exits-stealth-with-3m-to-build-reconfigurable-space-infrastructure/)) |
| **Fluid Wire Robotics** (=FWR) | 극한환경(원자력·우주·수중)용 경량 로봇팔 | 🇮🇹 피사 | ⚠️ **우주 전용 아님** — 극한환경 로봇팔(우주는 응용처 하나). EIC €2.5M ([Sant'Anna](https://www.santannapisa.it/en/news/fluid-wire-robotics-spin-santanna-school-advanced-studies-receives-eu25-million-eic)) |

---

## 3. 국방 (Defense)

가장 빠르게 자본(정부 예산)이 몰리는 잎. 일부는 ③ 뇌(Scout AI)에 걸침.

| 기업 | 무엇 | 본사 | 최근 상태 (2025~2026) |
|---|---|---|---|
| **Ghost Robotics** | 군용 4족보행(Vision 60 "로봇개") | 🇺🇸 필라델피아 | **한국 LIG넥스원이 지분 60% 인수**(~$240M, 2024) ([The Robot Report](https://www.therobotreport.com/lig-nex1-announces-intent-to-acquire-quadruped-maker-ghost-robotics/)) |
| **SmartShooter** | AI 사격통제(fire-control) SMASH — 자동 조준·발사 | 🇮🇱 이스라엘 | 미 육군·해군·해병대 연쇄 계약(2025~26) ([Breaking Defense](https://breakingdefense.com/2025/06/israels-smartshooter-says-us-army-expanding-use-of-high-tech-fire-control-system/)) |
| **Overland AI** | 국방용 오프로드 지상 자율스택(OverDrive) | 🇺🇸 시애틀 | Series A **$32M**(2025.01). 육군·DIU RCV $18.6M ([GeekWire](https://www.geekwire.com/2025/overland-ai-unveils-self-driving-vehicle-for-military-that-goes-35-mph-and-navigates-off-road-terrain/)) |
| **Scout AI** | 방산용 **VLA 파운데이션 모델 "Fury"**(드론·UGV 자율화) | 🇺🇸 캘리포니아 | Series A **$100M**(2026.04) ([TechCrunch](https://techcrunch.com/2026/04/29/coby-adcocks-scout-ai-raises-100-million-to-train-models-for-war-we-visited-its-bootcamp/)) |
| **Swarmbotics AI** | 저가 지상 로봇 스웜(ANTS/FireAnt) | 🇺🇸 미국 | ~$17M. 2026 초 미 육군 1기병사단 통합 ([The Defense Post](https://thedefensepost.com/2026/02/09/swarmbotics-us-army/)) |
| **Forterra** (=FORT, 구 Robotic Research) | 지상차량 자율주행 SW(AutoDrive) | 🇺🇸 메릴랜드 | Series C **$238M @ $1B+**(2025.11). Oshkosh 양산계약. 한화자산운용 투자 ([The Robot Report](https://www.therobotreport.com/forterra-raises-238m-scale-ai-platforms-defense-applications/)) |
| **ARX Robotics** (=ARK) | 유럽 국방 무인지상차(Gereon UGV) + Mithra OS | 🇩🇪 뮌헨 | Series A **€42M**(2025). 유럽 6개국 배치. DEUTZ 전략투자 ([EU-Startups](https://www.eu-startups.com/2025/07/german-defensetech-arx-robotics-reinforces-europes-battlefield-edge-with-e42-million-for-tactical-ugvs/)) |
| **ACS = Allen Control Systems** | 자율 대(對)드론 무기 스테이션 "Bullfrog" | 🇺🇸 오스틴 | Series A $30M(Craft Ventures) ([OODA Loop](https://oodaloop.com/company-profiles/defense-tech/allen-control-systems/)) |

---

## 4. 물류·창고 (Warehouse & Logistics)

로봇 시장의 최대 조각(물류 39%, → [[02-robot-industry-landscape|산업 지형]]). 이미 실전·규모의 게임.

| 기업 | 무엇 | 본사 | 최근 상태 (2025~2026) |
|---|---|---|---|
| **Nomagic** | AI 로봇팔 피킹·패킹 소프트웨어 | 🇵🇱 바르샤바 | **$44M**(2025.02), 북미 진출 ([TechCrunch](https://techcrunch.com/2025/02/26/nomagic-picks-up-44m-for-its-ai-powered-robotic-arms/)) |
| **Exotec** | 고밀도 창고 자동화 Skypod(3D 이동 AMR) | 🇫🇷 릴 | 누적 $477M @ $2B(프랑스 1호 산업 유니콘) ([Exotec](https://www.exotec.com/en-gb/news/exotec-leves-335-million-dollars-and-becomes-frances-first-industrial-unicorn/)) |
| **Sereact** | 어떤 로봇에도 도는 AI "로봇 브레인" Cortex = ④ 배포층 | 🇩🇪 슈투트가르트 | Series B **$110M**(2026.04), 미국 진출 ([The Robot Report](https://www.therobotreport.com/sereact-gets-series-b-funding-expand-cortex-2-robot-brain-enter-u-s-market/)) |
| **Nimble Robotics** | AI 완전자율 이커머스 풀필먼트(3PL) | 🇺🇸 샌프란시스코 | Series C **$106M @ $1B**, FedEx 주도 ([The Robot Report](https://www.therobotreport.com/nimble-picks-up-106m-scale-general-purpose-fulfillment-robot/)) |
| **Mytra** | 창고 3D 저장·자재흐름 (창업자 = 전 Tesla Optimus 총괄) | 🇺🇸 캘리포니아 | Series C **$120M**(2026.01), 누적 $200M+ ([Mytra](https://mytra.ai/news/mytra-raises-120m-series-c)) |
| **Pickle Robot** | 트럭·컨테이너 자율 하역 | 🇺🇸 케임브리지 | Series B $50M. **UPS가 로봇 400대에 $120M**(2025 말) ([The Robot Report](https://www.therobotreport.com/pickle-robot-gets-orders-over-30-unloading-systems-plus-50m-funding/)) |
| **Dexterity** | 창고 상·하차·팔레타이징 AI 매니퓰레이션 | 🇺🇸 레드우드시티 | **$95M @ $1.65B**(2025.03) ([Bloomberg](https://www.bloomberg.com/news/articles/2025-03-11/ai-robotics-startup-dexterity-lands-1-65-billion-valuation)) |
| **Locus Robotics** | 창고 AMR을 RaaS(구독형)로 공급 | 🇺🇸 매사추세츠 | 누적 $438M @ ~$2B. **2025 누적 50억 픽 돌파** ([PR Newswire](https://www.prnewswire.com/news-releases/locus-robotics-surpasses-5-billion-pick-milestone-accelerating-global-adoption-of-mobile-warehouse-automation-302436658.html)) |

---

## 5. 제조·자동화 (Manufacturing & Automation)

스마트팩토리 = 피지컬 스파크 타겟과 가장 직접적인 잎. ④ 배포층(Vention)과 겹침.

| 기업 | 무엇 | 본사 | 최근 상태 (2025~2026) |
|---|---|---|---|
| **Machina Labs** | 로봇 2대가 금속판 점진 성형(RoboForming) | 🇺🇸 LA | Series C **$124M**. ✅ **Balerion(인포그래픽 출처)이 투자사** ([Machina Labs](https://machinalabs.ai/resources/machina-labs-raises-124-million-to-scale-manufacturing-infrastructure-for-defense-and-advanced-mobility)) |
| **Path Robotics** | 자율 용접 로봇 셀 | 🇺🇸 오하이오 | Series D **$100M**(2024.10). 방산·조선 확장 ([The Robot Report](https://www.therobotreport.com/path-robotics-raises-100m-to-automate-welding/)) |
| **Hadrian** (Hadrian Automation) | 항공우주·방산 정밀부품 **자율 공장** | 🇺🇸 캘리포니아 | Series C **$260M**(2025.07). Hadrian Maritime 출범 ([TechCrunch](https://techcrunch.com/2025/07/17/hadrian-raises-260m-to-build-out-automated-factories-for-space-and-defense-parts/)) |
| **GrayMatter Robotics** | physics-informed AI로 샌딩·연마 표면마감 코봇 | 🇺🇸 LA | Series B **$45M**. 미 최대 조선사 HII와 협력 ([PR Newswire](https://www.prnewswire.com/news-releases/graymatter-raises-45m-series-b-to-accelerate-its-unique-ai-powered-robotics-solutions-for-manufacturings-hardest-problems-and-unique-challenges-302177566.html)) |
| **Vention** | 브라우저에서 자동화 셀 설계→배포하는 클라우드 플랫폼 = ④ 배포층 | 🇨🇦 몬트리올 | MachineMotion AI 출시. 고객 4,000+ ([Vention](https://vention.com/about)) |
| **Novarc Technologies** | 파이프 용접 협동로봇 + AI 비전 NovAI | 🇨🇦 밴쿠버 | Series B **$50M**(2025.03) ([GlobeNewswire](https://www.globenewswire.com/news-release/2025/03/11/3040831/0/en/NOVARC-RAISES-50-MILLION-SERIES-B-TO-EXPAND-ITS-AI-POWERED-MACHINE-VISION-NOVAI-FOR-AUTOMATED-WELDING-SOLUTIONS.html)) |
| **Standard Bots** | 저가 6축 코봇 RO1($37K~) | 🇺🇸 뉴욕 | Series B **$63M**(2024.07). 2025 신규 라운드 ⚠️ 미확인 ([The Robot Report](https://www.therobotreport.com/standard-bots-raises-63m-to-bring-cobot-arms-to-market/)) |
| **FR = Fairino** (최유력) | 제품군이 문자 그대로 FR3·FR5·FR10인 중국 협동로봇 | 🇨🇳 쑤저우 | ⚠️ 빨간 "FR" 로고 직접 대조 못 함. 도메인 frtech.fr·FR 시리즈로 최유력 ([Fairino](https://www.frtech.fr/)) |

---

## 6. 휴머노이드 (Humanoids)

관심 최대, 성숙도 최저. 대부분 1회 충전 ~2시간이라 8시간 교대는 아직 멀다 ([IEEE Spectrum](https://spectrum.ieee.org/humanoid-robot-scaling)). 층으로는 ① 몸(바디)이 핵심.

| 기업 | 무엇 | 본사 | 최근 상태 (2025~2026) |
|---|---|---|---|
| **Apptronik** | 범용 휴머노이드 Apollo (Google DeepMind 협업) | 🇺🇸 오스틴 | Series A 누적 **$935M+ @ ~$5B**(2026.02). Mercedes·Jabil 파일럿 ([CNBC](https://www.cnbc.com/2026/02/11/apptronik-raises-520-million-at-5-billion-valuation-for-apollo-robot.html)) |
| **Figure AI** | 실환경 배치용 범용 휴머노이드(Figure 02/03) | 🇺🇸 캘리포니아 | Series C **$1B+ @ $39B**(2025.09) ([TechCrunch](https://techcrunch.com/2025/09/16/figure-reaches-39b-valuation-in-latest-funding-round/)) |
| **Neura Robotics** | 유럽 최대 풀스택 휴머노이드·물리 AI | 🇩🇪 메칭엔 | **Series C up to $1.4B @ $7B**(2026.06) ([CNBC](https://www.cnbc.com/2026/06/10/neura-robotics-funding-ai-humanoid-robots.html)) |
| **Agility Robotics** | 물류용 이족 휴머노이드 Digit(세계 최다 배치) | 🇺🇸 오리건 | **2026.06 SPAC 상장 발표(~$2.5B, Nasdaq: AGLT)** ([GeekWire](https://www.geekwire.com/2026/digit-maker-agility-robotics-to-go-public-in-2-5b-deal-heres-what-the-filings-say-about-its-finances/)) |
| **Tesla (Optimus)** | 자사 공장용 범용 휴머노이드 | 🇺🇸 텍사스 | Gen3 1,000+대 사내 가동, V3 바디 2026 하반기 예정 ([The Robot Report](https://www.therobotreport.com/from-evs-to-robotics-tesla-targets-10m-optimus-units-with-new-texas-plant/)) |
| **1X Technologies** | 가정용 휴머노이드 NEO 소비자 직판(OpenAI 투자) | 🇳🇴/🇺🇸 오슬로 | NEO 사전주문, 5일 만에 1만 대. ⚠️ 초기 원격조작 의존 ([The Robot Report](https://www.therobotreport.com/1x-announces-pre-order-launch-neo-humanoid-robot/)) |
| **Sanctuary AI** | 정교한 로봇 손·인지 SW. **2026 완제품 대신 SW·손 라이선스로 피벗** | 🇨🇦 밴쿠버 | Phoenix 8세대, 누적 $140M+ ([Sanctuary](https://sanctuary.ai/news/)) |
| **Foundation** | 산업·국방 양용 휴머노이드 Phantom | 🇺🇸 SF/🇩🇪 뮌헨 | 시드 ~$12M, $100M @ $1B 협상 중. ⚠️ 인포그래픽 "Vicarious 창업" 캡션 **오류**(실제 창업자 Sankaet Pathak) ([Humanoids Daily](https://www.humanoidsdaily.com/news/foundation-emerges-with-phantom-humanoid-betting-on-novel-actuators-and-hybrid-ai)) |

---

## 7. 파운데이션 모델 · AI 두뇌 (Foundation Models = ③ 뇌)

소프트웨어 엔지니어가 하드웨어와 가장 쉽게 접점을 찾는 층. **자본이 가장 집중**. ⚠️ 단, 인포그래픽이 이 섹션에 넣은 **Jacobi·Realtime은 VLA가 아니라 ④ 모션플래닝 층** — 분류 오류로 표기.

| 기업 | 무엇 | 본사 | 최근 상태 (2025~2026) |
|---|---|---|---|
| **Skild AI** | **"omni-bodied"** 통합 파운데이션 모델(Skild Brain) | 🇺🇸 피츠버그 | Series C **~$1.4B @ $14B+**(2026.01, SoftBank). 삼성·LG 참여 ([The Robot Report](https://www.therobotreport.com/skild-ai-raises-1-4b-building-omni-bodied-robot-skild-brain/)) |
| **Physical Intelligence (π)** | 범용 로봇 VLA **π0(pi-zero)** | 🇺🇸 샌프란시스코 | Series B **$600M @ $5.6B**(확정). $11B+ 협상 중 ([The Robot Report](https://www.therobotreport.com/physical-intelligence-raises-600m-advance-robot-foundation-models/)) |
| **Field AI** | 지도·GPS 없이 자율주행하는 embodiment-agnostic FM | 🇺🇸 캘리포니아 | **$405M @ $2B**(2025.08). Bezos·NVIDIA ([CNBC](https://www.cnbc.com/2025/08/20/gates-nvidia-fieldai-robotics.html)) |
| **RLWRLD** | 🇰🇷 한국 physical AI FM(공장·물류). 창업 류중희(전 올라웍스→Intel) | 🇰🇷 서울 | Seed 누적 ~$41M(2026.02 $26M). LG·SKT·KDDI ([The Robot Report](https://www.therobotreport.com/physical-ai-startup-rlwrld-raises-26m/)) |
| **Covariant** | 창고 로봇 FM. **인수 아님** → Amazon의 **역인수(reverse acqui-hire)**($380M 라이선스), 회사 존속 | 🇺🇸 에머리빌 | 2024.08~09 ([GeekWire](https://www.geekwire.com/2024/amazon-hires-covariant-founders-inks-licensing-deal-with-robotics-ai-startup-in-latest-reverse-acquihire-deal/)) |
| **Dyna Robotics** (=DYNA) | 상용 배포 FM **DYNA-1**(무인 반복작업 99.4%) | 🇺🇸 캘리포니아 | Series A **$120M**(2025.09) ([The Robot Report](https://www.therobotreport.com/dyna-robotics-closes-120m-funding-round-to-scale-robotics-foundation-model/)) |
| **Realtime Robotics** | 실시간 **충돌회피 모션플래닝** ⚠️ VLA 아님 = ④ 배포층 | 🇺🇸 보스턴 | 미쓰비시전기 전략투자, 누적 $60M+ ([The Robot Report](https://www.therobotreport.com/realtime-robotics-gets-series-b-funding-from-mitsubishi-electric/)) |
| **Jacobi Robotics** | <1ms 모션플래닝 SW ⚠️ **VLA 아님** = ④ 배포층(인포그래픽 분류 오류) | 🇺🇸 버클리 | 시드 $5M(2024.07). 2025~26 신규 펀딩 미확인 ([The Robot Report](https://www.therobotreport.com/jacobi-robotics-raises-5m-for-motion-planning-software/)) |

> 🔐 **임베디드 보안 각도:** 2025년 로봇 대상 공격 45%↑, HF 등에서 오염 모델 100+ 발견, 단일 음성 명령으로 휴머노이드 제어 탈취 시연까지 ([IOActive](https://www.ioactive.com/from-skynet-to-ai-agents-the-state-of-robot-security-nine-years-later/) · [SoK arXiv](https://arxiv.org/pdf/2606.16788)). **로봇 두뇌 코드 보호**가 미래 핵심 레이어 — 창업자의 차량 보안(현대오토에버)·42 C 배경과 직결되는 차별화 포인트.

---

## 8. 건설·인프라 (Construction & Infrastructure)

⚠️ 인포그래픽이 이 섹션에 묶었지만 **Boost·Salem은 건설이 아님**(아래 표기).

| 기업 | 무엇 | 본사 | 최근 상태 (2025~2026) |
|---|---|---|---|
| **Charge Robotics** | 현장 "포터블 팩토리"로 유틸리티 태양광 자동 조립·설치 | 🇺🇸 캘리포니아 | Series B, 누적 $39.1M(2025.03). SOLV Energy 실증 ([MIT News](https://news.mit.edu/2025/charge-robotics-makes-solar-projects-cheaper-faster-portable-factories-0312)) |
| **Cosmic Robotics** | 로봇팔+흡착 차량으로 태양광 패널 자동 설치(Cosmic-1A) | 🇺🇸 미국 | 프리시드 **$4M**(2025.04) ([TechCrunch](https://techcrunch.com/2025/04/16/cosmic-robotics-is-building-robots-to-speed-solar-power-deployments-for-data-centers/)) |
| **Rugged Robotics** | 건설 바닥에 도면 레이아웃 인쇄(Dusty 경쟁사) | 🇺🇸 휴스턴 | Series A $9.4M(2022). 2025~26 근황 ⚠️ 미확인 ([TechCrunch](https://techcrunch.com/2022/03/23/ruggeds-construction-layout-robots-land-9-4m/)) |
| **FBR** (Fastbrick, 로봇=Hadrian X) | 세계 최초 완전자동 벽돌쌓기 로봇 ⚠️ Hadrian Automation과 무관 | 🇦🇺 퍼스 | 2024 미국 첫 주택 5채 완공. 신형 시속 500블록 ([The Robot Report](https://www.therobotreport.com/rbr50-company-2025/hadrian-x-bricklaying-robot-builds-first-homes-in-demo-program/)) |
| **Built Robotics** | 기존 중장비를 자율화하는 리트로핏 키트 "Exosystem" | 🇺🇸 샌프란시스코 | 2025 미 건설 로보틱스 투자 $1.36B(+125%)의 주요 플레이어 ([Built Robotics](https://www.builtrobotics.com/about/press)) |
| **Dusty Robotics** | BIM 도면을 현장 바닥에 인쇄하는 자율 레이아웃 로봇 FieldPrinter | 🇺🇸 마운틴뷰 | Series B **$45M**, 누적 $68.7M ([IRONPROS](https://www.ironpros.com/construction-robotics/article/22908766/dusty-robotics-to-use-45m-in-series-b-funding-to-scale-digital-floorplan-printing)) |
| **Boost Robotics** | ⚠️ **건설 아님** — 데이터센터 점검·유지보수 모바일 매니퓰레이션 | 🇺🇸 보스턴 | YC 런치, 파일럿 진행. 펀딩액 미확인 ([Boost Robotics](https://www.boostrobotics.ai/)) |
| **Salem Robotics** | ⚠️ **건설 아님** — 방사선 측정·점검 루트 자동화 | 🇺🇸 미국(추정) | 펀딩·제품 상세 ⚠️ 미확인 ([Salem Robotics](https://www.salemroboticsinc.com/)) |

---

## 9. 부록 — 인포그래픽엔 없지만 현업 댓글에서 언급된 기업

Balerion 인포그래픽엔 없으나, 원 자료의 현업 댓글에서 나온(그리고 실존 검증된) 기업들. 지도의 완결성을 위해 남긴다.

- **국방 해양·항공 자율 스웜:** Havoc AI(무인수상정, $85M) · Swarm Aero(다임무 UAV, Series A $35M) · Hypercraft(UGV "Razorback").
- **휴머노이드:** FF AI-Robotics = **Faraday Future**(Nasdaq: FFAI, 휴머노이드+로봇개+매니퓰레이터, Fourier 아님) · Sunday Robotics(가사 휴머노이드 Memo, $165M @ $1.15B — 원 자료 "SURE"의 후보).
- **제조:** O-Hive.AI(3D 공간지능, 초기 단계).
- **농업(AgTech):** [Carbon Robotics](https://carbonrobotics.com/)(AI 레이저 제초) · [Monarch Tractor](https://www.monarchtractor.com/)(전기·자율 트랙터) · John Deere(Level 4 자율 트랙터).
- ⚠️ **Sentinel Automata**: 원 자료에 있었으나 실존 확인 실패 → 제외.

---

## 10. 병목은 '배포(Deployment)' — 왜 이 지도가 우리 각인가

위 60여 개 기업의 공통 병목: **이론(랩의 코드)은 완벽해도, 현실 세계 배치(④층)는 엉망이다** — 인포그래픽 표제 인용문(Claude Shannon: "이론은 다 짤 수 있어도 현실은 이론보다 복잡하다")이 정확히 이 얘기다. 몸(①)은 상품화되고 뇌(③)엔 수십억이 몰리는데, 그 로봇을 **현장(스마트팩토리·국방·물류)에서 세팅하고 최적화할 사람**이 태부족이다 — 휴머노이드조차 "통제된 파일럿에서 소수만 배치" ([Bain](https://www.bain.com/insights/humanoid-robots-from-demos-to-deployment-technology-report-2025/)).

피지컬 스파크의 각: **이 글로벌 로봇들을 한국 현장에 들여왔을 때 SW로 세팅하고 최적화하는 '디플로이먼트 엔지니어(FDE)'를 길러내는 훈련소.** 위 기업들이 곧 우리 수강생의 미래 취업·파트너십 시장이다.

> **한국 실탄:** Ghost Robotics ← LIG넥스원 인수 · Forterra ← 한화자산운용 투자 · RLWRLD(한국 FM) · Skild·Neura에 삼성·LG·SK. 이미 한국 자본이 이 판에 들어와 있다.

---

## 관련 (Related)
- [[02-robot-industry-landscape|로봇 산업 지형(규모)]]
- [[03-physical-ai-players-and-money|플레이어와 돈(뇌 vs 몸)]]
- [[04-arm-hand-eye|팔·손·눈(부위별)]]
- [[06-robot-learning-ladder|로봇 러닝 사다리(기술)]]
- [[00-foundations|기초 지식 지도]]
- [[market-landscape|경쟁사 스캔(교육시장)]]
