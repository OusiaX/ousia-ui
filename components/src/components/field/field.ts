"use client";
import type { Assign } from "@ousia-ui/ark";
import { styled } from "styled-system/jsx";
import {
  type FieldVariantProps,
  field,
  input,
  textarea,
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { FieldRootProvider, type FieldRootProviderBaseProps } from './field-root-provider';
import { FieldRoot, type FieldRootBaseProps } from './field-root';
import { FieldErrorText, type FieldErrorTextBaseProps } from './field-error-text';
import { FieldHelperText, type FieldHelperTextBaseProps } from './field-helper-text';
import { FieldLabel, type FieldLabelBaseProps } from './field-label';
import { FieldSelect, type FieldSelectBaseProps } from './field-select';
import { FieldInput } from './field-input';
import { FieldTextarea } from './field-textarea';

const { withProvider, withContext } = createStyleContext(field);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, FieldRootProviderBaseProps>,
    FieldVariantProps
  >
>(FieldRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<"div">, FieldRootBaseProps>, FieldVariantProps>
>(FieldRoot, "root");

export const ErrorText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, FieldErrorTextBaseProps>
>(FieldErrorText, "errorText");

export const HelperText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, FieldHelperTextBaseProps>
>(FieldHelperText, "helperText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, FieldLabelBaseProps>
>(FieldLabel, "label");

export const Select = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<"select">, FieldSelectBaseProps>
>(FieldSelect, "select");

export type InputProps = ComponentProps<typeof Input>;
export const Input = styled(FieldInput, input);

export type TextareaProps = ComponentProps<typeof Textarea>;
export const Textarea = styled(FieldTextarea, textarea);

export { FieldContext as Context } from "./field-context";
