import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

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
        email: "pmcc995@gmail.com",
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
          image: "",
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
          image: "",
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
      contactShort: "pmcc995@gmail.com",
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
      badge: "Arquiteto Técnico",
      greeting: "Olá, eu sou",
      name: "Pedro Cerqueira",
      subtitle: "Software Engineer — Web Apps, Software Interno de Gestão, Salesforce, Headless, Headless Commerce & Multi-cloud Integrations",
      viewProjects: "Ver projetos",
      contactMe: "Contacte-me",
    },
    about: {
      title: "Sobre",
      summary:
        "Possuo Mestrado em Engenharia Informática e mais de 8 anos de experiência em desenvolvimento web. Especializo-me em headless commerce (PWA Kit), Salesforce B2C/B2B Commerce, Service Cloud e integrações multi-cloud. Arquiteturo e lidero equipas multifuncionais para entregar soluções escaláveis e utilizo IA para aumentar a produtividade de desenvolvimento.",
      highlights: [
        "Headless commerce (PWA Kit, SFRA)",
        "Salesforce Core: Apex, LWC, Flows",
        "CI/CD, eCDN, performance e segurança",
        "Desenvolvimento assistido por IA (GitHub Copilot, prompt engineering)",
      ],
      location: "Viana do Castelo, Portugal",
      education: "Mestre em Engenharia Informática"
    },
    contact: {
      title: "Fale comigo",
      titleHighlight: "comigo",
      subtitle: "Tem um projeto em mente ou quer entrar em contacto? Contacte-me via LinkedIn ou e-mail.",
      info: {
        email: "pmcc995@gmail.com",
        location: "Viana do Castelo, Portugal",
        linkedin: "https://www.linkedin.com/in/pedro-cerqueira-80a296b7/",
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
        send: "Enviar mensagem",
      },
      social: "Siga-me no LinkedIn",
      available: "Disponível para trabalho",
      availableDescription: "Aberto a novas oportunidades e colaborações.",
    },
    portfolio: {
      title: "Meus",
      titleHighlight: "Projetos",
      subtitle: "Uma seleção de projetos e iniciativas em que trabalhei nas áreas de headless commerce, implementações Salesforce e software interno de gestão.",
      projects: [
        {
          title: "Store Locator Plugin",
          description: "Desenvolvimento de um plugin Store Locator para SFCC B2C PWA Kit para melhorar a descoberta de lojas e a experiência do utilizador.",
          image: "/storelocator.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "UX", "HTML", "CSS", "Chackra UI", "Plugin Development", "ReactJS", "NodeJS", "API Integrations", "Performance Optimization", "Accessibility"],
        },
        {
          title: "Extensões PWA Kit",
          description: "Extensões de funcionalidades do PWA Kit para clientes de comércio, incluindo otimizações de performance e acessibilidade.",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chackra UI", "UX", "Plugin Development", "ReactJS", "NodeJS", "API Integrations", "Performance Optimization", "Accessibility"],
        },
        {
          title: "Solução Interna de Retail",
          description: "Solução headless full-stack para retails construída sobre PWA Kit com integrações personalizadas de inventário e encomenda.",
          image: "/grocery.png",
          tags: ["Salesforce B2C Commerce Cloud", "SFRA", "PWA Kit", "JavaScript", "HTML", "CSS", "API Integrations", "Performance Optimization"],
        },
        {
          title: "Ferramenta de Assistente de Encomendas",
          description: "Ferramenta que permite a assistentes de vendas colocar encomendas em nome de clientes, integrando com Salesforce e APIs de comércio.",
          image: "/infinity.png",
          tags: ["Salesforce B2C Commerce Cloud", "SFRA", "JavaScript", "API Integrations"],
        },
        {
          title: "Replatforming de E-commerce",
          description: "Liderança em projetos de replatforming migrando sistemas legados para arquiteturas headless modernas com React e NodeJS.",
          image: "/sarenza.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chackra UI", "UX", "Plugin Development", "ReactJS", "NodeJS", "Python", "API Integrations", "Performance Optimization", "Accessibility", "SEO", "CI/CD", "REST APIs"],
        },
        {
          title: "Plataforma Multi-marca de Retail",
          description: "Arquitetura e liderança no desenvolvimento full-stack de uma plataforma multi-marca com integrações complexas e pipelines de CI/CD.",
          image: "/continente.png",
        },
        {
          title: "E-commerce Replatforming",
          description: "Liderança em projetos de replatforming migrando legacy Site-Genesis(Salesforce Commerce Cloud) para arquiteturas headless modernas usando React e NodeJS(PWA Kit - Salesforce B2C Commerce Cloud).",
          image: "/vbq.png",
          tags: ["Salesforce B2C Commerce Cloud", "PWA Kit", "JavaScript", "HTML", "CSS", "Chackra UI", "UX", "Plugin Development", "ReactJS", "NodeJS", "Python", "API Integrations", "Performance Optimization", "Accessibility", "SEO", "CI/CD", "REST APIs"],
        },
        {
          title: "Cache Flush",
          description: "Ferramenta interna para limpar o cache das páginas do site de e-commerce da empresa.",
          image: "",
          tags: ["PHP", "Jenkins", "CI/CD", "Javascript", "HTML", "CSS"],
        },
        {
          title: "Lighthouse",
          description: "Ferramenta interna para monitorar o desempenho de páginas específicas no site de e-commerce da empresa.",
          image: "",
          tags: ["Handlebars", "NodeTS", "Jenkins", "CI/CD", "Javascript", "HTML", "CSS"],
        },
        {
          title: "TheBrandCloset",
          description: "Ferramenta interna para oferecer promoções especiais a todos os colaboradores da empresa (no site de e-commerce da empresa).",
          image: "",
          tags: ["PHP", "Jenkins", "CI/CD", "Javascript", "HTML", "CSS"],
        },
        {
          title: "Promocash B2B",
          description: "Arquiteto de e-commerce B2B - Salesforce B2B Commerce Cloud. Manutenção e arquitetura de evoluções (novas funcionalidades).",
          image: "",
          tags: ["Salesforce B2B Commerce Cloud", "Apex", "Salesforce LWC", "CI/CD", "Javascript", "HTML", "CSS", "Flows"],
        },
        {
          title: "Carrefour Service Cloud",
          description: "Manutenção e arquitetura de evoluções (novas funcionalidades) em Salesforce na plataforma existente.",
          image: "",
          tags: ["Salesforce Service Cloud", "Apex", "Salesforce LWC", "CI/CD", "Javascript", "HTML", "CSS", "Flows"],
        },
        {
          title: "Tapestry Site Corporativo",
          description: "Desenvolvedor durante a migração do site corporativo de WordPress para tecnologia CI4",
          image: "/cv/tapestry.png",
          tags: ["PHP", "CI4", "HTML", "Javascript", "CSS", "Jenkins"],
        },
      ],
      viewProject: "Ver",
      code: "Código",
    },
    profile: {
      title: "Perfil",
      text:
        "Arquiteto Técnico Salesforce com mais de 8 anos de experiência, especializado em headless commerce, B2C/B2B Commerce e Service Cloud. Experiência em arquitetar soluções multi-cloud, liderar equipas e implementar fluxos de trabalho impulsionados por IA.",
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
            "Implementação de workflows assistidos por IA com Copilot e prompt engineering (redução de 60% no tempo de geração de documentação).",
          ],
        },
        {
          company: "Wipro",
          role: "Salesforce Technical Consultant | Developer",
          period: "Out 2019 - Nov 2021",
          bullets: [
            "Entrega de soluções Salesforce B2C Commerce Cloud e aplicações internas com Node.js/React/TypeScript.",
            "Construção de pipelines CI/CD e automação de deploys; implementação de GTM e soluções analíticas.",
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
      title: "Resumo Técnico",
      bullets: [
        "Commerce & Salesforce: SFCC (SFRA, PWA Kit), SCAPI, Managed Runtime, Apex, LWC, Flows",
        "DevOps: CI/CD, Jenkins, Docker, Git, Gitlab/GitHub Pipelines",
        "Arquitetura: Microservices, REST APIs, Headless Commerce",
        "IA & Automação: GitHub Copilot, Prompt Engineering, Integração de APIs de IA",
        "Linguagens/Ferramentas: React, NodeJS, TypeScript, JavaScript, Python, MySQL, PHP, GTM, eCDN",
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
      title: "Competências",
      titleHighlight: "Visão geral",
      subtitle: "Tecnologias e ferramentas com que trabalho.",
      list: [
        "Apex & LWC",
        "PWA Kit, SFRA, React, NodeJS",
        "CI/CD, Docker, Jenkins, GitHub Actions",
        "Microservices, REST APIs, Integrações",
        "Desenvolvimento assistido por IA",
      ],
    },
    footer: {
      rights: "Todos os direitos reservados.",
      contactShort: "pmcc995@gmail.com",
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
          impact: "Tempo de carregamento reduzido para 1.5s • Bounce rate diminuiu para 22% • Score Lighthouse de 94/100",
        },
        {
          category: "SEO",
          title: "Plataforma SPA Invisível para Motores de Busca",
          problem: "Uma plataforma de conteúdo construída como SPA (Single Page Application) era praticamente invisível para motores de busca. O tráfego orgânico representava menos de 5% do total, e páginas de produto não eram indexadas.",
          approach: "Desenhei uma estratégia de SEO técnico abrangente: implementação de Server-Side Rendering (SSR) para páginas críticas, geração de meta tags dinâmicas por página, criação de sitemaps automáticos, implementação de dados estruturados (JSON-LD) para produtos e artigos, e otimização de Core Web Vitals. Estabeleci um sistema de pré-renderização para conteúdo estático.",
          impact: "Tráfego orgânico cresceu 340% em 6 meses • 95% das páginas indexadas • Posição média subiu de 47ª para 8ª",
        },
        {
          category: "Integrações de Dados",
          title: "Ecossistema Fragmentado de Dados Empresariais",
          problem: "Uma empresa utilizava mais de 12 sistemas distintos (ERP, CRM, e-commerce, logística) sem integração, resultando em dados duplicados, inconsistências e processos manuais de reconciliação que consumiam 30+ horas semanais.",
          approach: "Arquitetei uma plataforma de integração centralizada usando um padrão Event-Driven Architecture. Desenhei conectores modulares para cada sistema, implementei um barramento de eventos para sincronização em tempo real e criei um data lake unificado com regras de transformação e validação. Incluí dashboards de monitorização para visibilidade total do fluxo de dados.",
          impact: "Eliminação de 95% dos processos manuais • Consistência de dados de 99.7%",
        },
        {
          category: "Escalabilidade",
          title: "API Monolítica sob Pressão de Crescimento",
          problem: "Uma API monolítica que servia uma aplicação em rápido crescimento começou a apresentar timeouts frequentes durante picos de tráfego. Com 10x mais utilizadores em 6 meses, o sistema não escalava e a equipa tinha dificuldade em fazer deploy sem downtime.",
          approach: "Conduzi uma decomposição estratégica do monolito em microserviços, identificando bounded contexts e definindo contratos claros entre serviços. Implementei circuit breakers para resiliência, API gateway para routing inteligente, e uma estratégia de deployment blue-green para zero-downtime. Introduzi auto-scaling baseado em métricas de negócio, não apenas CPU.",
          impact: "Zero downtime em deployments • Suporte a 50x mais tráfego • Tempo de deploy de 45min para 3min",
        },
        {
          category: "Segurança",
          title: "Vulnerabilidades Críticas em Plataforma Financeira",
          problem: "Uma auditoria de segurança a uma plataforma financeira revelou vulnerabilidades críticas: injeção SQL, tokens de sessão previsíveis, ausência de rate limiting e dados sensíveis expostos em logs. A plataforma processava transações de milhares de utilizadores.",
          approach: "Implementei uma abordagem de segurança em profundidade: parameterização completa de queries, rotação de tokens com JWT de curta duração e refresh tokens seguros, rate limiting adaptativo por endpoint e utilizador, encriptação de dados em repouso e em trânsito, e sanitização de logs. Estabeleci um pipeline de CI/CD com análise estática de segurança (SAST) e testes de penetração automatizados.",
          impact: "Zero vulnerabilidades críticas na re-auditoria • Conformidade PCI-DSS alcançada • Zero incidentes de segurança",
        },
      ],
    }
  },
};

type LanguageContextValue = {
  t: Translations;
  locale: string;
  setLocale: (locale: string) => void;
};

const defaultLocale = "en";

const LanguageContext = createContext<LanguageContextValue>({
  t: translations[defaultLocale],
  locale: defaultLocale,
  setLocale: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("locale") || defaultLocale;
    }
    return defaultLocale;
  });

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch (e) {
      // ignore
    }
  }, [locale]);

  const value = useMemo(
    () => ({ t: translations[locale] || translations[defaultLocale], locale, setLocale }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

// Note: we don't export the context default to avoid fast-refresh warnings — use the hooks/Provider exports.
