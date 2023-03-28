document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("catagory-search-bar");
  const categories = document.getElementsByClassName("grid-item-category");

  searchBar.addEventListener("keyup", () => {
    const searchText = searchBar.value.toLowerCase();
    for (let i = 0; i < categories.length; i++) {
      const categoryTitle = categories[i]
        .querySelector("#category-title")
        .innerText.toLowerCase();
      if (categoryTitle.includes(searchText)) {
        categories[i].style.display = "block";
      } else {
        categories[i].style.display = "none";
      }
    }
  });
});
