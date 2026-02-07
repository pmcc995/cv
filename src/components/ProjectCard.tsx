import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  tags = [],
  image,
  liveUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {liveUrl && (
            <Button variant="hero" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                {t?.portfolio?.viewProject ?? "View"}
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="heroOutline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                {t?.portfolio?.code ?? "Code"}
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {(tags || []).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-secondary/70 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
