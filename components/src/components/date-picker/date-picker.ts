'use client'
import type { Assign } from '@ousia-ui/ark'
import { type DatePickerVariantProps, datePicker } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  DatePickerClearTrigger,
  type DatePickerClearTriggerElement,
  type DatePickerClearTriggerProps,
} from './date-picker-clear-trigger'
import {
  DatePickerContent,
  type DatePickerContentElement,
  type DatePickerContentProps,
} from './date-picker-content'
import {
  DatePickerControl,
  type DatePickerControlElement,
  type DatePickerControlProps,
} from './date-picker-control'
import {
  DatePickerInput,
  type DatePickerInputElement,
  type DatePickerInputProps,
} from './date-picker-input'
import {
  DatePickerLabel,
  type DatePickerLabelElement,
  type DatePickerLabelProps,
} from './date-picker-label'
import {
  DatePickerMonthSelect,
  type DatePickerMonthSelectElement,
  type DatePickerMonthSelectProps,
} from './date-picker-month-select'
import {
  DatePickerNextTrigger,
  type DatePickerNextTriggerElement,
  type DatePickerNextTriggerProps,
} from './date-picker-next-trigger'
import {
  DatePickerPositioner,
  type DatePickerPositionerElement,
  type DatePickerPositionerProps,
} from './date-picker-positioner'
import {
  DatePickerPresetTrigger,
  type DatePickerPresetTriggerElement,
  type DatePickerPresetTriggerProps,
} from './date-picker-preset-trigger'
import {
  DatePickerPrevTrigger,
  type DatePickerPrevTriggerElement,
  type DatePickerPrevTriggerProps,
} from './date-picker-prev-trigger'
import {
  DatePickerRangeText,
  type DatePickerRangeTextElement,
  type DatePickerRangeTextProps,
} from './date-picker-range-text'
import {
  DatePickerRoot,
  type DatePickerRootElement,
  type DatePickerRootProps,
} from './date-picker-root'
import {
  DatePickerRootProvider,
  type DatePickerRootProviderElement,
  type DatePickerRootProviderProps,
} from './date-picker-root-provider'
import {
  DatePickerTable,
  type DatePickerTableElement,
  type DatePickerTableProps,
} from './date-picker-table'
import {
  DatePickerTableBody,
  type DatePickerTableBodyElement,
  type DatePickerTableBodyProps,
} from './date-picker-table-body'
import {
  DatePickerTableCell,
  type DatePickerTableCellElement,
  type DatePickerTableCellProps,
} from './date-picker-table-cell'
import {
  DatePickerTableCellTrigger,
  type DatePickerTableCellTriggerElement,
  type DatePickerTableCellTriggerProps,
} from './date-picker-table-cell-trigger'
import {
  DatePickerTableHead,
  type DatePickerTableHeadElement,
  type DatePickerTableHeadProps,
} from './date-picker-table-head'
import {
  DatePickerTableHeader,
  type DatePickerTableHeaderElement,
  type DatePickerTableHeaderProps,
} from './date-picker-table-header'
import {
  DatePickerTableRow,
  type DatePickerTableRowElement,
  type DatePickerTableRowProps,
} from './date-picker-table-row'
import {
  DatePickerTrigger,
  type DatePickerTriggerElement,
  type DatePickerTriggerProps,
} from './date-picker-trigger'
import {
  DatePickerView,
  type DatePickerViewElement,
  type DatePickerViewProps,
} from './date-picker-view'
import {
  DatePickerViewControl,
  type DatePickerViewControlElement,
  type DatePickerViewControlProps,
} from './date-picker-view-control'
import {
  DatePickerViewTrigger,
  type DatePickerViewTriggerElement,
  type DatePickerViewTriggerProps,
} from './date-picker-view-trigger'
import {
  DatePickerYearSelect,
  type DatePickerYearSelectElement,
  type DatePickerYearSelectProps,
} from './date-picker-year-select'

const { withProvider, withContext } = createStyleContext(datePicker)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof DatePickerRootProviderElement,
  Assign<DatePickerRootProviderProps, DatePickerVariantProps>
>(DatePickerRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof DatePickerRootElement,
  Assign<DatePickerRootProps, DatePickerVariantProps>
>(DatePickerRoot, 'root')

export const ClearTrigger = withContext<
  typeof DatePickerClearTriggerElement,
  DatePickerClearTriggerProps
>(DatePickerClearTrigger, 'clearTrigger')

export const Content = withContext<typeof DatePickerContentElement, DatePickerContentProps>(
  DatePickerContent,
  'content',
)

export const Control = withContext<typeof DatePickerControlElement, DatePickerControlProps>(
  DatePickerControl,
  'control',
)

export const Input = withContext<typeof DatePickerInputElement, DatePickerInputProps>(
  DatePickerInput,
  'input',
)

export const Label = withContext<typeof DatePickerLabelElement, DatePickerLabelProps>(
  DatePickerLabel,
  'label',
)

export const MonthSelect = withContext<
  typeof DatePickerMonthSelectElement,
  DatePickerMonthSelectProps
>(DatePickerMonthSelect, 'monthSelect')

export const NextTrigger = withContext<
  typeof DatePickerNextTriggerElement,
  DatePickerNextTriggerProps
>(DatePickerNextTrigger, 'nextTrigger')

export const Positioner = withContext<
  typeof DatePickerPositionerElement,
  DatePickerPositionerProps
>(DatePickerPositioner, 'positioner')

export const PresetTrigger = withContext<
  typeof DatePickerPresetTriggerElement,
  DatePickerPresetTriggerProps
>(DatePickerPresetTrigger, 'presetTrigger')

export const PrevTrigger = withContext<
  typeof DatePickerPrevTriggerElement,
  DatePickerPrevTriggerProps
>(DatePickerPrevTrigger, 'prevTrigger')

export const RangeText = withContext<typeof DatePickerRangeTextElement, DatePickerRangeTextProps>(
  DatePickerRangeText,
  'rangeText',
)

export const TableBody = withContext<typeof DatePickerTableBodyElement, DatePickerTableBodyProps>(
  DatePickerTableBody,
  'tableBody',
)

export const TableCell = withContext<typeof DatePickerTableCellElement, DatePickerTableCellProps>(
  DatePickerTableCell,
  'tableCell',
)

export const TableCellTrigger = withContext<
  typeof DatePickerTableCellTriggerElement,
  DatePickerTableCellTriggerProps
>(DatePickerTableCellTrigger, 'tableCellTrigger')

export const TableHead = withContext<typeof DatePickerTableHeadElement, DatePickerTableHeadProps>(
  DatePickerTableHead,
  'tableHead',
)

export const TableHeader = withContext<
  typeof DatePickerTableHeaderElement,
  DatePickerTableHeaderProps
>(DatePickerTableHeader, 'tableHeader')

export const Table = withContext<typeof DatePickerTableElement, DatePickerTableProps>(
  DatePickerTable,
  'table',
)

export const TableRow = withContext<typeof DatePickerTableRowElement, DatePickerTableRowProps>(
  DatePickerTableRow,
  'tableRow',
)

export const Trigger = withContext<typeof DatePickerTriggerElement, DatePickerTriggerProps>(
  DatePickerTrigger,
  'trigger',
)

export const ViewControl = withContext<
  typeof DatePickerViewControlElement,
  DatePickerViewControlProps
>(DatePickerViewControl, 'viewControl')

export const View = withContext<typeof DatePickerViewElement, DatePickerViewProps>(
  DatePickerView,
  'view',
)

export const ViewTrigger = withContext<
  typeof DatePickerViewTriggerElement,
  DatePickerViewTriggerProps
>(DatePickerViewTrigger, 'viewTrigger')

export const YearSelect = withContext<
  typeof DatePickerYearSelectElement,
  DatePickerYearSelectProps
>(DatePickerYearSelect, 'yearSelect')

export { DatePickerContext as Context } from './date-picker-context'
