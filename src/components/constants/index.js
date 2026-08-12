import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi2";
import { IoPerson } from "react-icons/io5";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { Icon } from "@iconify/react/dist/iconify.js";
import img1 from "@/components/assets/Images/img1.jpg";
import img2 from "@/components/assets/Images/img15.jpg";
import img3 from "@/components/assets/Images/img2.jpg";
import img4 from "@/components/assets/Images/img16.jpg";
import img5 from "@/components/assets/Images/img22.jpg";
import img6 from "@/components/assets/Images/img24.jpeg";
import img7 from "@/components/assets/Images/img23.jpeg";
import img8 from "@/components/assets/Images/img13.jpg";
import img9 from "@/components/assets/Images/img9.jpg";
import img10 from "@/components/assets/Images/img3.jpg";
import img11 from "@/components/assets/Images/img6.jpg";
import img12 from "@/components/assets/Images/img7.jpg";
import img13 from "@/components/assets/Images/img17.jpg";
import img14 from "@/components/assets/Images/img19.jpg";
import img15 from "@/components/assets/Images/img25.jpg";
import img16 from "@/components/assets/Images/img26.jpg";
import img17 from "@/components/assets/Images/about1.jpg";
import img21 from "@/components/assets/Images/img21.jpg";
import heroImg from "@/components/assets/Images/img22.jpeg";

// Primary navigation, shared by the desktop header and the mobile drawer so
// the two can never drift apart. The drawer adds Home and Contact around it.
export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
];

// ---------------------------------------------------------------------------
// HOMEPAGE HERO SLIDER
//
// Each entry is one full-screen slide. To announce an event, add an object with
// `kind: "event"` and a `meta` line (date, venue). Remove it afterwards and the
// slider carries on with whatever is left. A single entry renders as a static
// hero with no controls, so the section never looks broken.
//
// Fields:
//   image   - imported image (required)
//   eyebrow - small uppercase line above the headline
//   title   - the headline; keep it short, it renders very large
//   meta    - optional supporting line, used for event date/venue
//   cta     - { label, href }
//   kind    - "event" adds an accent marker; omit for a normal slide
// ---------------------------------------------------------------------------
/**
 * @type {{
 *   image: import("next/image").StaticImageData,
 *   eyebrow: string,
 *   title: string,
 *   meta?: string,
 *   kind?: "event",
 *   cta: { label: string, href: string },
 * }[]}
 */
export const heroSlides = [
  {
    image: heroImg,
    eyebrow: "Abuja & Lagos",
    title: "Where vision meets structure",
    cta: { label: "View Properties", href: "/properties" },
  },
  {
    kind: "event",
    image: img21,
    eyebrow: "Upcoming Event",
    title: "Open house weekend",
    meta: "Saturday 12 September · Gudu, Abuja · 10am – 4pm",
    cta: { label: "Reserve a viewing", href: "/contact" },
  },
  {
    image: img15,
    eyebrow: "Now Selling",
    title: "Serviced plots, ready to build",
    meta: "Roads, drainage and power already in place.",
    cta: { label: "See available plots", href: "/properties" },
  },
];

export const slides = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img1 },
];

export const Btns = [
  {
    icon: <FaFacebook />,
    label: "Facebook",
    href: "https://facebook.com/ogwinnershomes",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://instagram.com/ogwinnershomes",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter",
    href: "https://twitter.com/ogwinnershomes",
  },
  { icon: <FiMail />, label: "Email us", href: "mailto:info@ogwinners.com" },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://linkedin.com/company/ogwinnershomes",
  },
];

export const achievementsList = [
  { prefix: "", value: "150", postfix: "+", metric: "Clients" },
  { prefix: "", value: "200", postfix: "M", metric: "Revenue" },
  { prefix: "", value: "100", postfix: "+", metric: "Workers" },
  { prefix: "", value: "250", postfix: "+", metric: "Properties" },
];

export const property = [
  {
    img: img5,
    label: "Sites & Services",
    text: "Serviced plots in planned estates, with roads, drainage and power already in place — ready for you to build on.",
  },
  {
    img: img7,
    label: "Ultra",
    text: "Our premium collection of luxury homes and penthouses, finished to the highest standard in the city's best addresses.",
  },
  {
    img: img6,
    label: "3rd Party Sale",
    text: "Verified listings from trusted private owners, with every title document checked by our team before it reaches you.",
  },
];

export const achievementsList2 = [
  { prefix: <IoPerson />, value: "150", postfix: "+", metric: "Clients" },
  {
    prefix: (
      <Icon
        icon="fluent-emoji-high-contrast:office-worker"
        width="32"
        height="32"
      />
    ),
    value: "100",
    postfix: "+",
    metric: "Workers",
  },
  {
    prefix: <BiSolidBuildingHouse />,
    value: "250",
    postfix: "+",
    metric: "Properties",
  },
  {
    prefix: <Icon icon="heroicons-outline:chart-bar" />,
    value: "200",
    postfix: "M",
    metric: "Revenue",
  },
];

export const Recommended = [
  {
    img: img8,
    title: "3-Bedroom Apartment",
    price: "₦17,000,000",
    beds: 3,
    bath: 2,
    size: 120,
    location: "Guwzape Estate, Gwuzape",
    tag: "Rent",
  },
  {
    img: img9,
    title: "Single Apartment",
    price: "₦5,000,000",
    beds: 1,
    bath: 1,
    size: 100,
    location: "Aguyi Ironsi Estate, Wuse",
    tag: "Rent",
  },
  {
    img: img10,
    title: "3-Bedroom Bungalow",
    price: "₦27,000,000",
    beds: 3,
    bath: 3,
    size: 220,
    location: "Suniville Estate, Galadima",
    tag: "rent",
  },
  {
    img: img11,
    title: "4-Bedroom Duplex",
    price: "₦32,000,000",
    beds: 4,
    bath: 4,
    size: 400,
    location: "Ademola Street, Wuse",
    tag: "Buy",
  },
  {
    img: img12,
    title: "2-Bedroom Bungalow",
    price: "₦15,000,000",
    beds: 2,
    bath: 1,
    size: 150,
    location: "2 Florence Street, Apo",
    tag: "Rent",
  },
  {
    img: img13,
    title: "3-Bedroom Bungalow",
    price: "₦20,000,000",
    beds: 3,
    bath: 3,
    size: 200,
    location: "Hills Estate, Apo",
    tag: "rent",
  },
  {
    img: img14,
    title: "3-Bedroom Duplex",
    price: "₦23,000,000",
    beds: 3,
    bath: 2,
    size: 250,
    location: "Davison Street, Gudu",
    tag: "Buy",
  },
];

// Placeholder wording, real structure. The homepage previously rendered the
// same quote seven times by mapping over the property list — replace these
// with genuine client quotes before launch.
export const testimonials = [
  {
    quote:
      "Working with OG Winners Homes was seamless. The team understood exactly what I needed and delivered well beyond my expectations.",
    name: "Adesua O.",
    role: "Homeowner, Abuja",
  },
  {
    quote:
      "They handled every document check before I paid a naira. That kind of diligence is rare, and it is why I have bought through them twice.",
    name: "Chinedu A.",
    role: "Investor, Lagos",
  },
  {
    quote:
      "I was buying from abroad and never once felt out of the loop. Virtual tours, honest advice, and the keys waiting when I landed.",
    name: "Fatima B.",
    role: "First-time Buyer",
  },
];

export const FaQs = [
  {
    id: 1,
    Question: "How do I start the process of buying a home?",
    Answer:
      "Start by determining your budget and getting pre-approved for a mortgage. Then, connect with a trusted real estate agent who can guide you through property viewings, offers, and closing.",
  },
  {
    id: 2,
    Question: " What costs should I expect when buying a property?",
    Answer:
      "Besides the purchase price, expect additional costs such as inspection fees, closing costs, agent commissions, taxes, and potential renovation or furnishing expenses.",
  },
  {
    id: 3,
    Question: "How long does it take to close on a home?",
    Answer:
      "On average, it takes 30 to 45 days from the time your offer is accepted to officially close, depending on factors like financing and inspections.",
  },
  {
    id: 4,
    Question: "What should I look for during a property viewing?",
    Answer:
      "Look at the condition of the structure, plumbing, electrical systems, neighborhood safety, proximity to schools or work, and signs of maintenance or needed repairs.",
  },

  {
    id: 5,
    Question: "Can I buy a property if I’m not in the country?",
    Answer:
      "Yes. Many agencies offer virtual tours and remote document signing. We also assist clients living abroad in securing their dream homes or investment properties.",
  },
];

export const sidebarPosts = [
  {
    id: 1,
    img: img15,
    title: "What to Check Before You Pay a Deposit",
    excerpt:
      "Title documents, survey plans and building approvals — the three things to verify before any money changes hands.",
  },
  {
    id: 2,
    img: img16,
    title: "Rent or Buy in Abuja This Year?",
    excerpt:
      "We compare the real cost of renting against a mortgage across Wuse, Gudu and Apo to help you decide.",
  },
  {
    id: 3,
    img: img17,
    title: "How to Value a Property Correctly",
    excerpt:
      "Location, finishing and rental yield all move the number. Here is how our team arrives at a fair asking price.",
  },
];

// Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL in your hosting
// provider once the real domain is live — it drives canonical URLs, the
// sitemap, and Open Graph image paths.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hill-apartments.vercel.app";

// Single source of truth for company details — update here, not in the
// individual pages, so the footer and contact page can never disagree.
export const company = {
  name: "OG Winners Homes",
  email: "info@ogwinners.com",
  phone: "(+234) 803 283 2962",
  phoneHref: "+2348032832962",
  offices: [
    {
      label: "Abuja",
      address: "7 Sanatana Close, Wuse 2, Abuja, Nigeria.",
    },
    {
      label: "Lagos",
      address: "T19 Road 2, Lekki Gardens Phase 4, Lekki, Lagos, Nigeria.",
    },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com/ogwinnershomes" },
    { name: "Twitter", href: "https://twitter.com/ogwinnershomes" },
    { name: "LinkedIn", href: "https://linkedin.com/company/ogwinnershomes" },
  ],
};

export const footerLinks = [
  {
    heading: "Company",
    link: [
      { name: "Our Mission", href: "/about" },
      { name: "Our Story", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Support",
    link: [
      { name: "Help Center", href: "/contact" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/contact" },
    ],
  },
];

// Management team shown on the About page. The section hides itself entirely
// while this list is empty, so no "Name / Position" placeholders can ship.
// Add one entry per person: { name, role, img } — import the photo at the top
// of this file the same way the property images are imported.
/** @type {{ name: string, role: string, img?: import("next/image").StaticImageData }[]} */
export const team = [];

export const services = [
  {
    Heading: "Real Estate",
    text: "In keeping to our commitment to excellence, we bring your visions to reality, offering a complete turnkey design and construction service.",
  },
  {
    Heading: "Investment",
    text: "Create the future you desire today. We provides a platform to invest with an expectation of generating profit.",
  },
  {
    Heading: "Consultancy",
    text: "We offers expert advice on commercial and real estate development projects from start to finish.",
  },
  {
    Heading: "Property Development",
    text: "We develop high-quality projects that meet the needs of end users with a focus on luxury and sustainability.",
  },
];

export const values = [
  {
    icon: <HiPaperAirplane />,
    title: "Mission",
    text: "To design and deliver exceptional living spaces that blend functionality, elegance, and sustainability — enriching lives and elevating everyday experiences.",
  },
  {
    icon: <FaRegEye />,
    title: "Vision",
    text: "To become a leading force in real estate innovation, redefining urban and residential living across Africa by creating timeless spaces that adapt to evolving lifestyles.",
  },
  {
    icon: <FaCompass />,
    title: "Our Core Values",
    text: "At OG Winners Homes, we value integrity, innovation, excellence, and sustainability — building with purpose, passion, and people in mind.",
  },
];

// Blog posts. `slug` drives /blog/[slug] and must stay unique - the previous
// data reused two slugs across all eight posts, which would collide as routes.
// `body` is a list of blocks so an article can mix prose, headings and lists
// without needing a markdown pipeline.
export const blogs = [
  {
    slug: "first-time-homebuyer-mistakes",
    title: "Top 5 Mistakes First-Time Homebuyers Make",
    category: "Buying",
    date: "2026-02-11",
    readTime: "6 min read",
    excerpt:
      "Buying your first home is exciting, but it can also be overwhelming. Here are the mistakes we see most often — and how to avoid them.",
    image: img7,
    body: [
      {
        p: "Almost every first-time buyer we meet is working with the same information: advice from family, a few listings seen online, and a rough sense of what they can afford. That is usually enough to start, but it is rarely enough to finish well. The mistakes below are the ones that cost buyers the most money and the most time.",
      },
      { h: "1. Shopping before knowing your real budget" },
      {
        p: "The asking price is not what a property costs you. Legal fees, agency commission, survey and search fees, consent fees and stamp duty routinely add ten to fifteen percent on top. Buyers who skip this arithmetic find an ideal home, commit emotionally, and then discover they are short at exactly the moment they have the least room to negotiate.",
      },
      {
        p: "Work out your all-in number before you view anything. If a mortgage is involved, get a decision in principle first — it also makes your offer far more credible to a seller.",
      },
      { h: "2. Treating documents as a formality" },
      {
        p: "This is the single most expensive mistake in the Nigerian market. A beautiful finish tells you nothing about whether the seller can legally transfer the land to you.",
      },
      {
        list: [
          "Confirm the title — Certificate of Occupancy, Governor’s Consent or a registered deed.",
          "Check the survey plan against the physical boundaries on site.",
          "Run a search at the state land registry before any deposit changes hands.",
          "Ask whether the land falls under government acquisition or a committed development scheme.",
        ],
      },
      { h: "3. Underestimating the neighbourhood" },
      {
        p: "You are not only buying a building. You are buying a commute, a water supply, a power situation and a set of neighbours. Visit at different times of day — a street that is calm on a Sunday afternoon can be very different on a Monday morning.",
      },
      { h: "4. Skipping the inspection to save money" },
      {
        p: "An inspection costs a fraction of one percent of the purchase price and regularly uncovers problems worth many times that. Roofing, damp, drainage and electrical faults are all far cheaper to negotiate before you own them.",
      },
      { h: "5. Rushing because someone told you to" },
      {
        quote:
          "Urgency is the oldest pressure tactic in property. A genuinely good deal survives a week of due diligence.",
      },
      {
        p: "If a seller or agent will not allow time for basic checks, that is information about the deal rather than about the market. Walk away and keep looking.",
      },
    ],
  },
  {
    slug: "why-location-still-matters",
    title: "Why Location Still Matters in Real Estate",
    category: "Market",
    date: "2026-01-28",
    readTime: "5 min read",
    excerpt:
      "You have heard it before: location, location, location. Here is why a good location still beats features or finishes.",
    image: img8,
    body: [
      {
        p: "You can renovate a kitchen. You can replace a roof, repaint every wall and change the entire layout. What you cannot change is where the building stands. That asymmetry is the whole reason location dominates every other factor in property value.",
      },
      { h: "What location actually means" },
      {
        p: "Location is not simply a fashionable address. It is a bundle of practical things that determine how pleasant a home is to live in and how easy it will be to sell later.",
      },
      {
        list: [
          "Time and cost of the daily commute.",
          "Reliability of power, water and drainage.",
          "Proximity to schools, healthcare and markets.",
          "Security, street lighting and an active residents’ association.",
          "Planned infrastructure — a new road can reshape a district within a few years.",
        ],
      },
      { h: "Finishes depreciate, position does not" },
      {
        p: "A premium finish is at its most valuable the day it is installed. From then on it dates. Position works the other way: as an area matures and infrastructure arrives, the ground the building sits on tends to appreciate. Buyers who stretch for a better street in a smaller property usually do better over ten years than those who buy more square metres further out.",
      },
      { h: "The exception worth knowing" },
      {
        p: "Location dominates, but it is not infinite. Paying far above the ceiling price for a street rarely recovers, however good the address. Look at what comparable homes on the same road have actually sold for and treat that as your upper bound.",
      },
    ],
  },
  {
    slug: "prepare-your-home-for-sale",
    title: "How to Prepare Your Home for Sale",
    category: "Selling",
    date: "2026-01-14",
    readTime: "5 min read",
    excerpt:
      "Small improvements make a large difference. What to fix, stage and declutter to attract the best offers.",
    image: img9,
    body: [
      {
        p: "Most sellers either do too much or too little. Too little, and the property reads as neglected. Too much, and money goes into work that no buyer will pay for. The aim is to remove reasons to say no, not to renovate.",
      },
      { h: "Start with the paperwork" },
      {
        p: "Before a single photograph is taken, gather your title document, survey plan, approved building plan and receipts for any major work. Sellers who have documents ready close faster and hold firmer on price, because a buyer’s biggest fear is already answered.",
      },
      { h: "Fix the cheap things that read as expensive" },
      {
        list: [
          "Every door and window should open and close cleanly.",
          "No dripping taps, no running cisterns, no slow drains.",
          "Every light fitting works and every bulb matches in colour temperature.",
          "Touch up paint where it is scuffed rather than repainting throughout.",
          "Clear gutters and cut back anything overgrown at the entrance.",
        ],
      },
      { h: "Declutter harder than feels comfortable" },
      {
        p: "Buyers are trying to imagine their life in the space, which is difficult when yours is still filling it. Clear surfaces, thin out furniture until rooms feel generous, and remove personal photographs. The goal is a home that feels cared for and available, not staged into anonymity.",
      },
      { h: "Get the photographs right" },
      {
        p: "The listing photograph decides whether anyone views at all. Shoot in daylight, open every curtain, turn the lights on anyway, and lead with the strongest room rather than the hallway.",
      },
      {
        quote:
          "Price attracts the market. Presentation decides who makes an offer, and how confident that offer is.",
      },
    ],
  },
  {
    slug: "home-inspection-process",
    title: "What to Expect During the Home Inspection Process",
    category: "Buying",
    date: "2025-12-19",
    readTime: "4 min read",
    excerpt:
      "Inspections can feel nerve-wracking. Here is what actually happens, and how to prepare for it.",
    image: img5,
    body: [
      {
        p: "An inspection is not a test the house passes or fails. It is a survey of condition that tells you what you are taking on, what it will cost, and what is worth renegotiating.",
      },
      { h: "What gets checked" },
      {
        list: [
          "Structure — foundations, walls, visible cracking and any settlement.",
          "Roof — covering, flashing, drainage and evidence of past leaks.",
          "Plumbing — pressure, leaks, water storage and waste runs.",
          "Electrical — distribution board, earthing, socket condition and obvious overloading.",
          "Damp and ventilation, particularly in bathrooms and ground-floor rooms.",
        ],
      },
      { h: "How long it takes" },
      {
        p: "A standard three-bedroom property takes two to three hours. Attend if you can. A written report is useful, but standing in the room while an inspector explains what they are looking at is worth considerably more.",
      },
      { h: "Reading the report sensibly" },
      {
        p: "Every report contains findings. The question is which ones matter. Separate them into three groups: safety issues that must be resolved before you move in, significant costs worth renegotiating, and ordinary maintenance you would expect on any building of that age.",
      },
      {
        p: "Bring quotes to the negotiation rather than opinions. A seller will argue with a complaint but rarely with a builder’s estimate.",
      },
    ],
  },
  {
    slug: "real-estate-investment-for-beginners",
    title: "Understanding Real Estate Investment for Beginners",
    category: "Investing",
    date: "2025-12-02",
    readTime: "7 min read",
    excerpt:
      "Thinking about investing in property? A plain guide to the types, the returns and the risks.",
    image: img3,
    body: [
      {
        p: "Property rewards patience more than cleverness. Most investors who do well simply bought something sensible, held it, and did not panic. What follows is the groundwork that makes that possible.",
      },
      { h: "The main routes in" },
      {
        list: [
          "Buy-to-let — a finished property let to tenants for recurring income.",
          "Land banking — buying serviced land and holding it while the area develops.",
          "Off-plan — purchasing during construction at a lower entry price, with higher completion risk.",
          "Short-let — furnished lettings at higher nightly rates, with far more active management.",
        ],
      },
      { h: "Judging a deal on numbers, not feel" },
      {
        p: "Rental yield is annual rent divided by total purchase cost, expressed as a percentage. Use total cost, including fees and any immediate work — not the headline price. Then subtract the running costs everyone forgets: management, maintenance, service charges, insurance and void periods when no one is paying rent.",
      },
      {
        quote:
          "A property that yields eight percent on paper and six percent in reality is still a reasonable investment. One you never modelled at all is a guess.",
      },
      { h: "The risks worth respecting" },
      {
        p: "Property is illiquid. You cannot sell a third of a house because you need cash this month. Values can stall for years. Tenants default. Off-plan developments are delivered late, and occasionally not at all.",
      },
      {
        p: "None of this argues against investing. It argues for buying within your means, keeping a reserve for repairs and voids, and verifying the developer’s track record before any off-plan commitment.",
      },
      { h: "A reasonable first step" },
      {
        p: "Start with one property in an area you genuinely know, ideally one you could live in yourself if the tenancy plan fell through. Learn the operating side on a single asset before adding a second.",
      },
    ],
  },
  {
    slug: "buying-versus-renting",
    title: "The Pros and Cons of Buying vs. Renting",
    category: "Guides",
    date: "2025-11-18",
    readTime: "5 min read",
    excerpt:
      "Not sure whether to buy or rent your next home? We compare both against lifestyle and finances.",
    image: img13,
    body: [
      {
        p: "There is no universally correct answer, and anyone who gives you one is selling something. The honest answer depends on how long you intend to stay, how stable your income is, and how much flexibility is worth to you.",
      },
      { h: "The case for renting" },
      {
        list: [
          "Flexibility — you can move at the end of a tenancy without selling.",
          "Lower entry cost, with no legal fees, consent fees or stamp duty.",
          "Repairs and structural maintenance are the landlord’s responsibility.",
          "Capital stays liquid and available for other opportunities.",
        ],
      },
      { h: "The case for buying" },
      {
        list: [
          "Payments build equity rather than disappearing.",
          "Housing costs become predictable rather than subject to annual review.",
          "You can renovate, extend and decide who lives there.",
          "Any appreciation accrues to you.",
        ],
      },
      { h: "The question that usually settles it" },
      {
        p: "How long will you stay? Buying carries significant one-off transaction costs at both ends. Over two or three years those costs often exceed the equity built, and renting wins. Over seven to ten years, ownership almost always comes out ahead.",
      },
      {
        p: "Be honest about income stability too. A mortgage is a fixed obligation that does not adjust when circumstances do.",
      },
    ],
  },
  {
    slug: "abuja-neighbourhoods-to-watch",
    title: "Top Neighbourhoods to Watch in Abuja",
    category: "Market",
    date: "2025-11-04",
    readTime: "6 min read",
    excerpt:
      "From rising values to lifestyle perks, these are the districts gaining attention this year.",
    image: img6,
    body: [
      {
        p: "Abuja does not appreciate uniformly. Value tends to follow infrastructure, and infrastructure follows plan approvals — which means the districts worth watching are usually visible well before prices move.",
      },
      { h: "What we look at" },
      {
        list: [
          "Road access and how far along the approved network actually is.",
          "Power and water provision, and whether the estate supplements them.",
          "Density of completed, occupied homes rather than fenced empty plots.",
          "Distance to established commercial centres.",
          "Clarity of title across the district.",
        ],
      },
      { h: "Established and steady" },
      {
        p: "Wuse 2, Maitama and Asokoro remain the reliable end of the market. Entry prices are high and yields comparatively modest, but demand is consistent and resale is rarely difficult. These are capital-preservation locations rather than growth plays.",
      },
      { h: "The growth belt" },
      {
        p: "Gudu, Apo, Galadimawa and Lokogoma have absorbed much of the middle-market demand pushed out of the centre. Infrastructure has largely caught up, occupancy is genuine, and pricing still leaves room. For most buyers balancing budget against convenience, this is the most interesting band.",
      },
      { h: "Earlier, and higher risk" },
      {
        p: "Districts further out along the expressways offer the lowest entry prices and the widest range of outcomes. Some will mature quickly. Others will wait a decade for a road that has been approved for years. Buy here only with verified title and a genuinely long horizon.",
      },
      {
        quote:
          "The cheapest plot in a district with no water and no road is not a bargain. It is a bet on a timetable you do not control.",
      },
    ],
  },
  {
    slug: "market-outlook",
    title: "How the Real Estate Market Is Changing",
    category: "Market",
    date: "2025-10-21",
    readTime: "5 min read",
    excerpt:
      "Trends shaping the housing market, including financing conditions, demand shifts and buyer behaviour.",
    image: img10,
    body: [
      {
        p: "Three forces are doing most of the work in the current market: the cost of financing, the cost of building, and a steady shift in what buyers actually want from a home.",
      },
      { h: "Financing is the constraint" },
      {
        p: "When borrowing is expensive, the pool of mortgage-dependent buyers narrows and transactions increasingly happen in cash or in structured payments directly with developers. Sellers who price for the market of two years ago sit unsold, and the gap between asking and achieved prices widens.",
      },
      { h: "Construction costs have reset expectations" },
      {
        p: "Materials and labour have risen sharply enough that replacement cost now underpins pricing on quality stock. This is part of why well-built existing homes have held value better than the headline mood suggests — building the equivalent today would cost more.",
      },
      { h: "What buyers are asking for" },
      {
        list: [
          "Independent power and water, treated as standard rather than a luxury.",
          "A dedicated room that works for remote work.",
          "Genuinely managed estates with functioning security and refuse collection.",
          "Smaller, better-finished homes in preference to larger, rougher ones.",
        ],
      },
      { h: "What it means practically" },
      {
        p: "For buyers, negotiating room has returned, particularly on properties that have been listed for a while. For sellers, presentation and complete documentation matter more than they did in a faster market. For investors, income stability is worth more than speculative appreciation right now.",
      },
    ],
  },
];

export const servicesfull = [
  {
    heading: "Home Buying Consultation & Support",
    title:
      "At OG Winners Homes, we understand that purchasing a home—especially your first—is a life-changing decision. Our team provides personalized consultation, neighborhood guidance, property tours, and seamless negotiation support to help first-time buyers and growing families find their perfect home with confidence and peace of mind.",
  },
  {
    heading: "Property Sales & Marketing",
    title:
      "Looking to sell your property? OG Winners Homes combines market intelligence, professional staging advice, and digital marketing strategies to attract the right buyers. We make the selling process efficient, profitable, and hassle-free—so you get the best value for your property without stress.",
  },
  {
    heading: " Investment & Portfolio Management",
    title:
      "OG Winners Homes offers strategic investment services for seasoned investors and aspiring landlords. From identifying high-yield opportunities to managing multi-unit portfolios, we help you build long-term wealth through smart, data-driven decisions in the ever-evolving real estate market.",
  },
  {
    heading: " Property Management Services",
    title:
      "Our full-service property management takes the hassle out of ownership. We handle tenant screening, rent collection, maintenance, and inspections—ensuring your investment is well-maintained and continuously profitable, so you can focus on your next opportunity.",
  },
];
