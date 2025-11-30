/**
 *
 * @param datestring as ISO 8691 "YYYY-MM-DD"
 */

export function isStoryAvailable(datestring: string): boolean {
    const [y, m, d] = datestring.split('-').map(Number);
    if (![y, m, d].every(Number.isInteger)) return false;

    // Construct local midnight for the given ISO date
    const localStartOfDay = new Date(y, m - 1, d, 0, 0, 0, 0);
    return Date.now() >= localStartOfDay.getTime();
}