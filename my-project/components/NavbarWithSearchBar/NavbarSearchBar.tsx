import { SearchIcon } from "lucide-react";

interface NavbarSearchBarProps {
  searchOpen: boolean;
}

export default function NavbarSearchBar({ searchOpen }: NavbarSearchBarProps) {
  return (
    <div
      id="mobile-search-bar"
      className={`lg:hidden bg-neutral-900 border-b border-gray-800 transition-[max-height,opacity,visibility] duration-300 ease-in-out overflow-hidden ${
        searchOpen
          ? "max-h-20 opacity-100 visible"
          : "max-h-0 opacity-0 invisible"
      }`}
      aria-hidden={!searchOpen}
    >
      <div className="flex items-center bg-neutral-800 rounded-full px-3 py-2 mx-4 mt-2 mb-3 focus-within:ring-2 focus-within:ring-orange-400">
        <SearchIcon size={20} className="text-gray-400 mr-2" />
        <input
          id="mobile-search"
          type="text"
          placeholder="Search..."
          aria-label="Search content"
          className="bg-transparent text-gray-200 placeholder-neutral-500 focus:outline-none w-full text-sm"
        />
      </div>
    </div>
  );
}
