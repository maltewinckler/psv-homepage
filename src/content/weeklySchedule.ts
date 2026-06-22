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
      { time: "17:00 - 22:00", discipline: "In Klärung." },
    ],
  },
  {
    day: "Dienstag",
    sessions: [
      { time: "19:00 - 20:30", discipline: "Muay Thai & Bodenkampf" },
    ],
  },
  {
    day: "Mittwoch",
    sessions: [
      { time: "17:00 - 18:30", discipline: "Muay Thai" },
      { time: "18:30 - 20:00", discipline: "Luta Livre" },
    ],
  },
  {
    day: "Donnerstag",
    sessions: [
      { time: "18:30 - 20:00", discipline: "Muay Thai" },
    ],
  },
  {
    day: "Samstag",
    sessions: [
      { time: "16:00 - 18:00", discipline: "Fighters Fitness" },
    ],
  },
  {
    day: "Sonntag",
    sessions: [
      { time: "15:30 - 16:30", discipline: "Muay Thai (Fokus Boxen)" },
      { time: "16:30 - 17:30", discipline: "Open Gym & Sparring" },
    ],
  },
];
