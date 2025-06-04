using Api.Src.UseCases.CalculateConsumption.DTOs;
using Api.Src.UseCases.CalculateConsumption.Interfaces;

namespace Api.Src.UseCases.CalculateConsumption {
    public class CalculateConsumptionUseCase : ICalculateConsumption {
        public ConsumptionResponse CalculateConsumption(int cubicMeters) {
            var tiers = new List<TierDetail>();
            double total = 0;

            var rates = new List<(int Limit, double Price, string Desc)> {
                (10, 2.0, "0-10 m³"),
                (20, 3.0, "11-20 m³"),
                (30, 5.0, "21-30 m³"),
                (int.MaxValue, 8.0, "Above 30 m³")
            };

            int remaining = cubicMeters;
            int previousLimit = 0;

            foreach (var (Limit, Price, Desc) in rates) {
                if (remaining <= 0) break;

                int tierQuantity = 0;

                if (Limit == int.MaxValue) {
                    tierQuantity = remaining;
                }
                else {
                    tierQuantity = Math.Min(remaining, Limit - previousLimit);
                }

                double subtotal = tierQuantity * Price;
                total += subtotal;

                tiers.Add(new TierDetail {
                    Description = Desc,
                    Quantity = tierQuantity,
                    UnitPrice = Price,
                    Subtotal = subtotal
                });

                remaining -= tierQuantity;
                previousLimit = Limit;
            }

            return new ConsumptionResponse {
                Tiers = tiers,
                Total = total
            };
        }
    }
}
