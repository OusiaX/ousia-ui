"use client";
import type { Assign } from "@ousia-ui/ark";
import { type DatePickerVariantProps, datePicker } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { DatePickerRootProvider, type DatePickerRootProviderBaseProps } from "./date-picker-root-provider";
import { DatePickerRoot, type DatePickerRootBaseProps } from "./date-picker-root";
import { DatePickerClearTrigger, type DatePickerClearTriggerBaseProps } from "./date-picker-clear-trigger";
import { DatePickerContent, type DatePickerContentBaseProps } from "./date-picker-content";
import { DatePickerControl, type DatePickerControlBaseProps } from "./date-picker-control";
import { DatePickerInput, type DatePickerInputBaseProps } from "./date-picker-input";
import { DatePickerLabel, type DatePickerLabelBaseProps } from "./date-picker-label";
import { DatePickerMonthSelect, type DatePickerMonthSelectBaseProps } from "./date-picker-month-select";
import { DatePickerNextTrigger, type DatePickerNextTriggerBaseProps } from "./date-picker-next-trigger";
import { DatePickerPositioner, type DatePickerPositionerBaseProps } from "./date-picker-positioner";
import { DatePickerPresetTrigger, type DatePickerPresetTriggerBaseProps } from "./date-picker-preset-trigger";
import { DatePickerPrevTrigger, type DatePickerPrevTriggerBaseProps } from "./date-picker-prev-trigger";
import { DatePickerRangeText, type DatePickerRangeTextBaseProps } from "./date-picker-range-text";
import { DatePickerTableBody, type DatePickerTableBodyBaseProps } from "./date-picker-table-body";
import { DatePickerTableCell, type DatePickerTableCellBaseProps } from "./date-picker-table-cell";
import { DatePickerTableCellTrigger, type DatePickerTableCellTriggerBaseProps } from "./date-picker-table-cell-trigger";
import { DatePickerTableHead, type DatePickerTableHeadBaseProps } from "./date-picker-table-head";
import { DatePickerTableHeader, type DatePickerTableHeaderBaseProps } from "./date-picker-table-header";
import { DatePickerTable, type DatePickerTableBaseProps } from "./date-picker-table";
import { DatePickerTableRow, type DatePickerTableRowBaseProps } from "./date-picker-table-row";
import { DatePickerTrigger, type DatePickerTriggerBaseProps } from "./date-picker-trigger";
import { DatePickerViewControl, type DatePickerViewControlBaseProps } from "./date-picker-view-control";
import { DatePickerView, type DatePickerViewBaseProps } from "./date-picker-view";
import { DatePickerViewTrigger, type DatePickerViewTriggerBaseProps } from "./date-picker-view-trigger";
import { DatePickerYearSelect, type DatePickerYearSelectBaseProps } from "./date-picker-year-select";

const { withProvider, withContext } = createStyleContext(datePicker);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, DatePickerRootProviderBaseProps>,
    DatePickerVariantProps
  >
>(DatePickerRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, DatePickerRootBaseProps>,
    DatePickerVariantProps
  >
>(DatePickerRoot, "root");

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, DatePickerClearTriggerBaseProps>
>(DatePickerClearTrigger, "clearTrigger");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DatePickerContentBaseProps>
>(DatePickerContent, "content");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DatePickerControlBaseProps>
>(DatePickerControl, "control");

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, DatePickerInputBaseProps>
>(DatePickerInput, "input");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, DatePickerLabelBaseProps>
>(DatePickerLabel, "label");

export const MonthSelect = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<"select">, DatePickerMonthSelectBaseProps>
>(DatePickerMonthSelect, "monthSelect");

export const NextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, DatePickerNextTriggerBaseProps>
>(DatePickerNextTrigger, "nextTrigger");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DatePickerPositionerBaseProps>
>(DatePickerPositioner, "positioner");

export const PresetTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, DatePickerPresetTriggerBaseProps>
>(DatePickerPresetTrigger, "presetTrigger");

export const PrevTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, DatePickerPrevTriggerBaseProps>
>(DatePickerPrevTrigger, "prevTrigger");

export const RangeText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DatePickerRangeTextBaseProps>
>(DatePickerRangeText, "rangeText");

export const TableBody = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<"tbody">, DatePickerTableBodyBaseProps>
>(DatePickerTableBody, "tableBody");

export const TableCell = withContext<
  HTMLTableCellElement,
  Assign<HTMLStyledProps<"td">, DatePickerTableCellBaseProps>
>(DatePickerTableCell, "tableCell");

export const TableCellTrigger = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DatePickerTableCellTriggerBaseProps>
>(DatePickerTableCellTrigger, "tableCellTrigger");

export const TableHead = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<"thead">, DatePickerTableHeadBaseProps>
>(DatePickerTableHead, "tableHead");

export const TableHeader = withContext<
  HTMLTableCellElement,
  Assign<HTMLStyledProps<"th">, DatePickerTableHeaderBaseProps>
>(DatePickerTableHeader, "tableHeader");

export const Table = withContext<
  HTMLTableElement,
  Assign<HTMLStyledProps<"table">, DatePickerTableBaseProps>
>(DatePickerTable, "table");

export const TableRow = withContext<
  HTMLTableRowElement,
  Assign<HTMLStyledProps<"tr">, DatePickerTableRowBaseProps>
>(DatePickerTableRow, "tableRow");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, DatePickerTriggerBaseProps>
>(DatePickerTrigger, "trigger");

export const ViewControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DatePickerViewControlBaseProps>
>(DatePickerViewControl, "viewControl");

export const View = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DatePickerViewBaseProps>
>(DatePickerView, "view");

export const ViewTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, DatePickerViewTriggerBaseProps>
>(DatePickerViewTrigger, "viewTrigger");

export const YearSelect = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<"select">, DatePickerYearSelectBaseProps>
>(DatePickerYearSelect, "yearSelect");

export { DatePickerContext as Context } from "./date-picker-context";
