import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/_sanidhyy",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flutter",
    image: "flutter.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Spring.js",
    image: "springboot.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel.js",
    image: "laravel1.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Sistem Klasifikasi Sentimen Berita PTPN IV Regional III (N2G)",
    description:
      "A web-based news sentiment analysis system that automatically classifies positive, neutral, and negative news related to PTPN IV Regional III using the IndoBERT model, featuring automated news scraping and an interactive monitoring dashboard.",
    images: [
      "/projects/N2G/N2G-1.png",
      "/projects/N2G/N2G-6.png",
      "/projects/N2G/N2G-4.png",
      "/projects/N2G/N2G-3.png",
      "/projects/N2G/N2G-2.png",
      "/projects/N2G/N2G-5.png",
    ],
    link: "https://example.com",
    tech: ["Flask", "Next.js", "Tailwind CSS", "MySQL", "IndoBERT"],
  },
  {
    title: "PPDB MA Al-Muhsinin",
    description:
      "A web-based student admission management system for MA Al-Muhsinin that streamlines online registration, document submission, applicant verification, and administrative management through a responsive and user-friendly dashboard.",
    images: [
      "/projects/Ma Al-Muhsinin/ma-almuhsinin-1.png",
      "/projects/Ma Al-Muhsinin/ma-almuhsinin-2.png",
      "/projects/Ma Al-Muhsinin/ma-almuhsinin-3.png",
      "/projects/Ma Al-Muhsinin/ma-almuhsinin-4.png",
      "/projects/Ma Al-Muhsinin/ma-almuhsinin-5.png",
    ],
    link: "https://example.com",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Sistem Informasi Puskesmas Rokan IV Koto",
    description:
      "A web-based healthcare information system designed for Puskesmas Rokan IV Koto, featuring patient management, doctor scheduling, medical records, service administration, and an interactive dashboard to support efficient healthcare operations.",
    images: [
      "/projects/Puskesmas Rokan IV Koto/Puskesmas Rokan IV Koto 1.png",
      "/projects/Puskesmas Rokan IV Koto/Puskesmas Rokan IV Koto 5.png",
      "/projects/Puskesmas Rokan IV Koto/Puskesmas Rokan IV Koto 6.png",
      "/projects/Puskesmas Rokan IV Koto/Puskesmas Rokan IV Koto 3.png",
      "/projects/Puskesmas Rokan IV Koto/Puskesmas Rokan IV Koto 7.png",
      "/projects/Puskesmas Rokan IV Koto/Puskesmas Rokan IV Koto 2.png",
      "/projects/Puskesmas Rokan IV Koto/Puskesmas Rokan IV Koto 4.png",
    ],
    link: "https://example.com",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Sistem Informasi Bimbel Setia Aqidah",
    description:
      "A web-based tutoring management system designed for Bimbel Setia Aqidah, featuring student management, teacher management, class scheduling, attendance tracking, and an administrative dashboard to support efficient academic operations.",
    images: [
      "/projects/Simbelsah/Simbelsah-1.png",
      "/projects/Simbelsah/Simbelsah-2.png",
      "/projects/Simbelsah/Simbelsah-3.png",
      "/projects/Simbelsah/Simbelsah-4.png",
      "/projects/Simbelsah/Simbelsah-5.png",
      "/projects/Simbelsah/Simbelsah-6.png",
      "/projects/Simbelsah/Simbelsah-7.png",
    ],
    link: "https://example.com",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Web Profil Desa",
    description:
      "A web-based village profile and information system that provides public access to village news, government structure, population information, development programs, and community services through a responsive and user-friendly interface.",
    images: [
      "/projects/Web Desa/Web Desa-1.png",
      "/projects/Web Desa/Web Desa-2.png",
      "/projects/Web Desa/Web Desa-3.png",
      "/projects/Web Desa/Web Desa-4.png",
    ],
    link: "https://example.com",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/_sanidhyy",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/DIKI-WAHYUDI-2/portofolio",
};
