declare module 'markdown-it-govuk' {
    import { PluginSimple } from 'markdown-it';
    const plugin: PluginSimple;
    export default plugin;
}

declare module 'govuk-frontend' {
    export function initAll(): void;
}

declare module '@x-govuk/govuk-prototype-components' {
    export function initAll(): void;
}