let currentPage = 0;
const pages = document.querySelectorAll("section.page");

function showPage(index) {
    pages.forEach((p, i) => {
        p.classList.remove("active");
        if (i === index) {
            p.classList.add("active");
        }
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function blowCandle() {
    document.getElementById("wish-text").innerText = "🎉 Chúc mừng! Nến đã thổi bay! 🎂✨";
}

function openGift() {
    document.getElementById("gift-content").style.display = "block";
}
