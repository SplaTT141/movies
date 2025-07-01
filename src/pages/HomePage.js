import { PageTemplate } from "../template/PageTemplate.js";
import { heroSection } from "../ui/hero.js";

export class PageHome extends PageTemplate {
    main() {
        return `
        <main>
            ${heroSection()}
        </main>
        `;
    }
}