import type { DetailedHTMLProps, HTMLAttributes } from "react";

type RealScoutBaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  "agent-encoded-id"?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "realscout-simple-search": RealScoutBaseProps;
      "realscout-advanced-search": RealScoutBaseProps;
      "realscout-office-listings": RealScoutBaseProps & {
        "sort-order"?: string;
        "listing-status"?: string;
        "property-types"?: string;
        "price-min"?: string;
        "price-max"?: string;
      };
      "realscout-home-value": RealScoutBaseProps;
    }
  }
}

export {};
