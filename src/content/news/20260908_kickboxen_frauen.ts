import type { BlogPost } from "../blogPosts";

export const blogPost: BlogPost = {
  slug: "kickboxen-fuer-frauen",
  title: "Neuer Kickboxing-Workout-Kurs für Frauen",
  publishedAt: "2026-09-08",
  author: "Team PSV Essen",
  readingTime: "2 Min.",
  tags: ["Neuer Kurs", "Frauen"],
  sections: [
    {
      paragraphs: [
        "Große Neuigkeiten: Wir haben einen neuen Kurs! Ab sofort wird Lena montags von 17:30 Uhr bis 18:45 Uhr einen Kickboxing-Workout-Kurs nur für Frauen anbieten. Der Kurs ist für Probetrainings offen. Meldet euch einfach bei Whatsapp oder Email.",
      ],
      image: {
        src: "/images/blog/kickboxing_frauen_flyer.jpg",
        alt: "Flyer für den neuen Kickboxing-Workout-Kurs für Frauen",
      },
    },
  ],
};
