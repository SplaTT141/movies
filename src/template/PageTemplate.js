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
    let navbarHTML = ``;

    for (const item of commonHeaderData) {
      if (item.subMenu) {

        let subMenuHTML = '';

        for (const subItem of item.subMenu) {
          if (subItem.subMenu) {

            let subSubMenuHTML = ``;

            for (const subSubItem of subItem.subMenu) {
              if (subSubItem) {
                subSubMenuHTML += `<li><a href="${subSubItem.href}">${subSubItem.text}</a></li>`
              }
            }

            subMenuHTML += `
                        <li class="sub-dropdown">
                            <a href="${subItem.href}">${subItem.text}<i class="subMenu-angle fa fa-angle-right"></i></a>
                            <div class="sub-dropdown-list underline"><ul>${subSubMenuHTML}</ul></div>
                        </li>`;

          } else {
            subMenuHTML += `<li class="sub-dropdown underline"><a href="${subItem.href}">${subItem.text}</a></li>`
          }
        };

        navbarHTML += `
            <div class="dropdown">
                <a href="${item.href}">${item.text}<i class="subMenu-angle fa fa-angle-down"></i></a>
                <div class="dropdown-list"><i class="top-angle fa fa-caret-up"></i><ul>${subMenuHTML}</ul></div>
            </div>`;
      } else {
        navbarHTML += `<div class="dropdown"><a href="${item.href}">${item.text}</a></div>`;
      }
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
            <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2">Features</a></li>
            <li><a href="#" class="nav-link px-2">Pricing</a></li>
            <li><a href="#" class="nav-link px-2">FAQs</a></li>
            <li><a href="#" class="nav-link px-2">About</a></li>
          </ul>
          <div class="col-md-3 text-end"><button type="button" class="btn btn-outline-primary me-2">Login</button> <button type="button" class="btn btn-primary">Sign-up</button></div>
        </header>
      </div>`;
  }

  main() {
    return `
        <main>CONTENT...</main>
        `
  }

  footer() {
    return `
            <footer class="container">
      <div class="row">
        <div class="footer-top">
          <div class="footer-about">
            <h1>Let's embark on a IT services together!</h1>
            <img class="spinning-star" src="/img/shape1.png" alt="logo" />
          </div>
          <div class="arrow-up">
            <a href="#">&#8594;</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="socials col-md-12 col-xl-4">
            <img src="/img/logo-dark.svg" alt="logo" />
            <p>Sofax has many plans for the future to work with great clients and continue to work with agencies.</p>
            <div class="social-links">
              <a href="#" target="_blank">
               <img src="/img/x.png" alt="X">
              </a>
              <a href="#" target="_blank" class="fa fa-facebook"></a>
              <a href="#" target="_blank" class="fa fa-instagram"></a>
              <a href="#" target="_blank" class="fa fa-linkedin"></a>
            </div>
          </div>
          <div class="company col-12 col-md-3 m-md-0 m-lg-1 col-xl-3 m-xl-0">
            <p>Company</p>
            <ul>
              <li><a href="./about-us-new">About Us</a></li>
              <li><a href="./contact-us-new">Contact US</a></li>
              <li><a href="./contact-us-new">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div class="utility col-12 col-md-3 col-xl-2">
            <p>Utility pages</p>
            <ul>
              <li><a href="./contact-us-new">Instructions</a></li>
              <li><a href="./contact-us-new">Style guide</a></li>
              <li><a href="#">404 Pages</a></li>
              <li><a href="./contact-us-new">Licenses</a></li>
            </ul>
          </div>
          <div class="subscribe col-12 col-md-4 col-xl-3">
            <p>Subscribe to our newsletter</p>
            <form class="form">
              <input class="white" type="email" placeholder="Enter your email" name="email" id="email" maxlength="50" required />
              <button class="pink" type="submit">Subscribe now</button>
            </form>
          </div>
        </div>
        <div class="copy-right col-12">
          <p>© 2025 Mthemeus All Rights Reserved.</p>
        </div>
      </div>
    </footer>`;
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