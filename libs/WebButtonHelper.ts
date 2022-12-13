import { Locator } from "@playwright/test";
import { ButtonType } from "../data/enums/ButtonType";

async function click(element: Locator, buttonType = ButtonType.LEFT) {
  try {
    switch (buttonType) {
      case ButtonType.LEFT:
        await element.click({ button: "left" });
        break;
      case ButtonType.RIGHT:
        await element.click({ button: "right" });
        break;
      case ButtonType.MIDDLE:
        await element.click({ button: "middle" });
        break;
      default:
        throw new Error(`Unknown button type: ${buttonType}`);
    }
    console.log(`Successfully ${ButtonType[buttonType]} clicked on ${element}`);
  } catch (error) {
    console.log(`Failed to ${ButtonType[buttonType]} click on ${element}`);
    throw error;
  }
}

async function doubleClick(element: Locator, buttonType = ButtonType.LEFT) {
  try {
    switch (buttonType) {
      case ButtonType.LEFT:
        await element.dblclick({ button: "left" });
        break;
      case ButtonType.RIGHT:
        await element.dblclick({ button: "right" });
        break;
      case ButtonType.MIDDLE:
        await element.dblclick({ button: "middle" });
        break;
      default:
        throw new Error(`Unknown button type: ${buttonType}`);
    }

    console.log(`Successfully double clicked on ${element}`);
  } catch (error) {
    console.log(`Failed to double click on ${element}`);
    throw error;
  }
}

export const WebButtonHelper = {
  click,
  doubleClick,
};
