import Link from "next/link";

interface NavbarMobileMenuProps {
  links: { href: string; label: string }[];
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarMobileMenu({
  links,
  mobileOpen,
  setMobileOpen,
}: NavbarMobileMenuProps) {
  const menuState = mobileOpen
    ? "max-h-60 opacity-100 visible"
    : "max-h-0 opacity-0 invisible";
  return (
    <div
      id="mobile-menu"
      className={`lg:hidden bg-neutral-900 border-b border-gray-800 transition-[max-height,opacity,visibility] duration-300 ease-in-out ${menuState}`}
      aria-hidden={!mobileOpen}
    >
      <div className="px-4 pt-3 pb-4 flex flex-col gap-3">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium ml-4 hover:text-orange-400 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
