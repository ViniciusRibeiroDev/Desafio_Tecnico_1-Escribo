export function toEqual(expect, value, message) {
  if (expect != value) return message;

  return 'Test passed';
}
