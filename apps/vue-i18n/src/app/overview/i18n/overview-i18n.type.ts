import type { OverviewCard } from '@fobizz/feature/overview';

export type OverviewI18n = {
  pageTitle: string;
  subtitle: string;
  cards: {
    card_1: OverviewCard;
    card_2: OverviewCard;
    card_3: OverviewCard;
  };
  footer: {
    contactUs: string;
    newsletter: string;
    socialMedia: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  navigation: {
    nextPage: string;
    nextPageLink: string;
  };
};
