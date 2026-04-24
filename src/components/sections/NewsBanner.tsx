import Link from "next/link";
import { NotificationItem } from "@/content/notificationItems";

interface NewsBannerProps {
  items: NotificationItem[];
}

export default function NewsBanner({ items }: NewsBannerProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="relative bg-brand-primary py-4 md:py-5 px-4 shadow-xl">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 md:gap-4 text-brand-dark hover:text-black transition-colors group"
            >
              {item.icon && (
                <span className="text-2xl md:text-3xl">
                  {item.icon}
                </span>
              )}
              <span className="font-black text-sm md:text-lg uppercase tracking-wider text-black">
                {item.title}
              </span>
              {item.badge && (
                <span className="bg-black text-brand-primary px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-black uppercase tracking-wider rounded-full shadow-md">
                  {item.badge}
                </span>
              )}
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-brand-dark group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
