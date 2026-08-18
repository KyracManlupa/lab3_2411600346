const isLoggedIn = localStorage.getItem("isLoggedIn");
const username = localStorage.getItem("username");

if (isLoggedIn !== "true") {
    window.location.href = "index.html";
} else {

    const greeting = document.getElementById("greeting");

    const currentHour = new Date().getHours();

    let timeGreeting;

    if (currentHour < 12) {
        timeGreeting = "Good Morning";
    } else if (currentHour < 18) {
        timeGreeting = "Good Afternoon";
    } else {
        timeGreeting = "Good Evening";
    }

    greeting.textContent = `${timeGreeting}, ${username}!`;


    document.getElementById("stat1-value").textContent = "3.75";
    document.getElementById("stat2-value").textContent = "6";
    document.getElementById("stat3-value").textContent = "4";
    document.getElementById("stat4-value").textContent = "95%";


    const activities = [
        {
            date: "August 18, 2026",
            activity: "Completed Web Systems Activity",
            status: "Completed"
        },
        {
            date: "August 17, 2026",
            activity: "Submitted Systems Analysis Lab",
            status: "Completed"
        },
        {
            date: "August 16, 2026",
            activity: "Reviewed Database Lesson",
            status: "Completed"
        },
        {
            date: "August 15, 2026",
            activity: "Upcoming Assignment",
            status: "Pending"
        }
    ];


    const activityTable = document.getElementById("activityTable");

    activities.forEach(function (item) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.activity}</td>
            <td>${item.status}</td>
        `;

        activityTable.appendChild(row);

    });


    const logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");

        window.location.href = "index.html";

    });

}