import { Locator, Page } from "@playwright/test";
import { ButtonType } from "../../data/enums/ButtonType";
import { WebButtonHelper } from "../../libs/WebButtonHelper";
import { RegisterModal } from "../../modal-objects/realworld/RegisterModal";
import { BasePage } from "../BasePage";

export class RegisterPage extends BasePage {
  protected get usernameField(): Locator {
    return this.page.locator('[placeholder="Username"]');
  }
  protected get passwordField(): Locator {
    return this.page.locator('[placeholder="Password"]');
  }
  protected get emailField(): Locator {
    return this.page.locator('[placeholder="Email"]');
  }
  protected get signupButton(): Locator {
    return this.page.locator('button:has-text("Sign up")');
  }
  constructor(page: Page) {
    super(page);
  }

  public async visit() {
    await this.page.goto("/#/register");
  }

  public async registerAsNewUser(registerdata: RegisterModal) {
    await this.usernameField.fill(registerdata.username);
    await this.passwordField.fill(registerdata.password);
    await this.emailField.fill(registerdata.email);
    await WebButtonHelper.click(this.signupButton, ButtonType.LEFT);
  }
}
