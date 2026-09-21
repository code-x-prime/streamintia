export interface Testimonial {
  id: string;
  name: string;
  role: "streamer" | "agent";
  quote: string;
  image?: string;
  approved: boolean;
}
export const testimonials: Testimonial[] = []; // Add only verified, consented stories.
