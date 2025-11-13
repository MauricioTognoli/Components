"use client";

interface NavbarOverlayProps {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarOverlay({
  mobileOpen,
  setMobileOpen,
}: NavbarOverlayProps) {
  if (!mobileOpen) return null;

  return (
    <div
      aria-hidden="true"
      onClick={() => setMobileOpen(false)}
      className="
        fixed inset-0 
        lg:hidden
        transition-opacity duration-300
      "
    />
  );
}
