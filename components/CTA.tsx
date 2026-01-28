export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers and start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-lg">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
