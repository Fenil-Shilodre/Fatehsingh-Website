import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { EducationalJourney } from "@/components/home/EducationalJourney";
import { ActionPanels } from "@/components/home/ActionPanels";
import { Introduction } from "@/components/home/Introduction";
import { PublicServicePreview } from "@/components/home/PublicServicePreview";
import { InstitutionsPreview } from "@/components/home/InstitutionsPreview";
import { HaveliGroupPreview } from "@/components/home/HaveliGroupPreview";
import { ArchivePreview } from "@/components/home/ArchivePreview";
import { Philosophy } from "@/components/home/Philosophy";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <ImpactStats />
      <EducationalJourney />
      <ActionPanels />
      <Introduction />
      <PublicServicePreview />
      <InstitutionsPreview />
      <HaveliGroupPreview />
      <ArchivePreview />
      <Philosophy />
    </main>
  );
}
