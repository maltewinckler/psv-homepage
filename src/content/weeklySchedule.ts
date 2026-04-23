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
      { time: "16:15 - 17:15", discipline: "Kinder (Kickboxen)" },
      { time: "17:30 - 19:00", discipline: "Jugendliche (Kickboxen)" },
      { time: "19:00 - 20:00", discipline: "Freikampf (Stand/Boden)" },
    ],
  },
  {
    day: "Dienstag",
    sessions: [
      { time: "17:30 - 19:00", discipline: "Muay Thai Grundlagen" },
      { time: "19:00 - 20:30", discipline: "Freikampf (Standkampf/Muay Thai)" },
    ],
  },
  {
    day: "Mittwoch",
    sessions: [
      { time: "15:00 - 16:00", discipline: "Reha- u. Funktionstraining" },
      { time: "16:00 - 17:00", discipline: "Kinder (Luta Livre)" },
      { time: "17:30 - 19:00", discipline: "Jugendliche (Kickboxen)" },
      { time: "19:00 - 20:00", discipline: "Luta Livre" },
      { time: "20:00 - 21:30", discipline: "Freikampf (Stand/Boden)" },
    ],
  },
  {
    day: "Donnerstag",
    sessions: [
      { time: "17:00 - 18:30", discipline: "Muay Thai Grundlagen" },
      { time: "18:30 - 20:00", discipline: "Freikampf (Grappling/Boden)" },
    ],
  },
  {
    day: "Freitag",
    sessions: [
      { time: "15:45 - 16:45", discipline: "Kinder (Kickboxen)" },
      { time: "16:45 - 17:45", discipline: "Kinder (Kickboxen)" },
      { time: "18:00 - 19:00", discipline: "Luta Livre" },
      { time: "19:00 - 20:00", discipline: "Boxen" },
      { time: "20:00 - 21:00", discipline: "Open Gym" },
    ],
  },
  {
    day: "Samstag",
    sessions: [
      { time: "10:30 - 12:30", discipline: "Functional Fitness / Athletiktraining" },
      { time: "12:30 - 13:30", discipline: "Tai Chi/Qi Gong" },
    ],
  },
];
