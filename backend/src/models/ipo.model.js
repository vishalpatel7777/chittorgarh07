import dbPool from "../config/database.js";

export const IpoModel = {
  async getMainboardIpos(year) {
    const [rows] = await dbPool.query(
      `SELECT
       company_name,
       ,
        pdf_urls,
        pdf_names
      FROM ipo_documents
      WHERE YEAR(filing_date) = ?
      ORDER BY filing_date DESC
      `,
      [year]
    );

    return rows;
  },
};
