import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { u as useLanguage, B as Button, L as Layout } from "../chunks/chunk-kd633fta.js";
import { ExternalLink, Github } from "lucide-react";
import "react";
import "react-router-dom";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const ProjectCard = ({
  title,
  description,
  tags = [],
  image,
  liveUrl,
  githubUrl,
  index = 0
}) => {
  var _a, _b;
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "group relative rounded-2xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-500",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-52 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: title,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3", children: [
            liveUrl && /* @__PURE__ */ jsx(Button, { variant: "hero", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: liveUrl, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(ExternalLink, { size: 16 }),
              ((_a = t == null ? void 0 : t.portfolio) == null ? void 0 : _a.viewProject) ?? "View"
            ] }) }),
            githubUrl && /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: githubUrl, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(Github, { size: 16 }),
              ((_b = t == null ? void 0 : t.portfolio) == null ? void 0 : _b.code) ?? "Code"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4 line-clamp-2", children: description }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: (tags || []).map((tag, index2) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "px-3 py-1 text-xs rounded-full bg-secondary/70 text-muted-foreground",
              children: tag
            },
            index2
          )) })
        ] })
      ]
    }
  );
};
const projectTags = [
  ["React", "Node.js", "PostgreSQL", "Stripe"],
  ["TypeScript", "Next.js", "D3.js", "Supabase"],
  ["React Native", "TypeScript", "AWS"],
  ["React", "Socket.io", "MongoDB", "Redis"],
  ["Python", "OpenAI", "FastAPI", "React"],
  ["Vue.js", "Laravel", "MySQL", "WebSocket"]
];
const projectUrls = [
  { liveUrl: "#", githubUrl: "#" },
  { liveUrl: "#", githubUrl: "#" },
  { liveUrl: "#" },
  { githubUrl: "#" },
  { liveUrl: "#", githubUrl: "#" },
  { liveUrl: "#" }
];
const Portfolio = () => {
  var _a, _b, _c, _d;
  const { t } = useLanguage();
  const projects = (((_a = t.portfolio) == null ? void 0 : _a.projects) ?? []).map((project, index) => ({
    ...project,
    tags: projectTags[index] ?? [],
    ...projectUrls[index] ?? {}
  }));
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
            ((_b = t.portfolio) == null ? void 0 : _b.title) ?? "My",
            " ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: ((_c = t.portfolio) == null ? void 0 : _c.titleHighlight) ?? "Projects" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: ((_d = t.portfolio) == null ? void 0 : _d.subtitle) ?? "A selection of projects I've worked on." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects == null ? void 0 : projects.map((project, index) => /* @__PURE__ */ jsx(ProjectCard, { ...project, index }, project.title)) })
  ] }) }) });
};
function Page() {
  return /* @__PURE__ */ jsx(Portfolio, {});
}
export {
  Page
};
