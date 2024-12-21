export default function EventsSection() {
  const events = [
    {
      date: "2024-04-15",
      title: "Annual Sports Day",
      description: "A day filled with fun sports activities and competitions.",
      time: "9:00 AM - 2:00 PM",
      category: "Sports",
    },
    {
      date: "2024-04-20",
      title: "Art Exhibition",
      description: "Showcasing creative artworks by our talented students.",
      time: "11:00 AM - 3:00 PM",
      category: "Cultural",
    },
    {
      date: "2024-05-01",
      title: "Parent Workshop",
      description: "Interactive session on effective parenting techniques.",
      time: "10:00 AM - 12:00 PM",
      category: "Workshop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">
            Upcoming Events
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-nunito">
            Join us for these exciting events and activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-accent-yellow p-4">
                <div className="text-neutral-800 font-quicksand">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-500 text-sm font-nunito mb-3">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-800 mb-2 font-quicksand">
                  {event.title}
                </h3>
                <p className="text-neutral-600 mb-4 font-nunito">{event.description}</p>
                <div className="text-sm text-neutral-500 font-nunito">⏰ {event.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
