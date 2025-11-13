'use client';
import { Bell, MenuIcon, SearchIcon, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavbarWithSearchBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const mobileMenuClosedClasses = "max-h-0 opacity-0 invisible";
  const mobileMenuOpenClasses = "max-h-60 opacity-100 visible";

  return (
    <header className="relative">
      {/* --- NAVBAR --- */}
      <nav className="bg-black border-b border-gray-700 text-gray-200 px-4 py-2.5 flex items-center justify-between sm:px-6 md:px-8">
        {/* --- Left Section --- */}
        <div className="flex items-center gap-3">
          {/* Ícono de menú (mobile + tablet) */}
          <button
            aria-label={mobileOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMobileOpen((s) => !s);
              setSearchOpen(false);
            }}
            className="lg:hidden p-1 rounded hover:bg-gray-800 transition"
          >
            {mobileOpen ? (
              <X size={26} strokeWidth={2.5} />
            ) : (
              <MenuIcon size={26} strokeWidth={2.5} />
            )}
          </button>

          {/* Logo */}
          <Link href="/" aria-label="Ir a la página de inicio" className="flex items-center">
            <Image
              src="/logo-mt.png"
              alt="Logo del sitio"
              width={62}
              height={45}
              className="object-contain"
            />
          </Link>
        </div>

        {/* --- Center Links (solo desktop) --- */}
        <div className="hidden lg:flex gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-orange-400 transition-colors">
            Inicio
          </Link>
          <Link href="/movies" className="hover:text-orange-400 transition-colors">
            Películas
          </Link>
          <Link href="/series" className="hover:text-orange-400 transition-colors">
            Series
          </Link>
          <Link href="/contact" className="hover:text-orange-400 transition-colors">
            Contacto
          </Link>
        </div>

        {/* --- Right Section --- */}
        <div className="flex items-center gap-3">
          {/* Ícono de búsqueda (mobile + tablet) */}
          <button
            aria-label={searchOpen ? "Cerrar barra de búsqueda" : "Abrir barra de búsqueda"}
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

          {/* Barra de búsqueda (solo desktop) */}
          <div className="hidden lg:flex items-center bg-gray-800 rounded-full px-3 py-1.5 w-56 xl:w-64 focus-within:ring-2 focus-within:ring-orange-400">
            <SearchIcon size={20} className="text-gray-400 mr-2" />
            <input
              id="desktop-search"
              type="text"
              placeholder="Buscar..."
              aria-label="Buscar contenido en el sitio"
              className="bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none w-full text-sm"
            />
          </div>

          {/* Ícono de notificación */}
          <a 
            href="/notificaciones" 
            aria-label="Ver notificaciones"
            className="hover:text-orange-400 transition-colors"
          >
            <Bell size={26} strokeWidth={2.5} />
          </a>

          {/* Ícono de usuario */}
          <a 
            href="/perfil"
            aria-label="Ir a perfil de usuario"
            className="bg-gray-500 text-black rounded-full w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center hover:opacity-90 transition"
          >
            <UserRound size={22} />
          </a>
        </div>
      </nav>

      {/* --- Barra de búsqueda en mobile + tablet --- */}
      <div
        id="mobile-search-bar"
        className={`lg:hidden bg-black border-b border-gray-700 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
          searchOpen ? "max-h-20 opacity-100 visible" : mobileMenuClosedClasses
        }`}
        aria-hidden={!searchOpen}
      >
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 mx-4 mt-2 mb-3 focus-within:ring-2 focus-within:ring-orange-400">
          <SearchIcon size={20} className="text-gray-400 mr-2" />
          <input
            id="mobile-search"
            type="text"
            placeholder="Buscar..."
            aria-label="Buscar contenido en el sitio móvil"
            className="bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* --- Menú móvil/tablet desplegable --- */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-black border-b border-gray-700 transition-[max-height,opacity,visibility] duration-300 ease-in-out ${
          mobileOpen ? mobileMenuOpenClasses : mobileMenuClosedClasses
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-4 pt-3 pb-4 flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium hover:text-orange-400 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/movies"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium hover:text-orange-400 transition-colors"
          >
            Películas
          </Link>
          <Link
            href="/series"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium hover:text-orange-400 transition-colors"
          >
            Series
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium hover:text-orange-400 transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
