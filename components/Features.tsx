const features = [
  {
    title: "Lightning Fast",
    description: "Built for speed with optimized performance and instant load times.",
    icon: "⚡",
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee.",
    icon: "🔒",
  },
  {
    title: "Easy to Use",
    description: "Intuitive interface that makes complex tasks simple.",
    icon: "✨",
  },
  {
    title: "Scalable",
    description: "Grows with your business from startup to enterprise.",
    icon: "📈",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it.",
    icon: "💬",
  },
  {
    title: "Customizable",
    description: "Tailor everything to match your unique needs.",
    icon: "🎨",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you succeed
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
