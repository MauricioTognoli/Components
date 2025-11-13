import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to the homepage"
      className="flex items-center"
    >
      <Image
        src="/logo-mt.png"
        alt="Site logo"
        width={62}
        height={45}
        className="object-contain"
        priority
      />
    </Link>
  );
}
