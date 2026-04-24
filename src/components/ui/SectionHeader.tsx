import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
}

export function SectionHeader({ subtitle, title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-12 bg-brand-primary"></div>
        <span className="text-brand-primary font-black text-xs sm:text-sm tracking-[0.2em] uppercase">
          {subtitle}
        </span>
        <div className="h-px w-12 bg-brand-primary"></div>
      </div>
      <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-foreground mb-6 uppercase tracking-tighter">
        {title}
      </h2>
    </motion.div>
  );
}
