<script setup lang="ts">
import { defineProps } from 'vue';
export type Props = {
  headings: {
    dataReadings: string;
    missionLog: string;
    quantumAlerts: string;
  };
  texts: string[];
  alerts: {
    temporalAnomaliesDetected: string;
  };
  randomData: {
    TemporalAnomalies: number;
  };
};

defineProps<Props>();
</script>
<template>
  <div id="quantum-dashboard" class="h-full">
    <section class="data-readings">
      <h2>{{ headings.dataReadings }}</h2>
      <div class="dashboard">
        <slot name="display"></slot>
      </div>
    </section>

    <section class="mission-log">
      <h2>{{ headings.missionLog }}</h2>
      <p>{{ texts[0] }}</p>
    </section>

    <section class="quantum-alerts">
      <h2>{{ headings.quantumAlerts }}</h2>
      <p>
        {{
          alerts.temporalAnomaliesDetected.replace(
            '{ count }',
            `${randomData.TemporalAnomalies}`
          )
        }}
      </p>
    </section>
  </div>
</template>
