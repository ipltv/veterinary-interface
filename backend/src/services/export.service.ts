// backend/src/services/export.service.ts
import Excel from 'exceljs';
import { eventsService } from './events.service.js';


// Service layer for exporting data to Excel.
export const exportService = {
    async allEventsToExcel(animalId: number): Promise<Excel.Workbook> {
        const workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet('Events');

        // Define columns
        worksheet.columns = [
            { header: 'ID', key: 'id', width: 10 },
            { header: 'Animal ID', key: 'animal_id', width: 15 },
            { header: 'Event Type', key: 'event_type', width: 20 },
            { header: 'Date', key: 'event_date', width: 15 },
            { header: 'Description', key: 'description', width: 30 },
        ];

        // Fetch events data
        const data = await eventsService.getEventsByAnimalId(animalId);

        // Add rows to worksheet
        data.forEach(event => {
            worksheet.addRow(event);
        });
        return workbook;
    },

};
