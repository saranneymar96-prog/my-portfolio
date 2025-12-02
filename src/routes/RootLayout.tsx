import { Outlet, Link } from "@tanstack/react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-semibold text-lg">
            Saran<span className="text-emerald-400">.</span>
          </h1>

          <nav className="flex gap-4 text-sm text-slate-300">
            <Link to="/" className="hover:text-emerald-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-emerald-400">
              About
            </Link>
            <Link to="/projects" className="hover:text-emerald-400">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-emerald-400">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 text-xs text-slate-500 py-4 text-center">
        © {new Date().getFullYear()} Saran • Built with TypeScript, TanStack
        Router, Query, Form, Tailwind, shadcn
      </footer>
    </div>
  );
}
