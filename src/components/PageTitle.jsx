import React from "react";

export default function PageTitle({ title, subtitle }) {
  return (
    <div className="text-center py-6 bg-[#FFFDE7] rounded-lg shadow-sm mb-6">
      <h1 className="text-3xl font-bold text-[#FFEB3B]">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
