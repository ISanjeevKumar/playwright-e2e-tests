import { Locator } from "@playwright/test";
import { TextType } from "../data/enums/TextType";

async function getText(
  locator: Locator,
  textType = TextType.INNER_TEXT
): Promise<string> {
  switch (textType) {
    case TextType.INNER_TEXT:
      return await (await locator.innerText()).trim();
    case TextType.INNER_HTML:
      return await (await locator.innerHTML()).trim();
    default:
      throw new Error(`Unknown textType: ${textType}`);
  }
}

export const WebElementHelper = {
  getText,
};
