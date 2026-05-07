function filterPapers(keyword) {
  const papers = document.querySelectorAll(".paper-card");

  papers.forEach(function(paper) {
    const keywords = paper.getAttribute("data-keywords");

    if (keyword === "all" || keywords.includes(keyword)) {
      paper.style.display = "grid";
    } else {
      paper.style.display = "none";
    }
  });
}