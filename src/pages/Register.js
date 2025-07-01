import { PageTemplate } from "../template/PageTemplate.js";
import { placeholder } from "../ui/placeholder.js";
import { pageTitle } from "../ui/pageTitle.js";

export class PageRegister extends PageTemplate {
  main() {
    return `
        <main class="container">
          ${pageTitle('Register')}
          ${placeholder('Form', [
      'Username',
      'Email',
      'Password',
      'Sutinku taisyklemis',
      'Mygtukas',
    ])}
        </main>`;
  }
}