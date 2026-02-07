import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.about?.title ?? t.profile?.title ?? "About"} <span className="gradient-text">{t.about?.titleHighlight ?? ""}</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>{t.about?.description1 ?? t.about?.summary ?? t.profile?.text ?? ""}</p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                <MapPin size={20} className="text-primary" />
                <span className="text-sm">{t.about?.location}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                <GraduationCap size={20} className="text-primary" />
                <span className="text-sm">{t.about?.education}</span>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-primary" />
              {t.about?.experienceTitle ?? t.experience?.title ?? "Experience"}
            </h3>

            <div className="space-y-6">
              {(t.about?.experiences ?? t.experience?.items ?? []).map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <h4 className="font-semibold">{exp.title}</h4>
                  <p className="text-sm text-primary mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
