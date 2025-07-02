import { PageTemplate } from "../template/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { loginForm } from "../ui/forms/loginForm.js";

export class PageLogin extends PageTemplate {
  main() {
    return `
        <main class="container">
          ${pageTitle('Login')}
          ${loginForm()}
        </main>`;
  }
}