"use client";

import { useState, type FormEvent } from "react";
import { Github, Twitter, Music2, Mail, Send, Loader2, Check, AlertTriangle } from "lucide-react";
import { TerminalPane } from "@/components/terminal-pane";
import { Button } from "@/components/ui/button";
import { social, CONTACT_EMAIL } from "@/lib/data";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  Twitter: Twitter,
  TikTok: Music2,
  Email: Mail,
};

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Invalid email address";
    if (!message.trim()) next.message = "Message is required";
    else if (message.trim().length < 10) next.message = "Message is too short";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setErrorDetail(null);
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error(
          "Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY — get a free key at web3forms.com and add it to your env vars."
        );
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `New message from ${name.trim()} via portfolio`,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Submission was rejected");

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("[Web3Forms error]", err);
      setErrorDetail(err instanceof Error ? err.message : null);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <TerminalPane command="mail --compose --to=emmanuel" meta="compose">
          <div className="grid gap-10 md:grid-cols-[280px_1fr]">
            <div>
              <h2 className="text-xl font-semibold text-ink">Let&apos;s build something</h2>
              <p className="mt-3 text-sm leading-relaxed text-dim">
                Have a project, an opportunity, or just want to talk shop? I&apos;d love to hear
                from you.
              </p>

              <ul className="mt-6 space-y-3">
                {social.map((s) => {
                  const Icon = icons[s.label];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-3 text-sm"
                      >
                        {Icon && <Icon className="h-4 w-4 text-faint group-hover:text-mint" />}
                        <span className="text-dim group-hover:text-ink">{s.handle}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 inline-flex items-center gap-2 border border-mint/25 bg-mint/[0.06] px-3 py-1.5 text-xs text-mint">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                available for freelance &amp; full-time
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-dim">
                  <span className="text-mint">&gt;</span> name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-line-bright bg-panel2 px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-mint"
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-danger">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-dim">
                  <span className="text-mint">&gt;</span> email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-line-bright bg-panel2 px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-mint"
                  placeholder="jane@company.com"
                />
                {errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-dim">
                  <span className="text-mint">&gt;</span> message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none border border-line-bright bg-panel2 px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-mint"
                  placeholder="Tell me a bit about the project..."
                />
                {errors.message && <p className="mt-1 text-xs text-danger">{errors.message}</p>}
              </div>

              <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> sending
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> send message
                  </>
                )}
              </Button>

              {status === "sent" && (
                <p className="flex items-center gap-2 text-sm text-mint">
                  <Check className="h-4 w-4" /> Message sent I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-danger">
                  <AlertTriangle className="h-4 w-4" /> Something went wrong — email me directly at{" "}
                  {CONTACT_EMAIL}
                  {errorDetail ? ` (${errorDetail})` : ""}
                </p>
              )}
            </form>
          </div>
        </TerminalPane>
      </div>
    </section>
  );
}