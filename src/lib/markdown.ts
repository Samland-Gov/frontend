import markdownit from 'markdown-it'
import type { Options } from 'markdown-it';
import markdownitGovuk from 'markdown-it-govuk'

export function buildMarkdownIt(options: Options = {}): markdownit {
    const md = markdownit({
        ...options
    })

    md.use(markdownitGovuk)

    return md
}
