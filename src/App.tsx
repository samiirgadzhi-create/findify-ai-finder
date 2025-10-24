
import React from "react";

export default function Products() {
  const products = [
    {
      name: "DUKAAN Dry Fruit & Nut Cutter Slicer",
      price: "₹199",
      cost: "₹80",
      image: "/nut-cutter.jpg",
      category: "Kitchen Gadget",
      shortDescription: "Hand-operated nut & dry-fruit cutter, perfect for quick prepping.",
      insight: {
        monthlyOrders: "5,000",
        profitMargin: "₹119",
        trendingPlatform: "Reels, Roposo",
        saturationLevel: "Low-Medium",
        supplierLink: "https://www.amazon.in",
        viralPotential: "High",
      },
    },
    {
      name: "Wonderchef Forza Cast-Iron Mortar & Pestle",
      price: "₹885",
      cost: "₹400",
      image: "/mortar.jpg",
      category: "Premium Kitchenware",
      shortDescription: "Heavy-duty cast-iron mortar for authentic Indian cooking.",
      insight: {
        monthlyOrders: "3,200",
        profitMargin: "₹485",
        trendingPlatform: "Instagram, YouTube",
        saturationLevel: "Medium",
        supplierLink: "https://www.wonderchef.com",
        viralPotential: "High",
      },
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        🍳 Trending Kitchen Products on Roposo Clout
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="rounded-xl mb-3 w-full h-48 object-cover"
            />
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-500 text-sm">{p.shortDescription}</p>
            <p className="mt-2 font-bold text-gray-800">{p.price}</p>

            <button
              className="mt-3 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
              onClick={() => alert(
                `📊 ${p.name}\n\nProfit: ${p.insight.profitMargin}\nMonthly Orders: ${p.insight.monthlyOrders}\nTrending On: ${p.insight.trendingPlatform}\nSaturation: ${p.insight.saturationLevel}\nViral Potential: ${p.insight.viralPotential}\nSupplier: ${p.insight.supplierLink}`
              )}
            >
              View Insight
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

