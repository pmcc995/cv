import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, AlertTriangle, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SolutionItem {
  category: string;
  title: string;
  problem: string;
  approach: string;
  impact: string;
}

interface SolutionCardProps {
  item: SolutionItem;
  index: number;
}

const SolutionCard = ({ item, index }: SolutionCardProps) => {
  const { t } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
        <div>
          <Badge variant="outline" className="mb-3 text-primary border-primary/30">
            {item.category}
          </Badge>
          <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-5">
        {/* Problem */}
        <div className="flex gap-3">
          <div className="mt-1 shrink-0">
            <AlertTriangle size={16} className="text-destructive" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">
              {t.solutions.problemLabel}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.problem}
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className="flex gap-3">
          <div className="mt-1 shrink-0">
            <Lightbulb size={16} className="text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">
              {t.solutions.approachLabel}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.approach}
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="flex gap-3">
          <div className="mt-1 shrink-0">
            <TrendingUp size={16} className="text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">
              {t.solutions.impactLabel}
            </h4>
            <p className="text-sm font-medium text-foreground/90">
              {item.impact}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default SolutionCard;
