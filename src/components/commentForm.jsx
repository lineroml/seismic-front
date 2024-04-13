"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import BetterTextArea from "./textArea";

export default function CommentForm({ params }) {
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const router = useRouter();

  const setText = (text) => {
    setCommentText(text);
    setError(false);
  };

  const sendComment = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROR_API_URL}/api/features/${id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: commentText }),
      }
    );

    if (response.ok) {
      setCommentText("");
      setError(false);
      alert("Your comment has been sent!");
      router.refresh();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Did you feel this Seismic Event?
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Please post your comments below.
        </p>
        <BetterTextArea
          value={commentText}
          onChange={setText}
          placeholder="Please enter your comment here."
          error={error}
          disabled={loading}
        />
        <button
          disabled={loading}
          className={
            loading
              ? "text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none rounded text-lg"
              : "text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
          }
          onClick={() => {
            setLoading(true);
            sendComment();
            setLoading(false);
          }}
        >
          Button
        </button>
        <p className="text-xs text-gray-500 mt-3">
          By sending a comment, you agree to the terms of service and our
          privacy policy, which is conveniently hidden from plain sight, but you
          can find it here<a href="/privacy">.</a>
        </p>
      </div>
    </>
  );
}
