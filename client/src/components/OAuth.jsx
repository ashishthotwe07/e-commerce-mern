import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <div className="px-6 sm:px-0 max-w-sm">
      <button
        type="button"
        className="text-white w-full bg-gray-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
      >
        <FcGoogle className="mr-2 -ml-1 w-4 h-4" />
        Continue With Google
      </button>
    </div>
  );
}
