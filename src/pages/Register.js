import { PageTemplate } from "../template/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { registerForm } from "../ui/forms/registerForm.js";

export class PageRegister extends PageTemplate {
  main() {
    return `
        <main class="container">
          ${pageTitle('Register')}
          ${registerForm()}
        </main>`;
  }
}