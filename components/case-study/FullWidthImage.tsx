import Image from "next/image";
import Reveal from "@/components/Reveal";

type FullWidthImageProps = {
  src: string;
  alt: string;
};

export default function FullWidthImage({
  src,
  alt,
}: FullWidthImageProps) {
  return (
    <Reveal>
      <section className="mb-20">
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1200}
          className="w-full h-[70vh] object-cover"
        />
      </section>
    </Reveal>
  );
}