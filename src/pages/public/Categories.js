import { PageTemplate } from "../../template/PageTemplate.js";
import { pageTitle } from "../../ui/pageTitle.js";
import { placeholder } from "../../ui/placeholder.js";
import { categoriesList } from "../../ui/categoriesList.js";
import { categoriesData } from "../../data/categoriesData.js";

export class PageCategories extends PageTemplate {
  main() {
    return `
        <main>
          ${pageTitle('Categories')}
          ${categoriesList(categoriesData)}
        </main>
        `
  }
}