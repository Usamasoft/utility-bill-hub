import Image from 'next/image';

interface SectionImageProps { src: string; alt: string; caption?: string; priority?: boolean; }
export default function SectionImage({ src, alt, caption, priority = false }: SectionImageProps) {
  return (
    <figure className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div className="relative w-full h-56 sm:h-72 md:h-80">
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} sizes="(max-width: 768px) 100vw, 800px" />
      </div>
      {caption && <figcaption className="bg-gray-50 px-4 py-2 text-sm text-gray-500 text-center border-t border-gray-100">{caption}</figcaption>}
    </figure>
  );
}
