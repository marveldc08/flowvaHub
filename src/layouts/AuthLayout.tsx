import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Brand Side */}
      <div className="hidden lg:flex w-1/2 bg-linear-to-br from-primary to-purple-500 text-white p-12 flex-col justify-between">
        <div>
          <h1 className="text-6xl font-bold ">Flowva</h1>
          <p className="mt-4 text-lg opacity-90">
            Build. Share. Earn rewards.
          </p>
        </div>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Flowva
        </p>
      </div>

      {/* Form Side */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
}
