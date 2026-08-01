export interface TrainingSession {
  time: string;
  discipline: string;
}

export interface DaySchedule {
  day: string;
  facilityId?: string;
  sessions: TrainingSession[];
}

export const weeklySchedule: DaySchedule[] = [
  {
    day: "Montag",
    facilityId: "burggymnasium",
    sessions: [
      { time: "17:00 - 22:00", discipline: "In Klärung." },
    ],
  },
  {
    day: "Dienstag",
    facilityId: "frida-levy-gesamtschule",
    sessions: [
      { time: "19:00 - 20:30", discipline: "Muay Thai & Bodenkampf" },
    ],
  },
  {
    day: "Mittwoch",
    facilityId: "burggymnasium",
    sessions: [
      { time: "17:00 - 18:30", discipline: "K1 (ab dem 19.08.)" },
      { time: "18:30 - 20:00", discipline: "Bodenkampf" },
    ],
  },
  {
    day: "Donnerstag",
    facilityId: "burggymnasium",
    sessions: [
      { time: "18:30 - 20:00", discipline: "Muay Thai" },
    ],
  },
  {
    day: "Samstag",
    facilityId: "frida-levy-gesamtschule",
    sessions: [
      { time: "16:00 - 18:00", discipline: "Fighters Fitness" },
    ],
  },
  {
    day: "Sonntag",
    facilityId: "frida-levy-gesamtschule",
    sessions: [
      { time: "15:30 - 16:30", discipline: "Muay Thai (Fokus Boxen)" },
      { time: "16:30 - 17:30", discipline: "Open Gym & Sparring" },
    ],
  },
];
