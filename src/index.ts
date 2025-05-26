import { initAll as initGovUK } from 'govuk-frontend'
import { initAll as initPrototype } from '@x-govuk/govuk-prototype-components'
export * from './lib/markdown'

export function initAll() {
  initGovUK()
  initPrototype()
}