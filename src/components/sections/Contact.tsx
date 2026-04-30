"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type FormState = "idle" | "submitting" | "success" | "error";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mnjwaojb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full bg-elevated border border-white/5 rounded-lg px-4 py-3 text-primary " +
    "placeholder:text-secondary focus:outline-none focus:border-accent transition-colors duration-200";

  const labelClass = "block font-mono text-xs text-secondary uppercase tracking-wider mb-1";

  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* ── Left column ── */}
        <div>
          <h2 className="font-display text-4xl font-bold text-primary mb-3">
            Get in Touch
          </h2>
          <div className="h-0.5 w-12 bg-accent mb-6 rounded-full" />

          <p className="text-secondary text-sm leading-relaxed mb-8">
            I&apos;m open to discussing senior data science and AI engineering
            roles, consulting, or interesting project collaborations. Fill in
            the form or reach out directly.
          </p>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent shrink-0" />
              <span className="text-secondary text-sm">
                sakshamnagpal@outlook.com
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-accent shrink-0" />
              <span className="text-secondary text-sm">
                Melbourne, Australia
              </span>
            </li>
            <li className="flex items-center gap-3">
              <LinkedinIcon size={16} />
              <a
                href="https://linkedin.com/in/sakshamnagpal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-sm hover:text-accent transition-colors duration-200"
              >
                linkedin.com/in/sakshamnagpal
              </a>
            </li>
          </ul>
        </div>

        {/* ── Right column ── */}
        <div>
          {state === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
              <CheckCircle2 size={40} className="text-accent" />
              <h3 className="font-display text-2xl font-semibold text-primary">
                Message sent!
              </h3>
              <p className="text-secondary text-sm">
                I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col gap-5 transition-opacity duration-200 ${
                state === "submitting" ? "opacity-60 pointer-events-none" : ""
              }`}
            >
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What would you like to discuss?"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover
                  text-white font-display font-semibold py-3 rounded-lg
                  transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {state === "submitting" ? "Sending..." : "Send Message"}
                {state !== "submitting" && <Send size={15} />}
              </button>

              {state === "error" && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong — please try sakshamnagpal@outlook.com
                  directly
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
