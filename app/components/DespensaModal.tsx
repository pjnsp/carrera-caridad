"use client";

import { useState } from "react";
import Modal from "./Modal";

interface DespensaModalProps {
  title: string;
  items: string[];
  children: (open: () => void) => React.ReactNode;
}

export default function DespensaModal({
  title,
  items,
  children,
}: DespensaModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children(() => setOpen(true))}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-8">
          <h3 className="font-impact text-2xl uppercase text-ink mb-6">
            {title}
          </h3>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-faint text-sm leading-relaxed">
            Puedes traer uno o varios artículos. ¡Todo suma!
          </p>
        </div>
      </Modal>
    </>
  );
}
