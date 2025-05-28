namespace Api.Src.UseCases.CalculateConsumption.DTOs {
  public class ConsumptionResponse {
    public List<TierDetail>? Tiers { get; set; }
    public double Total { get; set; }
  }
}
