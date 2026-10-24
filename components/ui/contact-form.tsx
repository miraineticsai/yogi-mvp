"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "general",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = React.useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [submittedData, setSubmittedData] = React.useState<ContactFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number with country code.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please write a brief message of at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate network submission delay
    setTimeout(() => {
      // In this frontend-only phase, we simulate the submission
      // and explicitly inform the user that this is frontend mode.
      setSubmittedData({ ...formData });
      setStatus("success");
    }, 800);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setStatus("idle");
    setSubmittedData(null);
  };

  return (
    <div className="bg-white rounded-xl border border-border/80 p-6 sm:p-8 shadow-xs">
      {status === "success" && submittedData ? (
        <div className="space-y-5 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-semibold text-forest">
              Enquiry Preview Received
            </h3>
            <p className="text-sm text-[#333E35] leading-relaxed">
              Thank you, <strong className="text-forest font-bold">{submittedData.fullName}</strong>.
              Your enquiry regarding{" "}
              <strong className="text-forest font-bold capitalize">{submittedData.enquiryType}</strong> has been
              validated and captured in frontend demonstration mode.
            </p>
          </div>

          <div className="p-4 bg-[#F2ECE0] rounded-xl text-xs space-y-1.5 border border-border">
            <p className="font-bold text-forest">Frontend Integration Notice:</p>
            <p className="text-[#333E35]">
              * Phase 1 is a frontend-only implementation. No actual backend server or database is
              connected yet. In Phase 2, this form connects to your backend endpoint (e.g. Next.js Route
              Handler `POST /api/contact`, n8n automation webhook, or email service).
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md bg-forest text-white hover:bg-forest-light transition-colors shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <h3 className="font-serif text-2xl font-medium text-forest mb-1">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#4F5B51] font-medium">
              Fill out this enquiry form and our team in Mandrem will get back to you within 24 hours.
            </p>
          </div>

          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="fullName" className="block text-xs font-bold text-[#18201A] uppercase tracking-wider">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
              placeholder="e.g. Maya Patel"
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#18201A] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-1 ${
                errors.fullName
                  ? "border-red-400 focus:border-red-500 focus:ring-red-400"
                  : "border-border focus:border-forest focus:ring-forest"
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3 h-3" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email & Phone grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-bold text-[#18201A] uppercase tracking-wider">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="maya@example.com"
                className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#18201A] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-1 ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-red-400"
                    : "border-border focus:border-forest focus:ring-forest"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs font-bold text-[#18201A] uppercase tracking-wider">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                placeholder="+91 98765 00000"
                className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#18201A] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-1 ${
                  errors.phone
                    ? "border-red-400 focus:border-red-500 focus:ring-red-400"
                    : "border-border focus:border-forest focus:ring-forest"
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Enquiry Type Selector */}
          <div className="space-y-1.5">
            <label htmlFor="enquiryType" className="block text-xs font-bold text-[#18201A] uppercase tracking-wider">
              Enquiry Type
            </label>
            <select
              id="enquiryType"
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-md border border-border text-sm text-[#18201A] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
            >
              <option value="general">General Studio Inquiry</option>
              <option value="yttc">200-Hour / 300-Hour Yoga Teacher Training</option>
              <option value="drop-in">Daily Drop-in Class Reservation</option>
              <option value="retreat">Coastal Yoga Retreat in Goa</option>
              <option value="private">1-on-1 Private Yoga Guidance</option>
              <option value="workshop">Weekend Specialized Workshop</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-bold text-[#18201A] uppercase tracking-wider">
              Your Message *
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="Tell us about your yoga experience, dates you'll be in Goa, or any questions you have..."
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#18201A] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-1 resize-y ${
                errors.message
                  ? "border-red-400 focus:border-red-500 focus:ring-red-400"
                  : "border-border focus:border-forest focus:ring-forest"
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold rounded-md bg-forest text-white hover:bg-forest-light transition-all shadow-xs hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Validating & Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
