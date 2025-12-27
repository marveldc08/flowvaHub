
import { X, Home, Compass, Library, Layers, CreditCard, Gift, Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("user_email") || "";
    setEmail(userEmail);

  }, []);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <aside
        className={`
          fixed md:static z-50
          top-0 left-0 h-full w-64 bg-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between md:block">
          <img src="/images/logo.png" className="w-[140px]" />
          <button className="md:hidden" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Nav */}
        <nav className="px-4 space-y-2">
          {[
            { icon: Home, label: "Home" },
            { icon: Compass, label: "Discover" },
            { icon: Library, label: "Library" },
            { icon: Layers, label: "Tech Stack" },
            { icon: CreditCard, label: "Subscriptions" },
            { icon: Gift, label: "Rewards Hub", active: true },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
              ${
                item.active
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 mt-[8rem] flex gap-3 border-t" style={{marginBottom: -50}}>
          <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center">
            D
          </div>
          <div>
            <p className="font-medium">David</p>
            <p className="text-xs text-gray-500 truncate">
             {email}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
