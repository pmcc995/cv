import React, { createContext, useCallback, useContext, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Translations = Record<string, any>;

const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      solutions: "Solutions",
      contact: "Contact",
      about: "About",
    },
    hero: {
      badge: "Technical Architect",
      greeting: "Hi, I'm",
      name: "Pedro Cerqueira",
      subtitle: "Software Engineer — Web Apps, Internal Business Systems, Salesforce, Headless, Headless Commerce & Multi-cloud Integrations",
      viewProjects: "View projects",
      contactMe: "Contact me",
    },
    about: {
      title: "About",
      summary:
        "I hold a Master's degree in Computer Engineering and have 8+ years of experience in web development. I specialize in headless commerce (PWA Kit), Salesforce B2C/B2B Commerce, Service Cloud and multi-cloud integrations. I architect and lead cross-functional teams to deliver scalable, maintainable solutions and leverage AI to improve developer productivity.",
      highlights: [
        "Headless commerce (PWA Kit, SFRA)",
        "Salesforce Core: Apex, LWC, Flows",
        "CI/CD, eCDN, performance and security",
        "AI-assisted development (GitHub Copilot, prompt engineering)",
      ],
      location: "Viana do Castelo, Portugal",
      education: "Master's degree in Computer Engineering"
    },
    contact: {
      title: "Get in touch",
      titleHighlight: "with me",
      subtitle: "Have a project in mind or want to connect? Contact me via LinkedIn or email.",
      info: {
        email: "pedro.cerqueira.digital@outlook.com",
        location: "Viana do Castelo, Portugal",
        linkedin: "https://www.linkedin.com/in/pedro-cerqueira-80a296b7/",
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
        send: "Send message",
      },
      social: "Follow me on LinkedIn",
      available: "Available for work",
      availableDescription: "Open to new opportunities and collaborations.",
    },
    portfolio: {
      title: "My",
      titleHighlight: "Projects",
      subtitle: "A selection of projects and initiatives I've worked on across headless commerce, Salesforce implementations and internal business systems.",
      projects: [
        {
          title: "Store Locator Plugin",
          description: "Development of a Store Locator Plugin for SFCC B2C PWA Kit to enhance in-store discovery and user experience.",
          image: "/cv/storelocator.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chackra UI", "UX", "Plugin Development", "ReactJS", "NodeJS", "API Integrations", "Performance Optimization", "Accessibility"],
        },
        {
          title: "PWA Kit Extensions",
          description: "Extended PWA Kit features for commerce clients including performance optimizations and accessibility improvements.",
          image: "/cv/pwakit.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chackra UI", "UX", "Plugin Development", "ReactJS", "NodeJS", "API Integrations", "Performance Optimization", "Accessibility"],
        },
        {
          title: "Internal Grocery Solution",
          description: "Full-stack headless grocery solution built on PWA Kit and custom integrations for inventory and ordering.",
          image: "/cv/grocery.png",
          tags: ["Salesforce B2C Commerce Cloud", "SFRA", "PWA Kit", "JavaScript", "HTML", "CSS", "Chackra UI", "API Integrations", "Performance Optimization"],
        },
        {
          title: "Assistant Order Tool",
          description: "Tool that enables sales assistants to place orders on behalf of customers, integrating with Salesforce and commerce APIs.",
          image: "/cv/infinity.png",
          tags: ["Salesforce B2C Commerce Cloud", "SFRA", "JavaScript", "API Integrations"],
        },
        {
          title: "E-commerce Replatforming",
          description: "Led replatforming projects migrating legacy systems to modern headless architectures using React and NodeJS.",
          image: "/cv/sarenza.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chackra UI", "UX", "Plugin Development", "ReactJS", "NodeJS", "Python", "API Integrations", "Performance Optimization", "Accessibility", "SEO", "CI/CD", "REST APIs"],
        },
        {
          title: "Multi-brand Retail Platform",
          description: "Architected and led full-stack development for a multi-brand retail platform with complex integrations and CI/CD pipelines.",
          image: "/cv/continente.png",
          tags: ["Salesforce B2C Commerce Cloud", "SFRA", "JavaScript", "API Integrations"],
        },
        {
          title: "E-commerce Replatforming",
          description: "Led replatforming projects migrating legacy Site-Genesis(Salesforce Commerce Cloud) to modern headless architectures using React and NodeJS(PWA Kit - Salesforce B2C Commerce Cloud).",
          image: "/cv/vbq.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chackra UI", "UX", "Plugin Development", "ReactJS", "NodeJS", "Python", "API Integrations", "Performance Optimization", "Accessibility", "SEO", "CI/CD", "REST APIs"],
        },
        {
          title: "Cache Flush",
          description: "Internal tool for clearing cache from the company's e-commerce site pages.",
          image: "",
          tags: ["PHP", "Jenkins", "CI/CD", "Javascript", "HTML", "CSS"],
        },
        {
          title: "Lighthouse",
          description: "Internal tool for monitoring the performance of specific pages on a company's e-commerce site.",
          image: "",
          tags: ["Handlebars", "NodeTS", "Jenkins", "CI/CD", "Javascript", "HTML", "CSS"],
        },
        {
          title: "TheBrandCloset",
          description: "Internal tool for offering special promotions to all company employees (on the company's e-commerce site).",
          image: "/cv/coach.png",
          tags: ["PHP", "Jenkins", "CI/CD", "Javascript", "HTML", "CSS"],
        },
        {
          title: "Promocash B2B",
          description: "B2B eCommerce website architect - Salesforce B2B Commerce Cloud. Maintenance and architecture of evolutions (new functionalities).",
          image: "/cv/promocash.png",
          tags: ["Salesforce B2B Commerce Cloud", "Apex", "Salesforce LWC", "CI/CD", "Javascript", "HTML", "CSS", "Flows"],
        },
        {
          title: "Carrefour Service Cloud",
          description: "Maintenance and architecture of enhancements (new features) in Salesforce on the existing platform.",
          image: "/cv/carrefour.png",
          tags: ["Salesforce Service Cloud", "Apex", "Salesforce LWC", "CI/CD", "Javascript", "HTML", "CSS", "Flows"],
        },
        {
          title: "Tapestry Corporate Site",
          description: "Developer during the migration of the corporate site from WordPress to CI4 technology",
          image: "/cv/tapestry.png",
          tags: ["PHP", "CI4", "HTML", "Javascript", "CSS", "Jenkins"],
        },
      ],
      viewProject: "View",
      code: "Code",
    },
    profile: {
      title: "Profile",
      text:
        "Salesforce Technical Architect with 8+ years specializing in headless commerce, B2C/B2B Commerce and Service Cloud implementations across retail, fashion and luxury sectors. Expert in architecting multi-cloud solutions, leading teams and implementing AI-driven workflows.",
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
            "Pioneered AI-driven development workflows with Copilot and prompt engineering (60% time reduction in doc generation).",
          ],
        },
        {
          company: "Wipro",
          role: "Salesforce Technical Consultant | Developer",
          period: "Oct 2019 - Nov 2021",
          bullets: [
            "Delivered Salesforce B2C Commerce Cloud solutions and internal apps using Node.js/React/TypeScript.",
            "Built CI/CD pipelines and automated deployments; implemented GTM and analytics solutions.",
          ],
        }
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Master in Computer Engineering",
          school: "Instituto Politécnico do Cávado e do Ave (IPCA)",
          period: "2020 - 2024",
          note: "Thesis: Decentralized Bookmaker",
        },
        {
          degree: "Computer Systems Engineering (Bachelor)",
          school: "Instituto Politécnico do Cávado e do Ave (IPCA)",
          period: "2016 - 2019",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        "Salesforce Certified Data Cloud Consultant (18/06/2025)",
        "Salesforce Certified JavaScript Developer I (01/05/2021)",
        "Salesforce Certified B2C Commerce Developer (WI20)",
        "Salesforce Certified Administrator (SU19)",
      ],
    },
    technicalSnapshot: {
      title: "Technical Snapshot",
      bullets: [
        "Commerce & Salesforce: SFCC (SFRA, PWA Kit), SCAPI, Managed Runtime, Apex, LWC, Flows",
        "DevOps: CI/CD, Jenkins, Docker, Git, Gitlab/GitHub Pipelines",
        "Architecture: Microservices, REST APIs, Headless Commerce",
        "AI & Automation: GitHub Copilot, Prompt Engineering, AI API Integration",
        "Languages/Tools: React, NodeJS, TypeScript, JavaScript, Python, MySQL, PHP, GTM, eCDN",
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "B2" },
        { name: "Spanish", level: "A1" },
      ],
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
        "AI-assisted development",
      ],
    },
    footer: {
      rights: "All rights reserved.",
      contactShort: "pedro.cerqueira.digital@outlook.com",
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
          impact: "Load time reduced to 1.5s • Bounce rate dropped to 22% • Lighthouse score of 94/100",
        },
        {
          category: "SEO",
          title: "SPA Platform Invisible to Search Engines",
          problem: "A content platform built as a SPA (Single Page Application) was practically invisible to search engines. Organic traffic represented less than 5% of total traffic, and product pages were not indexed.",
          approach: "I designed a comprehensive technical SEO strategy: Server-Side Rendering (SSR) implementation for critical pages, dynamic per-page meta tags, automatic sitemap generation, structured data (JSON-LD) implementation for products and articles, and Core Web Vitals optimization. I established a pre-rendering system for static content.",
          impact: "Organic traffic grew 340% in 6 months • 95% of pages indexed • Average position rose from 47th to 8th",
        },
        {
          category: "Data Integrations",
          title: "Fragmented Enterprise Data Ecosystem",
          problem: "A company used over 12 distinct systems (ERP, CRM, e-commerce, logistics) without integration, resulting in duplicate data, inconsistencies and manual reconciliation processes consuming 30+ hours weekly.",
          approach: "I architected a centralized integration platform using an Event-Driven Architecture pattern. I designed modular connectors for each system, implemented an event bus for real-time synchronization and created a unified data lake with transformation and validation rules. I included monitoring dashboards for full data flow visibility.",
          impact: "Elimination of 95% of manual processes • 99.7% data consistency",
        },
        {
          category: "Scalability",
          title: "Monolithic API Under Growth Pressure",
          problem: "A monolithic API serving a rapidly growing application started experiencing frequent timeouts during traffic peaks. With 10x more users in 6 months, the system couldn't scale and the team struggled to deploy without downtime.",
          approach: "I conducted a strategic monolith decomposition into microservices, identifying bounded contexts and defining clear contracts between services. I implemented circuit breakers for resilience, API gateway for intelligent routing, and a blue-green deployment strategy for zero-downtime. I introduced auto-scaling based on business metrics, not just CPU.",
          impact: "Zero downtime deployments • Support for 50x more traffic • Deploy time from 45min to 3min",
        },
        {
          category: "Security",
          title: "Critical Vulnerabilities in Financial Platform",
          problem: "A security audit of a financial platform revealed critical vulnerabilities: SQL injection, predictable session tokens, absence of rate limiting and sensitive data exposed in logs. The platform processed transactions for thousands of users.",
          approach: "I implemented a defense-in-depth approach: complete query parameterization, token rotation with short-lived JWTs and secure refresh tokens, adaptive rate limiting per endpoint and user, data encryption at rest and in transit, and log sanitization. I established a CI/CD pipeline with static security analysis (SAST) and automated penetration testing.",
          impact: "Zero critical vulnerabilities in re-audit • PCI-DSS compliance achieved • Zero security incidents",
        }
      ],
    },
  },
  pt: {
    nav: {
      home: "Início",
      portfolio: "Portfólio",
      solutions: "Soluções",
      contact: "Contacto",
      about: "Sobre",
    },
    hero: {
      badge: "Arquiteto de soluções digitais",
      greeting: "Olá, sou o",
      name: "Pedro Cerqueira",
      subtitle: "Desenho e coordeno a criação de lojas online, aplicações e sistemas que ajudam as empresas a trabalhar melhor.",
      viewProjects: "Ver projetos",
      contactMe: "Entre em contacto",
    },
    about: {
      title: "Sobre",
      summary:
        "Tenho mestrado em Engenharia Informática e mais de 8 anos de experiência a criar soluções para a web. Trabalho sobretudo em lojas online, sistemas de apoio ao cliente e na ligação entre diferentes plataformas, incluindo Salesforce. Desenho estas soluções, coordeno equipas de diferentes áreas e uso ferramentas de inteligência artificial para tornar o desenvolvimento e a criação de documentação mais eficientes.",
      highlights: [
        "Lojas online: PWA Kit e SFRA",
        "Salesforce: ferramentas para vendas e apoio ao cliente (Apex, LWC, Flows)",
        "Automatização de testes e lançamentos de novas versões; rapidez e segurança (CI/CD, eCDN)",
        "Ferramentas de IA para apoiar o desenvolvimento e a documentação (GitHub Copilot)",
      ],
      location: "Viana do Castelo, Portugal",
      education: "Mestrado em Engenharia Informática"
    },
    contact: {
      title: "Fale",
      titleHighlight: "comigo",
      subtitle: "Tem um projeto em mente ou quer conversar? Pode contactar-me por e-mail ou pelo LinkedIn.",
      info: {
        email: "pedro.cerqueira.digital@outlook.com",
        location: "Viana do Castelo, Portugal",
        linkedin: "https://www.linkedin.com/in/pedro-cerqueira-80a296b7/",
      },
      successTitle: "Mensagem enviada",
      successDescription: "Obrigado. Responderei em breve.",
      form: {
        name: "Nome",
        email: "E-mail",
        subject: "Assunto",
        message: "Mensagem",
        namePlaceholder: "O seu nome",
        emailPlaceholder: "voce@exemplo.com",
        subjectPlaceholder: "Assunto",
        messagePlaceholder: "Escreva a sua mensagem...",
        sending: "A enviar...",
        send: "Enviar mensagem",
      },
      social: "Encontre-me no LinkedIn",
      available: "Disponível para novos desafios",
      availableDescription: "Aberto a novas oportunidades e colaborações.",
    },
    portfolio: {
      title: "Os meus",
      titleHighlight: "projetos",
      subtitle: "Alguns dos projetos em que trabalhei: lojas online, soluções Salesforce e ferramentas para apoiar o trabalho das empresas.",
      projects: [
        {
          title: "Localizador de lojas",
          description: "Criei uma ferramenta que ajuda os clientes a encontrar lojas e torna mais fácil usar a loja online.",
          image: "/storelocator.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "Experiência de utilização", "HTML", "CSS", "Chakra UI", "Desenvolvimento de extensões", "ReactJS", "NodeJS", "Integração entre sistemas", "Melhoria da velocidade", "Acessibilidade"],
        },
        {
          title: "Extensões PWA Kit",
          description: "Acrescentei funcionalidades a lojas online, tornando-as mais rápidas e fáceis de usar por pessoas com diferentes necessidades.",
          image: "/cv/pwakit.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chakra UI", "Experiência de utilização", "Desenvolvimento de extensões", "ReactJS", "NodeJS", "Integração entre sistemas", "Melhoria da velocidade", "Acessibilidade"],
        },
        {
          title: "Loja online de supermercado",
          description: "Criei uma loja online de produtos de supermercado ligada aos sistemas de stock e de encomendas.",
          image: "/grocery.png",
          tags: ["Salesforce B2C Commerce Cloud", "SFRA", "PWA Kit", "JavaScript", "HTML", "CSS", "Integração entre sistemas", "Melhoria da velocidade"],
        },
        {
          title: "Ferramenta de apoio a encomendas",
          description: "Permite que os assistentes de vendas façam encomendas em nome dos clientes, através dos sistemas Salesforce e de comércio online.",
          image: "/infinity.png",
          tags: ["Salesforce B2C Commerce Cloud", "SFRA", "JavaScript", "Integração entre sistemas"],
        },
        {
          title: "Modernização de lojas online",
          description: "Coordenei a passagem de lojas online antigas para plataformas mais modernas, usando React e Node.js.",
          image: "/sarenza.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chakra UI", "Experiência de utilização", "Desenvolvimento de extensões", "ReactJS", "NodeJS", "Python", "Integração entre sistemas", "Melhoria da velocidade", "Acessibilidade", "Visibilidade nos motores de busca", "Automatização de testes e publicações", "APIs REST"],
        },
        {
          title: "Plataforma para várias marcas",
          description: "Desenhei e coordenei o desenvolvimento de uma plataforma para várias marcas, ligada a outros sistemas e preparada para automatizar testes e publicações.",
          image: "/continente.png",
        },
        {
          title: "Modernização de uma plataforma de comércio online",
          description: "Coordenei a passagem da antiga plataforma SiteGenesis para uma loja online mais moderna, usando React e Node.js com o PWA Kit da Salesforce.",
          image: "/vbq.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chakra UI", "Experiência de utilização", "Desenvolvimento de extensões", "ReactJS", "NodeJS", "Python", "Integração entre sistemas", "Melhoria da velocidade", "Acessibilidade", "Visibilidade nos motores de busca", "Automatização de testes e publicações", "APIs REST"],
        },
        {
          title: "Atualização do cache",
          description: "Ferramenta interna para atualizar as páginas da loja online quando o conteúdo guardado precisava de ser renovado.",
          image: "",
          tags: ["PHP", "Jenkins", "CI/CD", "JavaScript", "HTML", "CSS"],
        },
        {
          title: "Monitorização da loja online",
          description: "Ferramenta interna para acompanhar a velocidade de páginas específicas da loja online.",
          image: "",
          tags: ["Handlebars", "NodeTS", "Jenkins", "CI/CD", "JavaScript", "HTML", "CSS"],
        },
        {
          title: "TheBrandCloset",
          description: "Ferramenta interna que dava aos colaboradores acesso a promoções especiais na loja online da empresa.",
          image: "/cv/coach.png",
          tags: ["PHP", "Jenkins", "CI/CD", "JavaScript", "HTML", "CSS"],
        },
        {
          title: "Promocash B2B",
          description: "Desenhei a plataforma de vendas online da Promocash para empresas e trabalhei na manutenção e criação de novas funcionalidades.",
          image: "/cv/promocash.png",
          tags: ["Salesforce B2B Commerce Cloud", "Apex", "Salesforce LWC", "CI/CD", "JavaScript", "HTML", "CSS", "Flows"],
        },
        {
          title: "Carrefour Service Cloud",
          description: "Trabalhei na manutenção e melhoria da plataforma Salesforce usada pelo Carrefour para apoiar o serviço ao cliente.",
          image: "/cv/carrefour.png",
          tags: ["Salesforce Service Cloud", "Apex", "Salesforce LWC", "CI/CD", "JavaScript", "HTML", "CSS", "Flows"],
        },
        {
          title: "Site corporativo da Tapestry",
          description: "Participei na mudança do site corporativo da Tapestry, de WordPress para a tecnologia CI4.",
          image: "/cv/tapestry.png",
          tags: ["PHP", "CI4", "HTML", "JavaScript", "CSS", "Jenkins"],
        },
      ],
      viewProject: "Ver",
      code: "Código",
    },
    profile: {
      title: "Perfil",
      text:
        "Arquiteto técnico Salesforce com mais de 8 anos de experiência em lojas online para consumidores e empresas e em sistemas de apoio ao cliente. Desenho soluções que ligam diferentes plataformas, coordeno equipas e uso ferramentas de inteligência artificial para melhorar o trabalho de desenvolvimento.",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          company: "OSF Digital",
          role: "Arquiteto técnico | Responsável técnico de equipa | Programador",
          period: "nov. 2021 – presente",
          location: "Viana do Castelo, Portugal",
          bullets: [
            "Coordeno o trabalho técnico e também desenvolvo soluções Salesforce para lojas online de consumidores e empresas e para apoio ao cliente.",
            "Desenho plataformas de comércio online com PWA Kit e SFRA e ligo-as a outros sistemas.",
            "Crio funcionalidades Salesforce e ajudo a automatizar testes e o lançamento de novas versões para os utilizadores.",
            "Implementei formas de usar o GitHub Copilot e instruções para ferramentas de IA no trabalho da equipa; o tempo necessário para criar documentação diminuiu 60%.",
          ],
        },
        {
          company: "Wipro",
          role: "Consultor técnico Salesforce | Programador",
          period: "out. 2019 – nov. 2021",
          bullets: [
            "Desenvolvi lojas online Salesforce para consumidores e aplicações internas com Node.js, React e TypeScript.",
            "Automatizei testes e publicações de aplicações e trabalhei na implementação do Google Tag Manager e de ferramentas de análise.",
          ],
        },
      ],
    },
    education: {
      title: "Formação",
      items: [
        {
          degree: "Mestrado em Engenharia Informática",
          school: "Instituto Politécnico do Cávado e do Ave (IPCA)",
          period: "2020 - 2024",
          note: "Tese: Decentralized Bookmaker",
        },
        {
          degree: "Engenharia de Sistemas Informáticos (Licenciatura)",
          school: "Instituto Politécnico do Cávado e do Ave (IPCA)",
          period: "2016 - 2019",
        },
      ],
    },
    certifications: {
      title: "Certificações",
      items: [
        "Salesforce Certified Data Cloud Consultant (18/06/2025)",
        "Salesforce Certified JavaScript Developer I (01/05/2021)",
        "Salesforce Certified B2C Commerce Developer (WI20)",
        "Salesforce Certified Administrator (SU19)",
      ],
    },
    technicalSnapshot: {
      title: "Ferramentas e tecnologias",
      bullets: [
        "Lojas online e Salesforce: Salesforce Commerce Cloud, PWA Kit, SFRA e ferramentas para vendas e apoio ao cliente",
        "Testes e publicações automáticas: Jenkins, Docker, Git, GitLab e GitHub",
        "Ligação entre sistemas: microsserviços, APIs REST e comércio online",
        "Inteligência artificial: GitHub Copilot, instruções para ferramentas de IA e ligação a serviços de IA",
        "Programação e ferramentas: React, Node.js, TypeScript, JavaScript, Python, MySQL, PHP, Google Tag Manager e redes de distribuição de conteúdos (eCDN)",
      ],
    },
    languages: {
      title: "Línguas",
      items: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "B2" },
        { name: "Espanhol", level: "A1" },
      ],
    },
    skills: {
      title: "Áreas em que",
      titleHighlight: "posso ajudar",
      subtitle: "O que faço e algumas das ferramentas que utilizo.",
      frontend: {
        title: "Sites e aplicações",
        description: "Crio as partes com que as pessoas interagem (HTML, React, TypeScript, CSS, Tailwind, Salesforce LWC e Chakra UI).",
      },
      backend: {
        title: "Funcionalidades e ligações entre sistemas",
        description: "Desenvolvo o que acontece por trás dos sites e aplicações (Node.js, Express, Nest, Python, Apex, APIs REST e GraphQL).",
      },
      database: {
        title: "Bases de dados",
        description: "Organizo e consulto informação em MySQL, PostgreSQL, MongoDB e Salesforce SOQL.",
      },
      design: {
        title: "Design e experiência de utilização",
        description: "Trabalho com Figma e experiência de utilização (UX) para tornar as aplicações mais fáceis de usar.",
      },
      devops: {
        title: "Testes e publicação de aplicações",
        description: "Automatizo testes e publicações com Docker, Jenkins, GitLab e GitHub Actions.",
      },
      list: [
        "Desenvolvimento de soluções Salesforce",
        "Criação e melhoria de lojas online",
        "Automatização de testes e publicações",
        "Ligação entre plataformas e sistemas",
        "Uso de inteligência artificial no desenvolvimento",
      ],
    },
    footer: {
      rights: "Todos os direitos reservados.",
      contactShort: "pedro.cerqueira.digital@outlook.com",
    },
    // Solutions Page
    solutions: {
      title: "Desafios e",
      titleHighlight: "Soluções",
      subtitle: "Exemplos de problemas que ajudei a resolver e dos resultados alcançados.",
      problemLabel: "O problema",
      approachLabel: "O que fiz",
      impactLabel: "Impacto",
      items: [
        {
          category: "Velocidade",
          title: "Uma aplicação web demasiado lenta",
          problem: "Uma aplicação de uma empresa demorava mais de 8 segundos a abrir. Muitos utilizadores saíam antes de concluir as tarefas, e mais de 60% abandonavam a página sem interagir.",
          approach: "Analisei o que a aplicação carregava e retirei o que não era necessário. Fiz com que cada página carregasse apenas os elementos de que precisava, melhorei a forma como as imagens eram apresentadas e criei um sistema para guardar e reutilizar informação. Também reduzi a quantidade de dados trocados com o sistema e melhorei a apresentação de listas longas.",
          impact: "Abertura em 1,5 segundos • Utilizadores que saíam sem interagir: de mais de 60% para 22% • Avaliação Lighthouse de 94/100",
        },
        {
          category: "Visibilidade nas pesquisas",
          title: "Conteúdo difícil de encontrar nos motores de busca",
          problem: "Uma plataforma de conteúdos foi construída de uma forma que dificultava a sua leitura pelos motores de busca. As visitas vindas de pesquisas representavam menos de 5% do total e as páginas de produtos não apareciam nos resultados.",
          approach: "Preparei as páginas para que os motores de busca conseguissem ler o seu conteúdo. Acrescentei títulos e descrições adequados, listas automáticas das páginas e informação organizada sobre produtos e artigos. Também melhorei a velocidade e a experiência de utilização.",
          impact: "Visitas vindas de pesquisas aumentaram 340% em 6 meses • 95% das páginas passaram a poder ser encontradas nos motores de busca • Posição média melhorou do 47.º para o 8.º lugar",
        },
        {
          category: "Ligação entre sistemas",
          title: "Sistemas da empresa que não comunicavam entre si",
          problem: "Uma empresa usava mais de 12 sistemas diferentes — para gestão, clientes, vendas online e logística — que não partilhavam informação. Isso criava dados repetidos e contraditórios e obrigava a equipa a passar mais de 30 horas por semana a reconciliá-los manualmente.",
          approach: "Desenhei uma plataforma para ligar os diferentes sistemas. Criei ligações próprias para cada um, para que as alterações fossem partilhadas automaticamente, e reuni os dados num único local, com regras para os organizar e validar. Também criei painéis para acompanhar a informação.",
          impact: "95% menos tarefas manuais • Dados coerentes em 99,7% dos casos",
        },
        {
          category: "Escalabilidade",
          title: "Uma aplicação que não acompanhava o aumento de utilizadores",
          problem: "Uma aplicação em crescimento começou a falhar quando muitas pessoas a usavam ao mesmo tempo. O número de utilizadores aumentou 10 vezes em 6 meses, e a equipa tinha dificuldade em atualizar a aplicação sem a interromper.",
          approach: "Dividi o sistema em partes mais pequenas, com funções e regras de comunicação claras. Preparei-o para lidar melhor com falhas, organizei a publicação de atualizações sem interromper o serviço e ajustei os recursos disponíveis à procura.",
          impact: "Atualizações sem interrupções • Suporte a 50 vezes mais tráfego • Tempo para lançar uma nova versão reduzido de 45 para 3 minutos",
        },
        {
          category: "Segurança",
          title: "Falhas de segurança numa plataforma financeira",
          problem: "Uma análise de segurança encontrou falhas graves numa plataforma financeira: dados podiam ser acedidos através de pesquisas mal protegidas, as chaves de sessão eram previsíveis, não havia limites para pedidos repetidos e informação sensível aparecia nos registos do sistema. A plataforma processava transações de milhares de utilizadores.",
          approach: "Protegi as pesquisas e as chaves de acesso, limitei pedidos repetidos, protegi os dados guardados e enviados e removi informação sensível dos registos. Também acrescentei verificações automáticas de segurança e testes para procurar falhas.",
          impact: "Nenhuma falha crítica na nova análise • Conformidade com PCI-DSS alcançada • Nenhum incidente de segurança",
        },
      ],
    }
  },
};

type LanguageContextValue = {
  t: Translations;
  locale: Language;
  setLocale: (locale: Language) => void;
};

export type Language = "en" | "pt";

const defaultLocale: Language = "en";

export const getLocalizedPath = (pathname: string, locale: Language) => {
  const pathWithoutLocale = pathname.replace(/^\/(en|pt)(?=\/|$)/, "") || "/";
  return `/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
};

const LanguageContext = createContext<LanguageContextValue>({
  t: translations[defaultLocale],
  locale: defaultLocale,
  setLocale: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const locale: Language = location.pathname.split("/")[1] === "pt" ? "pt" : defaultLocale;
  const setLocale = useCallback((nextLocale: Language) => {
    navigate(getLocalizedPath(location.pathname, nextLocale));
  }, [location.pathname, navigate]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ t: translations[locale] || translations[defaultLocale], locale, setLocale }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

// Note: we don't export the context default to avoid fast-refresh warnings — use the hooks/Provider exports.
