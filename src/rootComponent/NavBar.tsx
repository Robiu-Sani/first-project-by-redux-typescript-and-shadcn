import { ModeToggle } from "@/shadcn-component/mode-toggle";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Tasks", path: "/tasks" },
  {
    name: "Services",
    dropdown: [
      { name: "Service 1", path: "/service1" },
      { name: "Service 2", path: "/service2" },
      { name: "Service 3", path: "/service3" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function NavBar() {
  return (
    <div className="w-full border-b bg-white dark:bg-zinc-900 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to={`/`}>
          <img
            src="./logo.png"
            alt="note pade logo"
            className="w-[40px] h-[40px] rounded-full"
          />
        </Link>

        {/* Nav Items */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {!item.dropdown ? (
                <NavLink
                  to={item.path}
                  className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
                >
                  {item.name}
                </NavLink>
              ) : (
                <div>
                  <button className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all">
                    {item.name} <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute border top-[14px] overflow-hidden left-0 hidden group-hover:block mt-2 bg-white dark:bg-zinc-800 shadow-lg rounded-md w-48">
                    {item.dropdown.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600"
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

        {/* Mode Toggle */}
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
      >
        <span className="material-icons">menu</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 shadow-md">
          {navItems.map((item, index) => (
            <div key={index}>
              {!item.dropdown ? (
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600"
                >
                  {item.name}
                </Link>
              ) : (
                <div>
                  <span className="block px-4 py-2 font-semibold text-zinc-700 dark:text-zinc-300">
                    {item.name}
                  </span>
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 pl-8 text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
