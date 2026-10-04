export const experience = [
  {
    role: "AI Research Engineer",
    company: "YoyoAI — Bengaluru",
    period: "Aug 2024 — Present",
    summary:
      "Extracting customer–salesperson interactions from 8-hour multi-speaker audio captured on wearable devices across retail stores.",
    bullets: [
      "Built a voice fingerprinting pipeline — denoising, VAD, speaker diarization, embedding generation and custom clustering — with Qdrant-backed retrieval for cross-session speaker tracking.",
      "Designed a RAG-style event detection pipeline using HyDE multi-query prompting and RAPTOR-inspired clustering, lifting customer coverage by 59% and cutting personal speech by 66%.",
      "Combined both pipelines with LLM-based filtering to reach 89% precision and 73% recall on production audio.",
      "Scaled the system across 100,000+ hours of audio and from 2 to 8 clients covering 2,000+ retail stores in India, taking it from research prototype to deployed product.",
    ],
  },
] as const;

export const education = [
  {
    degree: "M.Tech, Computer Science & Engineering",
    institution: "Jamia Millia Islamia",
    period: "2022 — 2024",
    note: "9.22 CGPA",
  },
] as const;

export const achievements = ["GATE qualified — 97.33 percentile"] as const;
