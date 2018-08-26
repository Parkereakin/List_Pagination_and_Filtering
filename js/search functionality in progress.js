/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const page = document.querySelector('.page');
const searchDiv = page.firstElementChild;
const studentList = document.querySelector('.student-list');
const studentItems = document.querySelectorAll('.student-item');
let studentArray = []
const numberOfStudents = studentItems.length;
const perPage = 10;
let numberOfPages = Math.floor((numberOfStudents / perPage) + 1);
let currentPage = 1;


// Function resets student array to contain all students
function fullStudentArray() {
	for (let i = 0; i < numberOfStudents; i++ ) {
		studentArray.push(studentItems[i]);
	}
}

// Function creates and appends search form
function addSearchForm () {
	const createSearchDiv = document.createElement('div');
	createSearchDiv.className = 'student-search';
	const createSearchInput = document.createElement('input');
	createSearchInput.placeholder = 'Search for students';
	const createSearchButton = document.createElement('button');
	createSearchButton.textContent = 'Search';

	searchDiv.appendChild(createSearchDiv);
	searchDiv.querySelector('div').appendChild(createSearchInput);
	searchDiv.querySelector('div').appendChild(createSearchButton);
}

// Adds functionality to the search form
function searchForm () {
	document.addEventListener("input", (e) => {
		if (e.target.tagName === 'INPUT' && e.target.value != "") {

			for (let i = 0; i < numberOfStudents; i++ ) {
				let studentName = studentItems[i].querySelector('h3');
				if (studentName.textContent.includes(e.target.value)) {
					studentArray.push(studentItems[i]);
				} else {
					studentArray.pop(studentItems[i]);
				}
			}

		} else {
			studentArray = []
			for (let i = 0; i < numberOfStudents; i++ ) {
				studentArray.push(studentItems[i]);
			}

		}
		displayStudents(perPage, currentPage);

	});
}


// Function finds what pagination link is clicked, then shows the corresponding students. Shows students 1 - 10 by default.
function displayStudents(perPage, currentPage) {
	const low = ((currentPage * perPage) - perPage)
	const high = (currentPage * perPage)

	for (let i = 0; i < studentArray.length; i++) {
		if (i < low || i >= high) {
			studentArray[i].style.display = 'none';
			console.log('none' + studentArray[i])
		}
		if (i >= low && i < high) {
			studentArray[i].style.display = 'block';
			console.log('block' + studentArray[i])
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

	fullStudentArray()

	searchForm();

	addSearchForm();

	displayStudents(perPage, currentPage);

	createPaginationLinks(numberOfPages);

	paginationLinks();
});



