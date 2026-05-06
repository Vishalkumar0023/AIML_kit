"use client";

import { useEffect, useState } from "react";

type SuccessToastProps = {
  show: boolean;
};

export default function SuccessToast({ show }: SuccessToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!show) return;

    setVisible(true);
    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => window.clearTimeout(timeout);
  }, [show]);

  if (!visible) return null;

  return (
    <div className="fixed right-4 top-24 z-50 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900 shadow-lg">
      Payment successful. Your order summary has been saved on this device.
    </div>
  );
}
