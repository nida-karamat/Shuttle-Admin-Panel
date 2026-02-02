"use client"

import dynamic from "next/dynamic";

const LiveMapClient = dynamic(() => import("@/app/Components/LiveMap/LiveMapClient"), { ssr: false });

export default function LiveMapPage() {
  return <LiveMapClient />;
}


