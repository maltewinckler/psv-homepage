export interface NotificationItem {
  id: string;
  title: string;
  icon?: string;
  badge?: string;
  href: string;
}

export const notificationItems: NotificationItem[] = [
  {
    id: "kickboxen-frauen",
    title: "Immer montags: Neuer Kickbox-Kurs nur für Frauen",
    icon: "🥊",
    badge: "Infos",
    href: "/aktuelles#kickboxen-fuer-frauen",
  },
];
