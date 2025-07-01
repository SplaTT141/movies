import { PageTemplate } from "../template/PageTemplate.js";
import { placeholder } from "../ui/placeholder.js";
import { pageTitle } from "../ui/pageTitle.js";

export class PageLogin extends PageTemplate {
  main() {
    return `
        <main class="container">
          ${pageTitle('Login')}
          ${placeholder('Form', [
      'Email',
      'Username',
      'Email/Username',
      'Password',
      'Mygtukas',
    ])}
        </main>`;
  }
}