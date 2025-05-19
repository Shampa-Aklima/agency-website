"use client";

import SingleServicePage from "../../serviceSinglePage/page/ServicePage";
import { useParams } from "next/navigation";
import { services } from "../data/services-data";

export default function Page() {
  const params = useParams();
  const slug = params?.slug;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="p-10 text-center">Service not found</div>;
  }

  return <SingleServicePage service={service} />;
}