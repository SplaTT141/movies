import { PageTemplate } from "../template/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageMovies extends PageTemplate {
  main() {
    return `
        <main class="container">
          ${pageTitle('Movies')}
          ${placeholder('Filter', [
      'Filtravimas pagal:',
      'Tekstine paieska is pavadinimo ir apraso',
      'Pagal trukme',
      'Pagal kategorija',
      'Ivertinimas',
    ])}
          ${placeholder('Movie list', [
      'Korteliu saras',
      'Nuotrauka',
      'Pavadinimas',
      'Trumpas aprasas',
      'Trukme',
      'Ivertinimas (zvaigzdutes)',
      'Nuorode i vidini puslapi',
      'Filmo kategorija',
    ])}
        </main>
        `
  }
}