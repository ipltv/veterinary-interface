
// Utility function to format dates
export function formatDate(input: string | Date | null | undefined): string {
    if (!input) return '';
    const d = typeof input === 'string' ? new Date(input) : input;
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString();
}