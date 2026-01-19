import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseOpen, setIsCaseOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);

  const servicesList = [
    {
      name: "Horeca Market Penetration & Demand Generation",
      to: "/services/Horeca-Market-Penetration-Demand-Generation",
    },
    {
      name: "Horeca Procurement & Vendor Management",
      to: "/services/Horeca-Procurement-Vendor-Management",
    },
    {
      name: "Product & Segment Optimization",
      to: "/services/Product-Segment-Optimization",
    },
    {
      name: "Operations & Supply Chain Excellence",
      to: "/services/Operations-Supply-Chain-Excellence",
    },
    {
      name: "Manpower & Bussiness Growth Solutions",
      to: "/services/Manpower-Bussiness-Growth-Solutions",
    },
    {
      name: "Extended Sales & Portfolio Management",
      to: "/services/Extended-Sales-Portfolio-Management",
    },
  ];

  const caseStudiesList = [
    { name: "Case Study 1", to: "/case-studies/case-study-1" },
    { name: "Case Study 2", to: "/case-studies/case-study-2" },
    { name: "Case Study 3", to: "/case-studies/case-study-3" },
    { name: "Case Study 4", to: "/case-studies/case-study-4" },
  ];

  return (
    <nav className=" dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg shadow-sm bg-gray-50 border-b-green-800  sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-between">
            <div className="shrink-0 w-1/7 ">
              <NavLink to={"/home"}>
                <img src={Logo} alt="" />
              </NavLink>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8   justify-end gap-1 items-center ">
              {/* Home Link */}
              <NavLink
                to={"/home"}
                
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 px-3 py-2 text-md font-medium  hover:text-black ${
                    isActive
                      ? "text-black border-b-2 border-green-800"
                      : "text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
                  }`
                }
              >
                Home
              </NavLink>
              <div
                className="relative flex items-center"
                onMouseEnter={() => {
                  setIsServicesOpen(true);
                  setIsCaseOpen(false);
                }}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-0 py-2 text-md font-medium ${
                      isActive
                        ? "text-black border-b-2 border-green-800"
                        : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  Services
                </NavLink>

                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                <div
                  className={`absolute top-full left-0 z-10 w-100
                transform transition-all duration-300 ease-out
               ${
                 isServicesOpen
                   ? "opacity-100 translate-y-0 visible"
                   : "opacity-0 -translate-y-3 invisible"
               }
        `}
                >
                  <div className="mt-3 p-3 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {servicesList.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-200"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* About us */}
              <NavLink
                to={"/about-us"}
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 px-3 py-2 text-md font-medium hover:text-black ${
                    isActive
                      ? "text-black border-b-2 border-green-800"
                      : "text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Case study */}

              <div
                className="relative flex items-center"
                onMouseEnter={() => {
                  setIsCaseOpen(true);
                  setIsServicesOpen(false);
                }}
                onMouseLeave={() => setIsCaseOpen(false)}
              >
                <NavLink
                  to="/case-studies"
                onClick={() => window.scrollTo(0, 0)}
                  
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-0 py-2 text-md font-medium ${
                      isActive
                        ? "text-black border-b-2 border-green-800"
                        : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  Case Studies
                </NavLink>

                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isCaseOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                <div
                  className={`absolute top-full left-0 z-10 w-56
                     transform transition-all duration-300 ease-out
                     ${
                       isCaseOpen
                         ? "opacity-100 translate-y-0 visible"
                         : "opacity-0 -translate-y-3 invisible"
                     }
                       `}
                >
                  <div className="mt-3 p-3 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {caseStudiesList.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-200"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Blogs Link */}
              <NavLink
                to={"/blogs"}
                onClick={() => window.scrollTo(0, 0)}

                className={({ isActive }) =>
                  `inline-flex items-center gap-1 px-3 py-2 text-md font-medium  hover:text-black ${
                    isActive
                      ? "text-black border-b-2 border-green-800"
                      : "text-gray-500  dark:text-gray-400 dark:hover:text-gray-300"
                  }`
                }
              >
                Blogs
              </NavLink>
              {/* Contact us */}
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 px-5 py-2 text-md font-semibold rounded-xl
                transition-all duration-400 ease-in-out
                   ${
                     isActive
                       ? "bg-black text-white"
                       : "bg-yellow-400 text-black hover:bg-black hover:text-white"
                   }`
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile viewor small screen  */}
      <div
        className={`
                  md:hidden absolute top-full left-0 w-full
                  bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800
                  shadow-lg z-50
                  transform transition-all duration-300 ease-out
                  ${
                     isMenuOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-4 invisible"
                    }
                     `}
      >
        <div className="px-4 py-4 space-y-2">
          {/* Home */}
          <NavLink
            to="/home"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Services
            <span
              className={`${
                mobileServicesOpen ? "rotate-180" : ""
              } transition-transform`}
            >
              ▼
            </span>
          </button>

          {mobileServicesOpen && (
            <div className="ml-4 space-y-1">
              {servicesList.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}

          {/* About */}
          <NavLink
            to="/about-us"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>

          {/* Case Studies Dropdown */}
          <button
            onClick={() => setMobileCaseOpen(!mobileCaseOpen)}
            className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Case Studies
            <span
              className={`${
                mobileCaseOpen ? "rotate-180" : ""
              } transition-transform`}
            >
              ▼
            </span>
          </button>

          {mobileCaseOpen && (
            <div className="ml-4 space-y-1">
              {caseStudiesList.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}

          {/* Blogs */}
          <NavLink
            to="/blogs"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </NavLink>

          {/* Contact CTA */}
          <NavLink
            to="/contact-us"
            className="block text-center mt-4 px-4 py-3 rounded-xl font-semibold bg-yellow-400 text-black hover:bg-black hover:text-white transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
