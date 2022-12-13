import { Locator } from "playwright";

async function type(element: Locator, text: string) {
  try {
    await element.type(text);
    console.log(`Successfully typed "${text}" in ${element}`);
  } catch (error) {
    console.log(`Failed to type "${text}" in ${element}`);
    throw error;
  }
}
async function fill(element: Locator, value: string) {
  try {
    await element.fill(value);
    console.log(`Successfully filled ${element} with value ${value}`);
  } catch (error) {
    console.log(`Failed to fill ${element} with value ${value}`);
    throw error;
  }
}

export const WebTextHelper = {
  fill,
  type,
};
