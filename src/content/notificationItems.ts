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
    title: "Wir ziehen um: Alle Details und Spendenaufruf unter 'Aktuelles'",
    icon: "🚀",
    badge: "Neu",
    href: "/aktuelles#wir-ziehen-um",
  },
];
