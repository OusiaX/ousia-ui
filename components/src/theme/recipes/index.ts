import type { RecipeConfig, RecipeVariantRecord } from "@pandacss/dev";
import { badge } from "./badge";
import { button } from "./button";
import { formLabel } from "./form-label";
import { icon } from "./icon";
import { input } from "./input";
import { skeleton } from "./skeleton";
import { spinner } from "./spinner";
import { textarea } from "./textarea";

export const recipes: Record<
  string,
  Partial<RecipeConfig<RecipeVariantRecord>>
> = {
  badge,
  button,
  formLabel,
  icon,
  input,
  skeleton,
  spinner,
  textarea,
};
