"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Building, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Send,
  Award,
  Ticket,
  ChevronRight
} from "lucide-react";
import { SPEAKING_EVENTS } from "@/data/scholarData";
import { EventItem } from "@/types";

export default function EventsSection() {
  const [selectedEventForReg, setSelectedEventForReg] = useState<EventItem | null>(null);
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regAffiliation, setRegAffiliation] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setSelectedEventForReg(null);
      setRegName("");
      setRegEmail("");
      setRegAffiliation("");
    }, 2800);
  };

  const upcomingEvents = SPEAKING_EVENTS.filter((e) => e.status === "upcoming");
  const pastEvents = SPEAKING_EVENTS.filter((e) => e.status === "archived");

  return (
    <section id="events" className="py-24 bg-[#FAF8F5] border-b border-ash relative">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="badge-tag">
              07 / FORUMS & SYMPOSIA
            </span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-light text-ink tracking-[-1.5px] sm:tracking-[-2.3px] leading-[1.1]">
            Speaking Engagements, Keynotes & Methodology Masterclasses
          </h2>

          <div className="font-urdu text-[17px] text-emerald leading-relaxed">
            سمینارز، علمی کانفرنسز اور بین الاقوامی ورکشاپس
          </div>

          <p className="font-serif text-[17px] font-normal text-fossil leading-[1.45] tracking-[-0.34px]">
            Delivering scholarly papers, keynotes, and practical methodology workshops across premier universities and research consortiums.
          </p>
        </div>

        {/* Featured Workshop Card on Warm Ivory Canvas / Paper card */}
        {upcomingEvents.length > 0 && (
          <div className="mb-14">
            <div className="text-[12px] font-mono uppercase tracking-wider text-fossil mb-4">
              Upcoming Highlight Workshop • Registration Open
            </div>

            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="card-paper-lg p-7 sm:p-10 border border-ash bg-white shadow-maze-subtle"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="badge-tag">
                        Registration Live
                      </span>
                      <span className="px-2.5 py-0.5 rounded-[4px] bg-paper text-fossil text-[12px] font-mono border border-ash flex items-center gap-1.5">
                        <Ticket className="w-3.5 h-3.5 text-olive" />
                        <span>32 / 50 Seats Reserved</span>
                      </span>
                      <span className="text-[12px] font-mono text-fossil">
                        {event.type}
                      </span>
                    </div>

                    <h3 className="font-serif text-[26px] sm:text-[32px] font-light text-ink leading-tight tracking-[-1px]">
                      {event.title}
                    </h3>

                    <p className="font-serif text-[15px] text-smoke leading-relaxed max-w-2xl">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-5 text-[13px] font-serif text-fossil pt-3 border-t border-sand">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-ink" />
                        <span className="font-medium text-ink">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-ink" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-ink" />
                        <span>{event.organization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Countdown blocks & CTA */}
                  <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center w-full max-w-xs">
                      <div className="p-3 bg-paper rounded-inputs border border-ash">
                        <div className="text-[20px] font-serif font-light text-ink">42</div>
                        <div className="text-[10px] uppercase font-mono text-fossil">Days</div>
                      </div>
                      <div className="p-3 bg-paper rounded-inputs border border-ash">
                        <div className="text-[20px] font-serif font-light text-ink">14</div>
                        <div className="text-[10px] uppercase font-mono text-fossil">Hours</div>
                      </div>
                      <div className="p-3 bg-paper rounded-inputs border border-ash">
                        <div className="text-[20px] font-serif font-light text-ink">30</div>
                        <div className="text-[10px] uppercase font-mono text-fossil">Mins</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedEventForReg(event)}
                      className="btn-ink w-full max-w-xs py-3.5 text-[15px] justify-center"
                    >
                      <span>Register for Workshop</span>
                      <ArrowRight className="w-4 h-4 text-chartreuse" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conference Archive Grid — Flat Paper Cards (12px radius) */}
        <div>
          <div className="text-[12px] font-mono uppercase tracking-wider text-fossil mb-4 flex items-center justify-between">
            <span>Delivered Conference Presentations & Papers</span>
            <span className="text-[11px]">Archived Repository</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-[#dfd5f2] rounded-cards p-6 flex flex-col justify-between hover:border-[#6a4fb5] hover:shadow-maze-subtle transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[12px] font-serif">
                    <span className="font-mono text-fossil">{event.date}</span>
                    <span className="badge-tag">
                      {event.type}
                    </span>
                  </div>

                  <h4 className="font-serif text-[18px] font-light text-ink group-hover:text-olive transition-colors leading-snug tracking-[-0.34px]">
                    {event.title}
                  </h4>

                  <p className="font-serif text-[13px] text-smoke leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-sand text-[12px] font-serif text-fossil flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate pr-2">
                    <Building className="w-3.5 h-3.5 text-fossil flex-shrink-0" />
                    <span className="truncate">{event.organization}</span>
                  </div>
                  <span className="text-ink text-xs font-mono">Archived</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* REGISTRATION MODAL — Flat Paper Card (16px radius) */}
      {selectedEventForReg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper max-w-md w-full rounded-largecards border border-ash overflow-hidden shadow-maze-subtle">
            <div className="p-5 border-b border-sand flex items-center justify-between bg-bone">
              <div>
                <span className="badge-tag">Workshop Seat Reservation</span>
                <h4 className="font-serif text-[18px] font-light text-ink mt-0.5">
                  Register for Masterclass
                </h4>
              </div>
              <button
                onClick={() => setSelectedEventForReg(null)}
                className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink transition-colors text-base"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-3.5 rounded-inputs bg-sand/40 border border-ash text-[13px] font-serif space-y-1">
                <div className="font-medium text-ink">{selectedEventForReg.title}</div>
                <div className="text-fossil">{selectedEventForReg.date} • {selectedEventForReg.location}</div>
              </div>

              {regSuccess ? (
                <div className="p-6 rounded-inputs bg-sand/60 text-ink text-center space-y-2 border border-ash">
                  <CheckCircle2 className="w-8 h-8 text-olive mx-auto" />
                  <div className="font-serif text-[16px]">Seat Reserved Successfully</div>
                  <p className="font-serif text-[13px] text-fossil">
                    Your workshop credential pass has been issued. Check your email for Zoom/physical venue entry pass.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-3">
                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asim Raza"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full px-3 py-2 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="asim@university.edu.pk"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">Affiliation / Seminary</label>
                    <input
                      type="text"
                      placeholder="Department of Islamic Studies / Jamia"
                      value={regAffiliation}
                      onChange={(e) => setRegAffiliation(e.target.value)}
                      className="w-full px-3 py-2 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-ink w-full py-3 text-[14px] justify-center mt-2"
                  >
                    <span>Confirm Workshop Registration</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
