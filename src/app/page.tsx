import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { Introduction } from "@/components/home/Introduction";
import { PublicServicePreview } from "@/components/home/PublicServicePreview";
import { InstitutionsPreview } from "@/components/home/InstitutionsPreview";
import { HaveliGroupPreview } from "@/components/home/HaveliGroupPreview";
import { AwardsRecognition } from "@/components/home/AwardsRecognition";
import { ArchivePreview } from "@/components/home/ArchivePreview";
import { Philosophy } from "@/components/home/Philosophy";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <ImpactStats />
      <Introduction />
      <PublicServicePreview />
      <InstitutionsPreview />
      <HaveliGroupPreview />
      <AwardsRecognition />
      <ArchivePreview />
      <Philosophy />
    </main>
  );
}
