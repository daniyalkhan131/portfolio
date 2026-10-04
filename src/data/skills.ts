/**
 * Grouped rather than listed flat, and deliberately trimmed.
 * Rule of thumb: if you couldn't defend it in a technical interview, it
 * doesn't belong here.
 */
export const skillGroups = [
  {
    name: "Languages & Frameworks",
    items: ["Python", "SQL", "PyTorch", "TensorFlow"],
  },
  {
    name: "Machine Learning & AI",
    items: [
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "Classical ML",
      "Statistical Modeling",
    ],
  },
  {
    name: "Speech & Audio",
    items: ["Speaker Diarization", "VAD", "Speaker Embeddings", "Denoising"],
  },
  {
    name: "Experimentation & Tracking",
    items: ["DVC", "ClearML", "Weights & Biases"],
  },
  {
    name: "MLOps",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "FastAPI", "Flask", "BentoML"],
  },
  {
    name: "Data & Retrieval",
    items: ["Qdrant", "RAG", "Vector Search", "REST APIs", "Git"],
  },
] as const;
