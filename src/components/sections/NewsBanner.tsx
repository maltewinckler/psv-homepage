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
    <div className="bg-brand-primary py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-2 text-brand-dark hover:text-black transition-colors group"
            >
              {item.icon && (
                <span className="text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              )}
              <span className="font-black text-xs md:text-sm uppercase tracking-widest">
                {item.title}
              </span>
              {item.badge && (
                <span className="bg-black text-brand-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
              )}
              <svg
                className="w-4 h-4 text-brand-dark group-hover:translate-x-1 transition-transform"
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
