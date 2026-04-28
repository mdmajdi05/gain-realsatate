import PropertyCard from '../ui/PropertyCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SectionSlider = ({ section }) => {
  const { title, description, items = [] } = section;

  return (
    <section className="container-custom py-16">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              {description}
            </motion.p>
          )}
        </div>

        <Link
          to="/listings"
          className="hidden md:inline-block px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition"
        >
          View All →
        </Link>
      </div>

      {/* Slider Wrapper */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={24}
          loop={true}
          preloadImages={false}
          lazy={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {items.map((p) => (
            <SwiperSlide key={p.id}>
              <Link to={`/property/${p.id}`} className="block h-full">
                <PropertyCard
                  property={{
                    ...p,
                    // images: p.gallery?.length ? p.gallery : [p.image]
                    images: p.gallery?.length ? p.gallery : [p.image]
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons same as before */}
        <button className="custom-prev absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-xl w-11 h-11 rounded-full flex items-center justify-center transition group">
          <svg
            className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="custom-next absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-xl w-11 h-11 rounded-full flex items-center justify-center transition group">
          <svg
            className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link
          to="/listings"
          className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
        >
          View All Properties
        </Link>
      </div>
    </section>
  );
};

export default SectionSlider;