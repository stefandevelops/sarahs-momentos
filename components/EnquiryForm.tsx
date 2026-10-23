"use client";
import { useState } from "react";

type Props = { variant?: "wedding" | "contact" };

export default function EnquiryForm({ variant = "wedding" }: Props) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="py-16 text-center">
        <p className="h-display text-[22px]">Thank you</p>
        <p className="mt-3 text-sm text-muted">Prototype only — this form is not yet connected. Enquiries will be routed to the studio inbox.</p>
      </div>
    );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-x-8 gap-y-6 md:grid-cols-2"
    >
      <label><span className="label">Name</span><input required className="field" /></label>
      <label><span className="label">Email</span><input type="email" required className="field" /></label>
      <label><span className="label">Phone</span><input type="tel" className="field" /></label>
      {variant === "wedding" ? (
        <>
          <label>
            <span className="label">Type of event</span>
            <select className="field">
              <option>Wedding</option>
              <option>Christening / Communion</option>
              <option>Private celebration</option>
              <option>Corporate event</option>
              <option>Other</option>
            </select>
          </label>
          <label><span className="label">Event date</span><input type="date" className="field" /></label>
          <label><span className="label">Venue / location</span><input className="field" placeholder="e.g. Belfast" /></label>
          <label>
            <span className="label">Approximate budget</span>
            <select className="field">
              <option>Under £1,000</option>
              <option>£1,000 – £2,500</option>
              <option>£2,500 – £5,000</option>
              <option>£5,000+</option>
            </select>
          </label>
          <label><span className="label">Guests</span><input type="number" min={0} className="field" /></label>
        </>
      ) : (
        <label>
          <span className="label">Subject</span>
          <select className="field">
            <option>An order</option>
            <option>Bespoke bouquet</option>
            <option>Weddings &amp; events</option>
            <option>Sympathy flowers</option>
            <option>Something else</option>
          </select>
        </label>
      )}
      <label className="md:col-span-2">
        <span className="label">{variant === "wedding" ? "Tell us about your vision" : "Message"}</span>
        <textarea rows={4} className="field resize-none" />
      </label>
      <div className="md:col-span-2">
        <button className="btn-dark w-full md:w-auto">Send enquiry</button>
      </div>
    </form>
  );
}
