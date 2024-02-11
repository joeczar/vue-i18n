import type { QuantumViewI18n } from './QuantumView.type';
import { dataKeysDe } from './dataKeys.de';

export const quantumViewDe: QuantumViewI18n = {
  dataKeys: dataKeysDe,
  headings: {
    dataReadings: 'Datenmessungen',
    missionLog: 'Missionstagebuch',
    quantumAlerts: 'Quantenwarnungen',
  },
  texts: {
    quantum_fluctuation_metrics: {
      q_f_field_variance:
        'Q-F Feldvarianz: 0,0023 Δψ (Delta Psi) über dem Standard-Quantenreferenzwert. Fluktuationen innerhalb akzeptabler Parameter für stabile Quantencomputing-Operationen.',

      entanglement_coherence_level:
        'Verschränkungs-Kohärenzgrad: 87,6% mit einer Driftgeschwindigkeit von -0,03% pro Zyklus. Überwachung auf potenzielle Dekohärenz-Anomalien.',

      vacuum_state_energy:
        'Vakuumzustandsenergie: 1,45e-29 J. Geringfügiger Anstieg festgestellt, der mit erwarteter Quantenschaum-Aktivität korreliert.',
    },
    time_crystal_oscillation_readings: {
      temporal_symmetry_index:
        'Temporaler Symmetrieindex: 9,8/10. Zeitkristalle halten erwartete Symmetrie über Quantenzustandsübergänge hinweg aufrecht.',
      oscillation_frequency:
        'Oszillationsfrequenz: 14,3 GHz. Stabile Frequenz beobachtet, mit geringfügigen Harmonischen im 5. und 7. Oberton.',
      phase_locking_status:
        'Phasensynchronisationsstatus: Aktiviert. Zeitkristalle sind phasengesichert mit dem Quantencomputing-Kern für maximale Rechenleistung.',
    },
    quantum_computational_diagnostics: {
      qubit_coherence_time:
        'Qubit-Kohärenzzeit: Erweitert auf 2,45 ms. Über dem Schwellenwert für hochwertige Quantenoperationen.',
      error_rate:
        'Fehlerquote: 0,001%. Quantenfehlerkorrekturalgorithmen halten niedrige Fehlerquoten aufrecht.',
      computational_throughput:
        'Rechenleistung: 1,2e12 QOps/Sek. Betrieb mit maximaler Effizienz unter Berücksichtigung der aktuellen Quantenfluktuationen und Zeitkristalloszillationsparameter.',
    },
    system_alerts_notifications: {
      alert:
        'Warnung: Geringfügige Quantenfluktuation in Sektor 4G erkannt. Automatische Diagnose aktiviert. Keine Maßnahmen erforderlich.',
      notification:
        'Benachrichtigung: Aktualisierung des Zeitkristalloszillationsmusters geplant für 00:45 UTC. Kurze Reduzierung der Rechenleistung zu erwarten.',
      warning:
        'Warnung: Verschränkungs-Kohärenzgrad nähert sich dem unteren Schwellenwert. Empfehlung für Diagnoseprüfung der Qubits 34B bis 39F.',
    },
    quantum_entanglement_network: {
      node_connectivity:
        'Knotenverbindung: 99,8%. Optimale Konnektivität des Quantenverschränkungsnetzwerks aufrechterhalten.',
      data_transfer_rate:
        'Datenübertragungsrate: 10,3 Tb/s. Verbessert durch kürzliche Effizienzsteigerungen bei der Verschränkung.',
      network_latency:
        'Netzwerklatenz: 0,001 ns. Innerhalb der erwarteten Parameter für Echtzeit-Quantenkommunikation.',
    },
  },
  alerts: {
    temporalAnomaliesDetected: 'Achtung! Temporale Anomalien erkannt: {count}',
  },
  data: {
    QuantumFlux: 'Quantenfluss',
    NeutrinoDensity: 'Neutrinodichte',
    DarkMatterRatio: 'Dunkle-Materie-Verhältnis',
    SpacetimeCurvature: 'Raumzeitkrümmung',
    GravitonDisplacement: 'Gravitonenverschiebung',
    WarpFieldStability: 'Warp-Feld-Stabilität',
    HiggsBosonCount: 'Higgs-Boson-Zählung',
    ChronitonParticles: 'Chroniton-Teilchen',
    TemporalAnomalies: 'Temporale Anomalien',
    TachyonPulses: 'Tachyonenpulse',
  },
};
