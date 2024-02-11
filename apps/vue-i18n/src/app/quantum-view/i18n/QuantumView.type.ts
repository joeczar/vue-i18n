import type { DataKeysI18n } from './DataKeys.i18n';

export type QuantumViewI18n = {
  dataKeys: DataKeysI18n;
  headings: {
    dataReadings: string;
    missionLog: string;
    quantumAlerts: string;
  };
  texts: {
    quantum_fluctuation_metrics: {
      q_f_field_variance: string;
      entanglement_coherence_level: string;
      vacuum_state_energy: string;
    };
    time_crystal_oscillation_readings: {
      temporal_symmetry_index: string;
      oscillation_frequency: string;
      phase_locking_status: string;
    };
    quantum_computational_diagnostics: {
      qubit_coherence_time: string;
      error_rate: string;
      computational_throughput: string;
    };
    system_alerts_notifications: {
      alert: string;
      notification: string;
      warning: string;
    };
    quantum_entanglement_network: {
      node_connectivity: string;
      data_transfer_rate: string;
      network_latency: string;
    };
  };
  alerts: {
    temporalAnomaliesDetected: string;
  };
  data: {
    QuantumFlux: string;
    NeutrinoDensity: string;
    DarkMatterRatio: string;
    SpacetimeCurvature: string;
    GravitonDisplacement: string;
    WarpFieldStability: string;
    HiggsBosonCount: string;
    ChronitonParticles: string;
    TemporalAnomalies: string;
    TachyonPulses: string;
  };
};
