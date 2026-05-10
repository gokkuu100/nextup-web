"use client";

import React, { useState } from "react";
import { Header } from "@/components/features/landing/Header";
import { Footer } from "@/components/features/landing/Footer";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactPage() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitContactForm(formData);
      if (result.success) {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        alert(result.error ?? "Something went wrong. Please try again.");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="bg-background text-foreground min-h-screen pt-24 font-dmsans">
      <Header />
      
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Left Side: Info */}
            <div className="animate-on-scroll">
              <p className="text-[10px] tracking-[0.2em] uppercase text-primary flex items-center gap-2 mb-6">
                <span className="w-7 h-px bg-primary"></span>
                <span>Get in touch</span>
              </p>
              <h1 className="font-bebas text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight uppercase text-foreground mb-12">
                {"LET'S START THE"}
                <br/>
                <span className="text-primary">DIALOGUE</span>
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
                <div>
                  <h4 className="font-bebas text-2xl tracking-wide uppercase mb-4 text-foreground">Location</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    123 Performance Way<br />
                    Nairobi, Nairobi<br />
                    Kenya
                  </p>
                </div>
                <div>
                  <h4 className="font-bebas text-2xl tracking-wide uppercase mb-4 text-foreground">Inquiries</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    hello@nextupfit.com<br />
                    +212 6 00 00 00 00
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-10 mt-16">
                {['instagram', 'facebook', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 flex items-center justify-center border border-foreground/10 hover:bg-primary hover:text-black hover:border-primary transition-all">
                    <iconify-icon icon={`ant-design:${social}-filled`} width="22" height="22"></iconify-icon>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-foreground/[0.02] p-8 md:p-12 animate-on-scroll">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">First Name</label>
                    <input name="firstName" type="text" required className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Last Name</label>
                    <input name="lastName" type="text" required className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Subject</label>
                  <select name="subject" className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground appearance-none">
                    <option value="Personal Training" className="bg-background">Personal Training</option>
                    <option value="Membership Inquiry" className="bg-background">Membership Inquiry</option>
                    <option value="Corporate Programs" className="bg-background">Corporate Programs</option>
                    <option value="Other" className="bg-background">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Message</label>
                  <textarea name="message" rows={4} required className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full bg-primary text-black font-bold text-[10px] tracking-widest uppercase py-5 rounded-sm hover:bg-white transition-all mt-4 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {pending ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
