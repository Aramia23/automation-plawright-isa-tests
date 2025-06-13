import { test,expect } from "@playwright/test";
import LoginPage from "../../support/pages/login"

let login: LoginPage;


test.beforeEach("Open Link", async ({ page }) => {
  login = new LoginPage(page);
  await login.goto();
});

test.describe("Login scenarios success and failures cases", () => {
  test("Login Success", async () => {
    await login.form.login('standard_user', 'secret_sauce');
    await expect(login.form.titleInventory).toBeVisible();
  });
});
