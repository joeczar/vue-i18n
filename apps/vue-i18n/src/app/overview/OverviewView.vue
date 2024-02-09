<template>
  <header>
    <h1>Overview</h1><span class="">{{ t('overview.pageTitle') }}</span>
  </header>
  <Overview
            :overviewCards="overviewCards" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Overview } from '@fobizz/feature/overview';
import type { OverviewCard } from './types';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const cardKeys = ['card_1', 'card_2', 'card_3'];
const overviewCards = computed<OverviewCard>(() => {
  return cardKeys.map((key) => {
    return {
      title: t(`overview.cards.${key}.title`),
      description: t(`overview.cards.${key}.description`),

    };
  });

})
</script>

<style scoped></style>
