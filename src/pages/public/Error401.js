import { PageTemplate } from "../../template/PageTemplate.js";

export class Error401 extends PageTemplate {
    constructor(req) {
        super(req);
    }

    main() {
        return `
            <main class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="display-3">401 - Neturi teises matyti sio turinio</h1>
                        <a class="fs-2" href="/login">Eik prisijungti!</a>
                    </div>
                </div>
            </main>`;
    }
}