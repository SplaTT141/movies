import { PageTemplate } from "../template/PageTemplate.js";
import { moviesListSection } from "../ui/moviesList.js";
import { pageTitle } from "../ui/pageTitle.js";
import { moviesData } from "../data/moviesData.js";
import { moviesFilterForm } from "../ui/forms/moviesFilterForm.js";

export class PageMovies extends PageTemplate {
  main() {
    return `
            <main>
                ${pageTitle('Movies')}
                ${moviesFilterForm()}
                ${moviesListSection(moviesData)}
            </main>`;
  }
}