import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  "BMO-advocaten",
  "rijken_deurwaarders"
];

export default function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
    VERTROUWD DOOR
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((logo, idx) => (
              <Image
                key={idx}
                width={200}
                height={80}
                src={`/${logo}.png`}
                className="h-auto w-auto mx-8 dark:brightness-0 dark:invert grayscale opacity-30 object-contain"
                alt={logo}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
