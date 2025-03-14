"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Clean up any extension-added classes after hydration
    const originalClasses = document.body.className;
    document.body.className = originalClasses.split(' ')[0];
  }, []);

  return children;
}