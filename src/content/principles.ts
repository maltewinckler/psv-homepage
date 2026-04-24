export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Offen für Alle!",
    description: (
        "Bei uns ist jede*r willkommen: unabhängig von Alter, Geschlecht, Herkunft oder Erfahrungslevel. "
        + "Wir sind eine politik-, gesinnungs- und religionsfreier Gemeinschaft. "
        + "Jede Form von Extremismus hat bei uns keinen Platz."
    ),
  },
  {
    title: "Unbedingter Respekt!",
    description: (
        "Respekt und Rücksichtnahme stehen bei uns an erster Stelle. "
        + "Wir trainieren partnerschaftlich und achten stets auf unser Gegenüber. "
        + "Wer unnötig hart und aggressiv agiert, wird vom Training ausgeschlossen."
    ),
  },
  {
    title: "Gib alles was du willst!",
    description: (
        "Du bestimmst dein eigenes Tempo. Ob beim Kondi-Training oder beim Sparring "
        + "– deine Grenzen werden immer respektiert. Fit wird jeder der mitmacht. "
        + "Kommuniziere Einschränkungen oder Verletzungen bitte sofort."
    ),
  },
  {
    title: "Sauberkeit + Ordnung!",
    description: (
        "Unser Gym ist wie ein zweites Zuhause. Daher halten wir es gemeinsam sauber und ordentlich. "
        + "Räume nach der Benutzung die Sportgeräte weg und hinterlasse alles so, wie du es vorfinden möchtest. "
    ),
  },
];
