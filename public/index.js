function toggleSidebar() {
    let sidebar = document.getElementById("mobile");
    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden");
    } else {
        sidebar.classList.add("hidden");
    }
}