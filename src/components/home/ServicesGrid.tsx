import { homeServices } from "@/config/services";
import { ServiceCard } from "./ServiceCard";
export function ServicesGrid() {
  return (
    <div
      className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 overflow-visible rounded-(--home-radius) border-0 bg-transparent max-[1100px]:grid-cols-3 max-[767px]:grid-cols-2 max-[430px]:grid-cols-1 in-[.home-page]:grid-cols-[0.9fr_1.1fr] in-[.home-page]:gap-x-11.25 in-[.home-page]:gap-y-0 max-[1100px]:in-[.home-page]:gap-x-6.25 max-[767px]:in-[.home-page]:grid-cols-1 max-[767px]:in-[.home-page]:gap-0"
      data-stagger
    >
      {homeServices.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
