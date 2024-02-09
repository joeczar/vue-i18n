import type { OverviewI18n } from './overview-i18n.type';

export const overviewEn: OverviewI18n = {
  pageTitle: 'Exploring the Quantum Realm',
  subtitle: 'Unveil the mysteries of Quantum Computing and Time Crystals',
  cards: {
    card_1: {
      title: 'Quantum Computing 101',
      description:
        'Quantum computing represents a significant leap beyond traditional computing. Instead of binary bits, quantum computers use quantum bits or qubits. This enables them to perform complex calculations at speeds unachievable by standard computers, potentially solving problems in seconds that would take conventional computers millennia.',
      cardImage: '/images/quantum_computing.jpg',
    },
    card_2: {
      title: 'The Enigma of Time Crystals',
      description:
        'Time Crystals are a novel phase of matter, first theorized in 2012. Unlike other physical states, they possess a structure that repeats in time, not just in space - allowing them to oscillate indefinitely without energy input. This discovery opens up new avenues for quantum computing, possibly leading to advancements in stability and error correction.',
      cardImage: '/images/time_crystals.jpg',
    },
    card_3: {
      title: 'Real-world Applications',
      description:
        'The implications of quantum computing and time crystals extend far beyond theoretical physics. They promise to revolutionize various fields by enabling ultra-secure communications through quantum cryptography, fast-tracking drug discovery by accurately simulating molecular structures, and solving complex optimization problems in logistics and beyond.',
      cardImage: '/images/quantum_applications.jpg',
    },
  },
  footer: {
    contactUs: 'Contact Us',
    newsletter: 'Subscribe to our newsletter',
    socialMedia: 'Follow us on social media',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  navigation: {
    nextPage: 'Discover the Future',
    nextPageLink: '/future',
  },
};
