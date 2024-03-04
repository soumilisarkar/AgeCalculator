function age() {
    let birth_date = document.getElementById("date").value;
    let birth_month = document.getElementById("month").value;
    let birth_year = document.getElementById("year").value;
    let date = new Date();
    let current_date = date.getDate();
    let current_month = 1 + date.getMonth();
    let current_year = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (birth_date > current_date) {
        current_date = current_date+ month[birth_month - 1];
        current_month = current_month- 1;
    }
    if (birth_month > current_month) {
        current_month = current_month + 12;
        current_year = current_year - 1;
    }
    let d = current_date - birth_date;
    let m = current_month - birth_month;
    let y = current_year - birth_year;
    document.getElementById("output").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}