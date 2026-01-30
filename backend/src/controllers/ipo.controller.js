import { IpoService } from "../services/ipo.service.js";

export const IpoController = {
  async getMainboardIpos(req, res, next) {
    try {
      const data = await IpoService.getMainboardIpos(2026);

      res.status(200).json({
        success: true,
        data,
      });
    } catch (err) {
      next(err);
    }
  },
};
