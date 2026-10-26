const track = document.getElementById("track");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const totalPages = 2;   // 6 cards / 3 visible = 2 pages
let currentPage = 0;

function updateGallery() {
  // Track is 200% wide, so moving it 50% shifts exactly one page (3 cards)
  track.style.transform = "translateX(-" + currentPage * 50 + "%)";
}

rightBtn.addEventListener("click", function () {
  currentPage++;
  if (currentPage >= totalPages) {
    currentPage = 0;               // loop back to the first 3 cards
  }
  updateGallery();
});

leftBtn.addEventListener("click", function () {
  currentPage--;
  if (currentPage < 0) {
    currentPage = totalPages - 1;  // loop to the last 3 cards
  }
  updateGallery();
});

/*
 i asked claude how to create sliding effects and how it effects the current webpage.
*/