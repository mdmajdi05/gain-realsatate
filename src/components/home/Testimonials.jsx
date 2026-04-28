const Testimonials = ({ testimonials = [] }) => {
  return (
    <section className="container-custom py-16">
      <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map(t => (
          <div key={t.id} className="p-6 bg-white rounded-2xl shadow">
            <div className="flex items-center gap-4 mb-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
            <p className="text-gray-700">{t.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
