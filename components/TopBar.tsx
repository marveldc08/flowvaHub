// "use client";

// import { Bell, LogOut } from "lucide-react";
// // import Image from "next/image";

// export const Topbar = () => {
 
//   return (
//     <header className="bg-gray flex pt-10 pb-3 h-auto  bg-gray-50 items-center justify-between px-0" style={{position: "sticky", top:-40, marginTop:-30, zIndex: 1000}}>
//       {/* Left Section */}
//       <div>
//         <h1 className="text-xl md:text-[1.5rem] mb-1 font-large">Rewards Hub</h1>
//         <p className="text-gray-600">Earn points, unlock rewards, and celebrate your progress!</p>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-5">
//         <button className="relative cursor-pointer">
//           <Bell className="w-5 h-5 text-gray-600" />
//           <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>
//       </div>
//     </header>
//   );
// };


"use client";

import { Bell, Menu } from "lucide-react";

export const Topbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <header className="sticky top-0 z-30 bg-gray-50 px-4 md:px-7 py-4 flex items-center justify-between" style={{position: "sticky", top:-40, marginTop:-30, zIndex: 1000}}>
      {/* Left */}
      <div className="flex items-center gap-3">
        <button className="md:hidden" onClick={onMenuClick}>
          <Menu />
        </button>

        <div>
          <h1 className="text-lg md:text-2xl font-semibold">
            Rewards Hub
          </h1>
          <p className="hidden sm:block text-gray-600 text-sm">
            Earn points, unlock rewards, and celebrate your progress!
          </p>
        </div>
      </div>

      {/* Right */}
      <button className="relative">
        <Bell className="w-5 h-5 text-gray-600" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
      </button>
    </header>
  );
};

