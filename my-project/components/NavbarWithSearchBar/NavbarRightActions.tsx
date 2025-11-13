"use client";
import { Bell, SearchIcon, UserRound } from "lucide-react";
import Link from "next/link";

interface NavbarRightActionsProps {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarRightActions({
  searchOpen,
  setSearchOpen,
  setMobileOpen,
}: NavbarRightActionsProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Mobile search */}
      <button
        aria-label={searchOpen ? "Close search bar" : "Open search bar"}
        aria-expanded={searchOpen}
        aria-controls="mobile-search-bar"
        onClick={() => {
          setSearchOpen((s) => !s);
          setMobileOpen(false);
        }}
        className="lg:hidden p-1 rounded hover:bg-gray-800 transition"
      >
        <SearchIcon size={26} strokeWidth={2.5} />
      </button>

      {/* Desktop search */}
      <div className="hidden lg:flex items-center bg-neutral-800 rounded-md px-3 py-1.5 w-48 md:w-56 xl:w-64 focus-within:ring-2 focus-within:ring-orange-400">
        <SearchIcon size={20} className="text-gray-400 mr-2" />
        <input
          id="desktop-search"
          type="text"
          placeholder="Search..."
          aria-label="Search content"
          className="bg-transparent text-gray-200 placeholder-neutral-500 focus:outline-none w-full text-sm"
        />
      </div>

      <Link
        href="/notifications"
        aria-label="View notifications"
        className="hover:text-orange-400 transition-colors"
      >
        <Bell size={26} strokeWidth={2.5} />
      </Link>

      <Link
        href="/profile"
        aria-label="user profile"
        className="bg-gray-500 text-black rounded-full w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center hover:opacity-90 transition"
      >
        <UserRound size={22} />
      </Link>
    </div>
  );
}
