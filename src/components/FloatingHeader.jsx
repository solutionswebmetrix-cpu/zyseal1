import { useEffect, useState } from "react"

export default function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollUp, setScrollUp] = useState(true)

  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 80)
      setScrollUp(currentScrollY < lastScrollY || currentScrollY < 80)

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    "Home",
    "About Us",
    "Products",
    "Media & Certification",
  ]

  return (
    <header className="fixed top-6 left-0 z-50 w-full px-6 pointer-events-none">
      <div
        className={`mx-auto flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto ${
          scrolled && !scrollUp 
            ? "max-w-fit gap-[1.5px]" 
            : "max-w-[1400px] justify-between gap-5"
        }`}
      >
        <div
          className={`flex h-[64px] items-center gap-3 rounded-[20px] bg-white/80 backdrop-blur-xl px-5 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            scrolled && !scrollUp
              ? "w-[64px] justify-center px-0 rounded-[20px]"
              : "w-[180px]"
          }`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zyseal-navy text-white font-bold text-lg shadow-lg shadow-zyseal-navy/20">
            Z
          </div>

          <span className={`text-[16px] font-bold tracking-tight text-zyseal-navy transition-all duration-500 ${
            scrolled && !scrollUp ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
          }`}>
            Zyseal
          </span>
        </div>

        <nav
          className={`flex h-[64px] items-center justify-center rounded-[20px] bg-white/80 backdrop-blur-xl px-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            scrolled && !scrollUp
              ? "px-6"
              : "w-auto"
          }`}
        >
          <ul className="flex items-center gap-8 text-[14px] font-bold text-zyseal-navy/70">
            {navLinks.map((item) => (
              <li
                key={item}
                className={`group relative cursor-pointer whitespace-nowrap transition-all duration-300 hover:text-zyseal-navy ${
                  scrolled && !scrollUp && (item === "Home") ? "hidden md:block" : ""
                } ${scrolled && !scrollUp && item !== "Home" ? "hidden lg:block" : ""}`}
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-zyseal-red rounded-full transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
            {/* Mobile/Compact indicator */}
            <li className={`md:hidden ${scrolled && !scrollUp ? "block" : "hidden"}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-zyseal-navy/20"></div>
            </li>
          </ul>
        </nav>

        <div
          className={`flex h-[64px] items-center justify-center rounded-[20px] bg-white/80 backdrop-blur-xl px-2 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            scrolled && !scrollUp
              ? "w-[120px]"
              : "w-[150px]"
          }`}
        >
          <button className="w-full h-[48px] rounded-[14px] bg-zyseal-navy px-4 text-[13px] font-bold text-white transition-all duration-300 hover:bg-zyseal-red hover:shadow-lg hover:shadow-zyseal-red/20 active:scale-95">
            Contact
          </button>
        </div>      
      </div>
    </header>
  )
}