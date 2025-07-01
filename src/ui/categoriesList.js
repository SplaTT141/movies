export function categoriesList(data) {
    let HTML = '';

    for (const item of data) {
        HTML += `
            <div class="feature col my-5">
              <h3 class="fs-2 text-body-emphasis">${item.title}</h3>
              <p>${item.description}</p>
              <p>Movies count: ${item.moviesCount}</p>
              <a href="/categories${item.href}" class="icon-link">Read more</a>
            </div>
        `;
    }
    return `
        <div class="container px-4 py-1" id="featured-3">
          <div class="row g-4 py-3 row-cols-1 row-cols-lg-3">
            ${HTML}
          </div>
        </div>`;
}