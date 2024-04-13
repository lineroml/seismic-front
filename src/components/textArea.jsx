"use client";

import { useState } from "react";

export default function BetterTextArea({
  value,
  onChange,
  placeholder,
  error,
  disabled,
}) {
  const statuses = {
    default:
      "w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-all duration-200 ease-in-out",
    error:
      "w-full bg-white rounded border border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-all duration-200 ease-in-out animate-shake",
  };

  return (
    <div className="relative mb-4">
      <label htmlFor="message" className="leading-7 text-sm text-gray-600">
        Message
      </label>
      <textarea
        disabled={disabled}
        id="message"
        name="message"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={error ? statuses.error : statuses.default}
      ></textarea>
    </div>
  );
}
