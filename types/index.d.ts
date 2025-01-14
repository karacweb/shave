/**
 * Truncates multi-line text to fit within an html element based on a set max-height.
 * It then stores the diff of the original text string in a hidden <span> element following the visible text.
 * This means the original text remains intact!
 */
export default function shave(target: string | Element | Element[], maxHeight: number, options?: Shave.Options)

export namespace Shave {
  export interface Options {
    classname?: string
    character?: string
    spaces?: boolean
  }
}
