"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { business } from "@/lib/site";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 300);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const whatsappNumber = business.phoneRaw.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I have a question about your heating and cooling services.",
  )}`;

  return (
    <div className="fixed right-4 bottom-[76px] z-50 flex flex-col items-center gap-2 md:right-6 md:bottom-6">
      {showBackToTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex size-11 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:outline-offset-4"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </button>
      ) : null}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JHI Services on WhatsApp"
        className="inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#20bd5a] focus-visible:outline-offset-4"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
