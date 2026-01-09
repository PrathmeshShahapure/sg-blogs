"use client";

import { useState } from "react";
import {
  FaLink,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const pageUrl =
    typeof window !== "undefined" ? window.location.href : "";
  console.log(pageUrl)
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      pageUrl
    )}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      pageUrl
    )}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <> 
    <div className="flex items-center justify-center gap-3 mt-2">
      {/* Copy link */}
      <button
        onClick={copyLink}
        aria-label="Copy page link"
        className="rounded border p-1 hover:bg-gray-100 transition"
      >
        <FaLink className="w-4 h-3.5  text-gray-600 hover:text-[var(--color-secondary)]" />
      </button>

      {/* Twitter / X */}
      <button
        onClick={shareOnTwitter}
        aria-label="Share on X"
      >
        <FaSquareXTwitter className=" w-6 h-6  text-gray-600 hover:text-black" />
      </button>

      {/* LinkedIn */}
      <button
        onClick={shareOnLinkedIn}
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-600" />
      </button>
      </div>
      {copied && (
        <span className="flex justify-center text-xs text-center mt-2">Copied!</span>
      )}
    
    </>
  );
}