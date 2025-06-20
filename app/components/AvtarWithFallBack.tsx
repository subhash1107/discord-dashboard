import Image from "next/image";
import { useState } from "react";

export const AvatarWithFallback = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200  relative" aria-label={alt}>
      {loading && <div className="absolute inset-0 bg-gray-300" />}
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="rounded-full object-cover"
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};
