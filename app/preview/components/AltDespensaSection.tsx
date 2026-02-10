"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "../../components/Modal";
import DespensaModal from "../../components/DespensaModal";
import type {
  EventConfig,
  LocationConfig,
  RegistrationConfig,
} from "../../../config/types";

interface AltDespensaSectionProps {
  event: EventConfig;
  location: LocationConfig;
  registration: RegistrationConfig;
}

export default function AltDespensaSection({
  event,
  location,
  registration,
}: AltDespensaSectionProps) {
  const [medallaOpen, setMedallaOpen] = useState(false);

  return (
    <>
      <section id="evento" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="green-frame bg-cream p-6 md:p-12 relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-slate uppercase mb-4 leading-tight">
                Tu carrera alimenta familias
              </h2>
              <p className="text-slate/60 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                Cada corredor aporta{" "}
                <strong className="text-forest">
                  ${registration.price} pesos y una despensa
                </strong>{" "}
                de alimentos no perecederos. Todo lo recaudado se entrega
                directamente a familias vulnerables de Pradera Dorada.
              </p>

              {/* What to bring — despensa items (clickable to open full list) */}
              <DespensaModal
                title={registration.despensaTitle}
                items={registration.despensaItems}
              >
                {(openModal) => (
                  <button
                    type="button"
                    onClick={openModal}
                    className="cursor-pointer w-full"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                      {registration.despensaItems.slice(0, 6).map((item) => {
                        const label = item.replace(/\s*\(.*\)/, "");
                        return (
                          <div
                            key={item}
                            className="flex flex-col items-center gap-2 hover-bounce"
                          >
                            <div className="w-16 h-16 bg-sky/30 textured relative rounded-xl flex items-center justify-center">
                              <svg
                                className="relative z-10 w-8 h-8"
                                viewBox="0 0 32 32"
                                fill="none"
                              >
                                <rect
                                  x="6"
                                  y="4"
                                  width="20"
                                  height="24"
                                  rx="3"
                                  fill="#9ECAD9"
                                  stroke="#3D5A73"
                                  strokeWidth="1.2"
                                />
                                <rect
                                  x="9"
                                  y="10"
                                  width="14"
                                  height="8"
                                  rx="1.5"
                                  fill="#F0EBE1"
                                />
                              </svg>
                            </div>
                            <span className="text-xs font-bold text-slate/60">
                              {label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-forest text-sm font-bold mb-12 hover:underline underline-offset-4">
                      Ver lista completa de despensa →
                    </p>
                  </button>
                )}
              </DespensaModal>

              {/* Feature cards row */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {/* Card: Playera */}
                <div className="bg-sky/20 textured relative rounded-xl p-5 text-center">
                  <div className="relative z-10">
                    <svg
                      className="w-6 h-6 text-slate/50 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <p className="font-display font-bold text-slate text-sm uppercase">
                      Playera incluida
                    </p>
                    <p className="text-slate/50 text-xs mt-1">
                      Diseño conmemorativo 2026
                    </p>
                  </div>
                </div>

                {/* Card: Medalla */}
                <button
                  type="button"
                  onClick={() => setMedallaOpen(true)}
                  className="bg-coral/20 textured relative rounded-xl p-5 text-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="relative z-10">
                    <svg
                      className="w-6 h-6 text-slate/50 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.27.308 6.023 6.023 0 0 1-2.27-.308"
                      />
                    </svg>
                    <p className="font-display font-bold text-slate text-sm uppercase">
                      Medalla para todos
                    </p>
                    <p className="text-slate/50 text-xs mt-1">
                      Todos reciben medalla
                    </p>
                  </div>
                </button>

                {/* Card: Hidratación */}
                <div className="bg-sage/20 textured relative rounded-xl p-5 text-center">
                  <div className="relative z-10">
                    <svg
                      className="w-6 h-6 text-slate/50 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18a.94.94 0 0 0-.662.274.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                      />
                    </svg>
                    <p className="font-display font-bold text-slate text-sm uppercase">
                      Hidratación
                    </p>
                    <p className="text-slate/50 text-xs mt-1">
                      Agua y fruta en ruta
                    </p>
                  </div>
                </div>

                {/* Card: 100% Benéfico */}
                <DespensaModal
                  title={registration.despensaTitle}
                  items={registration.despensaItems}
                >
                  {(openModal) => (
                    <button
                      type="button"
                      onClick={openModal}
                      className="bg-yellow/20 textured relative rounded-xl p-5 text-center cursor-pointer hover:scale-105 transition-transform"
                    >
                      <div className="relative z-10">
                        <svg
                          className="w-6 h-6 text-slate/50 mx-auto mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                        <p className="font-display font-bold text-slate text-sm uppercase">
                          100% Benéfico
                        </p>
                        <p className="text-slate/50 text-xs mt-1">
                          Todo para familias
                        </p>
                      </div>
                    </button>
                  )}
                </DespensaModal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medalla Modal */}
      <Modal open={medallaOpen} onClose={() => setMedallaOpen(false)}>
        <div className="p-2">
          <Image
            src={registration.medallaImage}
            alt={registration.medallaImageAlt}
            width={800}
            height={800}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </Modal>
    </>
  );
}
