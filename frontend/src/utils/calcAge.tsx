
/// Calculate age from birth date
export function calcAge(birth: string | null | undefined): string {
  if (!birth) return '—';

  const b = new Date(birth);
  if (Number.isNaN(b.getTime())) return '—';

  const diff = Date.now() - b.getTime();
  const age = new Date(diff).getUTCFullYear() - 1970;
  return age >= 0 ? `${age}` : '—';
}