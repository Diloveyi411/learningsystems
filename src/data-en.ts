import type { Module } from "./data-sk";

export const modules: Module[] = [
  {
    id: 1,
    title: "Understand People",
    subtitle: "How to listen, psychology of decision-making, design thinking",
    output: "Finished interview script + 5 completed interviews",
    color: "#7CF2D3",
    weeks: [
      {
        week: 1,
        title: "How to listen so people don't lie to you",
        lessons: [
          {
            day: "Monday",
            title: "The Mom Test, Part 1",
            book: "The Mom Test (Rob Fitzpatrick)",
            source: "Books on Systems/The_Mom_Test_-_Rob_Fitzpatrick.pdf",
            concept:
              "People will lie to you if you let them. Don't ask 'Do you like my idea?' Ask 'When was the last time you dealt with [problem]? How did you solve it?'",
            exercise: "Write down 3 rules you took away from chapters 1-3",
            contentId: "mom-test-1",
          },
          {
            day: "Tuesday",
            title: "The Mom Test, Part 2",
            book: "The Mom Test (Rob Fitzpatrick)",
            source: "Books on Systems/The_Mom_Test_-_Rob_Fitzpatrick.pdf",
            concept:
              "Commitment & Advancement. A conversation without a next step is a waste of time. Look for signals: time, reputation, money.",
            exercise:
              "Write 5 questions for your first discovery interview",
            contentId: "mom-test-2",
          },
          {
            day: "Wednesday",
            title: "Talking to Humans",
            book: "Talking to Humans (Giff Constable)",
            source:
              "Books on Systems/_OceanofPDF.com_Talking_to_Humans_-_Giff_Constable.pdf",
            concept:
              "Practical manual: who to approach, how to find them, how to record, how to extract patterns from interviews.",
            exercise: "Create a list of 10 people for interviews",
            contentId: "talking-to-humans",
          },
          {
            day: "Thursday",
            title: "Weapons of Influence",
            book: "Influence (Robert Cialdini)",
            source: "knihy branding/text/The Psychology of Persuasion.txt",
            concept:
              "6 principles of persuasion: reciprocity, commitment, social proof, liking, authority, scarcity. This isn't manipulation, it's understanding why people say yes.",
            exercise:
              "Which of the 6 principles do you naturally exhibit?",
            contentId: "cialdini-influence",
          },
          {
            day: "Friday",
            title: "Coaching Psychology Basics",
            book: "Handbook of Coaching Psychology",
            source:
              "Knihy Design /md files/handbook-of-coaching-psychology-2nbsped-9781317636397_compress.md",
            concept:
              "Coaching vs. advice. The difference between 'let me tell you what to do' and 'let me help you discover it yourself'. Active listening is a skill, not a talent.",
            contentId: "coaching-psych",
          },
          {
            day: "Weekend",
            title: "First discovery interview",
            book: "",
            concept:
              "Do your first interview. Use the questions from Tuesday. Listen, don't sell.",
            exercise:
              "Write down: what surprised you, what repeated vs. what you expected",
          },
        ],
      },
      {
        week: 2,
        title: "Psychology of decision-making",
        lessons: [
          {
            day: "Monday",
            title: "Alchemy: Why Logic Isn't Enough",
            book: "Alchemy (Rory Sutherland)",
            source:
              "knihy branding/text/_OceanofPDF.com_Alchemy_-_Rory_Sutherland.txt",
            concept:
              "Logical solutions are often wrong because people aren't logical. 'Engineering doesn't allow for magic. Psychology does.'",
            contentId: "alchemy-1",
            exercise:
              "2 examples from your own life where an irrational solution worked",
          },
          {
            day: "Tuesday",
            title: "Alchemy: Signalling",
            book: "Alchemy (Rory Sutherland)",
            source:
              "knihy branding/text/_OceanofPDF.com_Alchemy_-_Rory_Sutherland.txt",
            contentId: "alchemy-2",
            concept:
              "People don't buy products, they buy signals. Price, packaging, context change perceived value. Assuming everyone thinks like you = signaling mistake.",
          },
          {
            day: "Wednesday",
            title: "Design of Everyday Things 1-3",
            book: "The Design of Everyday Things (Don Norman)",
            source:
              "Knihy Design /md files/The_Design_of_Everyday_Things.md",
            contentId: "design-everyday-things",
            concept:
              "Affordances, signifiers, mapping. Why people don't think the way designers assume. The foundation of design thinking.",
          },
          {
            day: "Thursday",
            title: "Don't Make Me Think",
            book: "Don't Make Me Think (Steve Krug)",
            source:
              "Knihy Design /md files/Steve_Krug_Don't_Make_Me_Think,.md",
            contentId: "dont-make-me-think",
            concept:
              "People don't read, they scan. Every unnecessary mental operation is a loss.",
            exercise:
              "Open 3 websites of builders in your network and write down what doesn't work in the first 5 seconds",
          },
          {
            day: "Friday",
            title: "Reciprocity and Commitment",
            book: "Influence (Robert Cialdini)",
            source: "knihy branding/text/The Psychology of Persuasion.txt",
            contentId: "cialdini-reciprocity",
            concept:
              "Reciprocity: give something for free, people want to return it. Commitment: a small step leads to bigger ones. Your discovery interviews are reciprocity in action.",
          },
          {
            day: "Weekend",
            title: "Interviews 2-3 + pattern review",
            book: "",
            concept: "Do 2 more interviews.",
            exercise:
              "Pattern review: What's repeating? What words do they use?",
          },
        ],
      },
      {
        week: 3,
        title: "How people use products and systems",
        lessons: [
          {
            day: "Monday",
            title: "Information Architecture 1-4",
            book: "Information Architecture (Rosenfeld, Morville, Arango)",
            source:
              "Knihy Design /md files/Information_Architecture_For_The_Web_And_Beyond_Fourth_Edition.md",
            contentId: "info-architecture",
            concept:
              "How people search for information, how to structure content. When you design products and websites, IA is the foundation.",
          },
          {
            day: "Tuesday",
            title: "Interaction Design Patterns",
            book: "Designing Interfaces (Tidwell, Brewer, Valencia)",
            source:
              "Knihy Design /md files/Designing Interfaces Patterns for Effective Interaction Design - 3rd Edition - Jenifer Tidwell, Charles Brewer, Aynne Valencia - O'Reilly Media (2020).md",
            contentId: "interaction-patterns",
            concept:
              "Repeatable solutions to common problems. A pattern library for interaction design.",
            exercise: "Identify 3 patterns you see on Innernet.pro",
          },
          {
            day: "Wednesday",
            title: "Strategic Writing for UX",
            book: "Strategic Writing for UX (Podmajersky)",
            source:
              "Knihy Design /md files/Strategic_writing_for_UX.md",
            contentId: "ux-writing",
            concept:
              "Every word in an interface is a design decision. UX writing = empathy in words.",
            exercise:
              "Rewrite one screen from Innernet.pro using principles from this book",
          },
          {
            day: "Thursday",
            title: "Alchemy: Satisficing",
            book: "Alchemy (Rory Sutherland)",
            source:
              "knihy branding/text/_OceanofPDF.com_Alchemy_-_Rory_Sutherland.txt",
            contentId: "alchemy-satisficing",
            concept:
              "People don't optimize, they satisfice (choose 'good enough'). Design for satisficing, not optimization.",
            exercise:
              "How does this change the way you'd design onboarding for a builder product?",
          },
          {
            day: "Friday",
            title: "Design of Everyday Things 4-7",
            book: "The Design of Everyday Things (Don Norman)",
            source:
              "Knihy Design /md files/The_Design_of_Everyday_Things.md",
            contentId: "design-everyday-things-2",
            concept:
              "Human error is a design error, not a person's fault. Constraints, errors, design thinking process.",
          },
          {
            day: "Weekend",
            title: "Interviews 4-5 + first pattern report",
            book: "",
            concept:
              "You have 5 interviews now. Time for a deep analysis.",
            exercise:
              "What's repeating? What surprised you? What do they actually pay for? Where's the biggest pain? What words do they use?",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Understand the Market",
    subtitle: "Customer discovery, positioning, value proposition, JTBD",
    output: "ICP document + Value Proposition Canvas + positioning statement",
    color: "#7C8AFF",
    weeks: [
      {
        week: 4,
        title: "Customer Discovery as Science",
        lessons: [
          {
            day: "Monday",
            title: "Four Steps to the Epiphany",
            book: "The Four Steps to the Epiphany (Steve Blank)",
            source:
              "Books on Systems/The_Four_Steps_to_the_Epiphany_-_Steve_Blank.pdf",
            contentId: "four-steps-epiphany",
            concept:
              "4 steps: Discovery, Validation, Creation, Building. Most people jump to step 3.",
          },
          {
            day: "Tuesday",
            title: "Startup Owner's Manual",
            book: "The Startup Owner's Manual (Steve Blank)",
            source:
              "Books on Systems/The_Startup_Owners_Manual__The_Step-by-St_-_Steve_Blank.pdf",
            contentId: "startup-owners-manual",
            concept:
              "Customer hypotheses are just hypotheses until you validate them. Business Model Canvas.",
          },
          {
            day: "Wednesday",
            title: "Build-Measure-Learn",
            book: "Lean Startup (Eric Ries)",
            note: "Physical copy",
            contentId: "lean-startup",
            concept:
              "MVP is not a terrible product. It's the smallest experiment that gives you an answer.",
          },
          {
            day: "Thursday",
            title: "Continuous Discovery",
            book: "Continuous Discovery Habits (Teresa Torres)",
            source: "Books on Systems/",
            contentId: "continuous-discovery",
            concept:
              "Discovery is not a one-time event, it's a weekly habit. Opportunity Solution Tree.",
          },
          {
            day: "Friday",
            title: "6 Brand Strategies for AI Era",
            book: "Academic paper",
            source:
              "knihy branding/text/6 emerging brand strategies that researchers and leading marketing labs expect to dominate the AI era (2025–2035).txt",
            contentId: "brand-strategies-ai",
            concept:
              "Human-Signal Branding: As AI content floods media, audiences seek signals of human creativity and authenticity. Academic proof that your direction is right.",
          },
          {
            day: "Weekend",
            title: "Interviews 6-7",
            book: "",
            concept: "Continue discovery. Compare with previous patterns.",
          },
        ],
      },
      {
        week: 5,
        title: "Positioning: Who You Are in the Market",
        lessons: [
          {
            day: "Monday",
            title: "Obviously Awesome, Part 1",
            book: "Obviously Awesome (April Dunford)",
            source:
              "knihy branding/text/_OceanofPDF.com_Obviously_Awesome_-_April_Dunford.txt",
            contentId: "obviously-awesome-1",
            concept:
              "Positioning is context setting. If we fail at positioning, we fail at everything. 10-step process, steps 1-5.",
          },
          {
            day: "Tuesday",
            title: "Obviously Awesome, Part 2",
            book: "Obviously Awesome (April Dunford)",
            source:
              "knihy branding/text/_OceanofPDF.com_Obviously_Awesome_-_April_Dunford.txt",
            contentId: "obviously-awesome-2",
            concept:
              "Map attributes to value themes, determine who cares a lot, find your market frame.",
            exercise:
              "Create a first draft of your positioning based on discovery data",
          },
          {
            day: "Wednesday",
            title: "Positioning 1-8",
            book: "Positioning: The Battle for Your Mind (Ries & Trout)",
            source:
              "knihy branding/text/_OceanofPDF.com_Positioning_-_Al_Ries.txt",
            contentId: "positioning-ries-1",
            concept:
              "Positioning is not what you do to a product. It's what you do to the mind of the prospect. Ladders in the mind.",
          },
          {
            day: "Thursday",
            title: "Positioning 9-25",
            book: "Positioning: The Battle for Your Mind (Ries & Trout)",
            source:
              "knihy branding/text/_OceanofPDF.com_Positioning_-_Al_Ries.txt",
            contentId: "positioning-ries-2",
            concept:
              "Power of the name, line-extension trap, positioning yourself and your career.",
            exercise:
              "How would you position yourself using the Ries/Trout framework?",
          },
          {
            day: "Friday",
            title: "Category Design",
            book: "Play Bigger (Ramadan, Lochhead, Peterson, Maney)",
            source:
              "knihy branding/text/_OceanofPDF.com_Play_Bigger_-_Al_Ramadan.txt",
            contentId: "play-bigger",
            concept:
              "If your service doesn't fit an existing category, create your own. Category is the new strategy.",
            exercise:
              "Is 'strategic design partner for builders' a new category?",
          },
          {
            day: "Weekend",
            title: "Interview 8 + ICP draft",
            book: "",
            concept: "Based on 8 interviews and a week of positioning: write your first ICP draft.",
          },
        ],
      },
      {
        week: 6,
        title: "Value Proposition + Jobs to be Done",
        lessons: [
          {
            day: "Monday",
            title: "Value Proposition Canvas",
            book: "Value Proposition Design (Osterwalder)",
            source:
              "Books on Systems/Value_Proposition_Design_-_Alexander_Osterwalder.pdf",
            contentId: "value-proposition-canvas",
            concept:
              "Customer Profile (jobs, pains, gains) + Value Map (products, pain relievers, gain creators).",
            exercise: "Fill out the canvas based on discovery data",
          },
          {
            day: "Tuesday",
            title: "Fit and Testing",
            book: "Value Proposition Design (Osterwalder)",
            source:
              "Books on Systems/Value_Proposition_Design_-_Alexander_Osterwalder.pdf",
            contentId: "value-proposition-fit",
            concept:
              "Problem-Solution Fit vs. Product-Market Fit. First fit on paper, then in reality.",
          },
          {
            day: "Wednesday",
            title: "Jobs to be Done",
            book: "Jobs to be Done (Anthony Ulwick)",
            source:
              "Books on Systems/Jobs_to_be_Done_-_Anthony_W_Ulwick.pdf",
            contentId: "jobs-to-be-done",
            concept:
              "People 'hire' products to get a job done. Outcome-Driven Innovation.",
            exercise: "Formulate 3 JTBD for your customers",
          },
          {
            day: "Thursday",
            title: "What Customers Want",
            book: "What Customers Want (Anthony Ulwick)",
            source:
              "Books on Systems/What_Customers_Want__Using_Outcome-Driven_-_Anthony_Ulwick.pdf",
            contentId: "what-customers-want",
            concept:
              "Deeper version of JTBD. Outcome statements: [direction] + [metric] + [object of control].",
            exercise: "Rewrite JTBD in Ulwick's format",
          },
          {
            day: "Friday",
            title: "Good Strategy Bad Strategy",
            book: "Good Strategy Bad Strategy (Richard Rumelt)",
            source:
              "knihy branding/text/toaz.info-good-strategy-bad-strategy-rumelt-en-15024-pr_c87bf26836c34702eddfdfa36699375b.txt",
            contentId: "good-strategy-bad-strategy",
            concept:
              "Good strategy is not about vision or goals. Kernel = diagnosis + guiding policy + coherent actions.",
            exercise:
              "Diagnose your own situation using Rumelt's framework",
          },
          {
            day: "Weekend",
            title: "Finalize ICP + Value Proposition",
            book: "",
            concept: "Rewrite ICP, finished Value Proposition Canvas, positioning statement.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Build the System",
    subtitle: "Product thinking, testing, brand system",
    output: "Defined service + tested signals + brand brief",
    color: "#C9A7FF",
    weeks: [
      {
        week: 7,
        title: "Product and Service",
        lessons: [
          {
            day: "Monday",
            title: "Inspired",
            book: "Inspired (Marty Cagan)",
            source: "knihy branding/text/Inspired - Marty Cagan.txt",
            contentId: "inspired-cagan",
            concept: "How the best product teams work. Discovery vs. delivery.",
          },
          {
            day: "Tuesday",
            title: "Escaping the Build Trap",
            book: "Escaping the Build Trap (Melissa Perri)",
            source: "Books on Systems/Escaping_the_build_trap_-_Melissa_Perri.pdf",
            contentId: "escaping-build-trap",
            concept: "Build trap = company measures success by features shipped, not problems solved.",
          },
          {
            day: "Wednesday",
            title: "Design Sprint, Part 1",
            book: "Sprint (Jake Knapp)",
            source: "Books on Systems/Sprint__How_to_Solve_Big_Problems_and_Test_-_Jake_Knapp.pdf",
            contentId: "design-sprint-1",
            concept: "5-day process: map, sketch, decide, prototype, test.",
          },
          {
            day: "Thursday",
            title: "Design Sprint, Part 2",
            book: "Sprint (Jake Knapp)",
            source: "Books on Systems/Sprint__How_to_Solve_Big_Problems_and_Test_-_Jake_Knapp.pdf",
            contentId: "design-sprint-2",
            concept: "Details of prototyping and testing.",
            exercise: "Design your own 'mini-sprint' service",
          },
          {
            day: "Friday",
            title: "Lean Product Playbook",
            book: "The Lean Product Playbook (Dan Olsen)",
            source: "Books on Systems/The_Lean_Product_Playbook_-_Dan_Olsen.pdf",
            contentId: "lean-product-playbook",
            concept: "Product-Market Fit Pyramid: target customer, underserved needs, value prop, feature set, UX.",
            exercise: "Where are you on the pyramid with your own service?",
          },
          {
            day: "Weekend",
            title: "Define 1 service",
            book: "",
            concept: "Based on everything: clear name, price, process, expected outcome, target audience.",
          },
        ],
      },
      {
        week: 8,
        title: "Testing Business Ideas",
        lessons: [
          {
            day: "Monday",
            title: "Testing Business Ideas, Part 1",
            book: "Testing Business Ideas (David Bland)",
            source: "Books on Systems/Testing_Business_Ideas_-_David_J_Bland.pdf",
            contentId: "testing-business-ideas-1",
            concept: "44 experiments. Choose 3-5 relevant to your situation.",
          },
          {
            day: "Tuesday",
            title: "Testing Business Ideas, Part 2",
            book: "Testing Business Ideas (David Bland)",
            source: "Books on Systems/Testing_Business_Ideas_-_David_J_Bland.pdf",
            contentId: "testing-business-ideas-2",
            exercise: "Design a fake door test for your service",
            concept: "Experiment design: hypothesis, metric, threshold.",
          },
          {
            day: "Wednesday",
            title: "One Metric That Matters",
            book: "Lean Analytics (Croll & Yoskovitz)",
            source: "Books on Systems/Lean_Analytics_-_Alistair_Croll_Benjamin_Yoskovitz.pdf",
            contentId: "lean-analytics",
            concept: "At each stage you have 1 metric. Empathy > Stickiness > Virality > Revenue > Scale.",
            exercise: "What's your 'One Metric That Matters' right now?",
          },
          {
            day: "Thursday",
            title: "UX for Lean Startups",
            book: "UX for Lean Startups (Laura Klein)",
            source: "Books on Systems/UX_for_Lean_Startups_-_Laura_Klein.pdf",
            contentId: "ux-lean-startups",
            concept: "UX research + lean methodology = fast testing with minimal risk.",
          },
          {
            day: "Friday",
            title: "AI vs. Human Trust",
            book: "Academic papers",
            source: "knihy branding/text/",
            contentId: "ai-trust-research",
            concept: "People distinguish AI vs. human content. Trust drops with AI. This is your argument for clients.",
          },
          {
            day: "Weekend",
            title: "Launch signal test",
            book: "",
            concept: "Landing page or social post. Measure reactions.",
          },
        ],
      },
      {
        week: 9,
        title: "Brand System",
        lessons: [
          {
            day: "Monday",
            title: "StoryBrand Framework",
            book: "Building a StoryBrand (Donald Miller)",
            source: "knihy branding/text/_OceanofPDF.com_Building_a_StoryBrand_20_-_Donald_Miller.txt",
            contentId: "storybrand-framework",
            concept: "Your customer is the hero, not your brand. SB7 framework.",
            exercise: "Fill out the BrandScript for your service",
          },
          {
            day: "Tuesday",
            title: "StoryBrand: Execution",
            book: "Building a StoryBrand (Donald Miller)",
            source: "knihy branding/text/_OceanofPDF.com_Building_a_StoryBrand_20_-_Donald_Miller.txt",
            contentId: "storybrand-execution",
            concept: "Guide gives a plan, calls to action, helps avoid failure, leads to success.",
            exercise: "Rewrite landing page copy using SB7",
          },
          {
            day: "Wednesday",
            title: "Brand Portfolio Strategy",
            book: "Brand Portfolio Strategy (David Aaker)",
            source: "knihy branding/text/_OceanofPDF.com_Brand_Portfolio_Strategy_-_David_A_Aaker.txt",
            contentId: "brand-portfolio-strategy",
            concept: "How to manage multiple brands/services under one roof.",
          },
          {
            day: "Thursday",
            title: "Designing Brand Identity",
            book: "Designing Brand Identity (Alina Wheeler)",
            source: "knihy branding/text/Designing_Brand_Identity.txt",
            contentId: "designing-brand-identity",
            concept: "Brand identity process from strategy to implementation.",
            exercise: "Brand brief for your new position",
          },
          {
            day: "Friday",
            title: "The Brand Gap",
            book: "The Brand Gap (Marty Neumeier)",
            source: "knihy branding/text/the-brand-gap.txt",
            contentId: "brand-gap",
            concept: "Brand = gut feeling. The gap between strategy and creativity.",
          },
          {
            day: "Weekend",
            title: "Evaluate signal test + adjust service",
            book: "",
            concept: "Analyze results, adjust your offer based on data.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Communicate & Persuade",
    subtitle: "Persuasion, pricing, strategy, growth",
    output: "First paying client + case study",
    color: "#FFE680",
    weeks: [
      {
        week: 10,
        title: "Persuasion and Communication",
        lessons: [
          {
            day: "Monday",
            title: "Social Proof, Liking, Authority, Scarcity",
            book: "Influence (Robert Cialdini)",
            source: "knihy branding/text/The Psychology of Persuasion.txt",
            contentId: "cialdini-remaining",
            concept: "Remaining 4 principles. Social proof = why case studies work. Authority = why credentials matter.",
          },
          {
            day: "Tuesday",
            title: "Why Things Spread",
            book: "Contagious (Jonah Berger)",
            source: "knihy branding/text/_OceanofPDF.com_Contagious_Why_Things_Catch_On_-_Jonah_Berger.txt",
            contentId: "contagious-stepps",
            concept: "STEPPS framework: Social Currency, Triggers, Emotion, Public, Practical Value, Stories.",
          },
          {
            day: "Wednesday",
            title: "Tribes",
            book: "Tribes (Seth Godin)",
            source: "knihy branding/text/_OceanofPDF.com_Tribes__We_Need_You_to_Lead_Us_-_Seth_Godin.txt",
            contentId: "tribes-godin",
            concept: "You don't need a million followers. You need a tribe. A group connected by an idea and a leader.",
          },
          {
            day: "Thursday",
            title: "Psychology of Pricing",
            book: "Priceless (William Poundstone)",
            source: "knihy branding/text/_OceanofPDF.com_Priceless_-_William_Poundstone.txt",
            contentId: "priceless-pricing",
            concept: "How people perceive value and how to set pricing. Anchoring, framing, decoy effect.",
          },
          {
            day: "Friday",
            title: "Naming",
            book: "Hello My Name Is Awesome (Alexandra Watkins)",
            source: "knihy branding/text/_OceanofPDF.com_Hello_My_Name_Is_Awesome_-_Alexandra_Watkins.txt",
            contentId: "naming-awesome",
            concept: "Maybe you don't need a new name, but maybe you do. SMILE & SCRATCH framework.",
          },
          {
            day: "Weekend",
            title: "Prepare an offer for 2-3 people from interviews",
            book: "",
            concept: "Specific offer, specific price, specific outcome.",
          },
        ],
      },
      {
        week: 11,
        title: "Strategic Thinking",
        lessons: [
          {
            day: "Monday",
            title: "Good Strategy, Deeper",
            book: "Good Strategy Bad Strategy (Richard Rumelt)",
            source: "knihy branding/text/toaz.info-good-strategy-bad-strategy-rumelt-en-15024-pr_c87bf26836c34702eddfdfa36699375b.txt",
            contentId: "good-strategy-deeper",
            concept: "Kernel = diagnosis + guiding policy + coherent actions. Apply it to yourself.",
          },
          {
            day: "Tuesday",
            title: "How to Be an Alchemist",
            book: "Alchemy (Rory Sutherland)",
            source: "knihy branding/text/_OceanofPDF.com_Alchemy_-_Rory_Sutherland.txt",
            contentId: "alchemy-psychophysics",
            concept: "Dare to be trivial. Small changes can have big impacts. Psychophysics.",
          },
          {
            day: "Wednesday",
            title: "System 1 vs System 2",
            book: "Thinking Fast and Slow (Daniel Kahneman)",
            source: "knihy branding/text/_OceanofPDF.com_Thinking_Fast_and_Slow_By_Daniel_Kahneman_-_Thinking_Fast_and_Slow_By_Daniel_Kahneman.txt",
            contentId: "kahneman-systems",
            concept: "Most decisions happen automatically (System 1). System 2 is lazy.",
          },
          {
            day: "Thursday",
            title: "Biases and Framing",
            book: "Thinking Fast and Slow (Daniel Kahneman)",
            source: "knihy branding/text/_OceanofPDF.com_Thinking_Fast_and_Slow_By_Daniel_Kahneman_-_Thinking_Fast_and_Slow_By_Daniel_Kahneman.txt",
            contentId: "kahneman-biases",
            concept: "Loss aversion, anchoring, framing. Each of these concepts is directly applicable to your work.",
          },
          {
            day: "Friday",
            title: "Growth Experiments",
            book: "The Growth Hacking Book (Parul Agrawal)",
            source: "Books on Systems/The_Growth_Hacking_Book_-_Parul_Agrawal.pdf",
            contentId: "growth-experiments",
            concept: "Growth experiments. Only after product-market fit, not before.",
          },
          {
            day: "Weekend",
            title: "Pilot project",
            book: "",
            concept: "Start working with your first client.",
          },
        ],
      },
      {
        week: 12,
        title: "Integration and Launch",
        lessons: [
          {
            day: "Monday",
            title: "Coaching Frameworks",
            book: "Handbook of Coaching Psychology",
            source: "Knihy Design /md files/handbook-of-coaching-psychology-2nbsped-9781317636397_compress.md",
            contentId: "coaching-frameworks",
            concept: "GROW model, motivational interviewing, solution-focused coaching. Use in 1:1 sessions.",
          },
          {
            day: "Tuesday",
            title: "Brand Equity: Academic View",
            book: "Academic papers",
            source: "knihy branding/text/",
            contentId: "brand-equity-academic",
            concept: "What's behind 'branding' at an academic level. Models of brand equity.",
          },
          {
            day: "Wednesday",
            title: "AI and Brand Equity",
            book: "Academic papers",
            source: "knihy branding/text/",
            contentId: "ai-brand-equity",
            concept: "Where AI helps, where it hurts, and where you're irreplaceable.",
          },
          {
            day: "Thursday",
            title: "Zero-Click Paradigm",
            book: "Whitepaper",
            source: "knihy branding/text/Zero-Click-Paradigm-Whitepaper.txt",
            contentId: "zero-click-paradigm",
            concept: "New way people consume content. SEO is dying, what's next?",
          },
          {
            day: "Friday",
            title: "Systemic Thinking",
            book: "Academic paper",
            source: "knihy branding/text/04+Andri+systemic-+English+2025+pub.txt",
            contentId: "systemic-thinking",
            concept: "Systemic approach to design and business.",
          },
          {
            day: "Weekend",
            title: "Finalization",
            book: "",
            concept: "Document the pilot project. Update website. Publish first case study.",
            exercise: "Before/after of the pilot project. This is your strongest marketing material.",
          },
        ],
      },
    ],
  },
];
