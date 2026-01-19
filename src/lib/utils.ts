/**
 * Utility function for merging Tailwind CSS classes
 * Used throughout the component library for conditional class composition
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
