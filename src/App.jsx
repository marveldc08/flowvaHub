// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import RewardsPage from "./pages/RewardsPage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Default */}
//         <Route path="/" element={<Navigate to="/login" />} />

//         {/* Auth */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* App */}
//         <Route path="/reward" element={<RewardsPage />} />

//         {/* 404 fallback */}
//         <Route path="*" element={<p className="p-10">Page not found</p>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RewardsPage from "./pages/RewardsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/reward" element={<div className="flex h-screen bg-gray-50"><RewardsPage/></div>} />
        
      </Routes>
    </BrowserRouter>
  );
}
