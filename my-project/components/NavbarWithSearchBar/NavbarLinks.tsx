import Link from "next/link";

interface NavbarLinksProps {
  links: { href: string; label: string }[];
}

export default function NavbarLinks({ links }: NavbarLinksProps) {
  return (
    <div className="hidden lg:flex gap-8 text-md font-medium">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-orange-400 transition-colors"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
