import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@ousia-ui/preset";
import neutral from "@ousia-ui/preset/colors/neutral";
import { recipes } from "~/theme/recipes";
import { slotRecipes } from "~/theme/slotRecipes";

export default defineConfig({
  preflight: true,
  importMap: "styled-system",
  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: neutral,
      grayColor: neutral,
      radius: "sm",
    }),
  ],
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",
});
