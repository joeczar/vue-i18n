<template>
  <div class="container my-5">
    <div class="row">
      <PulsatingTile v-for="(card, index) in overviewCards"
                     :key="index">
        <div>
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>

        </div>

      </PulsatingTile>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PulsatingTile } from '@fobizz/ui-lib';
import type { OverviewCard } from '../types';

defineProps({
  overviewCards: Array<OverviewCard>,
});
</script>
