import { jsxs, jsx } from "react/jsx-runtime";
import { u as useLanguage, B as Button, L as Layout } from "../chunks/chunk-kd633fta.js";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown, Code, Server, Database, Palette, Zap, MapPin, GraduationCap, Briefcase, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const HeroSection = () => {
  var _a, _b, _c, _d, _e, _f;
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-glow opacity-30 animate-glow-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float", style: { animationDelay: "3s" } }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8",
          children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16, className: "text-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: ((_a = t.hero) == null ? void 0 : _a.badge) ?? "Developer" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6",
          children: [
            ((_b = t.hero) == null ? void 0 : _b.greeting) ?? "Hi, I'm",
            " ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: ((_c = t.hero) == null ? void 0 : _c.name) ?? "Pedro Cerqueira" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto",
          children: ((_d = t.hero) == null ? void 0 : _d.subtitle) ?? "I build performant web applications and Salesforce solutions."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          className: "flex flex-col sm:flex-row items-center justify-center gap-4",
          children: [
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: ((_e = t.hero) == null ? void 0 : _e.viewProjects) ?? "View projects" }) }),
            /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: ((_f = t.hero) == null ? void 0 : _f.contactMe) ?? "Contact me" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.8 },
          className: "absolute bottom-8 left-1/2 -translate-x-1/2",
          children: /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { y: [0, 10, 0] },
              transition: { duration: 2, repeat: Infinity },
              className: "p-2 rounded-full border border-border text-muted-foreground",
              children: /* @__PURE__ */ jsx(ArrowDown, { size: 20 })
            }
          )
        }
      )
    ] }) })
  ] });
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};
const SkillsSection = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
  const { t } = useLanguage();
  const skills = [
    {
      icon: Code,
      title: ((_b = (_a = t.skills) == null ? void 0 : _a.frontend) == null ? void 0 : _b.title) ?? "Frontend",
      description: ((_d = (_c = t.skills) == null ? void 0 : _c.frontend) == null ? void 0 : _d.description) ?? "HTML, React, TypeScript, CSS, Tailwind, Salesforce LWC, Chacra UI"
    },
    {
      icon: Server,
      title: ((_f = (_e = t.skills) == null ? void 0 : _e.backend) == null ? void 0 : _f.title) ?? "Backend",
      description: ((_h = (_g = t.skills) == null ? void 0 : _g.backend) == null ? void 0 : _h.description) ?? "Node, Express, Nest, Python, Salesforce Apex, REST, GraphQL, API Development, Microservices"
    },
    {
      icon: Database,
      title: ((_j = (_i = t.skills) == null ? void 0 : _i.database) == null ? void 0 : _j.title) ?? "Database",
      description: ((_l = (_k = t.skills) == null ? void 0 : _k.database) == null ? void 0 : _l.description) ?? "MySQL, Postgres, MongoDB, Salesforce SOQL"
    },
    {
      icon: Palette,
      title: ((_n = (_m = t.skills) == null ? void 0 : _m.design) == null ? void 0 : _n.title) ?? "Design",
      description: ((_p = (_o = t.skills) == null ? void 0 : _o.design) == null ? void 0 : _p.description) ?? "Figma, UX"
    },
    {
      icon: Zap,
      title: ((_r = (_q = t.skills) == null ? void 0 : _q.devops) == null ? void 0 : _r.title) ?? "DevOps",
      description: ((_t = (_s = t.skills) == null ? void 0 : _s.devops) == null ? void 0 : _t.description) ?? "CI/CD, Docker, Gitlab Pipeline, GitHub Actions, Jenkins"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-card/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
            ((_u = t.skills) == null ? void 0 : _u.title) ?? "Skills",
            " ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: ((_v = t.skills) == null ? void 0 : _v.titleHighlight) ?? "Overview" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: ((_w = t.skills) == null ? void 0 : _w.subtitle) ?? "Technologies and tools I work with." })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: skills.map((skill, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: itemVariants,
            className: "group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(skill.icon, { className: "text-primary", size: 24 }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: skill.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: skill.description })
            ]
          },
          i
        ))
      }
    )
  ] }) });
};
const AboutSection = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: [
            ((_a = t.about) == null ? void 0 : _a.title) ?? ((_b = t.profile) == null ? void 0 : _b.title) ?? "About",
            " ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: ((_c = t.about) == null ? void 0 : _c.titleHighlight) ?? "" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 text-muted-foreground mb-8", children: /* @__PURE__ */ jsx("p", { children: ((_d = t.about) == null ? void 0 : _d.description1) ?? ((_e = t.about) == null ? void 0 : _e.summary) ?? ((_f = t.profile) == null ? void 0 : _f.text) ?? "" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 20, className: "text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: (_g = t.about) == null ? void 0 : _g.location })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border", children: [
              /* @__PURE__ */ jsx(GraduationCap, { size: 20, className: "text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: (_h = t.about) == null ? void 0 : _h.education })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 },
        children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { size: 20, className: "text-primary" }),
            ((_i = t.about) == null ? void 0 : _i.experienceTitle) ?? ((_j = t.experience) == null ? void 0 : _j.title) ?? "Experience"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: (((_k = t.about) == null ? void 0 : _k.experiences) ?? ((_l = t.experience) == null ? void 0 : _l.items) ?? []).map((exp, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: index * 0.1 },
              className: "relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-1", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 14 }),
                  exp.period
                ] }),
                /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: exp.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-primary mb-1", children: exp.company }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: exp.description })
              ]
            },
            index
          )) })
        ]
      }
    )
  ] }) }) });
};
const Index = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(SkillsSection, {}),
    /* @__PURE__ */ jsx(AboutSection, {})
  ] });
};
function Page() {
  return /* @__PURE__ */ jsx(Index, {});
}
export {
  Page
};
