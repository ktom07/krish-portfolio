export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
}

export interface AcademicRecord {
  title: string;
  organization?: string;
  category: "Academic" | "Leadership" | "Technology";
  highlight: string;
  details: string;
  badge?: string;
}

export interface SkillQuality {
  name: string;
  description: string;
}

export interface MUNConference {
  award: "Best Delegate" | "Best Parliamentarian" | "High Commendation" | "Special Commendation" | "Honourable Mention / Verbal" | "Secretariat & Leadership";
  conference: string;
  year?: string;
  committee?: string;
  badgeColor?: string;
}

export interface PortfolioContent {
  personal: {
    name: string;
    tagline: string;
    subTagline: string;
    about: {
      paragraphs: string[];
      traits: string[];
    };
  };
  socials: SocialLinks;
  academic: {
    summary: string;
    achievements: AcademicRecord[];
  };
  skating: {
    title: string;
    headline: string;
    records: string[];
    qualities: SkillQuality[];
    reflection: string;
  };
  mun: {
    headline: string;
    stats: StatItem[];
    committees: string[];
    skills: string[];
    awards: MUNConference[];
    leadership: {
      role: string;
      conference: string;
      description: string;
    };
    reflection: {
      quote: string;
      philosophy: string;
      closing: string;
    };
  };
  collegeAchievement: {
    title: string;
    event: string;
    result: string;
    prize: string;
    description: string;
    impact: string;
    coreCompetencies: string[];
  };
}

export const portfolioData: PortfolioContent = {
  personal: {
    name: "Krish Tomar",
    tagline: "Delegate. Leader. Athlete. Strategist.",
    subTagline: "Bridging analytical rigor, diplomatic precision, national-level athletic endurance, and strategic business acumen.",
    about: {
      paragraphs: [
        "A multifaceted student leader and strategist, Krish brings together a rare blend of competitive discipline, diplomatic eloquence, and sharp technical problem-solving.",
        "From navigating intricate geopolitics across 30+ Model United Nations assemblies to breaking endurance benchmarks as a national-level skater and winning competitive collegiate marketing championships, he thrives under pressure and drives meaningful impact."
      ],
      traits: [
        "Diplomatic Consensus Builder",
        "National-Level Endurance Athlete",
        "Competitive Business Strategist",
        "Proven Student Body Leader"
      ]
    }
  },

  socials: {
    email: "krishtomar07@gmail.com", // Replace or update easily here
    github: "https://github.com/ktom07",
    linkedin: "https://www.linkedin.com/in/krish-tomar", // Update with your personal handle
    instagram: "https://www.instagram.com/krish_tomar" // Update with your personal handle
  },

  academic: {
    summary: "A balanced personality combining academic excellence, technical knowledge, creativity, and proven leadership.",
    achievements: [
      {
        title: "Joint Entrance Examination (JEE)",
        category: "Academic",
        highlight: "Successfully Cleared",
        details: "Cleared one of the most competitive national engineering examinations in India, establishing strong mathematical aptitude and scientific problem-solving mastery.",
        badge: "National Standard"
      },
      {
        title: "Class 12 Board Examination",
        category: "Academic",
        highlight: "92% Aggregate",
        details: "Achieved academic distinction in senior secondary schooling, maintaining consistent rigor across core analytical disciplines.",
        badge: "Distinction"
      },
      {
        title: "Cultural Head of House",
        organization: "School Student Council",
        category: "Leadership",
        highlight: "House Leadership & Coordination",
        details: "Spearheaded inter-house cultural festivals, orchestrated large-scale team operations, and developed high-impact communication and event governance skills.",
        badge: "Executive Council"
      },
      {
        title: "Tech Head — Sankalp Club",
        organization: "Sankalp Club",
        category: "Technology",
        highlight: "Technological Initiatives & Innovation",
        details: "Assumed direct responsibility for technological initiatives, collaborating closely with members to conceptualize and deploy innovative digital and technical ideas.",
        badge: "Tech Head"
      }
    ]
  },

  skating: {
    title: "Athletics & Skating",
    headline: "National-Level Skater & 3x Endurance Record Holder",
    records: [
      "Represented at the prestigious National Level in competitive speed skating",
      "Achieved three distinct records for continuous skating over three consecutive days",
      "Demonstrated physical peak performance, rigorous pacing, and unbreakable stamina"
    ],
    qualities: [
      { name: "Endurance & Stamina", description: "Pushed human physical limitations over multi-day continuous endurance trials." },
      { name: "Determination & Grit", description: "Uncompromising focus required to navigate intense training regimens and national heats." },
      { name: "Consistency & Routine", description: "Discipline forged through relentless day-in, day-out conditioning and technical mastery." },
      { name: "Mental Fortitude", description: "Staying calm, composed, and razor-sharp when mental fatigue sets in." },
      { name: "Time Management", description: "Balancing elite athletic commitments alongside top-tier academics and leadership posts." },
      { name: "Pushing Beyond Limits", description: "A lifelong mindset of redefining personal horizons rather than accepting plateaus." }
    ],
    reflection: "Skating is where discipline became second nature. The physical trial of multi-day endurance records instilled a silent confidence: no matter how intense the challenge or high the stakes, persistence always breaks the barrier."
  },

  mun: {
    headline: "The Art of Negotiation, Geopolitics & High-Stakes Diplomacy",
    stats: [
      { value: 30, suffix: "+", label: "Conferences Attended", description: "Extensive circuit across top institutions" },
      { value: 4, label: "Best Delegate Awards", description: "Pinnacle diplomatic recognition" },
      { value: 2, label: "Best Parliamentarian", description: "Legislative and procedure mastery" },
      { value: 2023, label: "Circuit Veteran Since", description: "Continuous learning and guidance" }
    ],
    committees: [
      "Lok Sabha",
      "United Nations General Assembly (UNGA)",
      "United Nations Human Rights Council (UNHRC)",
      "All India Political Parties Meet (AIPPM)",
      "Group of Twenty (G20)",
      "Indian Premier League (IPL Auction Council)"
    ],
    skills: [
      "Geopolitical & Policy Research",
      "Drafting Working Papers & Directives",
      "Multi-lateral Negotiation & Consensus",
      "Persuasive Rhetoric & Oratory",
      "Crisis Management & Strategic Alliances",
      "Strict Parliamentary Procedure"
    ],
    awards: [
      { award: "Best Delegate", conference: "Ascendants MUN", year: "2025", committee: "Top Honors", badgeColor: "gold" },
      { award: "Best Delegate", conference: "Hamdard MUN", year: "2026", committee: "Top Honors", badgeColor: "gold" },
      { award: "Best Delegate", conference: "Connexa MUN", year: "2026", committee: "Top Honors", badgeColor: "gold" },
      { award: "Best Delegate", conference: "Samvad MUN", year: "2026", committee: "Top Honors", badgeColor: "gold" },
      { award: "Best Parliamentarian", conference: "IRMUN", year: "2023", committee: "Parliamentary Excellence", badgeColor: "blue" },
      { award: "Best Parliamentarian", conference: "Nishay MUN", year: "2025", committee: "Parliamentary Excellence", badgeColor: "blue" },
      { award: "High Commendation", conference: "DAV Rohini MUN", year: "Circuit", committee: "Executive Commendation" },
      { award: "High Commendation", conference: "Ascendants MUN", year: "2024", committee: "Executive Commendation" },
      { award: "High Commendation", conference: "GDG MUN", year: "2024", committee: "Executive Commendation" },
      { award: "High Commendation", conference: "GDG MUN", year: "2025", committee: "Executive Commendation" },
      { award: "High Commendation", conference: "Astitve MUN", year: "2026", committee: "Executive Commendation" },
      { award: "Special Commendation", conference: "MUNiverse MUN", committee: "Diplomatic Commendation" },
      { award: "Special Commendation", conference: "IMS MUN", committee: "Diplomatic Commendation" },
      { award: "Honourable Mention / Verbal", conference: "Multiple Premier Circuit Meets", committee: "Numerous Special, Verbal & Honourable Mentions across 30+ conferences" }
    ],
    leadership: {
      role: "Chief Advisor",
      conference: "OSIRIS MUN",
      description: "Elevated from an active delegate to executive conference leadership. Oversaw crisis simulations, curated procedural standards, and mentored dozens of aspiring delegates in diplomacy, policy drafting, and parliamentary decorum."
    },
    reflection: {
      quote: "Leadership is not about speaking the loudest, but about listening deeply, understanding multifaceted perspectives, building durable consensus, and formulating practical, actionable solutions.",
      philosophy: "MUN strengthened confidence, critical thinking, in-depth research capability, communication under fire, adaptability, and high-pressure strategic execution.",
      closing: "MUN is not merely a series of conferences or awards; it is a continuous learning journey."
    }
  },

  collegeAchievement: {
    title: "Collegiate Strategy & Marketing",
    event: "VESTRA – The Last Market",
    result: "1st Place / Overall Winner",
    prize: "₹7,000 Cash Prize",
    description: "Secured the top position in 'VESTRA – The Last Market', an intensive collegiate marketing and business strategy challenge designed to simulate volatile real-world market dynamics.",
    impact: "Showcased high-caliber commercial acumen, consumer psychology understanding, tactical product positioning, and rapid strategic decision-making in volatile simulated trading environments.",
    coreCompetencies: [
      "Strategic Market Analysis",
      "Dynamic Tactical Decision-Making",
      "Consumer Behaviour & Positioning",
      "Financial Allocation & Profit Maximization",
      "Agile Pitching & Stakeholder Influence",
      "Cross-functional Team Synergy"
    ]
  }
};
