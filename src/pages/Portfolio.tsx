import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/i18n/LanguageContext";

const projectImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
];

const projectTags = [
  ["React", "Node.js", "PostgreSQL", "Stripe"],
  ["TypeScript", "Next.js", "D3.js", "Supabase"],
  ["React Native", "TypeScript", "AWS"],
  ["React", "Socket.io", "MongoDB", "Redis"],
  ["Python", "OpenAI", "FastAPI", "React"],
  ["Vue.js", "Laravel", "MySQL", "WebSocket"],
];

const projectUrls = [
  { liveUrl: "#", githubUrl: "#" },
  { liveUrl: "#", githubUrl: "#" },
  { liveUrl: "#" },
  { githubUrl: "#" },
  { liveUrl: "#", githubUrl: "#" },
  { liveUrl: "#" },
];

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = (t.portfolio?.projects ?? []).map((project, index) => ({
    ...project,
    tags: projectTags[index] ?? [],
    ...(projectUrls[index] ?? {}),
  }));

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.portfolio?.title ?? "My"} <span className="gradient-text">{t.portfolio?.titleHighlight ?? "Projects"}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.portfolio?.subtitle ?? "A selection of projects I've worked on."}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
