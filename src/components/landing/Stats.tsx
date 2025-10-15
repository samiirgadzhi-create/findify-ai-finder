const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "2M+", label: "Products Analyzed" },
  { value: "₹500Cr+", label: "Revenue Generated" },
  { value: "98%", label: "Success Rate" },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
