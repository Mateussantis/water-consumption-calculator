using Microsoft.AspNetCore.Mvc;
using Api.Src.UseCases.CalculateConsumption.DTOs;
using Api.Src.UseCases.CalculateConsumption.Interfaces;

namespace Api.Src.UseCases.CalculateConsumption {
  [ApiController]
  [Route("consumption")]
  public class CalculateConsumptionController(ICalculateConsumption calculationUseCase) : ControllerBase{
    private readonly ICalculateConsumption _calculateUseCase = calculationUseCase;

    [HttpPost("calculate")]
    public ActionResult<ConsumptionResponse> Calculate([FromBody] ConsumptionRequest request) {
      if (request.CubicMeters < 0)
        return BadRequest("Cubic meters consumed cannot be negative.");

      var result = _calculateUseCase.CalculateConsumption(request.CubicMeters);
      return Ok(result);
    }
}
}
