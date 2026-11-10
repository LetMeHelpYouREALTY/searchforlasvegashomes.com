import { REALSCOUT_AGENT_ENCODED_ID } from "@/config/site";

type RealScoutAdvancedSearchProps = {
  className?: string;
};

export default function RealScoutAdvancedSearch({
  className = "",
}: RealScoutAdvancedSearchProps) {
  return (
    <div className={`realscout-embed realscout-embed--advanced ${className}`}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-advanced-search agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}"></realscout-advanced-search>`,
        }}
      />
    </div>
  );
}
