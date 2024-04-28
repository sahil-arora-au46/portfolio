const flipBackwordBtn = document.getElementById("flip-backword-button")
const flipForwordBtn = document.getElementById("flip-forword-button")
const pages = document.getElementsByClassName("page")

//  console.log(pages.length)



let currentPageNo = 1
let trackZIndex = []
let pageCount = pages.length


 //get z index
//make stack of it as previous zIndex will be on last of array and  current would be the length of array 
// update new zindex while changing page for next page update it to array length
// while moving to previou page pop value would be the zIndex

function nextPage(){
    
    let currentPage = document.getElementById(`p${currentPageNo}`);
    let currentZ = window.getComputedStyle(currentPage).getPropertyValue("z-index")
    trackZIndex.push(currentZ)
    let newZ = trackZIndex.length
    currentPage.classList.add("flipped")
    
    
    console.log("cur page",currentPageNo ,"newz",newZ,"oldz",currentZ,trackZIndex )
    
    if(currentPageNo<=pageCount){
        currentPageNo++
        console.log("next",currentPageNo)
        
        
    }
    currentPage.style.zIndex = newZ
}

function previousPage(){
    // console.log("pervious",currentPageNo)

    let currentPage = document.getElementById(`p${currentPageNo-1}`);
    currentPage.classList.remove("flipped")
    let newZ = trackZIndex.pop()
    console.log(newZ," setting previous ",trackZIndex)
    currentPage.style.zIndex = newZ
    if(currentPageNo>1){
        // console.log("in if")
        --currentPageNo
    }
}

flipBackwordBtn.addEventListener("click",previousPage);
flipForwordBtn.addEventListener("click",nextPage)
