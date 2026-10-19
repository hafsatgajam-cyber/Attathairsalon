import Image from "next/image";

// Real photos for styles, matched by the start of the label (case-insensitive).
// Add a photo to public/styles/ and a line here to use it everywhere.
const photos: [prefix: string, src: string][] = [["knotless", "/styles/knotless.jpg"]];

export const photoFor = (label: string) =>
  photos.find(([prefix]) => label.toLowerCase().startsWith(prefix))?.[1];

// Placeholder artwork for styles without a photo yet.
const palettes = [
  ["#48582b", "#2a3419"],
  ["#a8813f", "#6b4f22"],
  ["#5a6d35", "#384522"],
  ["#7a5c3a", "#2a1d14"],
];

export function StyleTile({
  label,
  index = 0,
  className = "",
  priority = false,
}: {
  label: string;
  index?: number;
  className?: string;
  priority?: boolean;
}) {
  const photo = photoFor(label);

  if (photo) {
    return (
      <div className={`relative flex items-end overflow-hidden rounded-2xl p-4 text-cream ${className}`}>
        <Image
          src={photo}
          alt={`${label} hairstyle by Attat Hair Saloon`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" aria-hidden="true" />
        <span className="relative font-serif text-xl font-semibold drop-shadow">{label}</span>
      </div>
    );
  }

  const [a, b] = palettes[index % palettes.length];
  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-2xl p-4 text-cream ${className}`}
      style={{ background: `linear-gradient(150deg, ${a}, ${b})` }}
    >
      <svg className="absolute -top-6 -right-6 h-40 w-40 opacity-15" viewBox="0 0 100 100" aria-hidden="true">
        <path
          d="M50 5c-20 0-32 18-30 40 2 18 10 30 6 50h48c-4-20 4-32 6-50 2-22-10-40-30-40z"
          fill="currentColor"
        />
      </svg>
      <span className="relative font-serif text-xl font-semibold">{label}</span>
    </div>
  );
}
