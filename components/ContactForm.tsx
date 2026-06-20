"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email us directly.");
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b border-white/20 py-3 text-base placeholder:opacity-30 focus:outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="mb-8">
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-widest opacity-40 mb-3"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={inputClasses}
        />
      </div>

      <div className="mb-8">
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-widest opacity-40 mb-3"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@email.com"
          className={inputClasses}
        />
      </div>

      <div className="mb-10">
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-widest opacity-40 mb-3"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your project"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
className="text-xs uppercase tracking-widest opacity-40 hover:text-accent hover:opacity-100 transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"      >
        {status === "loading" ? "Sending..." : "Send message →"}
      </button>

      {status === "success" && (
        <p className="mt-6 text-sm text-accent opacity-80">
          Message sent. We&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-6 text-sm opacity-60">{errorMessage}</p>
      )}
    </form>
  );
}