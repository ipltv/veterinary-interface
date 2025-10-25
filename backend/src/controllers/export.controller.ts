import { exportService } from "../services/export.service.js";
import type { Request, Response } from "express";

export const exportController = {
    async downloadEventsExcel(req: Request, res: Response): Promise<void> {
        const animalId = Number(req.params.id);

        const workbook = await exportService.allEventsToExcel(animalId);

        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader(
            'Content-Disposition',
            `attachment; filename="events_${animalId}.xlsx"`
        );

        await workbook.xlsx.write(res);
        res.end();
    }
};