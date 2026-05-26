export interface TrainingSession {
  time: string;
  discipline: string;
}

export interface DaySchedule {
  day: string;
  sessions: TrainingSession[];
}

export const weeklySchedule: DaySchedule[] = [
  {
    day: "Montag",
    sessions: [
      { time: "16:15 - 17:15", discipline: "Muay Thai Kinder" },
      { time: "17:30 - 19:00", discipline: "Muay Thai Jugend" },
      { time: "19:00 - 20:30", discipline: "Cross-Over (Stand und Boden)" },
    ],
  },
  {
    day: "Dienstag",
    sessions: [
      { time: "17:30 - 19:00", discipline: "Muay Thai (K1)" },
      { time: "19:00 - 20:30", discipline: "Muay Thai" },
    ],
  },
  {
    day: "Mittwoch",
    sessions: [
      { time: "17:30 - 19:00", discipline: "Muay Thai Jugend" },
      { time: "19:00 - 20:00", discipline: "Luta Livre" },
      { time: "20:00 - 21:30", discipline: "Cross-Over (Stand und Boden)" },
    ],
  },
  {
    day: "Donnerstag",
    sessions: [
      { time: "17:00 - 18:30", discipline: "Muay Thai (Basics)" },
      { time: "18:30 - 20:00", discipline: "Muay Thai" },
    ],
  },
  {
    day: "Freitag",
    sessions: [
      { time: "15:45 - 16:45", discipline: "Muay Thai (Kinder)" },
      { time: "16:45 - 17:45", discipline: "Muay Thai (Kinder)" },
      { time: "18:00 - 19:00", discipline: "Luta Livre" },
      { time: "19:00 - 20:00", discipline: "Muay Thai (Boxen)" },
      { time: "20:00 - 21:00", discipline: "Open Gym" },
    ],
  },
  {
    day: "Samstag",
    sessions: [
      { time: "10:30 - 12:30", discipline: "Functional Fitness + Open Gym" },
      { time: "12:30 - 13:30", discipline: "Yoga" },
    ],
  },
];
