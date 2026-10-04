/**
 * Grouped rather than listed flat, and deliberately trimmed.
 * Rule of thumb: if you couldn't defend it in a technical interview, it
 * doesn't belong here.
 */
export const skillGroups = [
  {
    name: "Machine Learning",
    items: ["Regression", "XGBoost", "Random Forest", "SVM", "K-means", "DBSCAN", "PCA", "t-SNE"],
  },
  {
    name: "Deep Learning",
    items: ["CNNs", "RNNs", "Transformers", "Transfer Learning", "Autoencoders", "GANs"],
  },
  {
    name: "MLOps",
    items: ["DVC", "MLflow", "Docker", "FastAPI", "CI/CD", "Kubernetes", "AWS EC2 / S3 / ECR"],
  },
  {
    name: "Data & Statistics",
    items: [
      "EDA",
      "Hypothesis Testing",
      "Feature Engineering",
      "Imbalance Handling",
      "Cross-Validation",
    ],
  },
  {
    name: "Languages & Tools",
    items: ["Python", "SQL", "Git", "NumPy", "Pandas", "scikit-learn", "TensorFlow", "PyTorch"],
  },
] as const;
