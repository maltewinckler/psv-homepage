export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  certs: string[];
}

export const trainers: Trainer[] = [
  {
    id: "daniel",
    name: "Daniel Dahlhaus",
    role: "Kickboxen und Jugendtrainer",
    image: "/trainer-1.png",
    certs: ["Abteilungsleiter"],
  },
  {
    id: "chris",
    name: "Chris Goebel",
    role: "Thaiboxen",
    image: "/trainer-2.png",
    certs: ["Stellv. Abteilungsleiter"],
  },
  {
    id: "adrian",
    name: "Adrian Bogs",
    role: "Luta Livre",
    image: "/trainer-3.png",
    certs: [],
  },
  {
    id: "ismail",
    name: "Ismail Celik",
    role: "MMA (Standup und Boden)",
    image: "/trainer-1.png",
    certs: [],
  },
  {
    id: "phillip",
    name: "Phillip Dahmen",
    role: "Boxen",
    image: "/trainer-1.png",
    certs: [],
  },
  {
    id: "rosemarie",
    name: "Rosemarie Lill",
    role: "Kickboxen, Kindertraining, Yoga",
    image: "/trainer-1.png",
    certs: [],
  },
  {
    id: "xitao",
    name: "Xitao Wang",
    role: "Functional Fitness, Thaiboxen",
    image: "/trainer-1.png",
    certs: [],
  },
];
