const skills = [
  {
    title: 'Buyer representation',
    text: 'She builds a tight search brief, tours with intent, and protects your offer strategy from the first showing.',
  },
  {
    title: 'Pricing & comps',
    text: 'Offers and list prices rest on recent solds, days on market, and condition—not guesswork or hype.',
  },
  {
    title: 'Negotiation',
    text: 'Inspection credits, appraisal gaps, and closing timelines get handled with clear numbers and calm pressure.',
  },
  {
    title: 'Neighborhood fluency',
    text: 'Summerlin, Henderson, Spring Valley, Southern Highlands, The Lakes—she maps commute, lot, and HOA tradeoffs.',
  },
  {
    title: 'Transaction management',
    text: 'Contracts, contingencies, title, and lenders stay sequenced so closings do not stall on paperwork.',
  },
  {
    title: 'Seller strategy',
    text: 'Staging priorities, list timing, and buyer feedback loops aim for a clean sale at a defensible price.',
  },
];

export default function RealtorSkills() {
  return (
    <section id="skills" className="section-pad bg-[var(--color-paper)]">
      <div className="container-max">
        <p className="eyebrow">Realtor skills</p>
        <h2 className="display-title mt-3 max-w-2xl text-4xl text-[var(--color-ink)] md:text-5xl">
          What she actually does for clients
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
          Six skills that show up on every file—from first call to recorded deed.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="border-t border-[var(--color-line)] pt-6"
            >
              <span className="text-sm tracking-[0.2em] text-[var(--color-brass)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="display-title mt-3 text-2xl text-[var(--color-ink)] md:text-3xl">
                {skill.title}
              </h3>
              <p className="mt-3 text-[var(--color-text-muted)]">{skill.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
