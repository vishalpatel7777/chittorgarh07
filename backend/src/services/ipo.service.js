import { IpoModel } from "../models/ipo.model.js";

/**
 * Helpers for formatting
 */
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(date) {
  const d = new Date(date);
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS[d.getMonth()]}`;
}

function formatIssueDate(openDate, closeDate) {
  const open = new Date(openDate);
  const close = new Date(closeDate);

  const openDay = String(open.getDate()).padStart(2, "0");
  const closeDay = String(close.getDate()).padStart(2, "0");

  const openMonth = MONTHS[open.getMonth()];
  const closeMonth = MONTHS[close.getMonth()];

  // Same exact date → "28 Jan"
  if (open.toDateString() === close.toDateString()) {
    return `${openDay} ${openMonth}`;
  }

  // Same month → "20 - 22 Jan"
  if (openMonth === closeMonth) {
    return `${openDay} - ${closeDay} ${openMonth}`;
  }

  // Different month → "28 Jan – 02 Feb"
  return `${openDay} ${openMonth} – ${closeDay} ${closeMonth}`;
}
 
function deriveStatus(closeDate) {
  const today = new Date();
  const close = new Date(closeDate);

  if (close.toDateString() === today.toDateString()) return "listingToday";
  if (close > today) return "open";
  return "listed";
}

export const IpoService = {
  async getMainboardIpos(year = new Date().getFullYear()) {
    const rows = await IpoModel.getMainboardIpos(year);

    return rows.map((row) => {
      const openDate = row.filing_date;
      const closeDate = row.filing_date; // same-day filings in your dataset

      // return {
      //   company: row.company_name,
      //   issueDate: formatIssueDate(openDate, closeDate),
      //   openDate: formatDate(openDate),
      //   closeDate: formatDate(closeDate),
      //   status: deriveStatus(closeDate),
      //   pdfurls: row.pdf_urls,
      //   pdfnames: row.pdf_names,
      // };
      return {
        company: row.company_name,
        issueDate: formatIssueDate(openDate, closeDate),
        status: deriveStatus(closeDate),
        pdfUrl: row.pdf_urls,
      };

    });
  },
};
