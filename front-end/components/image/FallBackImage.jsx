import Image from "next/image";
export const FallBackImage = ({ url }) => {
  return (
    <Image
      alt="meme image"
      style={{ transform: "translate3d(0, 0, 0)" }}
      src={url }
      width={720}
      height={480}
      sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
    />
  );
};
