const themeToggleBtn = document.getElementById("theme-toggle-btn");

const currentTheme = document.documentElement.getAttribute("data-theme");
themeToggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌕";

themeToggleBtn.addEventListener("click", () => {
	const isDark = document.documentElement.getAttribute("data-theme") === "dark";
	if (isDark) {
		document.documentElement.setAttribute("data-theme", "light");
		themeToggleBtn.textContent = "🌕";
		localStorage.setItem("theme", "light");
	} else {
		document.documentElement.setAttribute("data-theme", "dark");
		themeToggleBtn.textContent = "☀️";
		localStorage.setItem("theme", "dark");
	}
});
