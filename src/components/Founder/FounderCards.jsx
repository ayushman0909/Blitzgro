import { Link } from "react-router-dom";
export default function FounderCards({profiles}) {
  
  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-2xl sm:text-2xl md:text-4xl font-bold text-center   text-gray-900 dark:text-white mb-10">OUR FOUNDERS</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {profiles.map((profile, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 dark:bg-zinc-900 shadow-2xl rounded-2xl hover:-translate-y-1  hover:shadow-lg transition-all duration-300">
            <img
              src={profile.image}
              className="rounded-full w-32 h-32 mb-4 mx-auto object-cover ring-4 ring-gray-200 dark:ring-zinc-700"
              alt={`${profile.name} avatar`}
            />
            <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {profile.name}
            </h5>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{profile.role}</p>
            <p className="text-gray-600 text-left dark:text-gray-400 mb-4">{profile.bio}</p>
            <div className="flex justify-center gap-3">
             {   <>
               <Link
                to="https://www.linkedin.com/company/blitzgro-india" target="_blank"
                title="LinkedIn"
                className="grid place-items-center size-10 rounded-full
             bg-[#0a66c2] text-white
             hover:scale-125 hover:bg-[#145DBF]
             transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                     -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
                     c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"
                  />
                  <path
                    d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065
                     0-1.138.92-2.063 2.063-2.063
                     1.14 0 2.064.925 2.064 2.063
                     0 1.139-.925 2.065-2.064 2.065zM6.964 20.452H3.71V9h3.254v11.452z"
                  />
                </svg>
                
              </Link>
              
                </>
                
             }
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}
