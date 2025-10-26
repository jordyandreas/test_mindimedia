import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import PackagesSection from "@/modules/packages/PackagesSection";
import ReviewsSection from "@/modules/reviews/ReviewsSection";

import AboutSection from "@/modules/about/AboutSection";
import { CallToActionSection } from "@/modules/call-to-action/CallToActionSection";
import CallToActionSection2 from "@/modules/call-to-action/CallToActionSection2";
import ExperienceCTASection from "@/modules/experiences/ExperienceCTASection";
import ExperiencesCatalogSection from "@/modules/experiences/ExperiencesCatalogSection";
import ExperienceSection from "@/modules/experiences/ExperiencesSection";
import HeroVideoSection from "@/modules/hero/HeroVideoSection";
import ArchRevealSection from "@/modules/home/ArchRevealSection";
import { ImagePanelSection } from "@/modules/image-panel/ImagePanelSection";
import IntroCTASection from "@/modules/intro/IntroCTASection";
import UlamanMapSection from "@/modules/maps/Maps";
import RetreatCurtainSection from "@/modules/retreat/RetreatCurtainSection";
import RoomsCarouselSection from "@/modules/rooms/RoomCarouselSection";
import { TextBehindImageSection } from "@/modules/text-behind/TextBehindSection";

export default async function HomePage() {
  // const data = await getResortData();

  return (
    <main className="bg-bg-light-background text-base">
      <Navbar />

      <HeroVideoSection />

      <IntroCTASection />

      <AboutSection />

      <RoomsCarouselSection />

      <ExperienceCTASection />

      <ArchRevealSection />

      <PackagesSection />

      <RetreatCurtainSection />

      <TextBehindImageSection />

      <CallToActionSection />

      <ImagePanelSection />

      <UlamanMapSection />

      <ReviewsSection />

      <ExperienceSection />

      <ExperiencesCatalogSection />

      <CallToActionSection2 />

      <Footer />
    </main>
  );
}
