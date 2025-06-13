import { usernameField,passwordField, loginBtn,titleInventory  } from '../selectors/login-page';
import { expect, type Locator, type Page } from "@playwright/test";

export default class LoginForm {
  private usernameField: Locator;
  private passwordField: Locator;
  private loginBtn: Locator;
  public titleInventory: Locator

  constructor(private page: Page) {
    this.usernameField = page.locator(usernameField);
    this.passwordField = page.locator(passwordField);
    this.loginBtn = page.locator(loginBtn);
    this.titleInventory = page.getByText("Products");
  }

  async fillUsername(username: string): Promise<this> {
    await this.usernameField.fill(username);
    return this;
  }

  async fillPassword(password: string): Promise<this> {
    await this.passwordField.fill(password);
    return this;
  }

  async submit(): Promise<void> {
    await this.loginBtn.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username)
    await this.fillPassword(password);
    await this.submit();
  }

}