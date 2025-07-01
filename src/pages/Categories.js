import { PageTemplate } from "../template/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageCategories extends PageTemplate {
  main() {
    return `
        <main>
          ${pageTitle('Categories')}
          ${placeholder('Categories list', [
      'Pavadinimas',
      'Trumpas aprasas',
      'Filmu kiekis toje kategorijoje',
      'Nuoroda i vidini puslapi',
    ])}
        </main>
        `
  }
}