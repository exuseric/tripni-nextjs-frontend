import Image from "next/image";
import { tv } from "tailwind-variants";

const imageWidgetStyles = tv({
  base: "relative overflow-hidden w-fit",
  variants: {
    shape: {
      rounded: "rounded-2xl",
      circle: "rounded-full",
      "semicircle-t": "rounded-t-full",
      "semicircle-b": "rounded-b-full",
      "semicircle-l": "rounded-l-full",
      "semicircle-r": "rounded-r-full",
    },
    aspect: {
      square: "aspect-square",
      portrait: "aspect-[9/16]",
      landscape: "aspect-video",
    },
  },
  defaultVariants: {
    shape: "rounded",
  },
});

type ImageWidgetProps = {
  src: string;
  alt?: string;
  className?: string;
  shape?: "rounded" | "circle" | "semicircle-t" | "semicircle-b" | "semicircle-l" | "semicircle-r";
  aspect?: "square" | "portrait" | "landscape";
};

export const ImageWidget = ({
  src = "https://placehold.co/400.webp",
  alt,
  className,
  shape,
  aspect,
}: ImageWidgetProps) => {
  return (
    <div className={imageWidgetStyles({ shape, aspect, className })}>
      <Image src={src} alt={alt ?? ""} fill style={{objectFit: "cover"}} role={alt ? "presentation" : undefined} />
    </div>
  );
};
