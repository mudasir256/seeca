// Company facts used across the site. Keep them in one place so they stay consistent.
export const FOUNDED_YEAR = 2017;

export const OFFICES = ['Lahore', 'Islamabad', 'Jhelum', 'Somalia'];

/** Whole years since the company was founded (2026 -> 9). */
export function yearsOfExperience(now = new Date()) {
  return now.getFullYear() - FOUNDED_YEAR;
}
