import { REALSCOUT_AGENT_ENCODED_ID } from "@/config/site";

type RealScoutSimpleSearchProps = {
  className?: string;
};

export default function RealScoutSimpleSearch({
  className = "",
}: RealScoutSimpleSearchProps) {
  return (
    <div className={`realscout-embed realscout-embed--search ${className}`}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-simple-search agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}"></realscout-simple-search>`,
        }}
      />
    </div>
  );
}
