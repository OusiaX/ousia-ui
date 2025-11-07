import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'
import { badge } from './badge'
import { button } from './button'
import { code } from './code'
import { formLabel } from './form-label'
import { heading } from './heading'
import { icon } from './icon'
import { input } from './input'
import { kbd } from './kbd'
import { link } from './link'
import { skeleton } from './skeleton'
import { spinner } from './spinner'
import { text } from './text'
import { textarea } from './textarea'

export const recipes: Record<string, Partial<RecipeConfig<RecipeVariantRecord>>> = {
  badge,
  button,
  code,
  formLabel,
  heading,
  icon,
  input,
  kbd,
  link,
  skeleton,
  spinner,
  text,
  textarea,
}
