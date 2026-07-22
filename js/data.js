/* ==========================================================================
   Afro-Architects — Course Content Data
   Each module contains an ordered list of topics rendered as accordion
   items inside the LMS-style modal viewport.
   ========================================================================== */

const MODULES = {
  1: {
    id: 1,
    label: "Module 01",
    title: "What I Wish I Had Known",
    kicker: "Getting Oriented",
    icon: "compass",
    intro: "Honest reflections and practical groundwork for anyone standing at the edge of an architecture education — the questions to ask before you commit, and the mindset to bring once you arrive.",
    topics: [
      {
        title: "Why Become an Architect?",
        body: `<p>Architecture asks you to be a storyteller, engineer, artist, and advocate all at once. Before you commit years of study to it, get honest about your "why" — whether it's a love of making, a desire to shape neighborhoods that look like the people in them, or a pull toward problem-solving at every scale.</p>
        <p>Your reasons will change over time, and that's normal. What matters is that your "why" is yours, not a borrowed idea of what an architect is supposed to be.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What first drew you to architecture — and has that reason shifted since?</p>`
      },
      {
        title: "Researching Programs: What You Should Know Before You Go to Architecture School",
        body: `<p>Not all architecture programs are built the same. Before applying, look closely at accreditation status, studio culture, faculty diversity, cost of materials, and whether alumni who look like you have thrived there.</p>
        <ul>
          <li>Talk to current students and recent graduates, not just admissions staff</li>
          <li>Ask about mentorship, advising ratios, and mental health support</li>
          <li>Compare 4+2, 5-year B.Arch, and M.Arch pathways for time and cost</li>
        </ul>
        <p class="topic-prompt">Reflect &amp; discuss: What three questions would you ask a current student before applying?</p>`
      },
      {
        title: "What You Should Know When You Get to Architecture School",
        body: `<p>Studio culture can be intense — long nights, public critique, and unspoken norms that no one explains outright. Knowing this ahead of time helps you protect your energy and set boundaries early.</p>
        <p>Build a support network in your first semester: classmates, a mentor, and at least one space outside of studio where you don't have to perform. Your well-being is not separate from your success — it is the foundation of it.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What boundaries do you want to set before studio culture sets them for you?</p>`
      },
      {
        title: "What You Will Be Working Toward in Architecture School",
        body: `<p>Architecture school builds toward a professional degree, a design portfolio, and — eventually — licensure. Along the way you're also building a design voice: a way of seeing and solving problems that is distinctly yours.</p>
        <p>Keep the bigger picture in view. Every studio project, every all-nighter, and every critique is one step in a much longer arc toward practicing, teaching, or building in the world on your own terms.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What does "success" in architecture school look like for you personally — not for anyone else?</p>`
      }
    ]
  },

  2: {
    id: 2,
    label: "Module 02",
    title: "What You Will Learn",
    kicker: "The Landscape of the Profession",
    icon: "graduation-cap",
    intro: "A grounded overview of the field — what architecture actually is, what architects do day-to-day, and how to navigate school, funding, and the years that follow.",
    topics: [
      {
        title: "What Is Architecture?",
        body: `<p>Architecture is the design of the built environment at every scale — from a single room to an entire city. It sits at the intersection of art, engineering, culture, and public policy.</p>
        <p>It is also never neutral. Every building reflects choices about who a space is for, who gets access, and whose history is honored in the design.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Name a building in your community that tells a story about who it was designed for.</p>`
      },
      {
        title: "What Does an Architect Do?",
        body: `<p>Architects translate a client's needs into a design that is safe, buildable, and meaningful. That means sketching, drafting, running client meetings, coordinating engineers, checking code compliance, and visiting job sites while construction is underway.</p>
        <p>No two days look the same. Some weeks are all sketching and research; others are spent almost entirely in meetings and permit reviews.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Which part of the job — designing, coordinating, or building — excites you most?</p>`
      },
      {
        title: "What Kind of Skills Will You Need to Become an Architect?",
        body: `<p>Technical skills (drafting, model-making, CAD/BIM software, structural literacy) matter — but so do communication, project management, empathy, and the resilience to handle critique.</p>
        <ul>
          <li>Visual and spatial reasoning</li>
          <li>Written and verbal communication for client and community trust</li>
          <li>Time management across long, multi-phase projects</li>
        </ul>
        <p class="topic-prompt">Reflect &amp; discuss: Which of these skills do you already have? Which do you want to grow?</p>`
      },
      {
        title: "Getting Into Architecture School",
        body: `<p>Admission usually asks for transcripts, a personal statement, and — for many programs — a portfolio showing creative and analytical thinking, even if it isn't architectural work yet.</p>
        <p>Strong applications tell a coherent story about curiosity and problem-solving. A sketchbook, a woodworking project, or a community mural can all belong in a first portfolio.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What piece of your own creative work best represents how you think?</p>`
      },
      {
        title: "Finding Institutional Support",
        body: `<p>Look for advising offices, affinity groups (like NOMAS — the National Organization of Minority Architecture Students), writing centers, and faculty mentors who will actually advocate for you.</p>
        <p>Institutional support is not a luxury; it's infrastructure. Seek it out proactively rather than waiting for it to find you.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What kind of support system would help you feel most confident in a new program?</p>`
      },
      {
        title: "Finding Funding",
        body: `<p>Architecture school is expensive — tuition, materials, printing, and model supplies add up fast. Research scholarships from AIA, NOMA, ACSA, and local chapters early, alongside need-based aid.</p>
        <p>Many funding opportunities are earmarked specifically for Black and underrepresented students in design fields. Don't assume you won't qualify — apply.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What is one funding source you can research and apply to this month?</p>`
      },
      {
        title: "What Happens After Architecture School & How to Make the Most of Your Experience",
        body: `<p>Graduation is the start of licensure, not the end of learning. Most graduates enter an internship period (AXP) while studying for licensing exams, often while working at a firm, nonprofit, or in public practice.</p>
        <p>Use your remaining time in school to build relationships, seek internships, and clarify what kind of practice — corporate, community-based, academic — fits the life you want.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What does a fulfilling architecture career look like for you five years from now?</p>`
      },
      {
        title: "What Questions Do YOU Have?",
        body: `<p>This space is yours. Ask anything — about school, funding, culture, or the profession — and connect with peers and mentors who've walked this path.</p>
        <div class="gh-discussion" data-discussion-key="module-2-questions">
          <div class="gh-discussion__header">
            <span class="gh-mark" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.02 1.93-.02 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
            </span>
            <div>
              <strong>Discussion Board</strong>
              <span class="gh-discussion__tag">GitHub Discussions ready</span>
            </div>
          </div>
          <p class="gh-discussion__note">On GitHub Pages, this panel is designed to connect to real <a href="https://docs.github.com/en/discussions" target="_blank" rel="noopener">GitHub Discussions</a> via <a href="https://giscus.app" target="_blank" rel="noopener">giscus</a> — enable Discussions on your repo and drop in your repo ID to go live. Until then, use the local board below to prototype the conversation.</p>
        </div>
        <p class="topic-prompt">Post a question below — a mentor or classmate may be the one to answer it.</p>`
      }
    ]
  },

  3: {
    id: 3,
    label: "Module 03",
    title: "Ways You Can Learn Architectural Skills",
    kicker: "Pathways & Systems",
    icon: "route",
    intro: "The formal systems that shape an architecture education — accreditation, degree types, licensure, and the cultural currents running underneath all of it.",
    topics: [
      {
        title: "NAAB Accreditation",
        body: `<p>The National Architectural Accrediting Board (NAAB) accredits professional degree programs in the U.S. Accreditation matters because most states require a NAAB-accredited degree as a step toward licensure.</p>
        <p>Always confirm a program's accreditation status directly before enrolling — it affects your future ability to sit for licensing exams.</p>
        <p class="topic-prompt">Reflect &amp; discuss: How would you explain NAAB accreditation to a friend outside the field in one sentence?</p>`
      },
      {
        title: "Undergraduate Programs",
        body: `<p>A Bachelor of Architecture (B.Arch) is typically a 5-year professional degree that leads directly toward licensure. A Bachelor of Science or Bachelor of Arts in Architecture (4 years) is pre-professional and usually requires a follow-on Master's.</p>
        <p>Choose based on timeline, cost, and how certain you are about committing to architecture specifically versus keeping design options open.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Does a 5-year commitment or a more flexible 4+2 path fit your life right now?</p>`
      },
      {
        title: "Master of Architecture Programs (M.Arch)",
        body: `<p>M.Arch programs vary widely: some are 2 years for students with a pre-professional undergraduate degree, others are 3+ years for students coming from unrelated fields.</p>
        <p>An M.Arch is also a common path for career-changers — many successful architects arrive from art, engineering, sociology, or the trades.</p>
        <p class="topic-prompt">Reflect &amp; discuss: If you're coming from a non-design background, what strengths do you bring with you?</p>`
      },
      {
        title: "Licensure",
        body: `<p>To become a licensed architect in the U.S., you generally need a NAAB-accredited degree, completion of the Architectural Experience Program (AXP), and passing the Architect Registration Examination (ARE).</p>
        <p>Licensure protects the public — and it also protects you, giving you the legal authority to stamp drawings and run your own practice.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What feels most daunting about the licensure path, and who could help you plan around it?</p>`
      },
      {
        title: "AXP (Architectural Experience Program)",
        body: `<p>AXP is the structured internship you complete — usually after your degree — logging hours across categories like practice management, project design, and construction observation.</p>
        <p>Start tracking hours as early as your first eligible job or internship; some experience can count before graduation depending on your program.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What kind of firm or project would you want your AXP hours to come from?</p>`
      },
      {
        title: "Teaching Versus Research Institutions",
        body: `<p>Teaching-focused schools emphasize studio mentorship and design practice; research institutions emphasize scholarship, technology, and theory alongside design. Many schools blend both.</p>
        <p>Visit, sit in on a review if you can, and ask what percentage of faculty are full-time studio critics versus research faculty.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Do you learn best through hands-on studio mentorship, rigorous research, or a mix of both?</p>`
      },
      {
        title: "Finding Funding",
        body: `<p>Beyond general financial aid, look for design-specific and identity-specific scholarships — NOMA, AIA chapters, the National Endowment for the Arts, and university-specific diversity fellowships.</p>
        <p>Apply broadly and early; many design scholarships have smaller applicant pools than you'd expect.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's stopping you from applying to a scholarship today — and how can you remove that barrier?</p>`
      },
      {
        title: "Studio Culture",
        body: `<p>Studio culture refers to the unwritten norms of design education — all-nighters, public critique ("crit"), and the emotional intensity of putting your work on display for judgment.</p>
        <p>Healthy studio culture is being actively reimagined across many schools. You are allowed to ask for — and help build — a studio culture rooted in care, not exhaustion.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What would a healthier studio culture look like, concretely, in your program?</p>`
      },
      {
        title: "Archi-Speak & How It Impacts Your Ability to Access Resources",
        body: `<p>Architecture has its own dense vocabulary — "parti," "tectonic," "programmatic diagram" — that can feel like a gatekeeping mechanism if no one explains it plainly.</p>
        <p>Ask for definitions without shame. Fluency in "archi-speak" is a skill you build over time, not a prerequisite you're expected to arrive with.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What architecture term has confused you, and who could you ask to break it down?</p>`
      }
    ]
  },

  4: {
    id: 4,
    label: "Module 04",
    title: "What Types of Skills Will Be Taught in Architecture School?",
    kicker: "Core Design Curriculum",
    icon: "pencil-ruler",
    intro: "A preview of the recurring skill areas that show up across nearly every architecture curriculum — from how you think about problems to how you represent and defend your ideas.",
    topics: [
      {
        title: "Design Thinking",
        body: `<p>Design thinking is an iterative process — empathize, define, ideate, prototype, test — used to approach open-ended problems without a single right answer.</p>
        <p>In studio, this looks like generating many quick concept sketches before committing to one direction, then testing that direction against real constraints.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Where in your life have you already used a design-thinking process without naming it that?</p>`
      },
      {
        title: "Architectural Representation",
        body: `<p>Representation is how you communicate a design idea before it's built — drawings, diagrams, models, renderings, and animations. Each format emphasizes different information.</p>
        <p>Strong architects are fluent across many representation formats, choosing the right one for the audience and the idea.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Which format — sketching, diagramming, or model-making — do you already gravitate toward?</p>`
      },
      {
        title: "Western Architectural History",
        body: `<p>Most curricula still center Western architectural history (Greek, Roman, Gothic, Modernist) as the default canon — even though architecture has always been a global, multicultural practice.</p>
        <p>Learn the canon so you can speak the shared professional language, and actively seek out the histories the syllabus leaves out — West African, Indigenous, vernacular, and diasporic building traditions among them.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What building tradition from your own heritage deserves a place in this history?</p>`
      },
      {
        title: "Drawing Conventions",
        body: `<p>Drawing conventions are the shared visual "grammar" of architecture — standard line weights, symbols, scales, and notation that let any trained reader understand a drawing.</p>
        <p>Learning these conventions is less about memorization and more about earning fluency in a shared professional language used on every job site.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's one drawing convention you've seen but don't yet fully understand?</p>`
      },
      {
        title: "Model-Making & Fabrication",
        body: `<p>Physical and digital models let you test spatial relationships, light, and scale in ways flat drawings can't. Fabrication skills — laser cutting, 3D printing, CNC milling, hand-building — bring those models to life.</p>
        <p>Model-making is where design ideas get pressure-tested against material reality — what actually holds together, what actually reads at scale.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What material have you enjoyed building with, and how might it show up in an architectural model?</p>`
      },
      {
        title: "Design Theory",
        body: `<p>Design theory is the set of ideas and frameworks — from Modernism to critical regionalism to Afrofuturism — that architects use to explain and justify their design decisions.</p>
        <p>Theory gives language to instinct. It helps you defend a design choice as more than "it looks good" — it becomes "it responds to this context, this history, this community."</p>
        <p class="topic-prompt">Reflect &amp; discuss: What values or beliefs do you want your own design theory to be built around?</p>`
      }
    ]
  },

  5: {
    id: 5,
    label: "Module 05",
    title: "How Design Thinking Appears in Architecture School",
    kicker: "Resources & Strategies for Success",
    icon: "layout-grid",
    intro: "The building blocks of translating a site and an idea into a coherent, buildable design — from reading a context to shaping form and controlling comfort.",
    topics: [
      {
        title: "Understanding Site Context",
        body: `<p>Every design begins with the site — its climate, topography, history, neighbors, and the people who already move through it. Ignoring context produces buildings that feel imposed rather than belonging.</p>
        <p>Site analysis should include social and historical context, not just physical measurements — who lived here, who was displaced, and what the community actually needs now.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's a site you know well, and what story does its context tell?</p>`
      },
      {
        title: "Space Planning",
        body: `<p>Space planning is the arrangement of rooms and functions to support how people actually move through and use a building, balancing efficiency, comfort, and flow.</p>
        <p>Good space planning is invisible when it works — you only notice it when a layout feels awkward or a hallway feels wasted.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Describe a space you've been in with either excellent or terrible space planning — what made it so?</p>`
      },
      {
        title: "Architectural Program",
        body: `<p>The "program" is the list of required spaces and their relationships — a school's program might include classrooms, a gym, a cafeteria, and offices, each with size and adjacency requirements.</p>
        <p>Defining the program clearly, often in dialogue with the client or community, is one of the first and most important design decisions.</p>
        <p class="topic-prompt">Reflect &amp; discuss: If you were programming a community center for your neighborhood, what three spaces would be non-negotiable?</p>`
      },
      {
        title: "Understanding How Form & Massing Fits Into Your Overall Design Narrative",
        body: `<p>Massing is the overall three-dimensional shape and volume of a building. Form and massing should support your design narrative — the story you're telling through the project.</p>
        <p>A soaring atrium, a low protective roofline, a courtyard that turns inward — each massing decision reinforces (or undercuts) the idea behind the design.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What building form or massing choice best communicates "welcome" to you, and why?</p>`
      },
      {
        title: "Communicating Ideas Through Diagrams",
        body: `<p>Diagrams strip a design down to its essential logic — circulation, structure, light, program — using abstraction to make an idea instantly legible.</p>
        <p>A strong diagram can explain a concept faster than paragraphs of text. Practice reducing complex ideas to a few clear marks.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Try describing one idea from your day using only three simple shapes or arrows — what would it look like?</p>`
      },
      {
        title: "Environmental Design: Site Orientation",
        body: `<p>Orientation — how a building is positioned relative to the sun and prevailing winds — shapes energy use, comfort, and daylight quality before a single wall is drawn.</p>
        <p>Passive design strategies rooted in orientation (like east-west building axes for daylight control) have been used across cultures for centuries, long before mechanical climate control existed.</p>
        <p class="topic-prompt">Reflect &amp; discuss: How does the sun move through your own home during the day — and how does that affect comfort?</p>`
      },
      {
        title: "Environmental Design: Lighting",
        body: `<p>Lighting design balances daylight and artificial light for both function and mood. Natural light shapes how a space feels far more than most beginning designers expect.</p>
        <p>Consider how light changes throughout the day and year — a space that glows at sunset can carry as much emotional weight as its floor plan.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Describe a moment when light dramatically changed how a space felt to you.</p>`
      },
      {
        title: "Environmental Design: Ventilation",
        body: `<p>Ventilation strategy — natural cross-ventilation, stack effect, or mechanical systems — affects air quality, comfort, and energy consumption.</p>
        <p>Designing for airflow is also a health and equity issue: well-ventilated buildings reduce illness transmission and improve comfort in communities that are too often left with the least resilient buildings.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's one building you know that "breathes" well — and one that doesn't?</p>`
      }
    ]
  },

  6: {
    id: 6,
    label: "Module 06",
    title: "What Is Architectural Representation?",
    kicker: "Resources & Strategies for Success",
    icon: "square-stack",
    intro: "The technical drawing skills architects use to describe a building precisely and communicate it convincingly, from hand sketch to Revit model.",
    topics: [
      {
        title: "Hand Drafting Versus CAD",
        body: `<p>Hand drafting builds foundational spatial reasoning and drawing discipline; CAD (Computer-Aided Design) offers precision, speed, and easy iteration for complex projects.</p>
        <p>Most programs teach both — hand drafting first to build intuition, then CAD to prepare you for professional practice.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Do you feel more confident drawing by hand or digitally right now — and why?</p>`
      },
      {
        title: "Orthographic Projection: Plan View",
        body: `<p>A plan view is a drawing looking straight down at a building, showing walls, doors, furniture, and room layout — the most common architectural drawing type.</p>
        <p>Reading a plan fluently means being able to imagine walking through the space it describes, at real scale, in your mind.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Sketch the plan of your own bedroom from memory — how accurate is it?</p>`
      },
      {
        title: "Line Weights",
        body: `<p>Line weight — how thick or thin a line is drawn — communicates hierarchy: heavier lines for cut edges and walls, lighter lines for surface detail or objects beyond.</p>
        <p>Consistent line weight conventions are what make a drawing readable at a glance, without confusing what's near versus far.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Look at a drawing you've made — where could varying your line weight add clarity?</p>`
      },
      {
        title: "Orthographic Projection: Elevations",
        body: `<p>An elevation is a straight-on view of a building's exterior (or interior) face, showing height, materials, windows, and proportion.</p>
        <p>Elevations are where a lot of a building's character and identity are communicated — facade rhythm, material choices, and scale relative to the human body.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What building facade in your city do you find most memorable, and why?</p>`
      },
      {
        title: "Sections",
        body: `<p>A section is a drawing that "cuts through" a building to reveal its interior structure, ceiling heights, and the vertical relationships between floors.</p>
        <p>Sections often reveal a design's real ambition — a dramatic double-height space or a hidden mezzanine only shows up when you cut through the building.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What would a section cut through your favorite room reveal about how it's used?</p>`
      },
      {
        title: "Axons, Perspectives, & Parallel Projections",
        body: `<p>Axonometric drawings show three dimensions without perspective distortion; perspectives mimic how the human eye actually sees space, with depth and vanishing points.</p>
        <p>Each has strengths — axons are great for technical clarity, perspectives are great for emotional, experiential storytelling.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Which feels more natural to you: technical axonometric drawing, or emotive perspective drawing?</p>`
      },
      {
        title: "Renderings",
        body: `<p>Renderings are polished, often photorealistic images used to communicate mood, materiality, and atmosphere to clients and the public.</p>
        <p>A rendering is also a persuasion tool — it shapes how funders, communities, and city officials imagine a project before it exists.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Have you ever seen a rendering that oversold a project compared to how it was actually built?</p>`
      },
      {
        title: "Revit",
        body: `<p>Revit is a leading Building Information Modeling (BIM) software — it builds a data-rich 3D model that automatically generates plans, sections, elevations, and quantities from one coordinated file.</p>
        <p>Learning BIM software is now considered essential professional fluency, alongside — not instead of — strong hand and conceptual drawing skills.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's one software skill you're most excited (or nervous) to learn?</p>`
      }
    ]
  },

  7: {
    id: 7,
    label: "Module 07",
    title: "Precedent Studies",
    kicker: "Resources & Strategies for Success",
    icon: "library",
    intro: "Learning to look closely at existing buildings as a research method — and to translate what you find into design decisions of your own.",
    topics: [
      {
        title: "What Is a Precedent Study?",
        body: `<p>A precedent study is a close analysis of an existing, built project — examining its site strategy, program, structure, and materiality to learn from real, tested design decisions.</p>
        <p>Precedents are not meant to be copied — they're meant to be interrogated for the design logic underneath the surface.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Name one building you'd love to study closely, and what you hope to learn from it.</p>`
      },
      {
        title: "How Do You Apply Precedent Studies to Understand Different Building Typologies?",
        body: `<p>Typologies are recurring building categories (schools, museums, housing, civic buildings) with shared spatial and programmatic patterns that have evolved over time.</p>
        <p>Studying multiple precedents within a typology helps you understand its conventions well enough to knowingly follow — or intentionally break — them in your own design.</p>
        <p class="topic-prompt">Reflect &amp; discuss: If you compared three schools, what pattern do you predict would repeat across all of them?</p>`
      }
    ]
  },

  8: {
    id: 8,
    label: "Module 08",
    title: "Drawing Conventions",
    kicker: "Resources & Strategies for Success",
    icon: "ruler",
    intro: "Choosing the right visual language for the right moment — because how you draw something changes how it's understood.",
    topics: [
      {
        title: "What Are Drawing Conventions?",
        body: `<p>Drawing conventions are the standardized symbols, line types, and formatting rules that let architects, engineers, and builders read the same drawing the same way.</p>
        <p>They function like a shared alphabet — once learned, they let complex three-dimensional ideas travel accurately from a designer's mind to a construction site.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's one visual "shorthand" you already use in your own sketchbook or notes?</p>`
      },
      {
        title: "How Do You Determine Which Drawing Convention Is Appropriate?",
        body: `<p>The right convention depends on audience and purpose — a technical construction document needs precise line weights and notation; a community presentation might favor a warm, legible diagram or rendering.</p>
        <p>Ask yourself: who is reading this drawing, and what decision do I need it to help them make?</p>
        <p class="topic-prompt">Reflect &amp; discuss: How would you draw the same idea differently for a contractor versus for a neighborhood meeting?</p>`
      }
    ]
  },

  9: {
    id: 9,
    label: "Module 09",
    title: "Model Making & Fabrication",
    kicker: "Resources & Strategies for Success",
    icon: "box",
    intro: "From concept to physical object — how models work as design and communication tools, and how to prepare them for real fabrication.",
    topics: [
      {
        title: "What Is a Model?",
        body: `<p>A model is a three-dimensional representation of a design at a reduced scale — used to test ideas, communicate concepts, or present a finished vision.</p>
        <p>Models make spatial relationships tangible in a way flat drawings can't. Holding a model in your hands often reveals design problems a drawing hides.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Have you ever built a physical model of anything — what did you learn from making it?</p>`
      },
      {
        title: "Types of Models & How They Are Used",
        body: `<p>Massing models test overall form and scale; study models explore specific design questions quickly and roughly; presentation models are refined, detailed, and built for an audience.</p>
        <p>Knowing which type of model to build — and how much time to invest in it — is itself a design skill.</p>
        <p class="topic-prompt">Reflect &amp; discuss: If you had one hour to model an idea, what level of detail would you aim for?</p>`
      },
      {
        title: "What Is Fabrication?",
        body: `<p>Fabrication is the process of physically producing design elements — whether by hand tools, laser cutters, 3D printers, or CNC machines — turning digital or drawn ideas into real material objects.</p>
        <p>Fabrication skills bridge the gap between designing and building — a bridge many practicing architects say they wish they'd crossed earlier in school.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What fabrication tool (laser cutter, 3D printer, hand tools) are you most curious to try?</p>`
      },
      {
        title: "How Do You Prep a Model for Fabrication?",
        body: `<p>Prepping a model for fabrication means translating a design into precise, machine-readable files — flat vector cut files for laser cutting, or clean, watertight 3D geometry for printing.</p>
        <p>Careful file prep saves material, time, and money. A poorly prepped file can waste an entire sheet of expensive material in seconds.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's one mistake you've made (in any medium) from rushing preparation instead of double-checking a file?</p>`
      }
    ]
  },

  10: {
    id: 10,
    label: "Module 10",
    title: "Design Theory",
    kicker: "Resources & Strategies for Success",
    icon: "book-open",
    intro: "The frameworks and beliefs that give design decisions their reasoning — because every choice you make carries an argument underneath it.",
    topics: [
      {
        title: "What Is Design Theory?",
        body: `<p>Design theory is the body of ideas, philosophies, and critical frameworks that architects use to explain, justify, and challenge design decisions — from Modernism's "form follows function" to more recent frameworks centered on justice and ecology.</p>
        <p>Theory isn't abstract decoration bolted onto a project after the fact — at its best, it's the reasoning that shaped the design from the very first sketch.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's a value or idea you'd want a design theory of your own to be built around?</p>`
      },
      {
        title: "How Is Design Theory Used?",
        body: `<p>Architects use design theory to guide decision-making, to write about their own work, and to situate a project within a larger cultural or historical conversation.</p>
        <p>Being able to articulate the theory behind your design — in a crit, a portfolio, or a client meeting — is often what separates a good design from one that's understood and championed.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence that explains the "why" behind a design choice you've made.</p>`
      },
        {
  title: "Additive Form",
  body: `<p>Architecture can begin by stacking, joining, or layering parts into a whole. This approach creates buildings that feel assembled over time, with each piece contributing to the overall massing and spatial experience.</p>
  <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence that explains how adding parts changes the feeling of a building.</p>`
},
{
  title: "Subtractive Form",
  body: `<p>Instead of building up, subtractive design starts with a solid mass and carves into it. Courtyards, atriums, openings, and recessed entries often come from this way of thinking.</p>
  <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence that explains how carving into a form can create space.</p>`
},
{
  title: "Formal Logic",
  body: `<p>Formal logic is the underlying reasoning that makes a design feel consistent. It helps students explain why a building looks the way it does, and how each decision supports the overall concept.</p>
  <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence that explains the “why” behind a design choice.</p>`
},
{
  title: "Order",
  body: `<p>Order is how architectural elements are arranged so a building feels intentional rather than random. Architects use order systems like axis, symmetry, hierarchy, rhythm, and repetition to organize space and guide experience.</p>
  <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence about how order helps a building feel clear and balanced.</p>`
},
{
  title: "Massing",
  body: `<p>Massing is the overall shape and volume of a building before details are added. It helps designers think about scale, silhouette, proportion, and how a structure sits in its site and surroundings.</p>
  <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence about how a building’s big shape affects its presence.</p>`
},
{
  title: "Scale",
  body: `<p>Scale describes the relationship between a building, the human body, and its context. A design can feel intimate, monumental, compressed, or open depending on how scale is handled.</p>
  <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence about how scale changes how people experience space.</p>`
},
{
  title: "Proportion",
  body: `<p>Proportion is the relationship between parts of a building and the whole. Good proportion helps a design feel balanced, legible, and visually coherent.</p>
  <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence about how the size of parts affects the whole design.</p>`
},
{
  title: "Space and Enclosure",
  body: `<p>Architecture is not only about objects but also about the spaces they create. Walls, openings, thresholds, and circulation paths shape how people move, pause, gather, and experience a place.</p>
  <p class="topic-prompt">Reflect &amp; discuss: Practice writing one sentence about how architecture shapes the space around us.</p>`
}
    ]
  },

  11: {
    id: 11,
    label: "Module 11",
    title: "Typical Design Constraints",
    kicker: "Resources & Strategies for Success",
    icon: "shield-check",
    intro: "The real-world constraints — technical, ethical, and human — that shape every architectural decision, and the reminder that good design holds all of them at once.",
    topics: [
      {
        title: "Accessibility",
        body: `<p>Accessibility design ensures buildings work for people of all abilities — ramps, clear widths, accessible restrooms, and sensory considerations that meet or exceed ADA standards.</p>
        <p>Accessible design isn't an add-on for a subset of users — it's better design for everyone, from parents with strollers to someone recovering from an injury.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Notice a space this week — where does it succeed or fail at accessibility?</p>`
      },
      {
        title: "Structural",
        body: `<p>Structural constraints govern how a building stands up — loads, spans, materials, and the engineering logic that keeps gravity, wind, and seismic forces from winning.</p>
        <p>You don't need to be a structural engineer to be an architect, but structural literacy lets you design forms that are ambitious and buildable at the same time.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's the most structurally daring building you've ever seen in person?</p>`
      },
      {
        title: "Mechanical, Electrical, Plumbing (MEP)",
        body: `<p>MEP systems — heating and cooling, electrical wiring, and plumbing — are often invisible in a finished building but consume enormous amounts of design coordination and building volume.</p>
        <p>Great architects design with MEP in mind from the beginning, not as an afterthought squeezed in after the "real design" is done.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Where do you think MEP systems are hidden in the room you're in right now?</p>`
      },
      {
        title: "Material & Tectonic Constraints",
        body: `<p>Tectonics is the art and logic of how a building is physically assembled — how materials meet, connect, and express their own structural honesty.</p>
        <p>Material choices carry cultural and environmental weight too — cost, sourcing, embodied carbon, and craft traditions all shape what a material can and should mean.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What material feels most meaningful to you, and why?</p>`
      },
      {
        title: "Fire Safety",
        body: `<p>Fire safety design includes egress paths, fire-rated materials, compartmentalization, and detection/suppression systems required by building codes to protect life and property.</p>
        <p>Fire codes can feel like pure bureaucracy until you understand they exist because of real, preventable tragedies — they are one of the clearest examples of design as a life-safety discipline.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Can you identify the nearest two fire exits in the room you're in right now?</p>`
      },
      {
        title: "Life Safety",
        body: `<p>Life safety design goes beyond fire — covering structural failure prevention, emergency lighting, occupancy limits, and clear wayfinding during any kind of crisis.</p>
        <p>Codes exist to encode collective lessons learned from past disasters into every future building — a quiet form of care built into the walls.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's one life safety feature you never noticed until this reading?</p>`
      },
      {
        title: "Fenestrations (Openings for Windows & Doors)",
        body: `<p>Fenestration — the arrangement of windows, doors, and other openings — shapes daylight, ventilation, views, privacy, and a building's exterior rhythm.</p>
        <p>Every window is a small negotiation between light, privacy, energy performance, and beauty — rarely a decision with only one right answer.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Describe your favorite window anywhere — what makes its placement work?</p>`
      },
      {
        title: "Façade Systems",
        body: `<p>Façade systems are the layered assemblies — structure, insulation, weatherproofing, and cladding — that make up a building's exterior skin and control its performance.</p>
        <p>Facades are also where a building's public identity lives; they're often the single largest driver of a project's visual character.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's a facade material you find beautiful, and would you want to design with it?</p>`
      },
      {
        title: "Ecological-Design Context & Sustainability",
        body: `<p>Sustainable design minimizes environmental impact across a building's life — energy use, water, materials, and resilience to a changing climate.</p>
        <p>Sustainability is also an equity issue: the communities least responsible for climate change are often the most exposed to its consequences, making ecological design a justice practice as much as a technical one.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's one sustainable design strategy you'd want to prioritize in your own future work?</p>`
      },
      {
        title: "Participatory & Co-Design Processes",
        body: `<p>Participatory design invites the people who will actually use a building into the design process itself — through workshops, surveys, and shared decision-making rather than top-down assumptions.</p>
        <p>Co-design takes more time and humility, but it produces buildings that actually reflect the communities they serve.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What would you want to be asked if a designer were co-designing a space for your community?</p>`
      },
      {
        title: "Sensory Design",
        body: `<p>Sensory design considers how a space feels through sound, smell, texture, and light — not just how it looks in a photograph.</p>
        <p>Designing for the full sensory experience makes spaces more inclusive for neurodivergent users and richer for everyone else.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Describe a space that felt good through senses other than sight.</p>`
      },
      {
        title: "Trauma-Informed Design",
        body: `<p>Trauma-informed design considers how spatial choices — sightlines, lighting, materials, exits — can either heighten or reduce feelings of stress and hypervigilance for people who have experienced trauma.</p>
        <p>This is especially relevant in schools, healthcare, and housing serving communities who have experienced systemic violence or displacement.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What design choice helps you personally feel calm and safe in a space?</p>`
      }
    ]
  },

  12: {
    id: 12,
    label: "Module 12",
    title: "Coping Strategies",
    kicker: "What If You Don't Feel Like a Culture Fit?",
    icon: "heart-handshake",
    intro: "Grounding tools for staying whole while navigating a demanding program — care, community, and agency as design skills in their own right.",
    topics: [
      {
        title: "Look for the Helpers",
        body: `<p>In every program, there are people quietly holding the community together — a peer mentor, a supportive TA, a staff member who remembers your name. Find them early.</p>
        <p>You don't have to navigate a difficult institution alone. Helpers exist in every space; your job is to notice and connect with them.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Who has already shown up as a "helper" for you, even in a small way?</p>`
      },
      {
        title: "Metabolizing Chaos",
        body: `<p>Studio culture can feel chaotic by design — shifting deadlines, ambiguous feedback, competing priorities. Metabolizing chaos means developing your own rhythms and rituals so the chaos doesn't run through you unchecked.</p>
        <p>This might mean a consistent sleep anchor, a weekly reset ritual, or simply naming out loud when things feel like too much.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What's one ritual that helps you regulate when a week feels chaotic?</p>`
      },
      {
        title: "Mental Health Resources",
        body: `<p>Most universities offer free or low-cost counseling, peer support groups, and crisis lines — often underused by design students who normalize burnout.</p>
        <p>Seeking support is not a sign of falling behind. It's a design decision about the kind of student and person you want to be.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Do you know where your campus counseling center is located, and how to reach it after hours?</p>`
      },
      {
        title: "Mutual Aid Resources",
        body: `<p>Mutual aid networks — shared meal funds, tool libraries, material swaps, emergency funds — exist in many design communities to redistribute resources horizontally, not through institutional charity.</p>
        <p>Both giving and receiving mutual aid are acts of solidarity. Look for or help start a mutual aid network in your program.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What resource could you contribute to a mutual aid network, and what might you need from one?</p>`
      },
      {
        title: "Health Literacy",
        body: `<p>Health literacy means understanding your own body's stress signals, your insurance or campus health coverage, and when and how to advocate for care.</p>
        <p>Chronic sleep deprivation and poor nutrition are common in studio culture — but they are not requirements of the profession. Learn your options and use them.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What is one health resource on your campus you haven't used yet but could?</p>`
      },
      {
        title: "Reclaiming Your Agency",
        body: `<p>It's easy to feel like a passive recipient of critique, grades, and institutional expectations. Reclaiming agency means remembering you are an active author of your own education.</p>
        <p>You can push back on unhelpful feedback, ask for what you need, and choose which parts of "how things are done" you want to carry forward.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Where in your program do you feel the most agency? The least?</p>`
      },
      {
        title: "Hood Herbalism",
        body: `<p>Hood herbalism draws on generations of community-rooted, accessible plant medicine and wellness knowledge — often passed down informally rather than through clinical institutions.</p>
        <p>These practices are a reminder that care and healing don't require expensive or institutional gatekeeping — they can live in your kitchen, your grandmother's recipes, and your neighborhood.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What wellness knowledge has been passed down in your own family or community?</p>`
      },
      {
        title: "Craftivism",
        body: `<p>Craftivism is activism expressed through craft and making — quilts, murals, textiles, and small-scale design objects that carry political and cultural meaning.</p>
        <p>As a future architect, your hands-on making practice can be more than a technical exercise — it can be a form of storytelling and resistance in its own right.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What message would you want a piece of your own craft or making to carry?</p>`
      }
    ]
  },

  13: {
    id: 13,
    label: "Module 13",
    title: "How Do You Make the Most of Your Skills & Relationships to Start an Architecture Career?",
    kicker: "What If You Don't Feel Like a Culture Fit?",
    icon: "briefcase",
    intro: "Turning your design work and the relationships you build in school into real opportunity — the skills, research, and connections that carry you from studio into a sustainable career.",
    topics: [
      {
        title: "Your Portfolio: What Kind of Portfolio Will You Need to Get Into Architecture School?",
        body: `<p>Admissions portfolios showcase creative process and problem-solving, not just polished final products. Sketchbooks, iteration, and reflection matter as much as the final image.</p>
        <p>Curate a small, coherent set of your strongest and most varied work — quality and range beat sheer quantity.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What piece of work would you lead your admissions portfolio with, and why?</p>`
      },
      {
        title: "Your Portfolio: What Kind of Portfolio Will You Need to Get Your First Architecture Job?",
        body: `<p>Professional portfolios emphasize technical competency, software fluency, and your specific contribution to team projects — firms want to see what you can actually do on day one.</p>
        <p>Tailor your portfolio to each firm's focus area; a firm known for housing wants to see different work than one known for civic or cultural buildings.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What technical skill do you most want your first professional portfolio to demonstrate?</p>`
      },
      {
        title: "Researching Firms: Which Space Is Right for You?",
        body: `<p>Firms differ enormously in size, specialty, culture, and values — from large corporate practices to small community-based studios to public-sector design offices.</p>
        <p>Research a firm's actual built work, staff diversity, and public statements before applying — a firm's values should be visible in more than a mission statement page.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What size and type of firm do you picture yourself thriving in, and why?</p>`
      },
      {
        title: "Networking Versus Building the Relationships You Will Need to Be Successful in Your Architecture Career?",
        body: `<p>Transactional networking (collecting contacts) is different from building genuine relationships (mentors, peers, and collaborators who know and support your actual growth).</p>
        <p>Show up consistently, follow up genuinely, and offer value to others — real relationships, not a stack of business cards, are what sustain a long career.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Who is one person in your network you could reach out to genuinely this week — not to ask for something, but just to reconnect?</p>`
      }
    ]
  },

  14: {
    id: 14,
    label: "Module 14",
    title: "Building a Healthy Sense of Community & Belonging",
    kicker: "What If You Don't Feel Like a Culture Fit?",
    icon: "users",
    intro: "Naming the reality of feeling like an outsider in architecture school or practice — and building the tools, people, and boundaries that make belonging possible on your own terms.",
    topics: [
      {
        title: "What to Do if You Find Yourself in a Toxic Learning Environment",
        body: `<p>A toxic learning environment can look like chronic disrespect, unchecked bias, or a culture that rewards burnout over growth. Naming it clearly — to yourself first — is the first step.</p>
        <p>Document specific incidents, seek out ombuds offices or diversity officers, and connect with peers experiencing the same dynamics — you are rarely the only one who has noticed.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What is one resource on your campus (ombudsperson, diversity office, advisor) you could reach out to if things felt toxic?</p>`
      },
      {
        title: "Finding Your People",
        body: `<p>"Your people" might be a NOMAS chapter, a study group, a mentor from a professional organization, or a friend outside architecture entirely who reminds you who you are beyond studio.</p>
        <p>Belonging doesn't require finding people exactly like you — it requires finding people who see and respect you fully.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Where have you already found — or where could you look for — "your people" in this field?</p>`
      },
      {
        title: "How to Show Up: Boundaries, Rest, & Self-Care Cues",
        body: `<p>Showing up sustainably means learning your own early warning signs of burnout, and having pre-decided boundaries (like a hard stop time, or a "no work on Sundays" rule) before you're too exhausted to set them in the moment.</p>
        <p>Rest is not the opposite of ambition — it's part of what makes ambition sustainable over a full career.</p>
        <p class="topic-prompt">Reflect &amp; discuss: What is one boundary you want to hold this semester, no matter what?</p>`
      },
      {
        title: "How to Find (or Become) Mentors",
        body: `<p>Mentors can be found through professional organizations (NOMA, AIA), faculty office hours, alumni networks, or simply by reaching out to someone whose path you admire.</p>
        <p>As you grow, remember to become that mentor for someone else — Black excellence in this field is sustained by each generation reaching back for the next.</p>
        <p class="topic-prompt">Reflect &amp; discuss: Who is one person you'd love to ask to be a mentor — what would you say to them?</p>`
      }
    ]
  }
};

const HOME_ROWS = {
  row1: { moduleId: 1, mode: "topics" },
  row2: { moduleId: 2, mode: "topics" },
  row3: { moduleIds: [3, 4], mode: "modules" }
};

const RESOURCES_ROW = { moduleIds: [5, 6, 7, 8, 9, 10, 11], mode: "modules" };
const CULTURE_ROW = { moduleIds: [12, 13, 14], mode: "modules" };
