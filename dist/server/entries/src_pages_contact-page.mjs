import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { c as cn, u as useLanguage, L as Layout, B as Button } from "../chunks/chunk-kd633fta.js";
import "react-router-dom";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];
const Contact = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
  const { toast: toast2 } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactInfo = [
    {
      icon: Mail,
      label: ((_b = (_a = t.contact) == null ? void 0 : _a.info) == null ? void 0 : _b.email) ?? "Email",
      value: ((_d = (_c = t.contact) == null ? void 0 : _c.info) == null ? void 0 : _d.email) ?? "pmcc995@gmail.com",
      href: `mailto:${((_f = (_e = t.contact) == null ? void 0 : _e.info) == null ? void 0 : _f.email) ?? "pmcc995@gmail.com"}`
    },
    {
      icon: Phone,
      label: ((_h = (_g = t.contact) == null ? void 0 : _g.info) == null ? void 0 : _h.phone) ?? "Phone",
      value: ((_j = (_i = t.contact) == null ? void 0 : _i.info) == null ? void 0 : _j.phone) ?? "+351 913 364 268",
      href: `tel:${((_l = (_k = t.contact) == null ? void 0 : _k.info) == null ? void 0 : _l.phone) ?? "+351913364268"}`
    },
    {
      icon: MapPin,
      label: ((_n = (_m = t.contact) == null ? void 0 : _m.info) == null ? void 0 : _n.location) ?? "Location",
      value: ((_p = (_o = t.contact) == null ? void 0 : _o.info) == null ? void 0 : _p.location) ?? "Viana do Castelo, Portugal"
    }
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    toast2({
      title: t.contact.successTitle,
      description: t.contact.successDescription
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
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
            ((_q = t.contact) == null ? void 0 : _q.title) ?? "Get in touch",
            " ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: ((_r = t.contact) == null ? void 0 : _r.titleHighlight) ?? "" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: ((_s = t.contact) == null ? void 0 : _s.subtitle) ?? "Have a project in mind or just want to say hi? My inbox is open." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-2", children: ((_u = (_t = t.contact) == null ? void 0 : _t.form) == null ? void 0 : _u.name) ?? "Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "name",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    placeholder: ((_w = (_v = t.contact) == null ? void 0 : _v.form) == null ? void 0 : _w.namePlaceholder) ?? "Your name",
                    required: true,
                    className: "bg-secondary/50 border-border focus:border-primary"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: ((_y = (_x = t.contact) == null ? void 0 : _x.form) == null ? void 0 : _y.email) ?? "Email" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "email",
                    name: "email",
                    type: "email",
                    value: formData.email,
                    onChange: handleChange,
                    placeholder: ((_A = (_z = t.contact) == null ? void 0 : _z.form) == null ? void 0 : _A.emailPlaceholder) ?? "you@example.com",
                    required: true,
                    className: "bg-secondary/50 border-border focus:border-primary"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-sm font-medium mb-2", children: ((_C = (_B = t.contact) == null ? void 0 : _B.form) == null ? void 0 : _C.subject) ?? "Subject" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "subject",
                  name: "subject",
                  value: formData.subject,
                  onChange: handleChange,
                  placeholder: ((_E = (_D = t.contact) == null ? void 0 : _D.form) == null ? void 0 : _E.subjectPlaceholder) ?? "Subject",
                  required: true,
                  className: "bg-secondary/50 border-border focus:border-primary"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: ((_G = (_F = t.contact) == null ? void 0 : _F.form) == null ? void 0 : _G.message) ?? "Message" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  id: "message",
                  name: "message",
                  value: formData.message,
                  onChange: handleChange,
                  placeholder: ((_I = (_H = t.contact) == null ? void 0 : _H.form) == null ? void 0 : _I.messagePlaceholder) ?? "Write your message...",
                  rows: 6,
                  required: true,
                  className: "bg-secondary/50 border-border focus:border-primary resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                variant: "hero",
                size: "lg",
                className: "w-full sm:w-auto",
                disabled: isSubmitting,
                children: isSubmitting ? ((_K = (_J = t.contact) == null ? void 0 : _J.form) == null ? void 0 : _K.sending) ?? "Sending..." : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Send, { size: 18 }),
                  ((_M = (_L = t.contact) == null ? void 0 : _L.form) == null ? void 0 : _M.send) ?? "Send message"
                ] })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          className: "space-y-8",
          children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: contactInfo.map((item) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-4 p-5 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(item.icon, { className: "text-primary", size: 22 }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.label }),
                    item.href ? /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: item.href,
                        className: "font-medium hover:text-primary transition-colors",
                        children: item.value
                      }
                    ) : /* @__PURE__ */ jsx("p", { className: "font-medium", children: item.value })
                  ] })
                ]
              },
              item.label
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-border", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: ((_N = t.contact) == null ? void 0 : _N.social) ?? "Follow me on social media" }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: socialLinks.map((social) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: social.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "p-3 rounded-xl bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300",
                  "aria-label": social.label,
                  children: /* @__PURE__ */ jsx(social.icon, { size: 22 })
                },
                social.label
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-primary/5 border border-primary/20", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-primary animate-pulse" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: ((_O = t.contact) == null ? void 0 : _O.available) ?? "Available for work" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: ((_P = t.contact) == null ? void 0 : _P.availableDescription) ?? "Open to new opportunities and collaborations." })
            ] })
          ]
        }
      )
    ] })
  ] }) }) });
};
function Page() {
  return /* @__PURE__ */ jsx(Contact, {});
}
export {
  Page
};
