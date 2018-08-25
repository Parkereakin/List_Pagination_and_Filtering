/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const page = document.querySelector('.page');
const searchDiv = page.firstElementChild;
const studentList = document.querySelector('.student-list');
const studentItems = document.querySelectorAll('.student-item');
const numberOfStudents = studentItems.length;
const perPage = 10;
let numberOfPages = Math.floor((numberOfStudents / perPage) + 1);
let currentPage = 1;


// Function finds what pagination link is clicked, then shows the corresponding students. Shows students 1 - 10 by default.
function displayStudents(perPage, currentPage) {
	const low = ((currentPage * perPage) - perPage)
	const high = (currentPage * perPage)

	for (let i = 0; i < numberOfStudents; i++) {
		if (i < low || i >= high) {
			studentItems[i].style.display = 'none';
		}
		if (i >= low && i < high) {
			studentItems[i].style.display = 'block';
		}
	}
}


// Create and append the pagination links, unless there are less than 11 students
function createPaginationLinks(numberOfPages) {
	const paginateDiv = document.createElement('div');
	paginateDiv.className = 'pagination';
	page.appendChild(paginateDiv);

	if (numberOfPages < 2) {
	} else {
		for (let i = 0; i < numberOfPages; i++) {
			let lis = document.createElement('li');
			let links = document.createElement('a');
			paginateDiv.appendChild(lis);
			lis.appendChild(links);
			links.textContent = i + 1;
		}
	}
}

// Adds functionality to the pagination buttons so that they show and hide the correct items
function paginationLinks() {
	document.addEventListener("click", (e) => {
		if (e.target.parentNode.parentNode.className === 'pagination') {
			currentPage = e.target.textContent;
			displayStudents(perPage, currentPage);
		}
	});
}

// Calls all functions on page load
document.addEventListener("DOMContentLoaded", () => {
	displayStudents(perPage, currentPage);

	createPaginationLinks(numberOfPages);

	paginationLinks();
});



