declare module 'markdown-it-govuk' {
    import { PluginSimple } from 'markdown-it';
    const plugin: PluginSimple;
    export default plugin;
}

declare module 'markdown-it-govuk/highlight' {
    const highlight: ((str: string, lang: string, attrs: string) => string) | null | undefined;
    export default highlight;
}

declare module 'govuk-frontend' {
    export function initAll(): void;
}

declare module '@x-govuk/govuk-prototype-components' {
    export function initAll(): void;
}