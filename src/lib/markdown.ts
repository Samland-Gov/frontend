import markdownit from 'markdown-it'
import type { Options } from 'markdown-it';
import markdownitGovuk from 'markdown-it-govuk'
import highlight from 'markdown-it-govuk/highlight'

export function buildMarkdownIt(options: Options = {}): markdownit {
    const md = markdownit({
        ...options,
        highlight
    })

    md.use(markdownitGovuk)

    return md
}
