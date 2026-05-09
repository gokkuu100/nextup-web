"use client";

import React from "react";

export function DemoCard() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-100 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-900">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-neutral-900 transition-colors dark:text-white">
          Performance Optimization
        </h3>
        
        <p className="text-neutral-600 transition-colors dark:text-neutral-400">
          Unlock your true potential with our precision-engineered training programs. 
          Available in both light and dark environments.
        </p>
        
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
            Step 1 of 4
          </span>
          <button className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-95 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
