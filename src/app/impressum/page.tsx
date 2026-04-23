import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link
            href="/"
            className="text-brand-primary hover:text-foreground text-sm font-medium transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>

        <h1 className="text-3xl lg:text-4xl font-black text-foreground uppercase tracking-tighter mb-12">
          Impressum
        </h1>

        <div className="space-y-8 text-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="font-bold">Polizei-Sportverein Essen 1922 e. V.</p>
            <p className="mt-2">
              Theodor-Althoff-Straße 4<br />
              45133 Essen<br />
              Deutschland / Germany
            </p>
            <p className="mt-4">
              <span className="font-bold">Kontakt:</span><br />
              <a href="tel:02018291922" className="text-brand-primary hover:underline">0201 – 829 1922</a><br />
              <a href="mailto:kontakt@psv-essen.de" className="text-brand-primary hover:underline">kontakt@psv-essen.de</a>
            </p>
            <p className="mt-4">
              Vereinskennziffer: 1003221
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="font-bold">Vertretungsberechtigt:</p>
            <p className="mt-2">
              Olaf Deneke (2. Vorsitzender)<br />
              Theodor-Althoff-Straße 4<br />
              45133 Essen<br />
              Deutschland / Germany
            </p>
          </section>

          <section>
            <p className="text-xs text-white/60 italic">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              Haftung für Inhalte
            </h2>
            <p className="mb-4">
              Wir sind als Diensteanbieter für unsere Inhalte auf den Seiten dieser Website nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter nicht verpflichtet, im Rahmen der Veröffentlichung dieser Website übermittelte oder gespeicherte Informationen anderer Quellen zu überwachen oder nach rechtswidrigen Tätigkeiten zu ergründen.
            </p>
            <p className="mb-4">
              Gleichwohl sind wir nach allgemeiner Gesetzgebung zur Sperrung oder Entfernung der Nutzung übermittelter Informationen verpflichtet, sofern dies gesetzlich notwendig wird. Diese Verpflichtungen werden allerdings erst mit dem Zeitpunkt unserer Kenntnisnahme von einer möglichen konkreten Rechtsverletzung möglich. Bei Kenntnisnahme einer konkreten Rechtsverletzung werden wir etwaige dafür verantwortliche Inhalte umgehend und vollständig entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              Urheberrecht
            </h2>
            <p className="mb-4">
              Alle von uns erstellten Inhalte auf den Seiten dieser Website unterliegen der deutschen Gesetzgebung zum Urheberrecht. Jedwede Reproduktion, Nachbildung, Veränderung sowie alle Arten der Nutzbarmachung bedürfen unserer ausdrücklichen Zustimmung in Schriftform. Alle Inhalte dieser Website sind für rein privaten Gebrauch bestimmt. Wir untersagen ausdrücklich jedwede kommerzielle Nutzung ohne unsere formelle schriftliche Zustimmung.
            </p>
            <p className="mb-4">
              Für alle Inhalte, die auf dieser Website veröffentlicht und zugänglich gemacht werden und nicht unserer eigenen Urheberschaft unterliegen, halten wir die gesetzlichen Bestimmungen der Urheberschaft Dritter ein. Für alle derartigen Inhalte liegen uns schriftliche Erlaubnisse der jeweiligen Urheber zur Nutzung und Veröffentlichung vor. Sollte davon unbenommen dennoch der Hinweis auf eine mögliche Verletzung der Urheberschaft Dritter bestehen, bitten wir um einen entsprechenden Hinweis an die obenstehende Erreichbarkeit. Wir werden bei Vorliegen eines berechtigten Anliegens den betreffenden Inhalt umgehend und vollständig entfernen.
            </p>
            <p className="text-xs text-white/60">
              Weiter gehende Informationen zum Schutz persönlicher Daten sind der Erklärung zum Datenschutz zu entnehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
