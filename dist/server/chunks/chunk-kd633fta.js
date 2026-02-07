import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useContext, createContext, useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Check, X, Menu, Github, Linkedin, Mail } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-[hsl(190,95%,55%)] to-[hsl(220,95%,60%)] text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
        heroOutline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      solutions: "Solutions",
      contact: "Contact",
      about: "About"
    },
    hero: {
      badge: "Technical Architect",
      greeting: "Hi, I'm",
      name: "Pedro Cerqueira",
      subtitle: "Software Engineer — Web Apps, Internal Business Systems, Salesforce, Headless, Headless Commerce & Multi-cloud Integrations",
      viewProjects: "View projects",
      contactMe: "Contact me"
    },
    about: {
      title: "About",
      summary: "I hold a Master's degree in Computer Engineering and have 8+ years of experience in web development. I specialize in headless commerce (PWA Kit), Salesforce B2C/B2B Commerce, Service Cloud and multi-cloud integrations. I architect and lead cross-functional teams to deliver scalable, maintainable solutions and leverage AI to improve developer productivity.",
      highlights: [
        "Headless commerce (PWA Kit, SFRA)",
        "Salesforce Core: Apex, LWC, Flows",
        "CI/CD, eCDN, performance and security",
        "AI-assisted development (GitHub Copilot, prompt engineering)"
      ],
      location: "Viana do Castelo, Portugal",
      education: "Master's degree in Computer Engineering"
    },
    contact: {
      title: "Get in touch",
      titleHighlight: "with me",
      subtitle: "Have a project in mind or want to connect? My inbox is open.",
      info: {
        email: "pmcc995@gmail.com",
        phone: "+351 913 364 268",
        location: "Viana do Castelo, Portugal",
        linkedin: "https://www.linkedin.com/in/pedro-cerqueira-80a296b7/"
      },
      successTitle: "Message sent",
      successDescription: "Thanks — I will get back to you soon.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@example.com",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Write your message...",
        sending: "Sending...",
        send: "Send message"
      },
      social: "Follow me on LinkedIn",
      available: "Available for work",
      availableDescription: "Open to new opportunities and collaborations."
    },
    portfolio: {
      title: "My",
      titleHighlight: "Projects",
      subtitle: "A selection of projects and initiatives I've worked on across headless commerce, Salesforce implementations and internal business systems.",
      projects: [
        {
          title: "Store Locator Plugin",
          description: "Development of a Store Locator Plugin for SFCC B2C PWA Kit to enhance in-store discovery and user experience.",
          image: "/storelocator.png"
        },
        {
          title: "PWA Kit Extensions",
          description: "Extended PWA Kit features for commerce clients including performance optimizations and accessibility improvements."
        },
        {
          title: "Internal Grocery Solution",
          description: "Full-stack headless grocery solution built on PWA Kit and custom integrations for inventory and ordering.",
          image: "/grocery.png"
        },
        {
          title: "Assistant Order Tool",
          description: "Tool that enables sales assistants to place orders on behalf of customers, integrating with Salesforce and commerce APIs.",
          image: "/infinity.png"
        },
        {
          title: "E-commerce Replatforming",
          description: "Led replatforming projects migrating legacy systems to modern headless architectures using React and NodeJS.",
          image: "/sarenza.png"
        },
        {
          title: "Multi-brand Retail Platform",
          description: "Architected and led full-stack development for a multi-brand retail platform with complex integrations and CI/CD pipelines.",
          image: "/continente.png"
        },
        {
          title: "E-commerce Replatforming",
          description: "Led replatforming projects migrating legacy Site-Genesis(Salesforce Commerce Cloud) to modern headless architectures using React and NodeJS(PWA Kit - Salesforce B2C Commerce Cloud).",
          image: "/vbq.png"
        }
      ],
      viewProject: "View",
      code: "Code"
    },
    profile: {
      title: "Profile",
      text: "Salesforce Technical Architect with 8+ years specializing in headless commerce, B2C/B2B Commerce and Service Cloud implementations across retail, fashion and luxury sectors. Expert in architecting multi-cloud solutions, leading teams and implementing AI-driven workflows."
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          company: "OSF Digital",
          role: "Technical Architect | Tech Lead | Full-Stack Developer",
          period: "Nov 2021 - Present",
          location: "Viana do Castelo, Portugal",
          bullets: [
            "Led architecture and full-stack development for multi-cloud Salesforce solutions (B2C/B2B Commerce & Service Cloud).",
            "Architected headless (PWA Kit) and SFRA e-commerce platforms and integrations.",
            "Developed Apex, LWC and Flows; implemented CI/CD, eCDN and production deployments.",
            "Pioneered AI-driven development workflows with Copilot and prompt engineering (60% time reduction in doc generation)."
          ]
        },
        {
          company: "Wipro",
          role: "Salesforce Technical Consultant | Developer",
          period: "Oct 2019 - Nov 2021",
          bullets: [
            "Delivered Salesforce B2C Commerce Cloud solutions and internal apps using Node.js/React/TypeScript.",
            "Built CI/CD pipelines and automated deployments; implemented GTM and analytics solutions."
          ]
        },
        {
          company: "Gestamp / West Sea / Various",
          role: "Earlier roles (Operator / Intern)",
          period: "2011 - 2019",
          bullets: ["Various technical and operator roles while studying towards engineering degrees."]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Master in Computer Engineering",
          school: "Instituto Politécnico do Cávado e do Ave (IPCA)",
          period: "2020 - 2024",
          note: "Thesis: Decentralized Bookmaker"
        },
        {
          degree: "Computer Systems Engineering (Bachelor)",
          school: "Instituto Politécnico do Cávado e do Ave (IPCA)",
          period: "2016 - 2019"
        }
      ]
    },
    certifications: {
      title: "Certifications",
      items: [
        "Salesforce Certified Data Cloud Consultant (18/06/2025)",
        "Salesforce Certified JavaScript Developer I (01/05/2021)",
        "Salesforce Certified B2C Commerce Developer (WI20)",
        "Salesforce Certified Administrator (SU19)"
      ]
    },
    technicalSnapshot: {
      title: "Technical Snapshot",
      bullets: [
        "Commerce & Salesforce: SFCC (SFRA, PWA Kit), SCAPI, Managed Runtime, Apex, LWC, Flows",
        "DevOps: CI/CD, Jenkins, Docker, Git, Gitlab/GitHub Pipelines",
        "Architecture: Microservices, REST APIs, Headless Commerce",
        "AI & Automation: GitHub Copilot, Prompt Engineering, AI API Integration",
        "Languages/Tools: React, NodeJS, TypeScript, JavaScript, Python, MySQL, PHP, GTM, eCDN"
      ]
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "B2" },
        { name: "Spanish", level: "A1" }
      ]
    },
    skills: {
      title: "Skills",
      titleHighlight: "Overview",
      subtitle: "Technologies and tools I work with.",
      list: [
        "Apex & LWC",
        "PWA Kit, SFRA, React, NodeJS",
        "CI/CD, Docker, Jenkins, GitHub Actions",
        "Microservices, REST APIs, Integrations",
        "AI-assisted development"
      ]
    },
    footer: {
      rights: "All rights reserved.",
      contactShort: "pmcc995@gmail.com"
    },
    // Solutions Page
    solutions: {
      title: "Problems &",
      titleHighlight: "Solutions",
      subtitle: "My approach to real-world technical challenges.",
      problemLabel: "The Challenge",
      approachLabel: "My Approach",
      impactLabel: "Impact",
      items: [
        {
          category: "Performance",
          title: "Web Application with Critical Load Times",
          problem: "A corporate web application had load times exceeding 8 seconds, with users abandoning the platform before completing essential tasks. The bounce rate exceeded 60%.",
          approach: "I implemented a layered optimization strategy: bundle analysis to eliminate unnecessary dependencies, component lazy loading by route, image optimization with modern formats (WebP/AVIF), and a smart caching system with selective invalidation. I restructured backend queries to reduce payload and introduced virtual pagination for extensive lists.",
          impact: "Load time reduced to 1.5s • Bounce rate dropped to 22% • Lighthouse score of 94/100"
        },
        {
          category: "SEO",
          title: "SPA Platform Invisible to Search Engines",
          problem: "A content platform built as a SPA (Single Page Application) was practically invisible to search engines. Organic traffic represented less than 5% of total traffic, and product pages were not indexed.",
          approach: "I designed a comprehensive technical SEO strategy: Server-Side Rendering (SSR) implementation for critical pages, dynamic per-page meta tags, automatic sitemap generation, structured data (JSON-LD) implementation for products and articles, and Core Web Vitals optimization. I established a pre-rendering system for static content.",
          impact: "Organic traffic grew 340% in 6 months • 95% of pages indexed • Average position rose from 47th to 8th"
        },
        {
          category: "Data Integrations",
          title: "Fragmented Enterprise Data Ecosystem",
          problem: "A company used over 12 distinct systems (ERP, CRM, e-commerce, logistics) without integration, resulting in duplicate data, inconsistencies and manual reconciliation processes consuming 30+ hours weekly.",
          approach: "I architected a centralized integration platform using an Event-Driven Architecture pattern. I designed modular connectors for each system, implemented an event bus for real-time synchronization and created a unified data lake with transformation and validation rules. I included monitoring dashboards for full data flow visibility.",
          impact: "Elimination of 95% of manual processes • 99.7% data consistency"
        },
        {
          category: "Scalability",
          title: "Monolithic API Under Growth Pressure",
          problem: "A monolithic API serving a rapidly growing application started experiencing frequent timeouts during traffic peaks. With 10x more users in 6 months, the system couldn't scale and the team struggled to deploy without downtime.",
          approach: "I conducted a strategic monolith decomposition into microservices, identifying bounded contexts and defining clear contracts between services. I implemented circuit breakers for resilience, API gateway for intelligent routing, and a blue-green deployment strategy for zero-downtime. I introduced auto-scaling based on business metrics, not just CPU.",
          impact: "Zero downtime deployments • Support for 50x more traffic • Deploy time from 45min to 3min"
        },
        {
          category: "Security",
          title: "Critical Vulnerabilities in Financial Platform",
          problem: "A security audit of a financial platform revealed critical vulnerabilities: SQL injection, predictable session tokens, absence of rate limiting and sensitive data exposed in logs. The platform processed transactions for thousands of users.",
          approach: "I implemented a defense-in-depth approach: complete query parameterization, token rotation with short-lived JWTs and secure refresh tokens, adaptive rate limiting per endpoint and user, data encryption at rest and in transit, and log sanitization. I established a CI/CD pipeline with static security analysis (SAST) and automated penetration testing.",
          impact: "Zero critical vulnerabilities in re-audit • PCI-DSS compliance achieved • Zero security incidents"
        }
      ]
    }
  },
  pt: {
    nav: {
      home: "Início",
      portfolio: "Portfólio",
      solutions: "Soluções",
      contact: "Contacto",
      about: "Sobre"
    },
    hero: {
      badge: "Arquiteto Técnico",
      greeting: "Olá, eu sou",
      name: "Pedro Cerqueira",
      subtitle: "Software Engineer — Web Apps, Software Interno de Gestão, Salesforce, Headless, Headless Commerce & Multi-cloud Integrations",
      viewProjects: "Ver projetos",
      contactMe: "Contacte-me"
    },
    about: {
      title: "Sobre",
      summary: "Possuo Mestrado em Engenharia Informática e mais de 8 anos de experiência em desenvolvimento web. Especializo-me em headless commerce (PWA Kit), Salesforce B2C/B2B Commerce, Service Cloud e integrações multi-cloud. Arquiteturo e lidero equipas multifuncionais para entregar soluções escaláveis e utilizo IA para aumentar a produtividade de desenvolvimento.",
      highlights: [
        "Headless commerce (PWA Kit, SFRA)",
        "Salesforce Core: Apex, LWC, Flows",
        "CI/CD, eCDN, performance e segurança",
        "Desenvolvimento assistido por IA (GitHub Copilot, prompt engineering)"
      ],
      location: "Viana do Castelo, Portugal",
      education: "Mestre em Engenharia Informática"
    },
    contact: {
      title: "Fale comigo",
      titleHighlight: "comigo",
      subtitle: "Tem um projeto em mente ou quer entrar em contacto? A minha caixa está aberta.",
      info: {
        email: "pmcc995@gmail.com",
        phone: "+351 913 364 268",
        location: "Viana do Castelo, Portugal",
        linkedin: "https://www.linkedin.com/in/pedro-cerqueira-80a296b7/"
      },
      successTitle: "Mensagem enviada",
      successDescription: "Obrigado — responderei em breve.",
      form: {
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "voce@exemplo.com",
        subjectPlaceholder: "Assunto",
        messagePlaceholder: "Escreva a sua mensagem...",
        sending: "Enviando...",
        send: "Enviar mensagem"
      },
      social: "Siga-me no LinkedIn",
      available: "Disponível para trabalho",
      availableDescription: "Aberto a novas oportunidades e colaborações."
    },
    portfolio: {
      title: "Meus",
      titleHighlight: "Projetos",
      subtitle: "Uma seleção de projetos e iniciativas em que trabalhei nas áreas de headless commerce, implementações Salesforce e software interno de gestão.",
      projects: [
        {
          title: "Store Locator Plugin",
          description: "Desenvolvimento de um plugin Store Locator para SFCC B2C PWA Kit para melhorar a descoberta de lojas e a experiência do utilizador.",
          image: "/storelocator.png"
        },
        {
          title: "Extensões PWA Kit",
          description: "Extensões de funcionalidades do PWA Kit para clientes de comércio, incluindo otimizações de performance e acessibilidade."
        },
        {
          title: "Solução Interna de Retail",
          description: "Solução headless full-stack para retails construída sobre PWA Kit com integrações personalizadas de inventário e encomenda.",
          image: "/grocery.png"
        },
        {
          title: "Ferramenta de Assistente de Encomendas",
          description: "Ferramenta que permite a assistentes de vendas colocar encomendas em nome de clientes, integrando com Salesforce e APIs de comércio.",
          image: "/infinity.png"
        },
        {
          title: "Replatforming de E-commerce",
          description: "Liderança em projetos de replatforming migrando sistemas legados para arquiteturas headless modernas com React e NodeJS.",
          image: "/sarenza.png"
        },
        {
          title: "Plataforma Multi-marca de Retail",
          description: "Arquitetura e liderança no desenvolvimento full-stack de uma plataforma multi-marca com integrações complexas e pipelines de CI/CD.",
          image: "/continente.png"
        },
        {
          title: "E-commerce Replatforming",
          description: "Liderança em projetos de replatforming migrando legacy Site-Genesis(Salesforce Commerce Cloud) para arquiteturas headless modernas usando React e NodeJS(PWA Kit - Salesforce B2C Commerce Cloud).",
          image: "/vbq.png"
        }
      ],
      viewProject: "Ver",
      code: "Código"
    },
    profile: {
      title: "Perfil",
      text: "Arquiteto Técnico Salesforce com mais de 8 anos de experiência, especializado em headless commerce, B2C/B2B Commerce e Service Cloud. Experiência em arquitetar soluções multi-cloud, liderar equipas e implementar fluxos de trabalho impulsionados por IA."
    },
    experience: {
      title: "Experiência",
      items: [
        {
          company: "OSF Digital",
          role: "Technical Architect | Tech Lead | Full-Stack Developer",
          period: "Nov 2021 - Presente",
          location: "Viana do Castelo, Portugal",
          bullets: [
            "Liderança técnica e desenvolvimento full-stack para soluções Salesforce multi-cloud (B2C/B2B Commerce & Service Cloud).",
            "Arquitetura de plataformas headless (PWA Kit) e SFRA e respetivas integrações.",
            "Desenvolvimento em Apex, LWC e Flows; implementação de CI/CD, eCDN e deploys de produção.",
            "Implementação de workflows assistidos por IA com Copilot e prompt engineering (redução de 60% no tempo de geração de documentação)."
          ]
        },
        {
          company: "Wipro",
          role: "Salesforce Technical Consultant | Developer",
          period: "Out 2019 - Nov 2021",
          bullets: [
            "Entrega de soluções Salesforce B2C Commerce Cloud e aplicações internas com Node.js/React/TypeScript.",
            "Construção de pipelines CI/CD e automação de deploys; implementação de GTM e soluções analíticas."
          ]
        }
      ]
    },
    education: {
      title: "Formação",
      items: [
        {
          degree: "Mestrado em Engenharia Informática",
          school: "Instituto Politécnico do Cávado e do Ave (IPCA)",
          period: "2020 - 2024",
          note: "Tese: Decentralized Bookmaker"
        },
        {
          degree: "Engenharia de Sistemas Informáticos (Licenciatura)",
          school: "Instituto Politécnico do Cávado e do Ave (IPCA)",
          period: "2016 - 2019"
        }
      ]
    },
    certifications: {
      title: "Certificações",
      items: [
        "Salesforce Certified Data Cloud Consultant (18/06/2025)",
        "Salesforce Certified JavaScript Developer I (01/05/2021)",
        "Salesforce Certified B2C Commerce Developer (WI20)",
        "Salesforce Certified Administrator (SU19)"
      ]
    },
    technicalSnapshot: {
      title: "Resumo Técnico",
      bullets: [
        "Commerce & Salesforce: SFCC (SFRA, PWA Kit), SCAPI, Managed Runtime, Apex, LWC, Flows",
        "DevOps: CI/CD, Jenkins, Docker, Git, Gitlab/GitHub Pipelines",
        "Arquitetura: Microservices, REST APIs, Headless Commerce",
        "IA & Automação: GitHub Copilot, Prompt Engineering, Integração de APIs de IA",
        "Linguagens/Ferramentas: React, NodeJS, TypeScript, JavaScript, Python, MySQL, PHP, GTM, eCDN"
      ]
    },
    languages: {
      title: "Línguas",
      items: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "B2" },
        { name: "Espanhol", level: "A1" }
      ]
    },
    skills: {
      title: "Competências",
      titleHighlight: "Visão geral",
      subtitle: "Tecnologias e ferramentas com que trabalho.",
      list: [
        "Apex & LWC",
        "PWA Kit, SFRA, React, NodeJS",
        "CI/CD, Docker, Jenkins, GitHub Actions",
        "Microservices, REST APIs, Integrações",
        "Desenvolvimento assistido por IA"
      ]
    },
    footer: {
      rights: "Todos os direitos reservados.",
      contactShort: "pmcc995@gmail.com"
    },
    // Solutions Page
    solutions: {
      title: "Problemas &",
      titleHighlight: "Soluções",
      subtitle: "A minha abordagem a desafios técnicos reais.",
      problemLabel: "O Desafio",
      approachLabel: "A Minha Abordagem",
      impactLabel: "Impacto",
      items: [
        {
          category: "Performance",
          title: "Aplicação Web com Tempos de Carregamento Críticos",
          problem: "Uma aplicação web corporativa apresentava tempos de carregamento superiores a 8 segundos, com utilizadores a abandonar a plataforma antes de completar tarefas essenciais. O bounce rate ultrapassava os 60%.",
          approach: "Implementei uma estratégia de otimização em camadas: análise de bundle para eliminar dependências desnecessárias, lazy loading de componentes por rota, otimização de imagens com formatos modernos (WebP/AVIF), e implementação de um sistema de cache inteligente com invalidação seletiva. Reestruturei as queries ao backend para reduzir o payload e introduzi paginação virtual para listas extensas.",
          impact: "Tempo de carregamento reduzido para 1.5s • Bounce rate diminuiu para 22% • Score Lighthouse de 94/100"
        },
        {
          category: "SEO",
          title: "Plataforma SPA Invisível para Motores de Busca",
          problem: "Uma plataforma de conteúdo construída como SPA (Single Page Application) era praticamente invisível para motores de busca. O tráfego orgânico representava menos de 5% do total, e páginas de produto não eram indexadas.",
          approach: "Desenhei uma estratégia de SEO técnico abrangente: implementação de Server-Side Rendering (SSR) para páginas críticas, geração de meta tags dinâmicas por página, criação de sitemaps automáticos, implementação de dados estruturados (JSON-LD) para produtos e artigos, e otimização de Core Web Vitals. Estabeleci um sistema de pré-renderização para conteúdo estático.",
          impact: "Tráfego orgânico cresceu 340% em 6 meses • 95% das páginas indexadas • Posição média subiu de 47ª para 8ª"
        },
        {
          category: "Integrações de Dados",
          title: "Ecossistema Fragmentado de Dados Empresariais",
          problem: "Uma empresa utilizava mais de 12 sistemas distintos (ERP, CRM, e-commerce, logística) sem integração, resultando em dados duplicados, inconsistências e processos manuais de reconciliação que consumiam 30+ horas semanais.",
          approach: "Arquitetei uma plataforma de integração centralizada usando um padrão Event-Driven Architecture. Desenhei conectores modulares para cada sistema, implementei um barramento de eventos para sincronização em tempo real e criei um data lake unificado com regras de transformação e validação. Incluí dashboards de monitorização para visibilidade total do fluxo de dados.",
          impact: "Eliminação de 95% dos processos manuais • Consistência de dados de 99.7%"
        },
        {
          category: "Escalabilidade",
          title: "API Monolítica sob Pressão de Crescimento",
          problem: "Uma API monolítica que servia uma aplicação em rápido crescimento começou a apresentar timeouts frequentes durante picos de tráfego. Com 10x mais utilizadores em 6 meses, o sistema não escalava e a equipa tinha dificuldade em fazer deploy sem downtime.",
          approach: "Conduzi uma decomposição estratégica do monolito em microserviços, identificando bounded contexts e definindo contratos claros entre serviços. Implementei circuit breakers para resiliência, API gateway para routing inteligente, e uma estratégia de deployment blue-green para zero-downtime. Introduzi auto-scaling baseado em métricas de negócio, não apenas CPU.",
          impact: "Zero downtime em deployments • Suporte a 50x mais tráfego • Tempo de deploy de 45min para 3min"
        },
        {
          category: "Segurança",
          title: "Vulnerabilidades Críticas em Plataforma Financeira",
          problem: "Uma auditoria de segurança a uma plataforma financeira revelou vulnerabilidades críticas: injeção SQL, tokens de sessão previsíveis, ausência de rate limiting e dados sensíveis expostos em logs. A plataforma processava transações de milhares de utilizadores.",
          approach: "Implementei uma abordagem de segurança em profundidade: parameterização completa de queries, rotação de tokens com JWT de curta duração e refresh tokens seguros, rate limiting adaptativo por endpoint e utilizador, encriptação de dados em repouso e em trânsito, e sanitização de logs. Estabeleci um pipeline de CI/CD com análise estática de segurança (SAST) e testes de penetração automatizados.",
          impact: "Zero vulnerabilidades críticas na re-auditoria • Conformidade PCI-DSS alcançada • Zero incidentes de segurança"
        }
      ]
    }
  }
};
const defaultLocale = "en";
const LanguageContext = createContext({
  t: translations[defaultLocale],
  locale: defaultLocale,
  setLocale: () => {
  }
});
const useLanguage = () => useContext(LanguageContext);
const languages = [
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "en", label: "English", flag: "🇬🇧" }
];
const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLang = languages.find((l) => l.code === locale);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200",
        "aria-label": "Select language",
        children: [
          /* @__PURE__ */ jsx(Globe, { size: 18 }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium hidden sm:inline", children: currentLang == null ? void 0 : currentLang.flag })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
        transition: { duration: 0.15 },
        className: "absolute right-0 top-full mt-2 w-44 py-2 rounded-xl bg-card border border-border shadow-xl z-50",
        children: languages.map((lang) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setLocale(lang.code);
              setIsOpen(false);
            },
            className: `w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${locale === lang.code ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-lg", children: lang.flag }),
              /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: lang.label }),
              locale === lang.code && /* @__PURE__ */ jsx(Check, { size: 16, className: "text-primary" })
            ]
          },
          lang.code
        ))
      }
    ) })
  ] });
};
const Navbar = () => {
  var _a, _b, _c, _d;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const navLinks = [
    { href: "/", label: ((_a = t.nav) == null ? void 0 : _a.home) ?? "Home" },
    { href: "/portfolio", label: ((_b = t.nav) == null ? void 0 : _b.portfolio) ?? "Portfolio" },
    { href: "/solutions", label: t.nav.solutions ?? "Solutions" },
    { href: "/contact", label: ((_c = t.nav) == null ? void 0 : _c.contact) ?? "Contact" }
  ];
  return /* @__PURE__ */ jsxs(
    motion.nav,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
      children: [
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "text-xl font-bold gradient-text", children: "Home" }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: link.href,
              className: `relative text-sm font-medium transition-colors duration-200 ${location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                link.label,
                location.pathname === link.href && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    layoutId: "navbar-indicator",
                    className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full",
                    transition: { type: "spring", stiffness: 380, damping: 30 }
                  }
                )
              ]
            },
            link.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(LanguageSwitcher, {}),
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: ((_d = t.nav) == null ? void 0 : _d.contactMe) ?? "Contact me" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 md:hidden", children: [
            /* @__PURE__ */ jsx(LanguageSwitcher, {}),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(!isOpen),
                className: "p-2 text-foreground",
                "aria-label": "Toggle menu",
                children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3 },
            className: "md:hidden bg-background border-b border-border",
            children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-4 space-y-4", children: [
              navLinks.map((link) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.href,
                  onClick: () => setIsOpen(false),
                  className: `block py-2 text-lg font-medium ${location.pathname === link.href ? "text-primary" : "text-muted-foreground"}`,
                  children: link.label
                },
                link.href
              )),
              /* @__PURE__ */ jsx(Button, { variant: "hero", className: "w-full", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", onClick: () => setIsOpen(false), children: t.nav.contactMe }) })
            ] })
          }
        ) })
      ]
    }
  );
};
const Footer = () => {
  var _a;
  const { t } = useLanguage();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    { icon: Github, href: "https://github.com/pmcc995?tab=repositories", label: "GitHub", spa: false },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pedro-cerqueira-80a296b7/", label: "LinkedIn", spa: false },
    { icon: Mail, href: "/contact", label: "Email", spa: true }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-card/50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 py-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "text-xl font-bold gradient-text", children: "Home" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: socialLinks.map(
      (social, index) => social.spa ? /* @__PURE__ */ jsx(
        Link,
        {
          to: social.href,
          className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200",
          "aria-label": social.label,
          children: /* @__PURE__ */ jsx(social.icon, { size: 20 })
        },
        index
      ) : /* @__PURE__ */ jsx(
        "a",
        {
          href: social.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200",
          "aria-label": social.label,
          children: /* @__PURE__ */ jsx(social.icon, { size: 20 })
        },
        index
      )
    ) }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "© ",
      currentYear,
      " ",
      ((_a = t.footer) == null ? void 0 : _a.rights) ?? "All rights reserved."
    ] })
  ] }) }) });
};
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-16", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Button as B,
  Layout as L,
  cn as c,
  useLanguage as u
};
