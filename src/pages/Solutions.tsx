import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SolutionCard from "@/components/SolutionCard";
import { useLanguage } from "@/i18n/LanguageContext";

const Solutions = () => {
  const { t } = useLanguage();

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
              {t.solutions?.title ?? "Solutions"}{" "}
              <span className="gradient-text">{t.solutions?.titleHighlight ?? ""}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.solutions?.subtitle ?? "Technical solutions and case studies."}
            </p>
          </motion.div>

          {/* Solutions List */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {(t.solutions?.items ?? []).map((item, index) => (
              <SolutionCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
