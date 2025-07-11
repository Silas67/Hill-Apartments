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
import img6 from "@/components/assets/Images/img18.jpg";
import img7 from "@/components/assets/Images/img16.jpg";
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

export const slides = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img1 },
];

export const Btns = [
  { icon: <FaFacebook /> },
  { icon: <FaInstagram /> },
  { icon: <FaTwitter /> },
  { icon: <FiMail /> },
  { icon: <FaLinkedin /> },
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
  },
  {
    img: img7,
    label: "Ultra",
  },
  {
    img: img6,
    label: "3rd Party Sale",
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
    price: "N17,000,000",
    beds: 3,
    bath: 2,
    mesuare: 120 ^ 2,
    location: "Guwzape Estate, Gwuzape",
    tag: "Rent",
  },
  {
    img: img9,
    title: "Single Apartment",
    price: "N5,000,000",
    beds: 1,
    bath: 1,
    mesuare: 100 ^ 2,
    location: "Aguyi Ironsi Estate, Wuse",
    tag: "Rent",
  },
  {
    img: img10,
    title: "3-Bedroom Bungalow",
    price: "N27,000,000",
    beds: 3,
    bath: 3,
    mesuare: 220 ^ 2,
    location: "Suniville Estate, Galadima",
    tag: "rent",
  },
  {
    img: img11,
    title: "4-Bedroom Duplex",
    price: "N32,000,000",
    beds: 4,
    bath: 4,
    mesuare: 400 ^ 2,
    location: "Ademola Street, Wuse",
    tag: "Buy",
  },
  {
    img: img12,
    title: "2-Bedroom Bungalow",
    price: "N15,000,000",
    beds: 2,
    bath: 1,
    mesuare: 150 ^ 2,
    location: "2 Florence Street, Apo",
    tag: "Rent",
  },
  {
    img: img13,
    title: "3-Bedroom Bungalow",
    price: "N20,000,000",
    beds: 3,
    bath: 3,
    mesuare: 200 ^ 2,
    location: "Hills Estate, Apo",
    tag: "rent",
  },
  {
    img: img14,
    title: "3-Bedroom Duplex",
    price: "N23,000,000",
    beds: 3,
    bath: 2,
    mesuare: 250 ^ 2,
    location: "Davison Street, Gudu",
    tag: "Buy",
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
    title: "Some text",
  },
  {
    id: 2,
    img: img16,
    title: "Some text",
  },
  {
    id: 3,
    img: img17,
    title: "Some text",
  },
];

export const footerLinks = [
  {
    heading: "Company",
    link: [
      { name: "Our Mission", href: "/about" },
      { name: "Our Story ", href: "/about" },
      { name: " Serivices", href: "/products" },
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
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas dignissimos aspernatur voluptatum, reiciendis tempore",
  },
  {
    icon: <FaRegEye />,
    title: "Vision",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas dignissimos aspernatur voluptatum, reiciendis tempore",
  },
  {
    icon: <FaCompass />,
    title: "Our Core Values",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas dignissimos aspernatur voluptatum, reiciendis tempore",
  },
];

export const blogs = [
  {
    title: "Top 5 Mistakes First-Time Homebuyers Make",
    slug: "live-sustainably",
    excerpt:
      "Buying your first home is exciting, but it can also be overwhelming. In this post, we highlight the most common mistakes new buyers make—and how to avoid them.",
    image: img7,
  },

  {
    title: "Why Location Still Matters in Real Estate",
    slug: "green-energy",
    excerpt:
      "You’ve heard it before: “location, location, location.” This article explores why a great location can be more valuable than features or finishes.",
    image: img8,
  },

  {
    title: "How to Prepare Your Home for Sale",
    slug: "live-sustainably",
    excerpt:
      "Selling a house? Small improvements can make a big difference. Learn what to fix, stage, and declutter to attract the best offers.",
    image: img9,
  },

  {
    title: "What to Expect During the Home Inspection Process",
    slug: "green-energy",
    excerpt:
      "Inspections can be nerve-wracking—but they don’t have to be. Here’s what happens during a home inspection and how to prepare for it.",
    image: img5,
  },

  {
    title: "Understanding Real Estate Investment for Beginners",
    slug: "live-sustainably",
    excerpt:
      "Thinking about investing in property? This guide breaks down the basics—types of real estate investments, expected returns, and risks.",
    image: img3,
  },

  {
    title: "The Pros and Cons of Buying vs. Renting",
    slug: "green-energy",
    excerpt:
      "Not sure if you should buy or rent your next home? We compare both options to help you make the best decision for your lifestyle and finances.",
    image: img13,
  },

  {
    title: "Top Neighborhoods to Watch in Abuja",
    slug: "live-sustainably",
    excerpt:
      "From rising property values to lifestyle perks, these are the neighborhoods gaining attention in the real estate world this year.",
    image: img6,
  },

  {
    title: "How the Real Estate Market Is Changing in 2025",
    slug: "green-energy",
    excerpt:
      "Stay ahead of the curve. This post explores trends shaping the 2025 housing market, including interest rates, demand shifts, and buyer behavior.",
    image: img10,
  },
];

export const servicesfull = [
  {
    heading: "Home Buying Consultation & Support",
    title:
      "At HillsApartments, we understand that purchasing a home—especially your first—is a life-changing decision. Our team provides personalized consultation, neighborhood guidance, property tours, and seamless negotiation support to help first-time buyers and growing families find their perfect home with confidence and peace of mind.",
  },
  {
    heading: "Property Sales & Marketing",
    title:
      "Looking to sell your property? HillsApartments combines market intelligence, professional staging advice, and digital marketing strategies to attract the right buyers. We make the selling process efficient, profitable, and hassle-free—so you get the best value for your property without stress.",
  },
  {
    heading: " Investment & Portfolio Management",
    title:
      "HillsApartments offers strategic investment services for seasoned investors and aspiring landlords. From identifying high-yield opportunities to managing multi-unit portfolios, we help you build long-term wealth through smart, data-driven decisions in the ever-evolving real estate market.",
  },
  {
    heading: " Property Management Services",
    title:
      "Our full-service property management takes the hassle out of ownership. We handle tenant screening, rent collection, maintenance, and inspections—ensuring your investment is well-maintained and continuously profitable, so you can focus on your next opportunity.",
  },
];
