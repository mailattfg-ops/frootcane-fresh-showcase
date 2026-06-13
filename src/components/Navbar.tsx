"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [inHomeSection, setInHomeSection] = useState(true);
  const hideTimerRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const [homeLink, aboutLink, menuLink, galleryLink, contactLink] = navLinks;

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
    setOpen(false);
  };

  useEffect(() => {
    const clearHideTimer = () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const scheduleHide = (delay: number) => {
      clearHideTimer();
      hideTimerRef.current = window.setTimeout(() => {
        setVisible(false);
      }, delay);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (inHomeSection) {
        setVisible(true);
        return;
      }

      if (event.clientY < 120) {
        setVisible(true);
        scheduleHide(2200);
      }
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastScrollYRef.current;
      let stillInHome = inHomeSection;

      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        stillInHome = rect.top <= 120 && rect.bottom >= 220;
        setInHomeSection(stillInHome);
      }

      if (stillInHome) {
        clearHideTimer();
        setVisible(true);
        lastScrollYRef.current = currentY;
        return;
      }

      if (currentY < 40) {
        setVisible(true);
        scheduleHide(2400);
      } else if (scrollingUp) {
        setVisible(true);
        scheduleHide(1800);
      } else {
        scheduleHide(700);
      }

      lastScrollYRef.current = currentY;
    };

    if (!inHomeSection) {
      scheduleHide(2400);
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      clearHideTimer();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [inHomeSection]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${visible || open ? "translate-y-0" : "-translate-y-full"}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => {
        if (!open) {
          hideTimerRef.current = window.setTimeout(() => setVisible(false), 900);
        }
      }}
    >
      <div className="w-full px-0">
        <div className="relative border-y border-[#cadcb7] bg-linear-to-r from-[#f6f8ef] via-[#edf5e3] to-[#e8f1dc] py-4 shadow-[0_8px_18px_rgba(57,88,38,0.14)]">
          <div className="mx-auto hidden max-w-7xl items-center justify-between lg:flex px-8">
            {/* Left side links */}
            <div className="flex flex-1 justify-end items-center gap-14">
              <Link
                href={homeLink.href}
                onClick={(event) => handleNavClick(event, homeLink.href)}
                className="font-condensed text-[1.25rem] font-medium tracking-[0.06em] text-[#253d1f] transition duration-300 hover:text-[#3c6a2f]"
              >
                {homeLink.label}
              </Link>
              <Link
                href={aboutLink.href}
                onClick={(event) => handleNavClick(event, aboutLink.href)}
                className="font-condensed text-[1.25rem] font-medium tracking-[0.06em] text-[#253d1f] transition duration-300 hover:text-[#3c6a2f]"
              >
                {aboutLink.label}
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex h-14 w-44 items-center justify-center relative z-20 flex-none mx-8">
              <Link
                href="#home"
                onClick={(event) => handleNavClick(event, "#home")}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center flex"
              >
                <span className="inline-flex h-28 w-28 items-center justify-center rounded-full border-[3px] border-[#9fc781] bg-linear-to-b from-[#fefff8] to-[#edf5df] shadow-[0_12px_24px_rgba(51,83,36,0.26)] ring-4 ring-[#ecf4df]/75">
                  <Image
                    src="/Frootcane with trade mark.png"
                    alt="Frootcane logo"
                    width={190}
                    height={44}
                    className="h-auto w-20 max-w-none"
                    priority
                  />
                </span>
              </Link>
            </div>

            {/* Right side links */}
            <div className="flex flex-1 justify-start items-center gap-14">
              <Link
                href={menuLink.href}
                onClick={(event) => handleNavClick(event, menuLink.href)}
                className="font-condensed text-[1.25rem] font-medium tracking-[0.06em] text-[#253d1f] transition duration-300 hover:text-[#3c6a2f]"
              >
                {menuLink.label}
              </Link>
              <Link
                href={galleryLink.href}
                onClick={(event) => handleNavClick(event, galleryLink.href)}
                className="font-condensed text-[1.25rem] font-medium tracking-[0.06em] text-[#253d1f] transition duration-300 hover:text-[#3c6a2f]"
              >
                {galleryLink.label}
              </Link>
              <Link
                href={contactLink.href}
                onClick={(event) => handleNavClick(event, contactLink.href)}
                className="rounded-full border border-[#3f6e2f] bg-linear-to-r from-[#2f5e24] to-[#3c702c] px-6 py-2.5 font-condensed text-[1.1rem] font-semibold tracking-[0.1em] text-[#f7f7f1] shadow-[0_10px_20px_rgba(36,68,29,0.26)] transition duration-300 hover:-translate-y-0.5 hover:from-[#29551f] hover:to-[#356526]"
              >
                {contactLink.label}
              </Link>
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:hidden">
            <Link href="#home" onClick={(event) => handleNavClick(event, "#home")} className="flex items-center">
              <Image
                src="/Frootcane with trade mark.png"
                alt="Frootcane logo"
                width={190}
                height={46}
                className="h-11 w-auto rounded-md border border-[#d3e5bf] bg-linear-to-b from-[#fbfcf7] to-[#eff7e4] px-2 py-1 shadow-[0_6px_12px_rgba(46,73,33,0.15)]"
                priority
              />
            </Link>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="rounded border border-[#b9d39f] bg-[#f4f9ec] p-2 text-[#264621] transition hover:bg-[#eaf3de]"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mx-2 mt-2 rounded-2xl border border-[#cfe1bd] bg-[#fafbf6]/95 px-5 py-4 shadow-[0_12px_22px_rgba(46,73,33,0.14)] backdrop-blur-sm lg:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="font-condensed text-[1.08rem] font-medium tracking-[0.05em] text-[#2a4523] transition duration-300 hover:text-[#3f6f31]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
