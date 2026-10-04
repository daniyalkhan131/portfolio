/**
 * The "How I build ML systems" walkthrough.
 *
 * Kept as data rather than markup so the copy can be edited without touching
 * the component. `seenIn` points at project slugs under content/projects.
 */
export type PipelineStage = {
  id: string;
  label: string;
  /** The one-line principle, shown when the stage is expanded. */
  principle: string;
  detail: string;
  tools: string[];
  seenIn?: { label: string; slug: string };
};

export const pipelineStages: PipelineStage[] = [
  {
    id: "problem",
    label: "Problem",
    principle: "Write down the cost of being wrong before writing any code.",
    detail:
      "What decision does this model inform, and what does each kind of error actually cost? A false positive and a false negative are almost never equally expensive, and that asymmetry should drive the metric, the threshold and sometimes the entire approach.",
    tools: ["Problem framing", "Success criteria"],
  },
  {
    id: "data",
    label: "Data",
    principle: "Look at the raw data yourself. All of it you can stand to.",
    detail:
      "Class balance, capture conditions, label quality, leakage. Most of the surprises that would have derailed a model later are visible here if you actually open the files instead of trusting a summary table.",
    tools: ["pandas", "EDA", "DVC"],
    seenIn: { label: "Voice Fingerprinting Pipeline", slug: "voice-fingerprinting-pipeline" },
  },
  {
    id: "baseline",
    label: "Baseline",
    principle: "Ship the dumbest thing that works, then try to beat it.",
    detail:
      "Logistic regression before transformers. A baseline tells you whether the problem is even learnable, gives every later experiment something to be measured against, and occasionally turns out to be good enough that the complicated version is never needed.",
    tools: ["scikit-learn", "DVC"],
  },
  {
    id: "experiment",
    label: "Experiment",
    principle: "Change one thing at a time, and log every run.",
    detail:
      "Untracked experiments are experiments you will re-run. Logging parameters, metrics and artifacts costs minutes up front and saves the week where you try to recover which configuration produced the one good number.",
    tools: ["ClearML", "Weights & Biases", "DVC"],
    seenIn: { label: "Diabetic Retinopathy", slug: "diabetic-retinopathy" },
  },
  {
    id: "evaluate",
    label: "Evaluate",
    principle: "The metric is a modelling decision, not a reporting one.",
    detail:
      "Accuracy hides class imbalance and treats every error as equally bad. For ordinal labels, quadratic weighted kappa matches the real cost structure. Switching metrics changes which experiments look successful — which is exactly why it has to be chosen deliberately.",
    tools: ["Quadratic Kappa", "Precision / Recall", "Confusion matrices"],
    seenIn: { label: "Diabetic Retinopathy", slug: "diabetic-retinopathy" },
  },
  {
    id: "deploy",
    label: "Deploy",
    principle: "The environment that ran locally has to be the one that runs in production.",
    detail:
      "Containerise it, validate requests at the boundary with typed schemas, and keep the serving path thin. Most deployment failures are environment drift, not model quality.",
    tools: ["Docker", "Kubernetes", "FastAPI", "BentoML", "AWS"],
    seenIn: { label: "Voice Fingerprinting Pipeline", slug: "voice-fingerprinting-pipeline" },
  },
  {
    id: "monitor",
    label: "Monitor",
    principle: "A model that was right at deploy time is not a model that stays right.",
    detail:
      "Input distributions drift, upstream pipelines change shape, and performance decays quietly. Track prediction distributions and input statistics so degradation surfaces as an alert rather than as a complaint.",
    tools: ["Drift detection", "ClearML", "Weights & Biases"],
    seenIn: { label: "Event Detection Pipeline", slug: "event-detection-pipeline" },
  },
];
