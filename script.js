document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Fixture Filtering
    const fixtureFilter = document.getElementById("fixture-filter");
    if (fixtureFilter) {
        fixtureFilter.addEventListener("change", (event) => {
            const selectedGroup = event.target.value;
            document.querySelectorAll(".match").forEach(match => {
                if (selectedGroup === "all" || match.dataset.group === selectedGroup) {
                    match.style.display = "block";
                } else {
                    match.style.display = "none";
                }
            });
        });
    }

    // Dynamic Table Sorting
    const table = document.querySelector(".standings-table");
    if (table) {
        const rows = Array.from(table.querySelectorAll("tbody tr"));
        rows.sort((a, b) => {
            return b.dataset.points - a.dataset.points; // Sort by points descending
        });
        rows.forEach(row => table.querySelector("tbody").appendChild(row));
    }

    // Highlight Top Scorers and Clean Sheets
    const highlightLeaders = (selector) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            elements[0].classList.add("leader"); // Highlight the top player
        }
    };
    highlightLeaders(".top-scorers li");
    highlightLeaders(".clean-sheets li");
});