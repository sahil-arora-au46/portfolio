
const pages = document.getElementsByClassName("page"); // Array-like object containing elements with class 'page'
const frontPages = document.getElementsByClassName("front"); // Array-like object containing elements with class 'front'
const backPages = document.getElementsByClassName("back"); // Array-like object containing elements with class 'back'

// Initialize variables
let currentPageNo = 1; // Tracks the current page number
let trackZIndex = []; // Tracks the z-index values
let pageCount = pages.length; // Stores the total number of pages



// Function to create a button element with specified class and content
function createButtonWithClassAndContent(className, content) {
    // Create a new button element
    var button = document.createElement("button");
    
    // Add the specified class to the button
    button.classList.add(className);
    
    // Set the text or HTML entity content for the button
    button.innerHTML = content;
    
    // Return the button element
    return button;
}

// Function to add forward and backward buttons to pages
function addButtonTOPages() {
    // Loop through front pages, excluding the last one
    for (let i = 0; i < frontPages.length - 1; i++) {

        
        // Create forward and backward buttons
        const forwordBtn = createButtonWithClassAndContent("forword-btn", "&gt;");
        const backwordBtn = createButtonWithClassAndContent("backword-btn", "&gt;");
        
        // Add event listeners to buttons
        forwordBtn.addEventListener("click", () => {
            console.log("Forward button clicked");
            nextPage();
        });
        backwordBtn.addEventListener("click", () => {
            console.log("Backward button clicked");
            previousPage();
        });
        
        // Append buttons to front and back pages
        frontPages[i].appendChild(forwordBtn);
        backPages[i].appendChild(backwordBtn);
    }
}

// Call function to add buttons to pages
addButtonTOPages();

// Function to navigate to the next page
function nextPage() {
    // Get the current page
    let currentPage = document.getElementById(`p${currentPageNo}`);
    
    // Get the current z-index of the page
    let currentZ = window.getComputedStyle(currentPage).getPropertyValue("z-index");
    
    // Push the current z-index to the trackZIndex array
    trackZIndex.push(currentZ);
    
    // Calculate the new z-index value
    let newZ = trackZIndex.length;
    
    // Add 'flipped' class to the current page
    currentPage.classList.add("flipped");
    
    // Set the new z-index value with a delay for transition effect
    setTimeout(() => {
        currentPage.style.zIndex = newZ;
    }, 700);

    // Increment currentPageNo if there are more pages
    if (currentPageNo <= pageCount) {
        currentPageNo++;
    }
}

// Function to navigate to the previous page
function previousPage() {
    // Get the previous page
    let currentPage = document.getElementById(`p${currentPageNo - 1}`);
    
    // Remove 'flipped' class from the previous page
    currentPage.classList.remove("flipped");
    
    // Pop the last z-index value from the trackZIndex array
    let newZ = trackZIndex.pop();
    
    // Set the new z-index value 
    currentPage.style.zIndex = newZ;
    
    // Decrement currentPageNo if it's not the first page
    if (currentPageNo > 1) {
        currentPageNo--;
    }
}
