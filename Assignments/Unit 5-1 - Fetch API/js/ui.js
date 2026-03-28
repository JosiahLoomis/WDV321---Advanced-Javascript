// This file will include the following functions:
//   1. Show Loading Status (example provided)
//   2. Show Error Messages
//   3. Clear the Loading Status
//   4. Render the fetched data results

export function showLoading() {
  const status = document.getElementById('status');
  status.textContent = 'Loading...';
  status.className = 'loading';
}

export function showError(message) {
  const status = document.getElementById('status');
  status.textContent = message;
  status.className = 'error';
}

export function clearLoading() {
  const status = document.getElementById('status');
  status.textContent = '';
  status.className = '';
}

export function renderData(data) {
  const result = document.getElementById('results');
  const template = document.getElementById('resultTemplate');

  result.innerHTML = '';

  data.forEach((country, index) => {
    if (index >= 20) {
      return;
    }

    const clone = template.content.cloneNode(true);

    clone.querySelector(".name").textContent = "Name: " + country.name.official;

    if (country.currencies) {
      clone.querySelector(".currencies").textContent = "Currency(ies): " + Object.values(country.currencies)
      .map(c => c.name)
      .join(", ");
    }

    if (country.capital) {
      clone.querySelector(".capitals").textContent = "Capital(s): " + country.capital.join(", ");
    }

    result.appendChild(clone);
  });
}