class DataController < ApplicationController
  def generate_random_data
    # Define a list of cool-sounding datapoints
    datapoints = [
      "QuantumFlux",
      "NeutrinoDensity",
      "DarkMatterRatio",
      "SpacetimeCurvature",
      "GravitonDisplacement",
      "WarpFieldStability",
      "HiggsBosonCount",
      "ChronitonParticles",
      "TemporalAnomalies",
      "TachyonPulses"
    ]

    # Generate a hash with the datapoints as keys and random numbers as values
    random_data = datapoints.each_with_object({}) do |datapoint, hash|
      # Generating a random number between 1 and 100 for simplicity
      hash[datapoint] = rand(1..100)
    end

    # Respond with the generated data in JSON format
    render json: random_data
  end
end
