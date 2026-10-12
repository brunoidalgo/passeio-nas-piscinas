import Image from "next/image";
import { hero } from "@/lib/site";
import { publicFileExists } from "@/lib/media";
import { HeroContent } from "./HeroContent";
import { TornEdge } from "./TornEdge";

export function Hero() {
  const hasVideo = publicFileExists(hero.video);
  const hasWebm = publicFileExists(hero.videoWebm);

  return (
    <section id="topo" className="relative isolate flex min-h-svh items-center justify-center bg-petrol-900">
      {/* Fundo: vídeo se existir em /public/videos, senão foto com movimento lento */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {hasVideo ? (
          <video
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={hero.image.src}
            aria-hidden="true"
          >
            {hasWebm && <source src={hero.videoWebm} type="video/webm" />}
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="animate-kenburns object-cover object-[50%_55%]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-petrol-950/70 via-petrol-950/35 to-petrol-950/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,39,36,0.55),transparent_65%)]" />
      </div>

      <HeroContent />

      <div className="absolute inset-x-0 bottom-0">
        <TornEdge color="text-cream" seed={11} />
      </div>
    </section>
  );
}
