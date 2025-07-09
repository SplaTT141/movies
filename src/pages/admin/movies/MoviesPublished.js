import { AdminTemplate } from "../../../template/AdminTemplate.js";

export class PageAdminMoviesPublished extends AdminTemplate {
    main() {
        return `
            <main>
               <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="display-1">Published movies</h1>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}