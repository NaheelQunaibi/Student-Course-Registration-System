function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (!email || !password) {
        alert("Please enter both email and password");
        return;
    }
    
    let role = document.getElementById("role").value;
    if (role === "student") {
        window.location.href = "student_dashboard.html";
    } else {
        window.location.href = "administrator_dashboard.html";
    }
}

function registerCourse(code, title) {
    alert("You registered for " + code);
}

function dropCourse(code) {
    alert("You dropped " + code);
}

function filterCourses() {
    let search = document.getElementById("search").value.toLowerCase();
    let filter = document.getElementById("filter").value;
    let rows = document.querySelectorAll("#coursesTableBody tr");
    
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let code = row.cells[0].innerText.toLowerCase();
        let title = row.cells[1].innerText.toLowerCase();
        let seats = row.cells[4].innerText.toLowerCase();
        
        let show = true;
        if (search && !code.includes(search) && !title.includes(search)) show = false;
        if (filter === "available" && seats.includes("full")) show = false;
        if (filter === "full" && !seats.includes("full")) show = false;
        
        row.style.display = show ? "" : "none";
    }
}

function resetFilters() {
    document.getElementById("search").value = "";
    document.getElementById("filter").value = "all";
    filterCourses();
}

function addCourse() {
    alert("Add new course (Phase 2 will connect to database)");
}

function editCourse(id) {
    alert("Edit course (Phase 2 will connect to database)");
}

function deleteCourse(id) {
    alert("Delete course (Phase 2 will connect to database)");
}

function addPrerequisite() {
    alert("Add prerequisite (Phase 2 will connect to database)");
}