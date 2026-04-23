export interface NotificationItem {
  id: string;
  title: string;
  icon?: string;
  badge?: string;
  href: string;
}

export const notificationItems: NotificationItem[] = [
  {
    id: "relocation",
    title: "Wir ziehen um: Alle Details unter Aktuelles",
    icon: "🚀",
    badge: "Neu",
    href: "/blog#wir-ziehen-um",
  },
];
