"use client";

import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function FrootcaneLoaderScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="font-slab text-4xl font-semibold text-[#1d3518] md:text-5xl">
              Freshly Pressed
              <br />
              <span className="mt-1 inline-block font-condensed text-5xl leading-none text-[#2f6d1d] md:text-[5.2rem]">
                FROOTCANE
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] text-[#4f5e49] md:text-lg">
              Clean process, real ingredients, and naturally refreshing cane blends.
            </p>
          </>
        }
      >
        <Image
          src="/images/about-cane.jpg"
          alt="Frootcane hero"
          height={720}
          width={1400}
          className="mx-auto h-full w-full rounded-2xl object-cover object-center"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
