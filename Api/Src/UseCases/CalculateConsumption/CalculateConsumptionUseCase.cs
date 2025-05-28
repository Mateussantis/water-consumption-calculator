using Api.Src.UseCases.CalculateConsumption.DTOs;
using Api.Src.UseCases.CalculateConsumption.Interfaces;

namespace Api.Src.UseCases.CalculateConsumption
{
    public class CalculateConsumptionUseCase : ICalculateConsumption
    {
        public ConsumptionResponse CalculateConsumption(int cubicMeters)
        {
            var tiers = new List<TierDetail>();
            double total = 0;

            // Fixed tiers:
            var rates = new List<(int Limit, double Price, string Desc)> {
                (10, 2.0, "0-10 m³"),
                (20, 3.0, "11-20 m³"),
                (30, 5.0, "21-30 m³"),
                (int.MaxValue, 8.0, "Above 30 m³")
            };

            int remaining = cubicMeters;
            int previousLimit = 0;

            foreach (var tier in rates)
            {
                if (remaining <= 0)
                    break;

                int tierQuantity = 0;

                if (tier.Limit == int.MaxValue)
                {
                    tierQuantity = remaining;
                }
                else
                {
                    tierQuantity = System.Math.Min(remaining, tier.Limit - previousLimit);
                }

                double subtotal = tierQuantity * tier.Price;
                total += subtotal;

                tiers.Add(new TierDetail
                {
                    Description = tier.Desc,
                    Quantity = tierQuantity,
                    UnitPrice = tier.Price,
                    Subtotal = subtotal
                });

                remaining -= tierQuantity;
                previousLimit = tier.Limit;
            }

            return new ConsumptionResponse
            {
                Tiers = tiers,
                Total = total
            };
        }
    }
}
