import { Dumbbell, Heart, Users, User, Trophy, Apple, LucideIcon } from "lucide-react";

export interface Discipline {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const disciplines: Discipline[] = [
  {
    id: "kickboxing",
    title: "Kickboxing",
    description:
      "Klassisches Kickboxen/Thaiboxen mit Fokus auf Technik-, Konditions- und Krafttraining.",
    image: "/service-competition.jpg",
    icon: Dumbbell,
  },
  {
    id: "luta-livre",
    title: "Luta Livre",
    description:
      "Brasilianisches Submission Wrestling mit Wurzeln im Judo mit Hebel- und Würgetechniken.",
    image: "/service-nutrition.png",
    icon: Apple,
  },
  {
    id: "mma",
    title: "MMA",
    description:
      "Mixed Martial Arts als Ganzkörpertraining: Kraft, Taktik und technische Vielfalt.",
    image: "/service-personal.jpg",
    icon: Heart,
  },
  {
    id: "boxing",
    title: "Boxing",
    description:
      "Boxtraining für saubere Schlagtechnik, Koordination, Agilität und Fußarbeit.",
    image: "/service-group.png",
    icon: Users,
  },
  {
    id: "functional",
    title: "Functional Fitness",
    description:
      "Athletiktraining mit Mobility und funktionellen Kraftübungen für den Alltag und den Ring. ",
    image: "/service-cardio.png",
    icon: User,
  },
  {
    id: "yoga",
    title: "Yoga",
    description:
      "Ganzheitliches Training für Körper und Geist. Eine perfekte Ergänzung zu unseren Kampfsportarten.",
    image: "/service-weight.jpg",
    icon: Trophy,
  },
];
