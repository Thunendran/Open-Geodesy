console.log("script.js loaded");

function filterPapers(keyword) {
  const papers = document.querySelectorAll(".paper-card");

  papers.forEach(function (paper) {
    const keywords = paper.getAttribute("data-keywords");

    if (keyword === "all" || keywords.includes(keyword)) {
      paper.classList.remove("hidden");
    } else {
      paper.classList.add("hidden");
    }
  });
}

function loadComments(button) {
  const allButtons = document.querySelectorAll(".comment-button");
  const allContainers = document.querySelectorAll(".giscus-comment");

  allButtons.forEach(function (btn) {
    btn.textContent = "Show Comments";
    btn.disabled = false;
  });

  allContainers.forEach(function (container) {
    container.innerHTML = "";
    container.removeAttribute("data-loaded");
  });

  const discussionSection = button.closest(".paper-discussion");
  const container = discussionSection.querySelector(".giscus-comment");
  const term = container.getAttribute("data-term");

  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.setAttribute("data-repo", "Thunendran/Open-Geodesy");
  script.setAttribute("data-repo-id", "R_kgDOSWRLwg");
  script.setAttribute("data-category", "General");
  script.setAttribute("data-category-id", "DIC_kwDOSWRLws4C8eLb");
  script.setAttribute("data-mapping", "specific");
  script.setAttribute("data-term", term);
  script.setAttribute("data-strict", "0");
  script.setAttribute("data-reactions-enabled", "1");
  script.setAttribute("data-emit-metadata", "0");
  script.setAttribute("data-input-position", "bottom");
  script.setAttribute("data-theme", "preferred_color_scheme");
  script.setAttribute("data-lang", "en");
  script.setAttribute("crossorigin", "anonymous");
  script.async = true;

  container.appendChild(script);
  container.setAttribute("data-loaded", "true");

  button.textContent = "Comments Open";
  button.disabled = true;
}

document.addEventListener("DOMContentLoaded", function () {
  filterPapers("all");
});
