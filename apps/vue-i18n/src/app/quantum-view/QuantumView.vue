

<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue';
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { QuantumDisplay, QuantumDashboard } from '@fobizz/feature/quantum-display';
import type { QuantumDashboardProps } from '@fobizz/feature/quantum-display';
import { VintageTerminal } from '@fobizz/ui-lib';
import { useMagicTranslationKeys } from '../composables/useMagicTranslationKeys';
import { fetchApiData } from '../services/api.service';
import { quantumViewEn, } from "./i18n/en";

const { t, ta } = useMagicTranslationKeys(quantumViewEn, 'quantumView');


const queryClient = useQueryClient();

const { data: results, error, isLoading } = useQuery({ queryKey: ['results'], queryFn: fetchApiData });

const textArray = computed(() => [...ta('quantumView.texts.quantum_fluctuation_metrics'), ...ta('quantumView.texts.time_crystal_oscillation_readings'), ...ta('quantumView.texts.quantum_computational_diagnostics'), ...ta('quantumView.texts.quantum_entanglement_network')]);

onMounted(() => {
  const intervalId = setInterval(() => {
    queryClient.invalidateQueries({ queryKey: ['results'] });
  }, 500);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});



const headings: QuantumDashboardProps['headings'] = {
  dataReadings: t('quantumView.headings.dataReadings'),
  missionLog: t('quantumView.headings.missionLog'),
  quantumAlerts: t('quantumView.headings.quantumAlerts'),
};
const texts = computed(() => ta('quantumView.texts.quantum_fluctuation_metrics'));
const alerts: QuantumDashboardProps['alerts'] = {
  temporalAnomaliesDetected: t('quantumView.alerts.temporalAnomaliesDetected'),
};
</script>
<template>
  <QuantumDashboard :headings="headings" :texts="texts" :alerts="alerts" :randomData="{ temporalAnomaliesDetected: 666 }">
    <template v-slot:display>
      <QuantumDisplay :isLoading="isLoading" :error="error" :data="(results as Record<string, number>)" />
      <VintageTerminal :textArray="textArray" />

    </template>
  </QuantumDashboard>
</template>
../services/api.service
<style scoped></style>
