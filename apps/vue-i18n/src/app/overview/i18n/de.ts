import type { OverviewI18n } from './overview-i18n.type';

export const overviewDe: OverviewI18n = {
  pageTitle: 'Die Quantenwelt erkunden',
  subtitle: 'Die Geheimnisse der Quantencomputing und Zeitkristalle enthüllen',
  cards: {
    card_1: {
      title: 'Quantencomputing 101',
      description:
        'Quantencomputing stellt einen bedeutenden Fortschritt gegenüber herkömmlichen Computern dar. Anstelle von binären Bits verwenden Quantencomputer Quantenbits oder Qubits. Dadurch können sie komplexe Berechnungen mit Geschwindigkeiten durchführen, die von herkömmlichen Computern nicht erreicht werden können. Sie können möglicherweise Probleme in Sekunden lösen, für die herkömmliche Computer Jahrtausende benötigen würden.',
      cardImage: '/images/quantum_computing.jpg',
    },
    card_2: {
      title: 'Das Rätsel der Zeitkristalle',
      description:
        'Zeitkristalle sind eine neuartige Materiephase, die erstmals 2012 theoretisch vorhergesagt wurde. Im Gegensatz zu anderen physikalischen Zuständen besitzen sie eine Struktur, die sich nicht nur im Raum, sondern auch in der Zeit wiederholt. Dadurch können sie sich unendlich ohne Energiezufuhr oszillieren. Diese Entdeckung eröffnet neue Möglichkeiten für das Quantencomputing und könnte zu Fortschritten in Stabilität und Fehlerkorrektur führen.',
      cardImage: '/images/time_crystals.jpg',
    },
    card_3: {
      title: 'Anwendungen in der realen Welt',
      description:
        'Die Auswirkungen des Quantencomputings und der Zeitkristalle gehen weit über die theoretische Physik hinaus. Sie versprechen, verschiedene Bereiche zu revolutionieren, indem sie eine ultrasichere Kommunikation durch Quantenkryptographie ermöglichen, die Entdeckung von Medikamenten durch genaue Simulation von Molekülstrukturen beschleunigen und komplexe Optimierungsprobleme in der Logistik und darüber hinaus lösen.',
      cardImage: '/images/quantum_applications.jpg',
    },
  },
  footer: {
    contactUs: 'Kontaktiere uns',
    newsletter: 'Abonniere unseren Newsletter',
    socialMedia: 'Folge uns in den sozialen Medien',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfService: 'Nutzungsbedingungen',
  },
  navigation: {
    nextPage: 'Die Zukunft entdecken',
    nextPageLink: '/future',
  },
};
