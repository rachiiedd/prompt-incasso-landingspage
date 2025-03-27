import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Prompt Incasso",
  description: "Incasseer sneller en zonder kosten met Prompt Incasso.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS"],
  links: {
    email: "info@promptincasso.nl",
    twitter: "https://twitter.com/magicuidesign",
    discord: "https://discord.gg/87p2vpsat5",
    github: "https://github.com/magicuidesign/magicui",
    instagram: "https://instagram.com/magicuidesign/",
  },
  header: [
    {
      href: "/#voordelen",
      label: "Voordelen"
    },
    {
      href: "/#hoe-het-werkt",
      label: "Hoe het werkt"
    },
    {
      href: "/#ambassadeursprogramma",
      label: "Ambassadeursprogramma",
    },
    {
      href: "/#contact",
      label: "Contact",
    },
  ],
  pricing: [
    {
      name: "BASIC",
      href: "#",
      price: "$19",
      period: "month",
      yearlyPrice: "$16",
      features: [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$49",
      period: "month",
      yearlyPrice: "$40",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Full API Access",
        "Advanced Analytics",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$82",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Premium Support",
        "Custom Integrations",
        "AI-Powered Insights",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "Hoe werkt Prompt Incasso?",
      answer: (
        <span>
          Prompt Incasso maakt het mogelijk om je openstaande facturen snel en kosteloos te innen door het gehele incassoproces te automatiseren. Je hoeft enkel het KvK-nummer van de schuldenaar en de factuur in te voeren, en wij doen de rest.
        </span>
      ),
    },
    {
      question: "Wat zijn de kosten van het gebruik van Prompt Incasso?",
      answer: (
        <span>
        Het gebruik van Prompt Incasso is volledig gratis. Er zijn geen verborgen kosten of maandelijkse abonnementskosten. Wij verdienen alleen wanneer het incasso succesvol wordt afgerond.
        </span>
      ),
    },
    {
      question: "Is mijn data veilig bij Prompt Incasso?",
      answer: (
        <span>
         Ja, we nemen de privacy van je gegevens zeer serieus. Al je gegevens worden versleuteld en veilig opgeslagen, en we voldoen aan de geldende privacywetten en -regelgeving.
        </span>
      ),
    },
    {
      question: "Hoe snel wordt mijn factuur geïncasseerd?",
      answer: (
        <span>
De snelheid van incasso hangt af van de reactie van de schuldenaar. Wij zorgen ervoor dat het proces zo snel en efficiënt mogelijk verloopt, maar het kan enige tijd duren afhankelijk van de situatie.
        </span>
      ),
    },
    {
      question: "Wat gebeurt er als de schuldenaar niet betaalt?",
      answer: (
        <span>
          Als de schuldenaar niet betaalt, zorgen wij voor verdere juridische stappen zonder dat je extra kosten hoeft te maken. Je krijgt altijd helder inzicht in de voortgang van je incassozaken.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
