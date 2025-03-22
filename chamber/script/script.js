document.addEventListener("DOMContentLoaded", () => {
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    function displayMembers(members) {
        const container = document.getElementById("membersContainer");
        container.innerHTML = "";
        members.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("member");
            div.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            `;
            container.appendChild(div);
        });
    }

    document.getElementById("toggleView").addEventListener("click", () => {
        document.getElementById("membersContainer").classList.toggle("list-view");
    });

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    fetchMembers();
});
