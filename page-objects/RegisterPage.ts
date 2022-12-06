import { Page } from "@playwright/test";
import { RegisterModal } from "../modal-objects/RegisterModal";
import { BasePage } from "./BasePage";
import { WebButtonHelper } from "../libs/WebButtonHelper";
import { ButtonType } from "../data/enums/ButtonType";
export class RegisterPage extends BasePage {
  protected get myAccountLnk() {
    return this.page.locator('span:has-text("My Account")');
  }
  protected get registerLnk() {
    return this.page.locator("#top >> text=Register");
  }

  protected get firstnameInpt() {
    return this.page.locator('[placeholder="First Name"]');
  }

  protected get lastnameInpt() {
    return this.page.locator('[placeholder="Last Name"]');
  }

  protected get emailInpt() {
    return this.page.locator('[placeholder="E-Mail"]');
  }

  protected get passwordInpt() {
    return this.page.locator('[placeholder="Password"]');
  }

  protected get continueBtn() {
    return this.page.locator("text=Continue");
  }

  constructor(page: Page) {
    super(page);
  }
  public async navigateToRegister() {
    await this.page.goto("/");
    await WebButtonHelper.click(this.myAccountLnk, ButtonType.LEFT);
    await WebButtonHelper.click(this.registerLnk, ButtonType.LEFT);
  }

  public async fillRegisterDetails(register: RegisterModal) {
    await this.firstnameInpt.fill(register.firstname);
    await this.lastnameInpt.fill(register.lastname);
    await this.emailInpt.fill(register.email);
    await this.passwordInpt.fill(register.password);
  }

  public async submitRegisterDetails() {
    await WebButtonHelper.click(this.continueBtn, ButtonType.LEFT);
  }
}
