"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RefreshRoute() {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return <></>;
}
