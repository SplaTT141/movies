import { commonHeaderData } from "../data/headerData.js";

export class PageTemplate {
  constructor(req) {
    this.req = req;
    this.pageJS = '';
  }

  head() {
    return `
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="stylesheet" href="/css/bootstrap.min.css">
      </head>
        `;
  }

  header() {
    let HTML = '';

    for (const link of commonHeaderData) {
      HTML += `
      <li><a href="${link.href}" class="nav-link px-2 link-primary">${link.text}</a></li>
      `
    }

    return `
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
              <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>
          </div>
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            ${HTML}
          </ul>
          <div class="col-md-3 text-end">
            <a href="/login" class="btn btn-outline-primary me-2">Login</a>
            <a href="/register" class="btn btn-primary">Register</a>
          </div>
        </header>
      </div>`;
  }

  main() {
    return `
        <main class="container">
          <div class="row">
            <div class="col-12">
            </div>
          </div>
        </main>
        `
  }

  footer() {
    let HTML = '';

    for (const link of commonHeaderData) {
      HTML += `        
      <li class="nav-item">
          <a href="${link.href}" class="nav-link px-2 text-body-primary">${link.text}</a>
      </li>`;
    }

    return `
    <footer class="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-body-secondary">© 2025 Company, Inc</p>
      <ul class="nav col-md-4 justify-content-end">
        ${HTML}
      </ul>
    </footer>
`;
  }

  script() {
    if (!this.pageJS) {
      return '';
    }

    return `<script src="/js/${this.pageJS}.js" type="module"></script>`;
  }

  render() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${this.head()}
      <body">
        ${this.header()}
        ${this.main()}
        ${this.footer()}
        ${this.script()}
      </body>
    </html>`;
  }
}