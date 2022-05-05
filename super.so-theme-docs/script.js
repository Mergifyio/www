// Register a function to be called each time the page changes
function onPageChange(callback) {
  const header = document.querySelector('.notion-header');

  const config = { subtree: true, characterData: true };

  const mutation_callback = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'characterData') {
        callback()
      }
    }
  };

  const observer = new MutationObserver(mutation_callback);
  observer.observe(header, config);
}


// Register a function to be called each time a page is loaded and later changes
function onPageLoad(callback) {
  document.addEventListener("DOMContentLoaded", function () {
    onPageChange(callback)
    callback();
  });
}


// Set the active page in the first column
function setActivePage() {
  const currentPage = document.querySelectorAll('a[href="' + window.location.pathname + '"]');
  currentPage.forEach(function(page) {
    if (!page.classList.contains('super-navbar__logo') && !page.parentNode.classList.contains('notion-image')) {
      page.classList.add('page-active')
    }
    const pageIcon = page.querySelector('.notion-page__icon')
    if (pageIcon) {
      pageIcon.setAttribute("style", "opacity:1!important; filter:grayscale(0%)!important;")
    }
  });
}

onPageLoad(setActivePage);

// Transform a title text to an anchor
function textToAnchorLink(text) {
  return text.replace(/[\W_]+/g,"-");
}

// Add an permalink icon to headers
function addHeaderLink () {
  [...document.querySelectorAll("h1.notion-heading, h2.notion-heading, h3.notion-heading")].map(item => {
    let span = document.createElement('span');
    let anchor_id = textToAnchorLink(item.textContent);
    span.id = anchor_id;
    span.className = "notion-heading__anchor"
    let ahref = document.createElement('a');
    ahref.href = "#" + anchor_id;
    ahref.textContent = "🔗";
    ahref.className = "headerlink";
    item.appendChild(span);
    item.insertAdjacentElement("beforeend", ahref);
  });
}

onPageLoad(addHeaderLink);

// Replace ToS links to the headerlink we inserted with `addHeaderLink`
function fixToCLinks () {
  [...document.querySelectorAll("li.notion-table-of-contents__item > a")].map(item => {
    const sub_span = item.querySelector("span span span");
    if (sub_span !== null) {
      let anchor_id = textToAnchorLink(sub_span.textContent)
      item.href = "#" + anchor_id;
    }
  });
}

onPageLoad(fixToCLinks);
