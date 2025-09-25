import type { SlotRecipeConfig } from '@pandacss/dev'
import { accordion } from './accordion'
import { alert } from './alert'
import { avatar } from './avatar'
import { card } from './card'
import { carousel } from './carousel'
import { checkbox } from './checkbox'
import { clipboard } from './clipboard'
import { collapsible } from './collapsible'
import { colorPicker } from './color-picker'
import { combobox } from './combobox'
import { datePicker } from './date-picker'
import { dialog } from './dialog'
import { drawer } from './drawer'
import { editable } from './editable'
import { field } from './field'
import { fieldset } from './fieldset'
import { fileUpload } from './file-upload'
import { hoverCard } from './hover-card'
import { menu } from './menu'
import { numberInput } from './number-input'
import { pagination } from './pagination'
import { pinInput } from './pin-input'
import { popover } from './popover'
import { progress } from './progress'
import { radioButtonGroup } from './radio-button-group'
import { radioGroup } from './radio-group'
import { ratingGroup } from './rating-group'
import { segmentGroup } from './segment-group'
import { select } from './select'
import { slider } from './slider'
import { splitter } from './splitter'
import { switchRecipe } from './switch'
import { table } from './table'
import { tabs } from './tabs'
import { tagsInput } from './tags-input'
import { toast } from './toast'
import { toggleGroup } from './toggle-group'
import { tooltip } from './tooltip'
import { treeView } from './tree-view'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  accordion,
  alert,
  avatar,
  card,
  carousel,
  checkbox,
  clipboard,
  collapsible,
  colorPicker,
  combobox,
  datePicker,
  dialog,
  drawer,
  editable,
  field,
  fieldset,
  fileUpload,
  hoverCard,
  menu,
  numberInput,
  pagination,
  pinInput,
  popover,
  progress,
  radioButtonGroup,
  radioGroup,
  ratingGroup,
  segmentGroup,
  select,
  slider,
  splitter,
  switchRecipe,
  table,
  tabs,
  tagsInput,
  toast,
  toggleGroup,
  tooltip,
  treeView,
}
