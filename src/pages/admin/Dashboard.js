import { PageTemplate } from "../../template/PageTemplate.js";

export class PageDashboard extends PageTemplate {
    main() {
        return `
            <main>
               <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="display-1">Welcome to your dashboard!</h1>
                            <p class="display-6">Username: ${this.req.user.username}</p>
                            <p class="display-6">Email: ${this.req.user.email}</p>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}
