"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
  images: readonly string[];
  tech: readonly string[];
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  images,
  tech,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        {/* Carousel */}
        <div className="relative h-56 md:h-72">
          <Image
            src={images[current]}
            alt={title}
            fill
            className="cursor-pointer object-cover transition hover:scale-105"
            onClick={() => setOpen(true)}
          />

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70">
            ‹
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70">
            ›
          </button>

          {/* Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>

          <p className="mt-2 text-gray-300">{description}</p>

          {/* Tech badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {item}
              </span>
            ))}
          </div>

          <Link
            href={link}
            target="_blank"
            className="mt-4 inline-block rounded-lg bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            View Repository
          </Link>
        </div>
      </div>

      {/* Fullscreen Preview */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}>
          <button
            className="absolute right-4 top-4 text-3xl text-white"
            onClick={() => setOpen(false)}>
            ×
          </button>

          <button
            className="absolute left-4 text-4xl text-white"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}>
            ‹
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[current]}
              alt={title}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-4xl text-white"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}>
            ›
          </button>
        </div>
      )}
    </>
  );
};
