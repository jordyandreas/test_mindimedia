import { Review } from "./reviews.types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="min-w-[280px] max-w-sm shrink-0 rounded-2xl bg-bg-card p-6 ring-1 ring-white/10 fade-up">
      <div className="text-accent-gold text-xs uppercase tracking-wide font-medium">
        {review.date}
      </div>
      <div className="mt-2 font-display text-xl text-white leading-snug">
        “{review.quoteTitle}”
      </div>
      <p className="mt-3 text-sm text-text-softer leading-relaxed line-clamp-4">
        {review.quoteBody}
      </p>
      <div className="mt-4 text-sm text-text-dim font-medium">
        {review.name}
      </div>
    </div>
  );
}
