'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type DatePickerVariantProps, datePicker } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { DatePickerClearTrigger } from './date-picker-clear-trigger'
import { DatePickerContent } from './date-picker-content'
import { DatePickerControl } from './date-picker-control'
import { DatePickerInput } from './date-picker-input'
import { DatePickerLabel } from './date-picker-label'
import { DatePickerMonthSelect } from './date-picker-month-select'
import { DatePickerNextTrigger } from './date-picker-next-trigger'
import { DatePickerPositioner } from './date-picker-positioner'
import { DatePickerPresetTrigger } from './date-picker-preset-trigger'
import { DatePickerPrevTrigger } from './date-picker-prev-trigger'
import { DatePickerRangeText } from './date-picker-range-text'
import { DatePickerRoot } from './date-picker-root'
import { DatePickerRootProvider } from './date-picker-root-provider'
import { DatePickerTable } from './date-picker-table'
import { DatePickerTableBody } from './date-picker-table-body'
import { DatePickerTableCell } from './date-picker-table-cell'
import { DatePickerTableCellTrigger } from './date-picker-table-cell-trigger'
import { DatePickerTableHead } from './date-picker-table-head'
import { DatePickerTableHeader } from './date-picker-table-header'
import { DatePickerTableRow } from './date-picker-table-row'
import { DatePickerTrigger } from './date-picker-trigger'
import { DatePickerView } from './date-picker-view'
import { DatePickerViewControl } from './date-picker-view-control'
import { DatePickerViewTrigger } from './date-picker-view-trigger'
import { DatePickerYearSelect } from './date-picker-year-select'

const { withProvider, withContext } = createStyleContext(datePicker)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, DatePickerVariantProps>
>(DatePickerRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, DatePickerVariantProps>
>(DatePickerRoot, 'root')

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(DatePickerClearTrigger, 'clearTrigger')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DatePickerContent, 'content')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DatePickerControl, 'control')

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(DatePickerInput, 'input')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(DatePickerLabel, 'label')

export const MonthSelect = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<'select'>, PolymorphicProps>
>(DatePickerMonthSelect, 'monthSelect')

export const NextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(DatePickerNextTrigger, 'nextTrigger')

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DatePickerPositioner, 'positioner')

export const PresetTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(DatePickerPresetTrigger, 'presetTrigger')

export const PrevTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(DatePickerPrevTrigger, 'prevTrigger')

export const RangeText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DatePickerRangeText, 'rangeText')

export const TableBody = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<'tbody'>, PolymorphicProps>
>(DatePickerTableBody, 'tableBody')

export const TableCell = withContext<
  HTMLTableCellElement,
  Assign<HTMLStyledProps<'td'>, PolymorphicProps>
>(DatePickerTableCell, 'tableCell')

export const TableCellTrigger = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DatePickerTableCellTrigger, 'tableCellTrigger')

export const TableHead = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<'thead'>, PolymorphicProps>
>(DatePickerTableHead, 'tableHead')

export const TableHeader = withContext<
  HTMLTableCellElement,
  Assign<HTMLStyledProps<'th'>, PolymorphicProps>
>(DatePickerTableHeader, 'tableHeader')

export const Table = withContext<
  HTMLTableElement,
  Assign<HTMLStyledProps<'table'>, PolymorphicProps>
>(DatePickerTable, 'table')

export const TableRow = withContext<
  HTMLTableRowElement,
  Assign<HTMLStyledProps<'tr'>, PolymorphicProps>
>(DatePickerTableRow, 'tableRow')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(DatePickerTrigger, 'trigger')

export const ViewControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DatePickerViewControl, 'viewControl')

export const View = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  DatePickerView,
  'view',
)

export const ViewTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(DatePickerViewTrigger, 'viewTrigger')

export const YearSelect = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<'select'>, PolymorphicProps>
>(DatePickerYearSelect, 'yearSelect')

export { DatePickerContext as Context } from './date-picker-context'
