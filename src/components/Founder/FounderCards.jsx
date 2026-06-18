import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FounderCards({ profiles }) {
  return (
    <section className="py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Team
        </h3>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={profiles.length > 3}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                transition={{ duration: 0.4 }}
                className="h-full bg-gray-50 dark:bg-zinc-900 rounded-3xl shadow-xl p-6 text-center border border-gray-100 dark:border-zinc-800"
              >
                {/* Image */}
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  src={profile.image}
                  alt={profile.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-gray-200 dark:ring-zinc-700 mb-5"
                />

                {/* Name */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {profile.name}
                </h4>

                {/* Role */}
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1 mb-4">
                  {profile.role}
                </p>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-400 text-left leading-relaxed mb-6">
                  {profile.bio}
                </p>

                {/* Social */}
                <div className="flex justify-center">
                  {profile.social?.linkedin && (
                    <a
                      href={profile.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                      className="grid place-items-center w-11 h-11 rounded-full bg-[#0A66C2] text-white transition-all duration-300 hover:scale-125 hover:rotate-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                        <path d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM6.964 20.452H3.71V9h3.254v11.452z" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}