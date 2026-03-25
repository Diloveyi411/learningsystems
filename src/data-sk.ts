export type Lesson = {
  day: string;
  title: string;
  book: string;
  source?: string;
  concept: string;
  exercise?: string;
  note?: string;
  contentId?: string;
};

export type Week = {
  week: number;
  title: string;
  lessons: Lesson[];
};

export type Module = {
  id: number;
  title: string;
  subtitle: string;
  output: string;
  color: string;
  weeks: Week[];
};

export const modules: Module[] = [
  {
    id: 1,
    title: "Pochop cloveka",
    subtitle: "Ako pocuvat, psychologia rozhodovania, design thinking",
    output: "Hotovy interview script + 5 vykonanych rozhovorov",
    color: "#7CF2D3",
    weeks: [
      {
        week: 1,
        title: "Ako pocuvat tak, aby ti ludia neklamali",
        lessons: [
          {
            day: "Pondelok",
            title: "The Mom Test, cast 1",
            book: "The Mom Test (Rob Fitzpatrick)",
            source: "Books on Systems/The_Mom_Test_-_Rob_Fitzpatrick.pdf",
            concept:
              "Ludia ti budu klamat, ak im to umoznis. Nepytaj sa 'Paci sa ti moj napad?' Pytaj sa 'Kedy si naposledy riesil [problem]? Ako si to riesil?'",
            exercise: "Zapis 3 pravidla, ktore si si odnesla z kapitol 1-3",
            contentId: "mom-test-1",
          },
          {
            day: "Utorok",
            title: "The Mom Test, cast 2",
            book: "The Mom Test (Rob Fitzpatrick)",
            source: "Books on Systems/The_Mom_Test_-_Rob_Fitzpatrick.pdf",
            concept:
              "Commitment & Advancement. Rozhovor bez dalsieho kroku je strata casu. Hladaj signaly: cas, reputacia, peniaze.",
            exercise:
              "Napis 5 otazok pre svoj prvy discovery rozhovor",
            contentId: "mom-test-2",
          },
          {
            day: "Streda",
            title: "Talking to Humans",
            book: "Talking to Humans (Giff Constable)",
            source:
              "Books on Systems/_OceanofPDF.com_Talking_to_Humans_-_Giff_Constable.pdf",
            concept:
              "Prakticky manual: koho oslovit, ako ich najst, ako zaznamenavat, ako z rozhovorov tahat vzorce.",
            exercise: "Vytvor zoznam 10 ludi na rozhovory",
            contentId: "talking-to-humans",
          },
          {
            day: "Stvrtok",
            title: "Weapons of Influence",
            book: "Influence (Robert Cialdini)",
            source: "knihy branding/text/The Psychology of Persuasion.txt",
            concept:
              "6 principov presvedcovania: reciprocita, zavazok, socialny dokaz, sympatia, autorita, vzacnost. Toto nie je manipulacia, je to pochopenie, preco ludia hovoria ano.",
            exercise:
              "Ktore z 6 principov vidis u seba prirodzene?",
            contentId: "cialdini-influence",
          },
          {
            day: "Piatok",
            title: "Zaklady coaching psychologie",
            book: "Handbook of Coaching Psychology",
            source:
              "Knihy Design /md files/handbook-of-coaching-psychology-2nbsped-9781317636397_compress.md",
            concept:
              "Coaching vs. rady. Rozdiel medzi 'poviem ti, co mas robit' a 'pomozem ti to objavit sam'. Aktivne pocuvanie je skill, nie talent.",
            contentId: "coaching-psych",
          },
          {
            day: "Vikend",
            title: "Prvy discovery rozhovor",
            book: "",
            concept:
              "Sprav prvy rozhovor. Pouzij otazky z utorka. Pocuvaj, nepredavaj.",
            exercise:
              "Zapisuj: co ta prekvapilo, co sa zopakovalo vs. co si cakala",
          },
        ],
      },
      {
        week: 2,
        title: "Psychologia rozhodovania",
        lessons: [
          {
            day: "Pondelok",
            title: "Alchemy: Preco logika nestaci",
            book: "Alchemy (Rory Sutherland)",
            source:
              "knihy branding/text/_OceanofPDF.com_Alchemy_-_Rory_Sutherland.txt",
            concept:
              "Logicke riesenia su casto zle, lebo ludia nie su logicki. 'Engineering doesn't allow for magic. Psychology does.'",
            contentId: "alchemy-1",
            exercise:
              "2 priklady z vlastneho zivota, kde iracionalne riesenie fungovalo",
          },
          {
            day: "Utorok",
            title: "Alchemy: Signalling",
            book: "Alchemy (Rory Sutherland)",
            source:
              "knihy branding/text/_OceanofPDF.com_Alchemy_-_Rory_Sutherland.txt",
            contentId: "alchemy-2",
            concept:
              "Ludia nekupuju produkty, kupuju signaly. Cena, obal, kontext menia vnimanu hodnotu. David predpoklada, ze vsetci rozmyslaju ako on = chyba signalingu.",
          },
          {
            day: "Streda",
            title: "Design of Everyday Things 1-3",
            book: "The Design of Everyday Things (Don Norman)",
            source:
              "Knihy Design /md files/The_Design_of_Everyday_Things.md",
            contentId: "design-everyday-things",
            concept:
              "Affordances, signifiers, mapping. Preco ludia nerozmyslaju tak, ako si dizajneri myslia. Zaklad design thinking.",
          },
          {
            day: "Stvrtok",
            title: "Don't Make Me Think",
            book: "Don't Make Me Think (Steve Krug)",
            source:
              "Knihy Design /md files/Steve_Krug_Don't_Make_Me_Think,.md",
            contentId: "dont-make-me-think",
            concept:
              "Ludia neskenuju, skenuju. Kazda zbytocna myslienkova operacia je strata.",
            exercise:
              "Otvor 3 webstranky builderov z tvojho okolia a zapis, co nefunguje za prvych 5 sekund",
          },
          {
            day: "Piatok",
            title: "Reciprocita a Zavazok",
            book: "Influence (Robert Cialdini)",
            source: "knihy branding/text/The Psychology of Persuasion.txt",
            contentId: "cialdini-reciprocity",
            concept:
              "Reciprocita: daj nieco zadarmo, ludia chcu vratit. Commitment: maly krok vedie k vacsim. Tvoje discovery rozhovory su reciprocita.",
          },
          {
            day: "Vikend",
            title: "Rozhovory 2-3 + pattern review",
            book: "",
            concept: "Sprav 2 dalsie rozhovory.",
            exercise:
              "Pattern review: Co sa opakuje? Ake slova pouzivaju?",
          },
        ],
      },
      {
        week: 3,
        title: "Ako ludia pouzivaju produkty a systemy",
        lessons: [
          {
            day: "Pondelok",
            title: "Information Architecture 1-4",
            book: "Information Architecture (Rosenfeld, Morville, Arango)",
            source:
              "Knihy Design /md files/Information_Architecture_For_The_Web_And_Beyond_Fourth_Edition.md",
            contentId: "info-architecture",
            concept:
              "Ako ludia hladaju informacie, ako strukturovat obsah. Ked budes navrhovat produkty a weby, IA je zaklad.",
          },
          {
            day: "Utorok",
            title: "Interaction Design Patterns",
            book: "Designing Interfaces (Tidwell, Brewer, Valencia)",
            source:
              "Knihy Design /md files/Designing Interfaces Patterns for Effective Interaction Design - 3rd Edition - Jenifer Tidwell, Charles Brewer, Aynne Valencia - O'Reilly Media (2020).md",
            contentId: "interaction-patterns",
            concept:
              "Opakovatelne riesenia na bezne problemy. Pattern library pre interakcny dizajn.",
            exercise: "Identifikuj 3 patterns, ktore vidis na Innernet.pro",
          },
          {
            day: "Streda",
            title: "Strategic Writing for UX",
            book: "Strategic Writing for UX (Podmajersky)",
            source:
              "Knihy Design /md files/Strategic_writing_for_UX.md",
            contentId: "ux-writing",
            concept:
              "Kazde slovo v rozhrani je dizajnove rozhodnutie. UX writing = empatia v slovach.",
            exercise:
              "Prepis jednu obrazovku z Innernet.pro podla principov z tejto knihy",
          },
          {
            day: "Stvrtok",
            title: "Alchemy: Satisficing",
            book: "Alchemy (Rory Sutherland)",
            source:
              "knihy branding/text/_OceanofPDF.com_Alchemy_-_Rory_Sutherland.txt",
            contentId: "alchemy-satisficing",
            concept:
              "Ludia neoptimalizuju, satisficuju (vyberaju 'dost dobre'). Dizajnuj pre satisficing, nie pre optimalizaciu.",
            exercise:
              "Ako toto meni sposob, akym by si navrhovala onboarding pre builder produkt?",
          },
          {
            day: "Piatok",
            title: "Design of Everyday Things 4-7",
            book: "The Design of Everyday Things (Don Norman)",
            source:
              "Knihy Design /md files/The_Design_of_Everyday_Things.md",
            contentId: "design-everyday-things-2",
            concept:
              "Human error je dizajnova chyba, nie chyba cloveka. Constraints, errors, design thinking process.",
          },
          {
            day: "Vikend",
            title: "Rozhovory 4-5 + prvy pattern report",
            book: "",
            concept:
              "Mas uz 5 rozhovorov. Cas na hlboku analyzu.",
            exercise:
              "Co sa opakuje? Co ta prekvapilo? Za co realne platia? Kde je najvacsia bolest? Ake slova pouzivaju?",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Pochop trh",
    subtitle: "Customer discovery, positioning, value proposition, JTBD",
    output: "ICP dokument + Value Proposition Canvas + positioning statement",
    color: "#7C8AFF",
    weeks: [
      {
        week: 4,
        title: "Customer Discovery ako veda",
        lessons: [
          {
            day: "Pondelok",
            title: "Four Steps to the Epiphany",
            book: "The Four Steps to the Epiphany (Steve Blank)",
            source:
              "Books on Systems/The_Four_Steps_to_the_Epiphany_-_Steve_Blank.pdf",
            contentId: "four-steps-epiphany",
            concept:
              "4 kroky: Discovery, Validation, Creation, Building. Vacsina ludi skoci na krok 3.",
          },
          {
            day: "Utorok",
            title: "Startup Owner's Manual",
            book: "The Startup Owner's Manual (Steve Blank)",
            source:
              "Books on Systems/The_Startup_Owners_Manual__The_Step-by-St_-_Steve_Blank.pdf",
            contentId: "startup-owners-manual",
            concept:
              "Hypotezy o zakaznikoch su len hypotezy, kym ich neoveris. Business Model Canvas.",
          },
          {
            day: "Streda",
            title: "Build-Measure-Learn",
            book: "Lean Startup (Eric Ries)",
            note: "Fyzicka kopia",
            contentId: "lean-startup",
            concept:
              "MVP nie je hrozny produkt. Je to najmensi experiment, ktory ti da odpoved.",
          },
          {
            day: "Stvrtok",
            title: "Continuous Discovery",
            book: "Continuous Discovery Habits (Teresa Torres)",
            source: "Books on Systems/",
            contentId: "continuous-discovery",
            concept:
              "Discovery nie je jednorazovy event, ale tyzdenný zvyk. Opportunity Solution Tree.",
          },
          {
            day: "Piatok",
            title: "6 Brand Strategies for AI Era",
            book: "Akademicky paper",
            source:
              "knihy branding/text/6 emerging brand strategies that researchers and leading marketing labs expect to dominate the AI era (2025–2035).txt",
            contentId: "brand-strategies-ai",
            concept:
              "Human-Signal Branding: As AI content floods media, audiences seek signals of human creativity and authenticity. Akademicky dokaz, ze tvoj smer je spravny.",
          },
          {
            day: "Vikend",
            title: "Rozhovory 6-7",
            book: "",
            concept: "Pokracuj v discovery. Porovnavaj s predchadzajucimi vzorcami.",
          },
        ],
      },
      {
        week: 5,
        title: "Positioning: Kto si na trhu",
        lessons: [
          {
            day: "Pondelok",
            title: "Obviously Awesome, cast 1",
            book: "Obviously Awesome (April Dunford)",
            source:
              "knihy branding/text/_OceanofPDF.com_Obviously_Awesome_-_April_Dunford.txt",
            contentId: "obviously-awesome-1",
            concept:
              "Positioning is context setting. If we fail at positioning, we fail at everything. 10-krokovy proces, kroky 1-5.",
          },
          {
            day: "Utorok",
            title: "Obviously Awesome, cast 2",
            book: "Obviously Awesome (April Dunford)",
            source:
              "knihy branding/text/_OceanofPDF.com_Obviously_Awesome_-_April_Dunford.txt",
            contentId: "obviously-awesome-2",
            concept:
              "Map attributes to value themes, determine who cares a lot, find your market frame.",
            exercise:
              "Sprav prvy draft svojho positioningu na zaklade discovery dat",
          },
          {
            day: "Streda",
            title: "Positioning 1-8",
            book: "Positioning: The Battle for Your Mind (Ries & Trout)",
            source:
              "knihy branding/text/_OceanofPDF.com_Positioning_-_Al_Ries.txt",
            contentId: "positioning-ries-1",
            concept:
              "Positioning is not what you do to a product. It's what you do to the mind of the prospect. Ladders in the mind.",
          },
          {
            day: "Stvrtok",
            title: "Positioning 9-25",
            book: "Positioning: The Battle for Your Mind (Ries & Trout)",
            source:
              "knihy branding/text/_OceanofPDF.com_Positioning_-_Al_Ries.txt",
            contentId: "positioning-ries-2",
            concept:
              "Power of the name, line-extension trap, positioning yourself and your career.",
            exercise:
              "Ako by si sa sama positionovala podla Ries/Trout frameworku?",
          },
          {
            day: "Piatok",
            title: "Category Design",
            book: "Play Bigger (Ramadan, Lochhead, Peterson, Maney)",
            source:
              "knihy branding/text/_OceanofPDF.com_Play_Bigger_-_Al_Ramadan.txt",
            contentId: "play-bigger",
            concept:
              "Ak tvoja sluzba nesedi do existujucej kategorie, vytvor vlastnu. Category is the new strategy.",
            exercise:
              "Je 'strategic design partner for builders' nova kategoria?",
          },
          {
            day: "Vikend",
            title: "Rozhovor 8 + ICP draft",
            book: "",
            concept: "Na zaklade 8 rozhovorov a tyzdna o positioningu: napis prvy draft ICP.",
          },
        ],
      },
      {
        week: 6,
        title: "Value Proposition + Jobs to be Done",
        lessons: [
          {
            day: "Pondelok",
            title: "Value Proposition Canvas",
            book: "Value Proposition Design (Osterwalder)",
            source:
              "Books on Systems/Value_Proposition_Design_-_Alexander_Osterwalder.pdf",
            contentId: "value-proposition-canvas",
            concept:
              "Customer Profile (jobs, pains, gains) + Value Map (products, pain relievers, gain creators).",
            exercise: "Vyplnit canvas na zaklade discovery dat",
          },
          {
            day: "Utorok",
            title: "Fit a testovanie",
            book: "Value Proposition Design (Osterwalder)",
            source:
              "Books on Systems/Value_Proposition_Design_-_Alexander_Osterwalder.pdf",
            contentId: "value-proposition-fit",
            concept:
              "Problem-Solution Fit vs. Product-Market Fit. Najprv fit na papieri, potom v realite.",
          },
          {
            day: "Streda",
            title: "Jobs to be Done",
            book: "Jobs to be Done (Anthony Ulwick)",
            source:
              "Books on Systems/Jobs_to_be_Done_-_Anthony_W_Ulwick.pdf",
            contentId: "jobs-to-be-done",
            concept:
              "Ludia 'najimaju' produkty na vykonanie ulohy. Outcome-Driven Innovation.",
            exercise: "Sformuluj 3 JTBD pre svojich zakaznikov",
          },
          {
            day: "Stvrtok",
            title: "What Customers Want",
            book: "What Customers Want (Anthony Ulwick)",
            source:
              "Books on Systems/What_Customers_Want__Using_Outcome-Driven_-_Anthony_Ulwick.pdf",
            contentId: "what-customers-want",
            concept:
              "Hlbsia verzia JTBD. Outcome statements: [smer] + [metrika] + [objekt kontroly].",
            exercise: "Prepis JTBD do Ulwickovho formatu",
          },
          {
            day: "Piatok",
            title: "Good Strategy Bad Strategy",
            book: "Good Strategy Bad Strategy (Richard Rumelt)",
            source:
              "knihy branding/text/toaz.info-good-strategy-bad-strategy-rumelt-en-15024-pr_c87bf26836c34702eddfdfa36699375b.txt",
            contentId: "good-strategy-bad-strategy",
            concept:
              "Good strategy is not about vision or goals. Kernel = diagnosis + guiding policy + coherent actions.",
            exercise:
              "Diagnostikuj svoju vlastnu situaciu podla Rumelta",
          },
          {
            day: "Vikend",
            title: "Finalizacia ICP + Value Proposition",
            book: "",
            concept: "Prepis ICP, hotovy Value Proposition Canvas, positioning statement.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Postav system",
    subtitle: "Produktove myslenie, testovanie, brand system",
    output: "Definovana sluzba + otestovane signaly + brand brief",
    color: "#C9A7FF",
    weeks: [
      {
        week: 7,
        title: "Produkt a sluzba",
        lessons: [
          {
            day: "Pondelok",
            title: "Inspired",
            book: "Inspired (Marty Cagan)",
            source: "knihy branding/text/Inspired - Marty Cagan.txt",
            contentId: "inspired-cagan",
            concept: "Ako najlepsie produktove timy pracuju. Discovery vs. delivery.",
          },
          {
            day: "Utorok",
            title: "Escaping the Build Trap",
            book: "Escaping the Build Trap (Melissa Perri)",
            source: "Books on Systems/Escaping_the_build_trap_-_Melissa_Perri.pdf",
            contentId: "escaping-build-trap",
            concept: "Build trap = firma meria uspech podla features, nie podla vyriesenych problemov.",
          },
          {
            day: "Streda",
            title: "Design Sprint, cast 1",
            book: "Sprint (Jake Knapp)",
            source: "Books on Systems/Sprint__How_to_Solve_Big_Problems_and_Test_-_Jake_Knapp.pdf",
            contentId: "design-sprint-1",
            concept: "5-dnovy proces: map, sketch, decide, prototype, test.",
          },
          {
            day: "Stvrtok",
            title: "Design Sprint, cast 2",
            book: "Sprint (Jake Knapp)",
            source: "Books on Systems/Sprint__How_to_Solve_Big_Problems_and_Test_-_Jake_Knapp.pdf",
            contentId: "design-sprint-2",
            concept: "Detaily prototypovania a testovania.",
            exercise: "Navrhni svoju vlastnu 'mini-sprint' sluzbu",
          },
          {
            day: "Piatok",
            title: "Lean Product Playbook",
            book: "The Lean Product Playbook (Dan Olsen)",
            source: "Books on Systems/The_Lean_Product_Playbook_-_Dan_Olsen.pdf",
            contentId: "lean-product-playbook",
            concept: "Product-Market Fit Pyramid: target customer, underserved needs, value prop, feature set, UX.",
            exercise: "Kde sa nachadzas na pyramide s vlastnou sluzbou?",
          },
          {
            day: "Vikend",
            title: "Definuj 1 sluzbu",
            book: "",
            concept: "Na zaklade vsetkeho: jasny nazov, cena, proces, ocakavany vysledok, pre koho.",
          },
        ],
      },
      {
        week: 8,
        title: "Testovanie biznisovych napadov",
        lessons: [
          {
            day: "Pondelok",
            title: "Testing Business Ideas, cast 1",
            book: "Testing Business Ideas (David Bland)",
            source: "Books on Systems/Testing_Business_Ideas_-_David_J_Bland.pdf",
            contentId: "testing-business-ideas-1",
            concept: "44 experimentov. Vyber 3-5 relevantnych pre tvoju situaciu.",
          },
          {
            day: "Utorok",
            title: "Testing Business Ideas, cast 2",
            book: "Testing Business Ideas (David Bland)",
            source: "Books on Systems/Testing_Business_Ideas_-_David_J_Bland.pdf",
            contentId: "testing-business-ideas-2",
            exercise: "Navrhni fake door test pre svoju sluzbu",
            concept: "Experiment design: hypoteza, metrika, prahova hodnota.",
          },
          {
            day: "Streda",
            title: "One Metric That Matters",
            book: "Lean Analytics (Croll & Yoskovitz)",
            source: "Books on Systems/Lean_Analytics_-_Alistair_Croll_Benjamin_Yoskovitz.pdf",
            contentId: "lean-analytics",
            concept: "V kazdej faze mas 1 metriku. Empathy > Stickiness > Virality > Revenue > Scale.",
            exercise: "Aka je tvoja 'One Metric That Matters' prave teraz?",
          },
          {
            day: "Stvrtok",
            title: "UX for Lean Startups",
            book: "UX for Lean Startups (Laura Klein)",
            source: "Books on Systems/UX_for_Lean_Startups_-_Laura_Klein.pdf",
            contentId: "ux-lean-startups",
            concept: "UX research + lean metodika = rychle testovanie s minimalnym risikom.",
          },
          {
            day: "Piatok",
            title: "AI vs. Human Trust",
            book: "Akademicke papery",
            source: "knihy branding/text/",
            contentId: "ai-trust-research",
            concept: "Ludia rozlisuju AI vs. human content. Trust klesa pri AI. Toto je tvoj argument pre klientov.",
          },
          {
            day: "Vikend",
            title: "Spusti signal test",
            book: "",
            concept: "Landing page alebo social post. Meraj reakcie.",
          },
        ],
      },
      {
        week: 9,
        title: "Brand system",
        lessons: [
          {
            day: "Pondelok",
            title: "StoryBrand Framework",
            book: "Building a StoryBrand (Donald Miller)",
            source: "knihy branding/text/_OceanofPDF.com_Building_a_StoryBrand_20_-_Donald_Miller.txt",
            contentId: "storybrand-framework",
            concept: "Your customer is the hero, not your brand. SB7 framework.",
            exercise: "Vyplnit BrandScript pre svoju sluzbu",
          },
          {
            day: "Utorok",
            title: "StoryBrand: Execution",
            book: "Building a StoryBrand (Donald Miller)",
            source: "knihy branding/text/_OceanofPDF.com_Building_a_StoryBrand_20_-_Donald_Miller.txt",
            contentId: "storybrand-execution",
            concept: "Guide gives a plan, calls to action, helps avoid failure, leads to success.",
            exercise: "Prepis landing page copy podla SB7",
          },
          {
            day: "Streda",
            title: "Brand Portfolio Strategy",
            book: "Brand Portfolio Strategy (David Aaker)",
            source: "knihy branding/text/_OceanofPDF.com_Brand_Portfolio_Strategy_-_David_A_Aaker.txt",
            contentId: "brand-portfolio-strategy",
            concept: "Ako spravovat viacero brandov/sluzob pod jednou strechou.",
          },
          {
            day: "Stvrtok",
            title: "Designing Brand Identity",
            book: "Designing Brand Identity (Alina Wheeler)",
            source: "knihy branding/text/Designing_Brand_Identity.txt",
            contentId: "designing-brand-identity",
            concept: "Brand identity proces od strategie po implementaciu.",
            exercise: "Brand brief pre svoju novu poziciu",
          },
          {
            day: "Piatok",
            title: "The Brand Gap",
            book: "The Brand Gap (Marty Neumeier)",
            source: "knihy branding/text/the-brand-gap.txt",
            contentId: "brand-gap",
            concept: "Brand = gut feeling. Gap medzi strategiou a kreativou.",
          },
          {
            day: "Vikend",
            title: "Vyhodnot signal test + uprav sluzbu",
            book: "",
            concept: "Analyzuj vysledky, uprav ponuku na zaklade dat.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Komunikuj a presvedc",
    subtitle: "Persuazia, pricing, strategia, rast",
    output: "Prvy plateny klient + case study",
    color: "#FFE680",
    weeks: [
      {
        week: 10,
        title: "Presvedcovanie a komunikacia",
        lessons: [
          {
            day: "Pondelok",
            title: "Social Proof, Liking, Authority, Scarcity",
            book: "Influence (Robert Cialdini)",
            source: "knihy branding/text/The Psychology of Persuasion.txt",
            contentId: "cialdini-remaining",
            concept: "Zvysne 4 principy. Social proof = preco case studies funguju. Authority = preco credentials.",
          },
          {
            day: "Utorok",
            title: "Preco sa veci siria",
            book: "Contagious (Jonah Berger)",
            source: "knihy branding/text/_OceanofPDF.com_Contagious_Why_Things_Catch_On_-_Jonah_Berger.txt",
            contentId: "contagious-stepps",
            concept: "STEPPS framework: Social Currency, Triggers, Emotion, Public, Practical Value, Stories.",
          },
          {
            day: "Streda",
            title: "Tribes",
            book: "Tribes (Seth Godin)",
            source: "knihy branding/text/_OceanofPDF.com_Tribes__We_Need_You_to_Lead_Us_-_Seth_Godin.txt",
            contentId: "tribes-godin",
            concept: "Nepotrebujes milion followerov. Potrebujes tribe. Skupina ludi prepojena myslienkou a lídrom.",
          },
          {
            day: "Stvrtok",
            title: "Psychologia cien",
            book: "Priceless (William Poundstone)",
            source: "knihy branding/text/_OceanofPDF.com_Priceless_-_William_Poundstone.txt",
            contentId: "priceless-pricing",
            concept: "Ako ludia vnimaju hodnotu a ako nastavit pricing. Anchoring, framing, decoy efekt.",
          },
          {
            day: "Piatok",
            title: "Naming",
            book: "Hello My Name Is Awesome (Alexandra Watkins)",
            source: "knihy branding/text/_OceanofPDF.com_Hello_My_Name_Is_Awesome_-_Alexandra_Watkins.txt",
            contentId: "naming-awesome",
            concept: "Mozno nepotrebujes novy nazov, ale mozno ano. SMILE & SCRATCH framework.",
          },
          {
            day: "Vikend",
            title: "Pripravi ponuku pre 2-3 ludi z rozhovorov",
            book: "",
            concept: "Konkretna ponuka, konkretna cena, konkretny vysledok.",
          },
        ],
      },
      {
        week: 11,
        title: "Strategicke myslenie",
        lessons: [
          {
            day: "Pondelok",
            title: "Good Strategy, hlbsie",
            book: "Good Strategy Bad Strategy (Richard Rumelt)",
            source: "knihy branding/text/toaz.info-good-strategy-bad-strategy-rumelt-en-15024-pr_c87bf26836c34702eddfdfa36699375b.txt",
            contentId: "good-strategy-deeper",
            concept: "Kernel = diagnosis + guiding policy + coherent actions. Aplikuj na seba.",
          },
          {
            day: "Utorok",
            title: "How to Be an Alchemist",
            book: "Alchemy (Rory Sutherland)",
            source: "knihy branding/text/_OceanofPDF.com_Alchemy_-_Rory_Sutherland.txt",
            contentId: "alchemy-psychophysics",
            concept: "Dare to be trivial. Male zmeny mozu mat velke dopady. Psychophysics.",
          },
          {
            day: "Streda",
            title: "System 1 vs System 2",
            book: "Thinking Fast and Slow (Daniel Kahneman)",
            source: "knihy branding/text/_OceanofPDF.com_Thinking_Fast_and_Slow_By_Daniel_Kahneman_-_Thinking_Fast_and_Slow_By_Daniel_Kahneman.txt",
            contentId: "kahneman-systems",
            concept: "Vacsina rozhodnuti prebieha automaticky (System 1). System 2 je lenivy.",
          },
          {
            day: "Stvrtok",
            title: "Biases a Framing",
            book: "Thinking Fast and Slow (Daniel Kahneman)",
            source: "knihy branding/text/_OceanofPDF.com_Thinking_Fast_and_Slow_By_Daniel_Kahneman_-_Thinking_Fast_and_Slow_By_Daniel_Kahneman.txt",
            contentId: "kahneman-biases",
            concept: "Loss aversion, anchoring, framing. Kazdy z tychto konceptov je pouzitelny v tvojej praci.",
          },
          {
            day: "Piatok",
            title: "Growth Experimenty",
            book: "The Growth Hacking Book (Parul Agrawal)",
            source: "Books on Systems/The_Growth_Hacking_Book_-_Parul_Agrawal.pdf",
            contentId: "growth-experiments",
            concept: "Growth experimenty. Az ked mas product-market fit, nie skor.",
          },
          {
            day: "Vikend",
            title: "Pilotny projekt",
            book: "",
            concept: "Zacni pracovat s prvym klientom.",
          },
        ],
      },
      {
        week: 12,
        title: "Integracia a launch",
        lessons: [
          {
            day: "Pondelok",
            title: "Coaching Frameworks",
            book: "Handbook of Coaching Psychology",
            source: "Knihy Design /md files/handbook-of-coaching-psychology-2nbsped-9781317636397_compress.md",
            contentId: "coaching-frameworks",
            concept: "GROW model, motivational interviewing, solution-focused coaching. Pouzij v 1:1 sessions.",
          },
          {
            day: "Utorok",
            title: "Brand Equity akademicky",
            book: "Akademicke papery",
            source: "knihy branding/text/",
            contentId: "brand-equity-academic",
            concept: "Co je za 'brandingom' na akademickej urovni. Models of brand equity.",
          },
          {
            day: "Streda",
            title: "AI a brand equity",
            book: "Akademicke papery",
            source: "knihy branding/text/",
            contentId: "ai-brand-equity",
            concept: "Kde AI pomaha, kde skodi, a kde si ty nenahraditelna.",
          },
          {
            day: "Stvrtok",
            title: "Zero-Click Paradigm",
            book: "Whitepaper",
            source: "knihy branding/text/Zero-Click-Paradigm-Whitepaper.txt",
            contentId: "zero-click-paradigm",
            concept: "Novy sposob, ako ludia konzumuju obsah. SEO mrtve, co dalej?",
          },
          {
            day: "Piatok",
            title: "Systemicke myslenie",
            book: "Akademicky paper",
            source: "knihy branding/text/04+Andri+systemic-+English+2025+pub.txt",
            contentId: "systemic-thinking",
            concept: "Systemicky pristup k designu a podnikaniu.",
          },
          {
            day: "Vikend",
            title: "Finalizacia",
            book: "",
            concept: "Dokumentuj pilotny projekt. Uprav web. Publikuj prvu case study.",
            exercise: "Before/after pilotneho projektu. Toto je tvoj najsilnejsi marketing material.",
          },
        ],
      },
    ],
  },
];
