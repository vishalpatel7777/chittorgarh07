export const ncdReviewData = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  title: `Company ${i + 1} NCD Issue Review`,
  author: "Dilip Davda",
  recommendation:
    i % 5 === 0
      ? "Apply"
      : i % 4 === 0
      ? "May apply"
      : i % 3 === 0
      ? "Avoid"
      : "Not Rated",
  reviewDate: new Date(2025, 11, 31 - i).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }),
  link: "#",
}));
