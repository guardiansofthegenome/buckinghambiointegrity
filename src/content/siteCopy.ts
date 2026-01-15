export const siteCopy = {
  meta: {
    title: "Buckingham BioIntegrity | Consent and Access Audit Sprint for Biobanks",
    description:
      "In 10 business days, BioIntegrity delivers a defensible Consent to Use Map, Access Pathway Diagram, Risk Register, Minimum Audit Log Spec, and a 90 day action plan for biobanks.",
  },
  hero: {
    pill: "Buckingham BioIntegrity",
    kicker: "Consent and Access Audit Sprint",
    headline: "Consent and access clarity for biobanks.",
    subhead:
      "In 10 business days, BioIntegrity turns your consent language, access pathways, and downstream reuse into a single auditable model your team can defend.",
    trust:
      "Tool agnostic. Governance first. Built to reduce ambiguity and strengthen defensibility.",
    ctaPrimary: "Book a 15 minute pilot fit call",
    ctaSecondary: "Request a sample deliverable",
  },

  problem: {
    title: "The problem is not your science. It’s the permission fog.",
    body: [
      "Biobanks move fast. Data moves faster. Consent language evolves. Access pathways multiply. Vendors touch the pipeline. Research reuse expands.",
      "At the same time, leadership is expected to answer one question with certainty: Who accessed what, under which permission, and for what use?",
      "When that answer is not provable, risk shows up quietly first, then all at once.",
    ],
    bullets: [
      "Consent boundaries are spread across versions, cohorts, and documents, not one enforceable model.",
      "Data access decisions live in inboxes, hallway conversations, and unclear approval chains.",
      "Downstream reuse is hard to track, harder to defend, and easy to misrepresent after the fact.",
      "Audit readiness becomes a scramble instead of a posture.",
    ],
  },

  pilot: {
    title: "Pilot: Consent and Access Audit Sprint",
    oneLiner:
      "A fixed scope sprint that converts your current state into a defensible map, a ranked risk view, and a practical action plan.",
    body: [
      "This is not a software rip and replace.",
      "This is the governance layer you should already have, made explicit, documented, and ready to implement.",
      "You leave with a clear, auditable picture of what is allowed, what is unclear, where the access actually happens, what must be logged, and what to fix first.",
    ],
  },

  deliverables: {
    title: "What you get in 10 business days",
    items: [
      {
        title: "Consent to Use Map",
        desc: "A single view of what consent allows, what it prohibits, and where it is ambiguous. Translated into actionable permission categories.",
      },
      {
        title: "Access Pathway Diagram",
        desc: "A clear diagram of systems, people, vendors, handoffs, and decision points that touch data access and release.",
      },
      {
        title: "Ranked Risk Register",
        desc: "The top governance risks, ranked by likelihood and impact, including immediate fixes and longer term controls.",
      },
      {
        title: "Minimum Audit Log Spec",
        desc: "A practical spec for what must be logged to be defensible. What to capture, where it should live, and how it should be reviewed.",
      },
      {
        title: "90 day Governance Action Plan",
        desc: "A sequenced plan with owners, dependencies, and the fastest path to measurable improvement.",
      },
    ],
    close:
      "This sprint produces artifacts your team can use immediately, without waiting on procurement or a platform migration.",
  },

  process: {
    title: "How it works",
    steps: [
      {
        title: "Day 1 to 2: Orientation",
        desc: "We align on scope, stakeholders, and what “defensible” means for your organization.",
      },
      {
        title: "Day 3 to 6: Mapping",
        desc: "We review consent language and policies, then map access pathways and decision points. We identify where permissions and process drift.",
      },
      {
        title: "Day 7 to 9: Synthesis",
        desc: "We convert findings into the deliverables, prioritize risk, and draft the minimum audit log spec.",
      },
      {
        title: "Day 10: Readout",
        desc: "You receive the full deliverable pack, plus a live readout, and the next steps plan.",
      },
    ],
    inputsTitle: "Inputs we need from you:",
    inputs: [
      "Consent templates and current versions",
      "Any data access request forms, DUAs, SOPs (even if messy)",
      "A short list of people for interviews (usually 3 to 6)",
    ],
  },

  who: {
    title: "Built for teams carrying serious data responsibility",
    body: [
      "This pilot is for biobanks and biorepositories, academic cores, translational research programs, and hospital research institutes.",
      "If you have data that can outlive the people who collected it, you need governance that outlives the original context.",
    ],
  },

  why: {
    title: "Why BioIntegrity",
    body: [
      "Most teams are not failing. They are operating without a unified permission model.",
      "BioIntegrity is built as a governance-first layer that makes consent boundaries explicit, access pathways visible, decisions auditable, and clarity possible without forcing a software migration.",
      "Mechanism first, meaning second. We build the posture, then the story gets easier.",
    ],
  },

  faq: {
    title: "FAQ",
    items: [
      {
        q: "Do you replace our LIMS, ELN, consent platform, or ticketing system?",
        a: "No. This pilot is tool agnostic. It clarifies what you have and what must be enforceable. If you later choose a platform, your requirements will be clean.",
      },
      {
        q: "Do you need access to PHI?",
        a: "Not for the pilot. We minimize exposure. If a later phase requires deeper integration, we scope it deliberately and safely.",
      },
      {
        q: "What if our consent language is inconsistent or messy?",
        a: "That is normal. The sprint is designed for reality, not ideal documentation.",
      },
      {
        q: "Will this satisfy regulatory requirements by itself?",
        a: "This pilot strengthens defensibility and readiness, but it is not legal advice. It gives your team the map, the logs, and the plan to meet your obligations with less ambiguity.",
      },
      {
        q: "What happens after the pilot?",
        a: "Most teams implement the 90 day plan internally, or extend into a Phase 1 build to operationalize logging and governance workflows.",
      },
      { q: "What does it cost?", a: "Fixed fee pilot, scoped in the fit call. No surprise hours. No wandering." },
    ],
  },

  contact: {
    title: "Book a pilot fit call",
    body: [
      "If you manage sensitive research data, you already understand the stakes.",
      "Let’s get you to clarity that holds up under scrutiny.",
    ],
    email: "info@buckinghambiointegrity.com",
  },

  footer: {
    left: "©2026 Buckingham BioIntegrity. All rights reserved.",
    middle: "Privacy and data minimization by design.",
    right: "BuckinghamHoldingsUSA.com",
  },
} as const;

