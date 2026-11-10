import { REALSCOUT_AGENT_ENCODED_ID } from "@/config/site";

type RealScoutOfficeListingsProps = {
  className?: string;
  priceMin?: string;
  priceMax?: string;
  propertyTypes?: string;
  sortOrder?: string;
  listingStatus?: string;
};

export default function RealScoutOfficeListings({
  className = "",
  priceMin = "750000",
  priceMax,
  propertyTypes = ",SFR,TC",
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
}: RealScoutOfficeListingsProps) {
  const attrs = [
    `agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}"`,
    `sort-order="${sortOrder}"`,
    `listing-status="${listingStatus}"`,
    `property-types="${propertyTypes}"`,
    `price-min="${priceMin}"`,
    priceMax ? `price-max="${priceMax}"` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`realscout-embed realscout-embed--listings ${className}`}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-office-listings ${attrs}></realscout-office-listings>`,
        }}
      />
    </div>
  );
}
