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


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
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


// Create and append the pagination links - Creating a function that can do this is a good approach
function createPaginationLinks(numberOfPages) {
	const paginateDiv = document.createElement('div');
	paginateDiv.className = 'pagination';
	page.appendChild(paginateDiv);

	for (let i = 0; i < numberOfPages; i++) {
		let lis = document.createElement('li');
		let links = document.createElement('a');
		paginateDiv.appendChild(lis);
		lis.appendChild(links);
		links.textContent = i + 1;
	}
}

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
function paginationLinks() {
	document.addEventListener("click", (e) => {
		if (e.target.parentNode.parentNode.className === 'pagination') {
			currentPage = e.target.textContent;
			displayStudents(perPage, currentPage);
		}
	});
}


document.addEventListener("DOMContentLoaded", () => {
	displayStudents(perPage, currentPage);

	createPaginationLinks(numberOfPages);

	paginationLinks();
});



