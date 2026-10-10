import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <div>
    <div className="w-full h-20 bg-[#F9FAFB] flex items-center px-10 border-b border-gray-200">
      <nav className="flex items-center justify-between w-full max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <img
            src="/Background.png"
            alt="Gourmet Bistro Logo"
            className="w-10 h-10 rounded-xl object-cover"
          />
          <h1 className="font-['Poppins'] text-xl font-bold text-gray-800 whitespace-nowrap">
            Gourmet Bistro
          </h1>
        </div>

        <div className="flex items-center gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-[#FF6B35] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#FF6B35] transition-colors">
            Menu
          </a>
          <a href="#" className="hover:text-[#FF6B35] transition-colors">
            Our Story
          </a>
          <a href="#" className="hover:text-[#FF6B35] transition-colors">
            Gallery
          </a>
        </div>

        <a
          href="#reservation"
          className="bg-[#FF6B35] hover:bg-[#F4511E] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
        >
          Book a Table
        </a>
      </nav>
    </div>

    <section
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />

      <div className="relative w-full max-w-5xl mx-auto px-10">
        <div className="flex flex-col gap-6 max-w-xl">
          <span className="w-fit bg-white/10 text-[#FF6B35] text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
            The Art of Dining
          </span>

          <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold text-white leading-tight">
            Elevated culinary experiences for every palate.
          </h1>

          <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
            Discover a symphony of flavors crafted with locally sourced
            ingredients and exceptional passion.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#menu"
              className="bg-[#FF6B35] hover:bg-[#F4511E] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View Menu
            </a>
            <a
              href="#reservation"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book a Table
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                src="/rate1.png"
                alt="Diner"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/rate3.png"
                alt="Diner"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-xs text-gray-300">
              <span className="font-semibold text-white">4.9-5</span> from over
              2,000+ happy diners
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-white py-24">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="flex items-center justify-between gap-16">
          <div className="relative w-full max-w-xs shrink-0">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#FF6B35]/10 rounded-2xl" />

            <img
              src="/chef.png"
              alt="Chef plating a dish"
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-4 -right-6 bg-[#222222] text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-['Poppins'] text-2xl font-bold">15+</p>
              <p className="text-[9px] tracking-widest uppercase text-gray-400">
                Years of Excellence
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 max-w-md">
            <h2 className="font-['Poppins'] text-4xl font-bold text-gray-900 leading-tight">
              Crafting stories on every plate since{" "}
              <span className="text-[#FF6B35]">2008</span>.
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed">
              Gourmet Bistro was born from a simple vision: to create a space
              where culinary excellence meets genuine hospitality. Our journey
              began in a small kitchen with big dreams, focusing on the purity
              of ingredients and the joy of shared meals.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed">
              Today, we continue that legacy, blending traditional techniques
              with modern innovation to bring you a menu that celebrates the
              best of the season.
            </p>

            <div className="flex items-start gap-8 mt-2">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#FF6B35]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z M2 21c0-3 1.9-5.5 6-6.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Poppins'] text-xs font-semibold text-gray-900">
                    Fresh Harvest
                  </p>
                  <p className="text-[10px] text-gray-500 max-w-[110px] mt-1">
                    Daily sourced organic ingredients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#FF6B35]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Poppins'] text-xs font-semibold text-gray-900">
                    Expert Chefs
                  </p>
                  <p className="text-[10px] text-gray-500 max-w-[130px] mt-1">
                    Award-winning culinary team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-[#F9FAFB] py-24">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h2 className="font-['Poppins'] text-4xl font-bold text-gray-900">
            Visual Feast
          </h2>
          <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
            A glimpse into our kitchen and the vibrant atmosphere we've created
            for you.
          </p>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[330px] max-w-3xl mx-auto">
          <img
            src="/l7ma.png"
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-3xl shadow-lg"
          />

          <img
            src="/gambary.png"
            className="col-span-2 row-span-1 w-full h-full object-cover rounded-3xl shadow-lg"
          />

          <img
            src="/el2a3da.png"
            className="col-span-1 row-span-1 w-full h-full object-cover rounded-3xl shadow-lg"
          />

          <img
            src="/elmasroub.png"
            className="col-span-1 row-span-1 w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
        <section className="w-full bg-white py-24">
          <div className="w-full max-w-5xl mx-auto px-10">
            <div className="flex items-end justify-between mb-12">
              <div className="flex flex-col gap-3">
                <h2 className="font-['Poppins'] text-4xl font-bold text-gray-900 leading-tight max-w-xs">
                  What our guests are saying
                </h2>
                <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
                  Real reviews from people who have experienced the magic of
                  Gourmet Bistro.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 items-center">
              <img
                src="/review1.png"
                alt="Review from Sarah Jenkins"
                className="w-full h-auto"
              />
              <img
                src="/review2.png"
                alt="Review from Michael Ross"
                className="w-full h-auto"
              />
              <img
                src="/review3.png"
                alt="Review from Clara Gomez"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
        <section
      id="reservation"
      className="relative w-full bg-[#F9FAFB] py-24 overflow-hidden"
    >
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-5xl mx-auto px-10">
        <div className="flex items-center justify-between gap-16">
          <div className="flex flex-col gap-6 max-w-sm">
            <h2 className="font-['Poppins'] text-4xl font-bold text-gray-900 leading-tight">
              Ready to experience it yourself?
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed">
              Book your table online in seconds. For parties larger than 10,
              please contact us directly via phone.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#FF6B35]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="font-['Poppins'] text-base font-semibold text-gray-900">
                    +1 (555) 000-1234
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#FF6B35]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
                    />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Visit Us</p>
                  <p className="font-['Poppins'] text-base font-semibold text-gray-900">
                    123 Culinary Ave, Food District
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md shrink-0 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-8">
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-['Poppins'] text-xs font-semibold text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Poppins'] text-xs font-semibold text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-['Poppins'] text-xs font-semibold text-gray-900">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-900 outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Poppins'] text-xs font-semibold text-gray-900">
                    Time
                  </label>
                  <input
                    type="time"
                    defaultValue="19:00"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-900 outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Poppins'] text-xs font-semibold text-gray-900">
                    Guests
                  </label>
                  <select
                    defaultValue="2"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-900 outline-none focus:border-[#FF6B35] transition-colors"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                    <option value="9">9 People</option>
                    <option value="10">10 People</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Poppins'] text-xs font-semibold text-gray-900">
                  Special Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Any allergies or special requests?"
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#FF6B35] transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#FF6B35] hover:bg-[#F4511E] text-white text-sm font-semibold py-4 rounded-xl shadow-lg shadow-[#FF6B35]/30 transition-colors"
              >
                Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
        <footer className="w-full bg-[#222222] pt-20 pb-10">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="grid grid-cols-4 gap-10 pb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z M6 17h12"
                  />
                </svg>
              </div>
              <h3 className="font-['Poppins'] text-lg font-bold text-white whitespace-nowrap">
                Gourmet Bistro
              </h3>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Bringing the art of dining to your table since 2008. Quality
              ingredients, exceptional service.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF6B35] flex items-center justify-center text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF6B35] flex items-center justify-center text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF6B35] flex items-center justify-center text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-['Poppins'] text-base font-semibold text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Digital Menu
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Our Story
              </a>
              <a
                href="#reservation"
                className="hover:text-[#FF6B35] transition-colors"
              >
                Reservations
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-['Poppins'] text-base font-semibold text-white">
              Opening Hours
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Mon - Thu</span>
                <span className="text-white">12:00 - 22:00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Fri - Sat</span>
                <span className="text-white">12:00 - 23:30</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Sunday</span>
                <span className="text-white">11:00 - 21:00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-['Poppins'] text-base font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Get the latest recipes and event updates.
            </p>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full min-w-0 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#FF6B35] transition-colors"
              />
              <button
                type="button"
                className="w-11 h-11 shrink-0 rounded-xl bg-[#FF6B35] hover:bg-[#F4511E] flex items-center justify-center text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2 11 13M22 2l-7 20-4-9-9-4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>© 2024 Gourmet Bistro. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>,
);
