"use client";
import dynamic from "next/dynamic";
import Hero from "./Hero";

const MedicalCarousel = dynamic(() => import("./MedicalCarousel"), { ssr: false });
const WorldMap = dynamic(() => import("./WorldMap"), { ssr: false });

export default function HomeSections() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start h-screen w-screen"><Hero /></section>
      <section className="snap-start h-screen w-screen bg-slate-100 flex items-center justify-center">
        <MedicalCarousel />
      </section>
      <section className="snap-start h-screen w-screen bg-slate-100 flex items-center justify-center">
        <MedicalCarousel reverse />
      </section>
      <section className="snap-start h-screen w-screen"><WorldMap /></section>
    </div>
  );
}
