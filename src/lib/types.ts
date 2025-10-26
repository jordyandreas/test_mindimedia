import type { HeroContent } from "@/modules/hero/hero.types";
import type { Villa } from "@/modules/villas/villas.types";
import type { PackageDeal } from "@/modules/packages/packages.types";
import type { Review } from "@/modules/reviews/reviews.types";
import type { ScheduleSlot } from "@/modules/schedule/schedule.types";
import type { LocationBlurb } from "@/modules/location/location.types";

export interface ResortData {
  hero: HeroContent;
  villas: Villa[];
  packages: PackageDeal[];
  reviews: Review[];
  weeklySchedule: ScheduleSlot[];
  locationBlurb: LocationBlurb;
}
