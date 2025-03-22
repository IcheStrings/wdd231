// ✅ Responsive Navigation Menu
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// ✅ Dynamic Footer Information
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

// ✅ Course Data
const courses = [
    { subject: 'CSE', number: 110, title: 'Intro to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: false },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: false },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Dev I', credits: 2, completed: true }
];

// ✅ Course Display Function
const courseContainer = document.querySelector('.courses');
const filterButtons = document.querySelectorAll('.buttons button');

function displayCourses(filter = 'All') {
    courseContainer.innerHTML = '';
    let filteredCourses = courses.filter(course => filter === 'All' || course.subject === filter);
    
    filteredCourses.forEach(course => {
        let courseElement = document.createElement('span');
        courseElement.textContent = `${course.subject} ${course.number}`;
        courseElement.classList.add('course', course.subject.toLowerCase());
        if (course.completed) courseElement.classList.add('completed');
        courseContainer.appendChild(courseElement);
    });

    document.getElementById('totalCredits').textContent = `Total Credits: ${filteredCourses.reduce((sum, course) => sum + course.credits, 0)}`;
}

// ✅ Initial Display
displayCourses();