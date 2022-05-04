function onPageLoad() {
    const header = document.querySelector('.notion-header');
    const setActivePage = () => {
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
    setActivePage()

    const config = { subtree: true, characterData: true };

    const callback = function(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'characterData') {
                setActivePage()
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(header, config);
}

document.addEventListener("DOMContentLoaded", onPageLoad);

function textToAnchorLink(text) {
  return text.replace(/[\W_]+/g,"-");
}

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

document.addEventListener("DOMContentLoaded", addHeaderLink);

function fixToCLinks () {
  [...document.querySelectorAll("li.notion-table-of-contents__item > a")].map(item => {
    let anchor_id = textToAnchorLink(item.querySelector("span span span").textContent)
    item.href = "#" + anchor_id;
  });
}

document.addEventListener("DOMContentLoaded", fixToCLinks);
