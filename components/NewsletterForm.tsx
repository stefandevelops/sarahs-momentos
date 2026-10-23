"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  return done ? (
    <p className="kicker">Thank you — you&rsquo;re on the list.</p>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true); // Prototype: not connected to a mailing service yet
      }}
      className="mx-auto flex w-full max-w-md flex-col gap-4 sm:flex-row sm:items-end"
    >
      <label className="flex-1">
        <span className="sr-only">Email address</span>
        <input type="email" required placeholder="Email address" className="field" />
      </label>
      <button className="btn-dark shrink-0">Subscribe</button>
    </form>
  );
}
