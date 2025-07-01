import { PageTemplate } from "../template/PageTemplate.js";

export class Error404 extends PageTemplate {
    main() {
        return `
        <main class="container">
          <div class="row">
            <div class="col-12">
                404 ERROR PAGE
            </div>
          </div>
        </main>
        `
    }
}