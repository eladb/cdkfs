/**
 * Choices for how to display commented out options in projenrc files.
 * Does not apply to projenrc.json files.
 */
export enum NewProjectOptionHints {
  /**
   * Display all possible options (grouped by which interface they belong to).
   */
  ALL = 'all',

  /**
   * Display only featured options, in alphabetical order.
   */
  FEATURED = 'featured',

  /**
   * Display no extra options.
   */
  NONE = 'none'
}
