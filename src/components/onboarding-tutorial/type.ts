import React from "react";

export interface IOnboardingStep {
  target: string | HTMLElement;
  content: React.ReactNode;
  disableBeacon?: boolean;
  disableOverlay?: boolean;
  disableScrolling?: boolean;
  placement?: "top" | "bottom" | "left" | "right" | "center";
  spotlightClicks?: boolean;
  styles?: Record<string, unknown>;
  title?: React.ReactNode;
}

export interface IOnboardingStepProps {
  steps: IOnboardingStep[];
}
