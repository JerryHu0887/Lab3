// Store the three image paths in variables
let image1 = "images/image1.png";
let image2 = "images/image2.png";
let image3 = "images/image3.png";


// Variables for the current image sequence
let beginningImage = image3;
let middleImage = image2;
let endImage = image1;


// Variables for the current captions
let beginningText = "After an argument, distance grows between them.";
let middleText = "They choose to reconnect and repair their relationship.";
let endText = "Their relationship moves forward into a new chapter.";


// Get page elements
let storyImage = document.getElementById("storyImage");
let storyTitle = document.getElementById("storyTitle");
let storyPath = document.getElementById("storyPath");
let stage = document.getElementById("stage");
let caption = document.getElementById("caption");


// Get sequence buttons
let storyOneButton = document.getElementById("storyOneButton");
let storyTwoButton = document.getElementById("storyTwoButton");


// Show the beginning of the current sequence
function showBeginning() {

    storyImage.src = beginningImage;

    stage.innerHTML = "Beginning";

    caption.innerHTML = beginningText;
}


// Show the middle of the current sequence
function showMiddle() {

    storyImage.src = middleImage;

    stage.innerHTML = "Middle";

    caption.innerHTML = middleText;
}


// Show the end of the current sequence
function showEnd() {

    storyImage.src = endImage;

    stage.innerHTML = "End";

    caption.innerHTML = endText;
}


// Sequence 1
function showStoryOne() {

    storyTitle.innerHTML = "Growing Together";

    storyPath.innerHTML =
        "Conflict → Reconciliation → New Beginning";


    // Change the image order
    beginningImage = image3;
    middleImage = image2;
    endImage = image1;


    // Change the interpretation of the images
    beginningText =
        "After an argument, distance grows between them.";

    middleText =
        "They choose to reconnect and repair their relationship.";

    endText =
        "Their relationship moves forward into a new chapter.";


    // Show which sequence is selected
    storyOneButton.style.backgroundColor = "#315f73";
    storyTwoButton.style.backgroundColor = "#777";


    // Return to the beginning
    showBeginning();
}


// Sequence 2
function showStoryTwo() {

    storyTitle.innerHTML = "Falling Apart";

    storyPath.innerHTML =
        "New Beginning → Happiness → Conflict";


    // Reverse the image order
    beginningImage = image1;
    middleImage = image2;
    endImage = image3;


    // Give the images a different interpretation
    beginningText =
        "They begin with exciting news and plans for the future.";

    middleText =
        "For a while, their relationship seems happy and secure.";

    endText =
        "But their happiness eventually gives way to conflict.";


    // Show which sequence is selected
    storyOneButton.style.backgroundColor = "#777";
    storyTwoButton.style.backgroundColor = "#315f73";


    // Return to the beginning
    showBeginning();
}


// Beginning button
document.getElementById("beginningButton")
    .addEventListener("click", showBeginning);


// Middle button
document.getElementById("middleButton")
    .addEventListener("click", showMiddle);


// End button
document.getElementById("endButton")
    .addEventListener("click", showEnd);


// Sequence 1 button
storyOneButton.addEventListener(
    "click",
    showStoryOne
);


// Sequence 2 button
storyTwoButton.addEventListener(
    "click",
    showStoryTwo
);