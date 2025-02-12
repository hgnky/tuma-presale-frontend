import { PartnerPlaceholder, FounderPlaceholder } from "resources/Images"
import {
  LoganJackson,
  RocilFortune,
  RussiaNguimbi,
} from "resources/Images/Avatars"
import { SiGithub, SiFacebook, SiTwitter, SiTelegram } from "react-icons/si"

export const AppRoutes = {
  HOME: "/",
  PRESALE: "/presale",
  // NFT: "/nft",
  // WALLET: "/wallet",
  // DOCS: "/docs",
  FAQS: "/faqs",
  NOT_FOUND: "*",
  COMING_SOON: "/coming-soon",
}

export const SocialItemContents = [
  {
    link: "https://www.facebook.com/TumaToken",
    icon: <SiFacebook />,
  },
  {
    link: "https://twitter.com/TokenTuma",
    icon: <SiTwitter />,
  },
  {
    link: "https://t.me/tumatoken_official",
    icon: <SiTelegram />,
  },
]

export const RoadmapItemContents = {
  2022: [
    [
      {
        achieved: true,
        content: "Development of Tuma Concept and Validation",
      },
      { achieved: true, content: "Tuma Whitepaper" },
      {
        content: "Development of the team & Partners",
      },
    ],
    [
      {
        content: "Creation of Tuma Token",
      },
      {
        content: "Pre-sale of Tuma Token",
      },
      {
        content: "DEX Listing",
      },
    ],
    [
      {
        content: "Design of the Tuma platform",
      },
      {
        content: "Creation of Tuma Wallet",
      },
    ],
    [
      {
        content: "Listing on Coinmarketcap & Coingecko",
      },
      { content: "Creation of the digital currency FCFA" },
    ],
  ],
  2023: [
    [
      {
        content: "Project deployment in French-Speaking Africa",
      },
      {
        content: "Wallet deployment in French-Speaking Africa",
      },
      {
        content: "Marketing and communication campaign",
      },
    ],
    [
      {
        content: "Initial offer of a participation pool",
      },
      {
        content: "Concept NFT",
      },
      {
        content: "Start building the NFT platform",
      },
      {
        content: "Limited NFT sales",
      },
      {
        content:
          "Proposal for the use of the NFT system in the administration of different African countries",
      },
    ],
    [
      {
        content: "Expansion of the Company's vision",
      },
    ],
  ],
}

export const AboutItemContents = [
  {
    title: "What is TUMA",
    content:
      "Tuma Inc is a company, a digital token, and wallet designed for payments. An asset based on Blockchain Technology of Binance Smart Chain, without permission, semi-decentralized that can adjust transactions in 2 to 10 minutes.",
  },
  {
    title: "How it works",
    content:
      "Send cash to Francophone Africa directly at home without moving and at the low cost of 1.5%, thanks to our Wallet Tuma do not stress you to send money to your children abroad with his franc CFA electronics. You could link your Money service to the platform and transfer your CFA franc into the wallet and transfer it to your loved ones at a fee of 1.5%. Access the world of currency crypto for the first time directly with the Fiat XOF with a CFA / TMA, TMA / BNB pair at extremely low expense. For the first time in French-speaking Africa.",
  },
  {
    title: "Our Mission",
    content:
      "Make Africa the first cashless and cryptoless continent. In a continent where more than the majority of the population does not have a bank account and a large majority of people do not have a high level of financial education. Tuma offers a network of financial services with no account management fees and a 1.5% shipping fee across Africa.",
  },
]

export const TokenomicsItemContents = [
  {
    title: "Team",
    percentage: 10,
  },
  {
    title: "Presale",
    percentage: 25,
  },
  {
    title: "LP on DEX",
    percentage: 12,
  },
  {
    title: "CEX Listing",
    percentage: 23,
  },
  {
    title: "Wallet",
    percentage: 30,
  },
]

export const TeamItemContents = [
  {
    image: RocilFortune,
    name: "Rocil Fortuné A MALANDA",
    role: "Founder, TUMA Inc.",
    social: {
      link: "",
      icon: <SiGithub />,
    },
  },
  {
    image: LoganJackson,
    name: "Logan Jackson",
    role: "Head of Development and Programming",
    social: {
      link: "https://github.com/CoryITpro",
      icon: <SiGithub />,
    },
  },
  {
    image: RussiaNguimbi,
    name: "Russia Nguimbi",
    role: "Chief Financial Officer",
    social: {
      link: "",
      icon: <SiGithub />,
    },
  },
]

export const HireItemContents = [
  {
    location: "Port McKayla",
    role: "Programme Manager",
    link: "",
  },
  {
    location: "North Lesley",
    role: "Development Operations Engineer - Platform Team (Q-Branch)",
    link: "",
  },
  {
    location: "Port McKayla",
    role: "Paid Acquisition Manager",
    link: "",
  },
  {
    location: "West Bernadette",
    role: "Data Science Analyst",
    link: "",
  },
]

export const PartnerItemContents = [
  {
    image: PartnerPlaceholder,
    name: "Riot Rebellion",
    location: "Faroe Islands",
  },
  {
    image: PartnerPlaceholder,
    name: "Wyre",
    location: "Portugal",
  },
  {
    image: PartnerPlaceholder,
    name: "Pitchfork",
    location: "Montenegro",
  },
  {
    image: PartnerPlaceholder,
    name: "Payers",
    location: "Myanmar",
  },
  {
    image: PartnerPlaceholder,
    name: "Creative",
    location: "Saint Vincent and the Grenadines",
  },
]

export const FAQItemContents = [
  {
    question: "What is Tuma Inc?",
    answer:
      "Tuma Inc is a new finance company that aims to democratize finance making it accessible to everyone.",
  },
  {
    question: "Why the Tuma token?",
    answer:
      "The Tuma token will facilitate transactions at the cryptocurrency level at low fees given the context of rising costs in Africa at the level of this market.",
  },
  {
    question: "Who is the founder?",
    answer:
      "The Founder of the project is Rocil Fortuné MALANDA, an entrepreneur and investor in the financial markets.",
  },
  {
    question: "How to reach to the founder?",
    answer: "Contact Rocil on Rocilf@yahoo.com.",
  },
  {
    question: "Is Tuma a SCAM?",
    answer:
      "Tuma Inc is a company with a big plan and very serious goals for the African continent. Our team will always be at your disposal for any questions and will communicate on the financial statements and updates concerning the project.",
  },
]
