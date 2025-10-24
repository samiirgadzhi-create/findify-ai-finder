import React, { useState } from "react";

export default function Products() {
  const [selected, setSelected] = useState<any>(null);

  const products = [
    {
      name: "Powerful Burnt Residue Remover Paste",
      price: "₹199",
      cost: "₹55",
      profit: "₹144",
      image: "/remover-paste.jpg",
      category: "Kitchen Cleaning",
      monthlyOrders: "12,300",
      trendingPlatform: "Roposo Clout, TikTok",
      whyWinning:
        "Solves a painful problem — burnt cookware cleaning. Highly satisfying before-after videos go viral easily.",
      supplier: "https://www.amazon.in",
      saturation: "Low",
      adPerformance: "Excellent — short demo videos show instant results.",
    },
    {
      name: "Magic Oil Spray Bottle",
      price: "₹249",
      cost: "₹70",
      profit: "₹179",
      image: "/oil-spray.jpg",
      category: "Kitchen Tool",
      monthlyOrders: "9,800",
      trendingPlatform: "Instagram Reels, Roposo",
      whyWinning:
        "Helps in healthy cooking — precise oil spray reduces waste. Viral due to ASMR-style cooking videos.",
      supplier: "https://www.aliexpress.com",
      saturation: "Low",
      adPerformance: "Strong CTR — visually appealing product.",
    },
    {
      name: "Foldable Chopping Board with Drain",
      price: "₹399",
      cost: "₹120",
      profit: "₹279",
      image: "/chopping-board.jpg",
      category: "Multifunction Kitchen",
      monthlyOrders: "7,500",
      trendingPlatform: "Roposo, Facebook Reels",
      whyWinning:
        "3-in-1 board acts as a chopping surface, washing tub, and drainer — compact & practical for Indian kitchens.",
      supplier: "https://www.amazon.in",
      saturation: "Medium",
      adPerformance: "Excellent for kitchen hacks content.",
    },
    {
      name: "Silicone Sink Filter Basket",
      price: "₹150",
      cost: "₹30",
      profit: "₹120",
      image: "/sink-filter.jpg",
      category: "Kitchen Utility",
      monthlyOrders: "5,200",
      trendingPlatform: "Roposo Shorts",
      whyWinning:
        "Cheap, colorful, and solves a clear problem — prevents clogging and food waste mess.",
      supplier: "https://www.amazon.in",
      saturation: "Low",
      adPerformance: "Good engagement for household tip reels.",
    },
    {
      name: "2-in-1 Electric Egg Beater & Whisk",
      price: "₹499",
      cost: "₹180",
      profit: "₹319",
      image: "/egg-whisk.jpg",
      category: "Kitchen Appliance",
      monthlyOrders: "10,100",
      trendingPlatform: "TikTok, Roposo",
      whyWinning:
        "Compact electric whisk — perfect for coffee froth or batter. Trend boosted by Dalgona & baking reels.",
      supplier: "https://www.flipkart.com",
      saturation: "Medium",
      adPerformance: "High watch time — easy demo value.",
    },
    {
      name: "Silicone Garlic Peeler Roller",
      price: "₹99",
      cost: "₹20",
      profit: "₹79",
      image: "/garlic-peeler.jpg",
      category: "Kitchen Gadget",
      monthlyOrders: "8,700",
      trendingPlatform: "Roposo, Moj",
      whyWinning:
        "Super cheap but addictive demo — just roll garlic and peel instantly. Works well for short clips.",
      supplier: "https://www.alibaba.com",
      saturation: "Low",
      adPerformance: "Excellent impulse-buy stats.",
    },
    {
      name: "Anti-Slip Stove Counter Gap Cover",
      price: "₹199",
      cost: "₹45",
      profit: "₹154",
      image: "/gap-cover.jpg",
      category: "Kitchen Hygiene",
      monthlyOrders: "6,800",
      trendingPlatform: "Roposo, Instagram",
      whyWinning:
        "Solves hidden dirt problem — before-after demo videos hook viewers immediately.",
      supplier: "https://www.aliexpress.com",
      saturation: "Low",
      adPerformance: "Great engagement for 'cleaning hacks' niche.",
    },
    {
      name: "Mini Portable Blender USB",
      price: "₹1,499",
      cost: "₹650",
      profit: "₹849",
      image: "/mini-blender.jpg",
      category: "Kitchen Appliance",
      monthlyOrders: "3,900",
      trendingPlatform: "Roposo, YouTube Shorts",
      whyWinning:
        "High perceived value — healthy juice lifestyle trend. Portable & techy, ideal for influencer marketing.",
      supplier: "https://www.amazon.in",
      saturation: "Medium",
      adPerformance: "High conversion on influencer shoutouts.",
    },
    {
      name: "Adjustable Oil Bottle with Measuring Cup",
      price: "₹350",
      cost: "₹120",
      profit: "₹230",
      image: "/oil-bottle.jpg",
      category: "Cooking Utility",
      monthlyOrders: "4,200",
      trendingPlatform: "Roposo Clout, TikTok",
      whyWinning:
        "Visually satisfying measurement mechanism — perfect for ASMR-style videos.",
      supplier: "https://www.amazon.in",
      saturation: "Medium",
      adPerformance: "Excellent click-through from food content.",
    },
    {
      name: "360° Rotating Spice Rack Organizer",
      price: "₹799",
      cost: "₹280",
      profit: "₹519",
      image: "/spice-rack.jpg",
      category: "Kitchen Organization",
      monthlyOrders: "2,800",
      trendingPlatform: "Roposo, Pinterest",
      whyWinning:
        "Appeals to organization lovers — strong visual appeal in before-after pantry videos.",
      supplier: "https://www.flipkart.com",
      saturation: "Low",
      adPerformance: "Stable sales from home improvement audience.",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        🍳 Top 10 Winning Kitchen Products (Roposo Clout + Global)
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
            <p className="text-gray-500 text-sm">{p.category}</p>
            <p className="mt-2 font-bold text-gray-800">{p.price}</p>

            <button
              className="mt-3 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
              onClick={() => setSelected(p)}
            >
              View Insight
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] md:w-[600px] relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-2">{selected.name}</h2>
            <img
              src={selected.image}
              alt={selected.name}
              className="rounded-xl mb-4 w-full h-56 object-cover"
            />
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> {selected.price} &nbsp;|&nbsp; 
              <strong>Cost:</strong> {selected.cost} &nbsp;|&nbsp; 
              <strong>Profit:</strong> {selected.profit}
            </p>
            <p><strong>Monthly Orders:</strong> {selected.monthlyOrders}</p>
            <p><strong>Trending Platform:</strong> {selected.trendingPlatform}</p>
            <p><strong>Saturation:</strong> {selected.saturation}</p>
            <p className="mt-3 text-gray-700">
              <strong>Why it’s Winning:</strong> {selected.whyWinning}
            </p>
            <p className="mt-3 text-gray-700">
              <strong>Ad Performance:</strong> {selected.adPerformance}
            </p>
            <a
              href={selected.supplier}
              className="mt-4 inline-block text-blue-600 font-medium"
              target="_blank"
            >
              🔗 View Supplier
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

