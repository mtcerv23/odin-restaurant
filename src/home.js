function home() {
    const currentContent = document.getElementById('content');
    currentContent.innerHTML = '';

    // Home Content
    const homeContent = document.createElement("div");
    const restaurantName = document.createElement("div");
    const copy = document.createElement("div");
    const hours = document.createElement("div");
    const sunday = document.createElement("div");
    const monday = document.createElement("div");
    const tuesday = document.createElement("div");
    const wednesday = document.createElement("div");
    const thursday = document.createElement("div");
    const friday = document.createElement("div");
    const saturday = document.createElement("div");
    const location = document.createElement("div");

    homeContent.classList.add("content");
    restaurantName.classList.add("name");
    copy.classList.add("copy");
    hours.classList.add("hours");
    location.classList.add("location");

    restaurantName.textContent = "My Restaurant";
    copy.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    sunday.textContent = "Sunday: 8am - 8pm";
    monday.textContent = "Monday: 6am - 6pm";
    tuesday.textContent = "Tuesday: 6am - 6pm";
    wednesday.textContent = "Wednesday: 6am - 6pm";
    thursday.textContent = "Thursday: 6am - 10pm";
    friday.textContent = "Friday: 6am - 10pm";
    saturday.textContent = "Saturday: 8am - 10pm";

    hours.append(sunday, monday, tuesday, wednesday, thursday, friday, saturday);

    homeContent.append(restaurantName, copy, hours);

    content.append(homeContent);
}

export default home;