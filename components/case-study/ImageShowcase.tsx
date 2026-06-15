import Image from "next/image";

type ImageShowcaseProps = {
  images: string[];
  alt: string;
};

export default function ImageShowcase({ images, alt }: ImageShowcaseProps) {
  if (!images || images.length === 0) return null;

  const [first, ...rest] = images;

  return (
    <section className="mb-20">
      <div className="mb-3">
        <Image
          src={first}
          alt={alt}
          width={2000}
          height={1200}
          className="w-full h-[70vh] object-cover"
        />
      </div>

      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {rest.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${alt} ${i + 2}`}
              width={1000}
              height={700}
              className="w-full h-[50vh] object-cover"
            />
          ))}
        </div>
      )}
    </section>
  );
}