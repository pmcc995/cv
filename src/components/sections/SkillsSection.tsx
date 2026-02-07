import { motion } from "framer-motion";
import { Code, Database, Palette, Server, Smartphone, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillsSection = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      title: t.skills?.frontend?.title ?? "Frontend",
      description: t.skills?.frontend?.description ?? "HTML, React, TypeScript, CSS, Tailwind, Salesforce LWC, Chacra UI",
    },
    {
      icon: Server,
      title: t.skills?.backend?.title ?? "Backend",
      description: t.skills?.backend?.description ?? "Node, Express, Nest, Python, Salesforce Apex, REST, GraphQL, API Development, Microservices",
    },
    {
      icon: Database,
      title: t.skills?.database?.title ?? "Database",
      description: t.skills?.database?.description ?? "MySQL, Postgres, MongoDB, Salesforce SOQL",
    },
    {
      icon: Palette,
      title: t.skills?.design?.title ?? "Design",
      description: t.skills?.design?.description ?? "Figma, UX",
    },
    {
      icon: Zap,
      title: t.skills?.devops?.title ?? "DevOps",
      description: t.skills?.devops?.description ?? "CI/CD, Docker, Gitlab Pipeline, GitHub Actions, Jenkins",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.skills?.title ?? "Skills"} <span className="gradient-text">{t.skills?.titleHighlight ?? "Overview"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.skills?.subtitle ?? "Technologies and tools I work with."}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
