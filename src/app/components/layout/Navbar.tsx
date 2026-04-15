import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#7F77DD] border-b-[3px] border-[#3C3489]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg border-[2.5px] border-[#3C3489] flex items-center justify-center">
          <span className="text-[#7F77DD] font-black text-sm">C</span>
        </div>
        <span className="text-white font-black text-xl tracking-tight">
          Commify
        </span>
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6 text-white font-bold text-sm">
        <Link href="/browse" className="hover:text-[#FAC775] transition-colors">
          Browse
        </Link>
        <Link href="/artists" className="hover:text-[#FAC775] transition-colors">
          Artists
        </Link>
        <Link href="/requests" className="hover:text-[#FAC775] transition-colors">
          Requests
        </Link>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center gap-2">
        <button className="font-extrabold text-sm px-4 py-2 rounded-xl border-[2.5px] border-[#3C3489] text-white hover:bg-white/10 transition-colors">
          Log in
        </button>
        <button className="font-extrabold text-sm px-4 py-2 rounded-xl border-[2.5px] border-[#854F0B] bg-[#FAC775] text-[#412402] hover:bg-[#EF9F27] transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
}