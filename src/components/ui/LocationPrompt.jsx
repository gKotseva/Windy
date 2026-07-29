import { useState } from "react";

export const LocationPrompt = ({ onAllow, onSkip }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="card max-w-md gap-6">
        <div>
          <h2 className="text-heading text-text font-bold">
            Use your location?
          </h2>

          <p className="mt-2 text-body text-neutral">
            Allow access to your location to automatically show the weather,
            radar, and forecasts for your current area.
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onSkip}
            className="rounded-input border border-outline px-5 py-2 text-neutral hover:text-text"
          >
            Not now
          </button>

          <button
            onClick={onAllow}
            className="rounded-input bg-primary px-5 py-2 font-semibold text-background hover:opacity-90"
          >
            Allow Location
          </button>
        </div>
      </div>
    </div>
  );
};
