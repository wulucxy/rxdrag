import { IComponentMaterial } from "core-react";
import { Logo } from "expamples/ant5/components/layouts/Logo";
import { logoIcon } from "./icon";
import { logoLocales, logoResourceLocales } from "./locales";
import { logoSchema } from "./schema";

const name = "Logo"
export const LogoMaterial: IComponentMaterial = {
  componentName: name,
  component: Logo,
  designer: Logo,
  designerLocales: logoLocales,
  designerSchema: logoSchema,
  resource: {
    name: name,
    elements: [
      {
        componentName: name,
      }
    ]
  },
  icon: logoIcon,
  color: "#dfa324",
  resourceLocales: logoResourceLocales,
}