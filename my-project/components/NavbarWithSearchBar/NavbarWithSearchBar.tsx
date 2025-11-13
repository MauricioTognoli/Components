"use client";
import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarSearchBar from "./NavbarSearchBar";
import NavbarRightActions from "./NavbarRightActions";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarOverlay from "./NavbarOverlay";
import { MenuIcon, X } from "lucide-react";

export const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/analytics", label: "Analytics" },
];

export default function NavbarWithSearchBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative">
      <nav className="bg-neutral-900 border-b border-gray-800 text-gray-200 px-4 py-2.5 flex items-center justify-between sm:px-6 md:px-8">
        <div className="flex items-center gap-3">
          {/* --- Mobile menu --- */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMobileOpen((s) => !s);
              setSearchOpen(false);
            }}
            className="lg:hidden p-1 rounded hover:bg-gray-800 transition"
          >
            {mobileOpen ? <X /> : <MenuIcon />}
          </button>
          <div className="flex flex-row gap-20 items-center">
            <NavbarLogo />
            <NavbarLinks links={NAV_LINKS} />
          </div>
        </div>

        <NavbarRightActions
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          setMobileOpen={setMobileOpen}
        />
      </nav>

      <NavbarSearchBar searchOpen={searchOpen} />
      <NavbarMobileMenu
        links={NAV_LINKS}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <NavbarOverlay mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </header>
  );
}
