import Link from "next/link";

export default function DatenschutzPage() {
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
          Datenschutz
        </h1>

        <div className="space-y-8 text-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              Vorbemerkung
            </h2>
            <p className="mb-4">
              Willkommen auf unseren Seiten. Diese Erklärungen zum Datenschutz beruhen unter anderem auf der Datenschutz-Grundverordnung der EU. Unsere Website behandelt Ihre persönlichen Daten vertraulich und verarbeitet Ihre personenbezogenen Daten lediglich im Rahmen der gesetzlichen Bestimmungen. Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Daher ist das Einholen der Informationen unserer Webseiten grundsätzlich möglich, ohne personenbezogene Daten wie Name, Anschrift, Telefonnummer oder E-Mail-Adresse anzugeben.
            </p>
            <p className="mb-4">
              Möglicherweise ist bei der Nutzung weitergehender Serviceleistungen, die Verarbeitung personenbezogener Daten notwendig. Bei einer solchen notwendigen Verarbeitung persönlicher Daten halten wir uns strikt an die gesetzlichen Grundlagen. Sollte die Verarbeitung sich nicht innerhalb gesetzlich geregelter Grenzen bewegen, holen wir vor der Erfassung und Verarbeitung der personenbezogenen Daten eine Erlaubnis der betroffenen Personen ein.
            </p>
            <p className="mb-4">
              Werden von uns personenbezogene Daten – wie beispielsweise Vorname und Name, Adresse, Telefon- oder Mobilfunkrufnummer oder E-Mail-Adresse – verarbeitet, erfolgt dies ausnahmslos unter Einhaltung der Bestimmungen der der Datenschutz-Grundverordnung und der für uns national geltenden Datenschutzbestimmungen. Ziel dieser Erklärungen zum Datenschutz ist die Information über Art, Umfang und Zweck der Datenerhebung und der weiteren Nutzung und Verarbeitung personenbezogener Daten. Wir wollen an dieser Stelle öffentlich über die Rechte aufklären, die jeder betroffenen Person im Hinblick auf den Datenschutz zustehen.
            </p>
            <p className="mb-4">
              Verantwortlich für die Verarbeitung personenbezogener Daten ist der Polizei-Sportverein Essen 1922 e.V.. Um einen möglichst umfassenden und vollständigen Schutz der über unsere Internetseiten erfassten und verarbeiteten personenbezogenen Daten zu gewährleisten, haben wir umfangreiche Maßnahmen in organisatorischer und technischer Hinsicht umgesetzt. Grundsätzlich werden beim Aufruf von Internetseiten oder bei der Kontaktaufnahme Daten übertragen und Sicherheitslücken können nie ausgeschlossen werden. Ein absoluter Schutz vor der Kenntnisnahme durch Dritte ist nicht zu realisieren. Daher bieten wir jeder betroffenen Person an, personenbezogene Daten auch auf einem alternativen Weg. Die sind zum Beispiel postalische Kontaktaufnahme oder das Telefon.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              1.0 Begriffsbestimmungen
            </h2>
            <p className="mb-4">
              Sowohl die Datenschutzbestimmungen der Europäischen Datenschutz-Grundverordnung (DS-GVO) als auch nationale Datenschutzbestimmungen verwenden Begriffe, auf denen diese Erklärungen zum Datenschutz vom Polizei-Sportverein Essen 1922 e.V. beruhen. Um unsere Erklärungen zum Datenschutz verständlich und einfach lesbar zu erläutern, werden hier zunächst die Begriffe aufgeführt.
            </p>
            <p className="mb-4">
              Folgende Begriffe werden in unseren Erklärungen zum Datenschutz unter anderem verwendet:
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.1 Personenbezogene Daten</h3>
            <p className="mb-4">
              Das sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen. Als identifizierbar wird eine natürliche Person angesehen, welche direkt oder indirekt identifiziert werden kann.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.2 Betroffene Person</h3>
            <p className="mb-4">
              Alle Personen, die identifizierbar sind und deren personenbezogenen Daten durch den für die Datenverarbeitung Verantwortlichen verarbeitet werden.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.3 Verarbeitung</h3>
            <p className="mb-4">
              Das ist jeder ausgeführte Vorgang oder jede Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Zum Beispiel Erheben, Erfassen, die Organisation, das Ordnen oder die Speicherung, das Löschen oder die Vernichtung.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.4 Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.5 Profiling</h3>
            <p className="mb-4">
              Jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden. Zum Beipsiel um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten. Insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftlichen Lage, Gesundheit, persönlichen Vorliebenoder andere zu analysieren oder vorherzusagen.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.6 Pseudonymisierung</h3>
            <p className="mb-4">
              Ist die Verarbeitung personenbezogener Daten, so dass die personenbezogenen Daten nicht mehr einer spezifischen betroffenen Person zugeordnet werden können. Sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und nicht einer identifizierbaren Person zugewiesen werden.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.7 Für Datenverarbeitung Verantwortlicher</h3>
            <p className="mb-4">
              Ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.8 Auftragsverarbeiter</h3>
            <p className="mb-4">
              Das ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.9 Empfänger</h3>
            <p className="mb-4">
              Ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden. Unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.10 Dritter</h3>
            <p className="mb-4">
              „Dritte" sind natürliche oder juristische Personen, Behörden, Einrichtungen oder andere Stellen, die befugt sind, die personenbezogenen Daten zu verarbeiten.
            </p>
            <h3 className="text-base font-bold text-foreground mt-6 mb-2">1.11 Einwilligung</h3>
            <p className="mb-4">
              Die Einwilligung ist jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              2.0 Benennung des für die Verarbeitung von Daten Verantwortlichen
            </h2>
            <p className="mb-4">
              Für die Verarbeitung von personenbezogenen Daten im Sinne der EU Datenschutz-Grundverordnung, sonstiger in den Staaten der EU geltenden Datenschutzgesetze sowie weiterer Richtlinien in datenschutzrechtlicher Hinsicht ist:
            </p>
            <p className="font-bold">Polizei-Sportverein Essen 1922 e. V.</p>
            <p className="mt-2">
              Vertretungsberechtigt:<br />
              Olaf Deneke (2. Vorsitzender)<br />
              Theodor-Althoff-Straße 4<br />
              45133 Essen<br />
              Deutschland / Germany
            </p>
            <p className="mt-4">
              Kontakt:<br />
              <a href="tel:02018291922" className="text-brand-primary hover:underline">0201 – 829 1922</a><br />
              <a href="mailto:kontakt@psv-essen.de" className="text-brand-primary hover:underline">kontakt@psv-essen.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              3.0 Verwendung von Cookies
            </h2>
            <p className="mb-4">
              Diese Website verwendet keinerlei so genannte „Cookies". Dabei handelt es sich um kleine reine Textdateien, die keinerlei Schadenspotential beinhalten. Sie können weder ein diese Webseiten aufrufendes Gerät schädigen, noch enthalten sie Viren. Der aufrufende Browser speichert Cookies lokal auf dem aufrufenden Gerät, um Funktionen bei der Kommunikation mit Webseiten zu ermöglichen. Das können beispielsweise Anmeldeinformationen sein, der Inhalt eines Warenkorbes, die Einstellungen im E-Mail-Konto, die einen bestimmten Ordner aufrufen und vieles mehr. Ohne Cookies werden in vielen Bereichen Internetseiten nicht sinnvoll nutzbar sein.
            </p>
            <p className="mb-4">
              Die meisten dieser Cookie-Textdateien werden automatisch gelöscht, wenn die Website verlassen oder der aufrufendes Browser geschlossen wird (so genannte „Session-Cookies"). Es gibt auch einige Cookies, die dauerhaft gespeichert werden, damit ein erneuter Besuch wiedererkannt werden kann und Funktionen erneut zur Verfügung gestellt werden können. So brauchen beim Aufrufen von Webseiten einmal gewählte Einstellungen nicht erneut vorgenommen zu werden.
            </p>
            <p className="mb-4">
              Auf fast allen Internetseiten werden heutzutage Cookies verwendet. Die meisten dieser Cookies enthalten eine eindeutige ID Nummer. Diese ID Nummer besteht aus einer Kennung, die es ermöglicht, den verwendeten Browser den Internetseiten, die besucht wurden, eindeutig zuzuordnen. Damit können Betreiber von Internetseiten den Browser eindeutig identifizieren, und ihn von anderen Browsern unterscheiden. Damit kann das aufrufende Browserprogrammen eindeutig identifiziert und wiedererkannt werden.
            </p>
            <p className="mb-4">
              Jeder Browser verfügt über Funktionen zum Einschränken oder auch Deaktivieren von Cookies. Aufgrund der großen Zahl möglicher Browserprogramme kann an dieser Stelle keine allgemeingültige Anleitung zum Deaktivieren von Cookies gegeben werden. Die Suche mit einem beliebigen Suchdienst (Google, Bing, etc.) nach dem Namen des verwendeten Browsers und dem Begriff „Cookies deaktivieren" gibt als Ergebnis genaue und aktuelle Anleitungen zum Deaktivieren von Cookies im verwendeten Browserprogramm aus.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              4.0 Automatisiert auf dem Server gespeicherte Informationen (Server-Log-Files)
            </h2>
            <p className="mb-4">
              Wird diese Website aufgerufen, werden durch den Anbieter, auf dessen Server die Webseiten gespeichert sind und zur Verfügung gestellt werden, automatisch Informationen gespeichert, die das aufrufende Verarbeitungsgerät beim Aufrufen dieser Internetseiten an den Server übermittelt. Diese Übermittlung ist notwendig, damit der Server sich auf die individuell verwendete Technik einstellen kann. Auf diese Weise können dann die einzelnen Webseiten so zur Verfügung gestellt werden, dass sie auf dem aufrufenden Gerät und mit dem verarbeitenden Browser korrekt angezeigt werden können.
            </p>
            <p className="mb-4">
              Bei diesen Informationen handelt es sich unter anderem um:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Den verwendeten Browser und dessen Version</li>
              <li>Das verwendete Betriebssystem</li>
              <li>Der Verweis zur aufgerufenen Webseite („Referrer URL")</li>
              <li>Der Name des aufrufenden Netzwerkgerätes im Netzwerk („Hostname")</li>
              <li>Die genaue Uhrzeit des Aufrufes</li>
            </ul>
            <p className="mb-4">
              Bei diesen Daten handelt es sich um rein anonymisierte technische Informationen, die der Kommunikation zwischen dem aufrufenden Gerät und dem Internetserver dienen. Eine Verbindung dieser Informationen mit anderen Daten wird vom Polizei-Sportverein Essen 1922 e.V. nicht vorgenommen.
            </p>
            <p className="mb-4">
              Es ist grundsätzlich möglich, diese Daten zu Identifikationszwecken zu nutzen. So können beispielsweise Strafverfolgungsbehörden – ausschließlich bei konkretem Verdacht einer rechtswidrigen Handlung – anhand dieser übermittelten Daten eine Identifikation über den Provider des aufrufenden Gerätes veranlassen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              5.0 Gesicherte Übertragung durch SSL-Verschlüsselung
            </h2>
            <p className="mb-4">
              Um die Sicherheit und den Schutz vertraulicher Daten zu gewährleisten, verwendet diese Website bei der Datenübertragung zwischen dem aufrufenden Gerät und dem Server ein Verschlüsselungsverfahren („SSL-Verschlüsselung"). Erkennbar ist dies an einem entsprechenden Hinweis des Browsers. Zumeist ist dies ein Schloss-Symbol vor der Internetadresse in der Adresszeile und dem Kürzel https:// anstatt http://
            </p>
            <p className="mb-4">
              Diese Verschlüsselung wird verwendet, um zu verhindern, dass unberechtigte Dritte die Datenübertragung zwischen dem aufrufenden Gerät und diesen Internetseiten überwachen oder speichern.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              6.0 Datenverarbeitung bei Kontaktaufnahme
            </h2>
            <p className="mb-4">
              Gesetzliche Vorschriften zwingen den Polizei-Sportverein Essen 1922 e.V. zu Angaben, die eine rasche Kommunikation mit uns ermöglichen. Dazu gehören neben den Angaben über den Sitz der Firma (Adresse) auch Angaben über telefonische Erreichbarkeit, sowie die Möglichkeit der Kommunikation über elektronische Post (E-Mail-Adresse).
            </p>
            <p className="mb-4">
              Wird die Möglichkeit zur elektronischen Kommunikation über eine E-Mail-Adresse mit dem Polizei-Sportverein Essen 1922 e.V. von einer betroffenen Person verwendet, so werden die von der betroffenen Person übermittelten personenbezogenen Informationen und Daten automatisiert gespeichert. Diese freiwillig, wissentlich und willentlich weitergegebenen personengebundenen Daten werden von der betroffenen Person ausschließlich zum Zwecke der Kontaktaufnahme mit uns angegeben. Diese Daten werden daher von uns ausschließlich zur Bearbeitung der Kontaktaufnahme gespeichert und verarbeitet. Wir geben in keiner Form und an keiner Stelle diese Daten an Dritte weiter.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              7.0 Gewohnheitsmäßige Löschung und Sperrung erfasster personenbezogener Daten
            </h2>
            <p className="mb-4">
              Personenbezogene Daten von betroffenen Personen werden ausschließlich für den Zeitraum, der für die Erfüllung des gewünschten Zieles notwendig ist, gespeichert und verarbeitet. Ist der Zweck der Speicherung und Verarbeitung erfüllt oder läuft eine durch den Europäischen Richtlinien- und Verordnungsgeber oder einer anderen gesetzgebenden Instanz auf europäischer oder nationaler Ebene gegebenen Frist ab, so werden die erfassten und verarbeiteten personengebundenen Daten automatisch und gewohnheitsmäßig entsprechend der gesetzlichen Vorgaben gelöscht oder gesperrt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              8.0 Rechte betroffener Personen in datenschutzrechtlicher Hinsicht
            </h2>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.1 Bestätigungsrecht</h3>
            <p className="mb-4">
              Betroffene Personen haben gegenüber dem für die Verarbeitung von personengebundenen Daten Verantwortlichen das Recht einer Bestätigung, ob sie betreffende personenbezogenen Daten und Informationen verarbeitet und gespeichert werden. Dazu können betroffene Personen jederzeit mit dem für die Verarbeitung von personengebundenen Daten Verantwortlichen in Kontakt treten.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.2 Auskunftsrecht</h3>
            <p className="mb-4">
              Alle von Speicherung und Verarbeitung personenbezogener Daten betroffenen Personen haben das Recht, jederzeit vom Verantwortlichen für die Verarbeitung personenbezogener Daten unentgeltlich Auskunft über die zur eigenen Person gespeicherten personenbezogenen Daten und Informationen zu erhalten. Diese Informationen sind auf Wunsch in Kopie den betroffenen Personen auszuhändigen.
            </p>
            <p className="mb-4">
              Darüber hinaus hat der europäische Richtlinien- und Verordnungsgeber die Auskunft über folgende gespeicherten und verarbeiteten Informationen vorgesehen:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>die Verarbeitungszwecke;</li>
              <li>die Kategorien personenbezogener Daten, die verarbeitet werden;</li>
              <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen;</li>
              <li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer;</li>
              <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
              <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
              <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden, alle verfügbaren Informationen über die Herkunft der Daten;</li>
              <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Absätze 1 und 4 und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
            </ul>
            <p className="mb-4">
              Des Weiteren steht von der Speicherung und Verarbeitung personenbezogener Daten betroffenen Personen das Recht über eine Auskunft darüber zu, ob Ihre personenbezogenen Daten an ein Drittland oder eine internationale Organisation übermittelt worden sind. Ist dies der Fall, steht allen betroffenen Personen darüber hinaus das Auskunftsrecht über geeignete Garantien im Zusammenhang mit der Übermittlung an Dritte zu. Zur Nutzung dieses Auskunftsrechts können betroffene Personen jederzeit den für die Verarbeitung Verantwortlichen kontaktieren.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.3 Berichtigungsrecht</h3>
            <p className="mb-4">
              Alle von der Erfassung und Verarbeitung personenbezogener Daten betroffene Personen haben das Recht auf unverzügliche Korrektur sie betreffender fehlerhafter personenbezogener Daten, dies gilt auch und insbesondere für die Vervollständigung unvollständiger personenbezogener Daten auch mit einer die Daten ergänzenden Erklärung. Um das Recht auf Berichtigung in Anspruch zu nehmen kann jederzeit der für die Datenverarbeitung Verantwortliche kontaktiert werden.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.4 Recht auf Löschung (Recht auf Vergessen werden)</h3>
            <p className="mb-4">
              Einige Gründe führen dazu, dass von der Verarbeitung personenbezogener Daten betroffene Personen das Recht haben, vom für die Verarbeitung dieser Daten Verantwortlichen die unverzügliche Löschung der sie betreffenden personenbezogenen Daten zu verlangen. Soweit die Verarbeitung dieser personenbezogenen Daten nicht erforderlich ist, sind dies folgende Gründe:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Durch den Wegfall des Zweckes der Erhebung der personenbezogenen Daten ist eine weitere Speicherung oder Verarbeitung nicht mehr notwendig.</li>
              <li>Die ausgesprochene Einwilligung zur Speicherung und Verarbeitung der personenbezogenen Daten im Sinne des Art. 6 Abs. 1 Buchstabe a DSG-GVO oder des Art. 9 Abs. 2 Buchstabe a DS-GVO wird von der betroffenen Person widerrufen und darüber hinaus besteht keine anderweitige Rechtsgrundlage zur Verarbeitung oder Speicherung.</li>
              <li>Gemäß Art. 21 Abs. 1 DS-GVO wird durch die betroffene Personen Widerspruch gegen die Speicherung und Verarbeitung der sie betreffenden personenbezogenen Daten eingelegt und es liegen darüber hinaus keine dem entgegenstehenden vorrangig berechtigten Gründe für die Speicherung und Verarbeitung der personenbezogenen Daten vor.</li>
              <li>Gemäß Art. 21 Abs. 2 DS-GVO wird von der betroffenen Person Widerspruch gegen die Speicherung und Verarbeitung der sie betreffenden personenbezogenen Daten eingelegt.</li>
              <li>Die erfassten personenbezogenen Daten der betroffenen Personen wurden unrechtmäßig verarbeitet.</li>
              <li>Der Verantwortliche für die Verarbeitung unterliegt der Verpflichtung zur Löschung der erfassten personenbezogenen Daten nach dem Unionsrecht oder dem Recht nationaler Mitgliedstaaten.</li>
              <li>Die personenbezogenen Daten betroffener Personen wurden gemäß Art. 8 Abs. 1 DS-GVO in Bezug auf angebotene Dienste der Informationsgesellschaft erhoben.</li>
            </ul>

            <h4 className="text-sm font-bold text-foreground mt-4 mb-2">8.4.1 Veranlassung der Löschung</h4>
            <p className="mb-4">
              Um die Löschung sie betreffender personenbezogener Daten zu veranlassen kann die betroffene Person sich jederzeit an den für die Verarbeitung personenbezogener Daten Verantwortlichen wenden. Dieser wird dafür sorgen, dass dem Löschverlangen unverzüglich nachgekommen wird.
            </p>
            <p className="mb-4">
              In Fällen, in denen der Polizei-Sportverein Essen 1922 e.V. zur Löschung personenbezogener Daten, die öffentlich gemacht wurden, gemäß Art. 17 Abs. 1 DS-GVO verpflichtet ist, werden wir unter Beachtung notwendiger Kosten und Technik alle Maßnahmen treffen, um weitere für die Datenverarbeitung Verantwortliche, welche die von uns öffentlich gemachten personenbezogenen Daten verarbeiten, darüber zu informieren, dass die betroffene Person die Löschung sämtlicher sie betreffenden personenbezogenen Daten verlangt hat, wenn deren Verarbeitung nicht erforderlich ist. Dies gilt auch und insbesondere für sämtliche Links zu den personenbezogenen Daten sowie Kopien und Replikationen dieser personenbezogenen Daten. Alles dazu Notwendige wird durch den beim Polizei-Sportverein Essen 1922 e.V. für die Datenverarbeitung Verantwortlichen veranlasst.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.5 Recht auf die Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Die betroffene Person hat das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen.</li>
              <li>Die Verarbeitung ist unrechtmäßig und die betroffene Person lehnt die Löschung der personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung der personenbezogenen Daten.</li>
              <li>Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
              <li>Die betroffene Person hat Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1 eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>
            </ul>
            <p className="mb-4">
              Der für die Verarbeitung der personenbezogenen Daten Verantwortliche beim Polizei-Sportverein Essen 1922 e.V. wird bei Vorliegen einer dieser Voraussetzungen die Einschränkung personenbezogener Daten veranlassen, wenn eine von der Verarbeitung personenbezogener Daten betroffene Person dies verlangt.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.6 Recht auf Datenübertragbarkeit</h3>
            <p className="mb-4">
              Der Europäische Richtlinien- und Verordnungsgeber räumt allen von der Verarbeitung personenbezogener Daten betroffenen Personen das Recht ein, alle durch die betroffene Person einem für die Verarbeitung Verantwortlichen bereitgestellten personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Darüber hinaus hat sie das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b beruht und außerdem die Verarbeitung mithilfe automatisierter Verfahren erfolgt. Dieses Recht gilt nicht für eine Verarbeitung, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.
            </p>
            <p className="mb-4">
              Bei der Ausübung ihres Rechts auf Datenübertragbarkeit hat die betroffene Person das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und darüber hinaus keine Rechte Dritter beeinträchtigt werden.
            </p>
            <p className="mb-4">
              Um das Recht auf Datenübertragbarkeit einzufordern, kann sich jede von der Verarbeitung personenbezogener Daten betroffene Person an den für die Verarbeitung personenbezogener Daten Verantwortlichen beim Polizei-Sportverein Essen 1922 e.V. wenden.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.7 Recht auf Widerspruch</h3>
            <p className="mb-4">
              Der Europäische Richtlinien- und Verordnungsgeber räumt wegen der sich aus ihrer besonderen Situation ergebenden Gründen allen von der Verarbeitung personenbezogener Daten betroffenen Personen das Recht ein, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten Widerspruch einzulegen, wenn diese Daten aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erhoben wurden. Dies gilt ausdrücklich auch für ein Profiling, das sich auf diese Bestimmungen stützt.
            </p>
            <p className="mb-4">
              Kann der Polizei-Sportverein Essen 1922 e.V. keine schutzwürdigen zwingenden Gründe für die Verarbeitung personenbezogener Daten geltend machen, welche die Rechte, Freiheiten oder Interessen der von der Verarbeitung betroffenen Person überwiegen, wird die Verarbeitung beendet. Dies gilt nicht bei der Ausübung, Geltendmachung oder Verteidigung von bestehenden Rechtsansprüchen.
            </p>
            <p className="mb-4">
              Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, Widerspruch gegen die Verarbeitung einzulegen, wenn die Verarbeitung der sie betreffenden personenbezogenen Daten zum Zwecke verwendeter Direktwerbung eingesetzt wird. Dies gilt auch und insbesondere für Profiling, welches zum Zwecke der Direktwerbung eingesetzt wird. Wird von der betroffenen Person der Widerspruch gegen die Verarbeitung ihrer personenbezogenen Daten zum Zwecke der Direktwerbung ausgesprochen, wird die Verarbeitung der personenbezogenen Daten zu diesem Zwecke eingestellt.
            </p>
            <p className="mb-4">
              Werden durch den Polizei-Sportverein Essen 1922 e.V. personenbezogene Daten zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1 DS-GVO erfasst und verarbeitet, hat jede von der Verarbeitung betroffene Person das Recht, gegen die sie betreffende Verarbeitung personenbezogener Daten Widerspruch einzulegen, es sei denn die Verarbeitung dieser personenbezogenen Daten ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.
            </p>
            <p className="mb-4">
              Um einen Widerspruch gegen die Verarbeitung personenbezogener Daten auszusprechen, steht betroffenen Personen der für die Verarbeitung personenbezogener Daten Verantwortliche beim Polizei-Sportverein Essen 1922 e.V. als Ansprechpartner zur Verfügung. Ungeachtet der Richtlinie 2002/58/EG steht es betroffenen Personen darüber hinaus frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft mittels automatisierter Verfahren bei denen technische Spezifikationen zur Anwendung kommen ihr Widerspruchsrecht auszuüben.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.8 Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h3>
            <p className="mb-4">
              Allen von der Verarbeitung personenbezogener Daten betroffenen Personen wird vom Europäischen Richtlinien- und Verordnungsgeber das Recht eingeräumt, nicht einer Entscheidung unterworfen zu werden, die von vollständig automatisierter Verarbeitung – einschließlich Profiling – abhängt, wenn diese Entscheidung der betroffenen Person gegenüber rechtliche Wirkung entfaltet oder sie in gleicher Weise nicht unerheblich beeinträchtigt wird. Dies gilt nur dann, wenn die Entscheidung für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist oder aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.
            </p>
            <p className="mb-4">
              Bei allen Entscheidungen die für das Abschließen oder Erfüllen eines Vertrages zwischen dem Verantwortlichen und der betroffenen Person erforderlich sind oder mit ausdrücklicher Einwilligung der betroffenen Personen erfolgen, wird der Polizei-Sportverein Essen 1922 e.V. geeignete Maßnahmen treffen, um alle Freiheiten, Rechte und berechtigten Interessen der von der Verarbeitung betroffenen Person zu wahren. Dazu gehört mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung.
            </p>
            <p className="mb-4">
              Um Rechte in Bezug auf automatisierte Entscheidungen im Einzelfall einschließlich Profiling geltend zu machen, steht betroffenen Personen der für die Verarbeitung Verantwortliche zur Verfügung.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">8.9 Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h3>
            <p className="mb-4">
              Jeder Person, die von der Verarbeitung personenbezogener Daten betroffen ist, gewährt der Europäische Richtlinien- und Verordnungsgeber das Recht, eine einmal gegebene Einwilligung zur Verarbeitung ihrer personenbezogenen Daten jederzeit zu widerrufen. Um eine gegebene Einwilligung zu widerrufen, können sich betroffene Personen mit dem für die Verarbeitung Verantwortlichen in Verbindung setzen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              9.0 Rechtsgrundlagen der Verarbeitung
            </h2>
            <p className="mb-4">
              <span className="font-bold">9.1</span> Für die Einholung einer Einwilligung für Vorgänge der Verarbeitung personengebundenen Daten einer betroffenen Person zu einem bestimmten Verarbeitungszweck dient als Rechtsgrundlage der Art. 6 I lit. a DS-GVO.
            </p>
            <p className="mb-4">
              <span className="font-bold">9.2</span> Dient die Verarbeitung personengebundenen Daten einer betroffenen Person zur Erfüllung eines Vertrages und ist eine der Vertragsparteien dabei die betroffene Person so beruht die Verarbeitung der personengebundenen Daten auf Art. 6 I lit. b DS-GVO. Das ist regelmäßig der Fall bei Warenlieferungen oder Erbringung einer Dienstleistung oder Gegenleistungen und gilt ebenfalls für Verarbeitungsvorgänge die im Rahmen vorvertraglicher Maßnahmen notwendig sind. Dies können beispielsweise Anfragen zu Waren oder Dienstleistungen oder Kontaktaufnahmen im Rahmen von Bestellvorgängen sein.
            </p>
            <p className="mb-4">
              <span className="font-bold">9.3</span> Die Verarbeitung personenbezogener Daten basiert auf Art. 6 I lit. c DS-GVO, wenn dies für den Polizei-Sportverein Essen 1922 e.V. zur Erfüllung einer rechtlichen Verpflichtung, wie beispielsweise der gesetzlichen Steuerpflicht, notwendig ist.
            </p>
            <p className="mb-4">
              <span className="font-bold">9.4</span> Ist die Verarbeitung von personenbezogenen Daten einer betroffenen Person dringend geboten, um Leib oder Leben der betroffenen Person oder dritter schützen, dann ist die Rechtsgrundlage dafür der Art. 6 I lit. d DS-GVO. Dies ist beispielsweise dann der Fall, wenn die betroffene Person innerhalb des Betriebes vom Polizei-Sportverein Essen 1922 e.V. verunglückt, und wichtige Informationen an einen Arzt, ein Krankenhaus, oder sonstige zur Rettung beauftragte weitergegeben werden müssen.
            </p>
            <p className="mb-4">
              <span className="font-bold">9.5</span> Für alle anderen Bearbeitungsvorgänge gilt als Rechtsgrundlage der Art. 6 I lit. f DS-GVO, sofern berechtigte Interessen oder gesetzlich festgelegte Rechte und Freiheiten des Betroffenen nicht überwiegen und die Verarbeitung zur Wahrung berechtigter Interessen vom Polizei-Sportverein Essen 1922 e.V. oder eines Dritten erforderlich ist. Dieses Recht auf Bearbeitung wird vom Europäischen Richtlinien- und Verordnungsgeber besonders erwähnt. Insbesondere kann ein berechtigtes Interesse dann anzunehmen sein, wenn die betroffene Person in vertraglicher Beziehung mit dem Verantwortlichen für die Verarbeitung personengebundenen Daten steht (Erwägungsgrund 47 Satz 2 DS-GVO).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              10.0 Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden
            </h2>
            <p className="mb-4">
              In den Fällen, in denen die Verarbeitung personengebundener Daten auf dem Artikel 6 I lit. f DS-GVO beruhen, ist das berechtigte Interesse die Durchführung der Geschäftstätigkeit zum Vorteil unserer Mitarbeiter und Mitarbeiterinnen sowie unsere Anteilseigner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              11.0 Dauer der Speicherung personenbezogener Daten
            </h2>
            <p className="mb-4">
              Die aktuell gültige gesetzliche Aufbewahrungsfrist ist die Basis als Kriterium für die Dauer der Speicherung personenbezogener Daten betroffener Personen. Alle Daten, die nicht zur Erfüllung oder Anbahnung von Verträgen notwendig sind, werden nach Ablauf dieser Frist routinemäßig gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              12.0 Verschiedene gesetzlich vorgesehene Angaben
            </h2>
            <p className="mb-4">
              Allgemeine Ausführungen zu folgenden gesetzlich vorgesehenen Angaben:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Gesetzliche oder vertragliche Vorschriften zur Bereitstellung personenbezogener Daten.</li>
              <li>Erforderlichkeiten für den Vertragsabschluss.</li>
              <li>Verpflichtung betroffener Personen personenbezogene Daten bereitzustellen.</li>
              <li>Mögliche Folgen der Nichtbereitstellung personenbezogener Daten.</li>
            </ul>
            <p className="mb-4">
              Die Bereitstellung personenbezogener Daten ist der Polizei-Sportverein Essen 1922 e.V. in Teilen (etwa im Rahmen der Steuergesetzgebung) gesetzlich vorgeschrieben oder aufgrund vertraglicher Verpflichtungen (beispielsweise Angaben zum Vertragspartner) zwingend erforderlich. Beispielsweise ergibt sich aus dem Abschluss eines Vertrages zwischen dem Polizei-Sportverein Essen 1922 e.V. und einer von der Datenverarbeitung betroffenen Person die Notwendigkeit, deren personenbezogene Daten zu speichern, bereitzustellen und zu verarbeiten. Ohne eine derartige Verarbeitung der personenbezogenen Daten könnte der Vertrag nicht zustande kommen.
            </p>
            <p className="mb-4">
              Von der Verarbeitung personenbezogener Daten betroffene Personen können sich mit dem Verantwortlichen für die Verarbeitung in Verbindung setzen, um zu erfahren, ob die Bereitstellung der personenbezogenen Daten rechtlich vorgeschrieben und/oder für einen Vertragsabschluss notwendig ist. Darüber hinaus können Auskünfte darüber eingeholt werden, welche Folgen eine Verweigerung der Erfassung personenbezogener Daten oder ein Widerspruch gegen die Verarbeitung haben würden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              13.0 Hinweise zum Urheberrecht
            </h2>
            <p className="mb-4">
              Alle Inhalte dieser Website unterliegen deutschem Urheberrecht. Alle Inhalte, wie Grafiken, Logos, Texte, sind entweder selbst erstellt, vom Rechteinhaber schriftlich genehmigt worden oder unterliegen der Creative Commons Licence, deren Bedingungen der Polizei-Sportverein Essen 1922 e.V. sehr genau einhält. Sollten wider Erwarten dennoch Zweifel an der Einhaltung urheberrechtlicher Bestimmungen durch Inhalte dieser Website entstehen, dann genügt eine formlose Information per E-Mail an die im Impressum angegebene E-Mail-Adresse. Der Polizei-Sportverein Essen 1922 e.V. wird umgehend die Hinweise prüfen und bei tatsächlich berechtigten Einwänden unverzüglich reagieren und die entsprechenden Inhalte entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              14.0 Verlinkung zu fremden Inhalten
            </h2>
            <p className="mb-4">
              Der Polizei-Sportverein Essen 1922 e.V. ist als Betreiber einer Website in Deutschland rechtlich verantwortlich für verlinkte Inhalte und kann sich auch nicht rechtwirksam von verlinkten Inhalten auf fremden Internetseiten distanzieren. Zu den Pflichten eines Website-Betreibers gehört es unter anderem zu kontrollieren, ob die verlinkten Websites möglicherweise illegale Inhalte haben und diese Links dann – will man sich wirklich und rechtswirksam distanzieren – zu entfernen. Ein so genannter Disclaimer, der nur auszusagen braucht, dass man sich von den verlinkten Inhalten distanziert, ist rechtsunwirksam und eher kontraproduktiv. Heute gehen die Gerichte im Allgemeinen davon aus, dass verlinkte rechtswidrige Inhalte, von denen man sich gleichzeitig distanziert, vom Websitebetreiber billigend in Kauf genommen werden und unterstellen damit den bedingten Vorsatz.
            </p>
            <p className="mb-4">
              Aus diesem Grunde werden vom Polizei-Sportverein Essen 1922 e.V. verlinkte Inhalte auf fremde Webseiten regelmäßig kontrolliert. Sollten auf den Seiten dieser Website verlinkten Internetseiten rechtswidrige Inhalte festzustellen sein, dann genügt eine formlose Information per E-Mail an die im Impressum angegebene E-Mail-Adresse. Der Polizei-Sportverein Essen 1922 e.V. wird dann umgehend die Hinweise prüfen und bei tatsächlich berechtigten Einwänden unverzüglich reagieren und die entsprechenden Links auf die fremden Inhalte entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">
              15.0 Automatisiertes Herbeiführen von Entscheidungen
            </h2>
            <p className="mb-4">
              Der Polizei-Sportverein Essen 1922 e.V. ist der Schutz personenbezogener Daten sehr wichtig und wir nehmen diese Aufgabe sehr ernst. Aus diesem Grund verzichten wir vollständig auf ein automatisiertes Herbeiführen von Entscheidungen oder ein Profiling.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
