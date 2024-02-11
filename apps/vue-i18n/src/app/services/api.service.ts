// services/apiService.ts
export type Data = {
  QuantumFlux: number;
  NeutrinoDensity: number;
  DarkMatterRatio: number;
  SpacetimeCurvature: number;
  GravitonDisplacement: number;
  WarpFieldStability: number;
  HiggsBosonCount: number;
  ChronitonParticles: number;
  TemporalAnomalies: number;
  TachyonPulses: number;
};
export const fetchApiData = async (): Promise<Data> => {
  const response = await fetch('http://localhost:3000/generate_random_data');
  if (!response.ok) {
    throw new Error('Api No Worky');
  }
  return response.json();
};
