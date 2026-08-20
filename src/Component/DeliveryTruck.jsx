


export default function DeliveryTruck() {
  // Replace each src with your actual photo path/import.
  const photos = [
    '/Second.jpg',
    '/photo_15_2026-08-19_16-06-52.jpg',
    '/photo_3_2026-08-19_16-06-51.jpg',
    '/photo_4_2026-08-19_16-06-51.jpg',
    '/photo_5_2026-08-19_16-06-51.jpg',
    '/photo_6_2026-08-19_16-06-51.jpg',
    '/photo_7_2026-08-19_16-06-51.jpg',
    '/photo_8_2026-08-19_16-06-51.jpg',
    '/photo_9_2026-08-19_16-06-51.jpg',
    '/photo_10_2026-08-19_16-06-52.jpg',
    '/photo_11_2026-08-19_16-06-52.jpg',
    '/photo_12_2026-08-19_16-06-52.jpg',
    '/photo_13_2026-08-19_16-06-52.jpg',
    '/photo_14_2026-08-19_16-06-52.jpg'
  ]

  return (
    <section className="min-h-screen bg-neutral-350 px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-2xl font-semibold tracking-tight text-neutral-500 sm:text-3xl">
          Gallery
        </h1>

        <div
          className="
            grid gap-3
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[220px]
          "
        >
          {photos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Photo ${index + 1}`}
      
            loading="lazy"
            className="
                  h-full w-full object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-110
                "
          />
         ))}
        
          </div>
          
        </div>
    </section>
  );
}
