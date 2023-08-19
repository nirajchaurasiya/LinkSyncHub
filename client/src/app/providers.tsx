"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="background_blur">
      {children}
      <Next13ProgressBar
        height="3px"
        color="var(--loading-bar-bg)"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </div>
  );
};

export default Providers;
