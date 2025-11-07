import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
// @ts-expect-error: logo/asset
import brandImage from "../../../docs/public/svgs/bouquet-ui-with-logo.svg";

addons.setConfig({
  theme: create({
    base: "dark",
    brandImage,
    brandTitle: "Bouquet UI"
  })
});
