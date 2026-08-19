import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { Introduction } from "@/components/home/Introduction";
import { LegacyPreview } from "@/components/home/LegacyPreview";
import { PublicServicePreview } from "@/components/home/PublicServicePreview";
import { SilvassaVisualBreak } from "@/components/home/SilvassaVisualBreak";
import { InstitutionsPreview } from "@/components/home/InstitutionsPreview";
import { HaveliGroupPreview } from "@/components/home/HaveliGroupPreview";
import { ArchivePreview } from "@/components/home/ArchivePreview";
import { Philosophy } from "@/components/home/Philosophy";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <ImpactStats />
      <Introduction />
      <LegacyPreview />
      <PublicServicePreview />
      <SilvassaVisualBreak />
      <InstitutionsPreview />
      <HaveliGroupPreview />
      <ArchivePreview />
      <Philosophy />
    </main>
  );
}
