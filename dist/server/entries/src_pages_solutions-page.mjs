import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { c as cn, u as useLanguage, L as Layout } from "../chunks/chunk-kd633fta.js";
import { cva } from "class-variance-authority";
import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import "react";
import "react-router-dom";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const SolutionCard = ({ item, index }) => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "px-6 pt-6 pb-4 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "mb-3 text-primary border-primary/30", children: item.category }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground", children: item.title })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "mt-1 shrink-0", children: /* @__PURE__ */ jsx(AlertTriangle, { size: 16, className: "text-destructive" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground mb-1", children: t.solutions.problemLabel }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.problem })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "mt-1 shrink-0", children: /* @__PURE__ */ jsx(Lightbulb, { size: 16, className: "text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground mb-1", children: t.solutions.approachLabel }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.approach })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "mt-1 shrink-0", children: /* @__PURE__ */ jsx(TrendingUp, { size: 16, className: "text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground mb-1", children: t.solutions.impactLabel }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground/90", children: item.impact })
            ] })
          ] })
        ] })
      ]
    }
  );
};
const Solutions = () => {
  var _a, _b, _c, _d;
  const { t } = useLanguage();
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
            ((_a = t.solutions) == null ? void 0 : _a.title) ?? "Solutions",
            " ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: ((_b = t.solutions) == null ? void 0 : _b.titleHighlight) ?? "" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: ((_c = t.solutions) == null ? void 0 : _c.subtitle) ?? "Technical solutions and case studies." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "space-y-8 max-w-4xl mx-auto", children: (((_d = t.solutions) == null ? void 0 : _d.items) ?? []).map((item, index) => /* @__PURE__ */ jsx(SolutionCard, { item, index }, index)) })
  ] }) }) });
};
function Page() {
  return /* @__PURE__ */ jsx(Solutions, {});
}
export {
  Page
};
