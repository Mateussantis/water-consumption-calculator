using Api.Src.UseCases.CalculateConsumption.DTOs;

namespace Api.Src.UseCases.CalculateConsumption.Interfaces {
  public interface ICalculateConsumption {
    ConsumptionResponse CalculateConsumption(int cubicMeters);
  }
}
