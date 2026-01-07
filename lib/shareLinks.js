"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaLink,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export const CopyLinkButton=()=> {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <button
      onClick={copyLink}
      className="flex items-center   gap-2 rounded-md border px-4 py-2 text-sm transition"
      aria-label="Copy page link"
    >
      <FaLink className="text-gray-600 hover:text-[#6f3fb8] transition " />
    </button>
  );
}
