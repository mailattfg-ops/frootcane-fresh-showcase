"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SpinningTextDemo from "@/components/ui/basic";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    let minElapsed = false;
    let pageReady = false;
    let removeTimer: number | undefined;

    const closeLoader = () => {
      if (!minElapsed || !pageReady) {
        return;
      }

      setHideLoader(true);
      removeTimer = window.setTimeout(() => setLoading(false), 420);
    };

    const onPageReady = () => {
      pageReady = true;
      closeLoader();
    };

    const minTimer = window.setTimeout(() => {
      minElapsed = true;
      closeLoader();
    }, 700);

    if (document.readyState === "complete") {
      onPageReady();
    } else {
      window.addEventListener("load", onPageReady, { once: true });
    }

    // Fallback guard so loader cannot get stuck on slow third-party resources.
    const failSafeTimer = window.setTimeout(onPageReady, 2600);

    return () => {
      window.removeEventListener("load", onPageReady);
      window.clearTimeout(minTimer);
      if (removeTimer) {
        window.clearTimeout(removeTimer);
      }
      window.clearTimeout(failSafeTimer);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.classList.add("is-loading");
      document.documentElement.classList.add("is-loading");
      document.body.classList.remove("page-ready");
      return;
    }

    document.body.classList.remove("is-loading");
    document.documentElement.classList.remove("is-loading");
    document.body.classList.add("page-ready");

    return () => {
      document.body.classList.remove("is-loading");
      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("page-ready");
    };
  }, [loading]);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-100 overflow-hidden bg-[#efe9d4] ${hideLoader ? "loader-fade-out" : "loader-fade-in opacity-100"}`}
      aria-hidden
    >
      <div className="loader-stage relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#f4efdc] via-[#efe8cf] to-[#e6dcc0]" />
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
          <div className="relative h-52 w-52 text-[#1f2b1b]">
            <SpinningTextDemo />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Image
                src="/Frootcane-with-trade-mark.png"
                alt="Frootcane logo"
                width={170}
                height={42}
                className="h-auto w-28"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
