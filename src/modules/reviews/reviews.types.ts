export interface Review {
  name: string;
  quoteTitle: string;
  quoteBody: string;
  date: string;
  ratingSource: string; // <- widened
}
