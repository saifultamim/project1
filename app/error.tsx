'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-4 animate-pulse">
        Oops! Something went wrong.
      </h1>
      <p className="text-base md:text-lg text-gray-300 text-center mb-6">
        We encountered an unexpected error. Don’t worry, you can try again or contact support if the issue persists.
      </p>

      <div className="flex space-x-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-500 text-sm md:text-base rounded-full text-white font-medium shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          Try Again
        </button>

        <Link
          href="mailto:support@yourcompany.com"
          className="px-6 py-3 bg-gray-700 text-sm md:text-base rounded-full text-white font-medium shadow-md hover:bg-gray-600 transition-all duration-300"
        >
          Contact Support
        </Link>
      </div>

      <div className="mt-8">
        <Link
          href="http://localhost:3000/"
          className="text-blue-400 hover:text-blue-500 underline text-sm md:text-base"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
