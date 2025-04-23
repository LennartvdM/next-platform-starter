import { useState, useRef } from 'react';
import Image from 'next/image';

export default function MedicalCarousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timer = useRef(); // removed TS type
  const rowRefs = useRef([]); // removed TS type

  if (!slides.length) return null;

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i) => setIndex(i);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={slides[index].src}
          alt={slides[index].alt || `slide-${index}`}
          width={1600}
          height={900}
          className="w-full object-cover"
          priority
        />
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? 'bg-cyan-600' : 'bg-slate-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
