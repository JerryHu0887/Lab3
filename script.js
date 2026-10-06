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


// Store the current theme color
let themeColor = "#315f73";


// Get the main page elements
let storyImage = document.getElementById("storyImage");
let storyTitle = document.getElementById("storyTitle");
let storyPath = document.getElementById("storyPath");
let stage = document.getElementById("stage");
let caption = document.getElementById("caption");


// Get the sequence buttons
let storyOneButton = document.getElementById("storyOneButton");
let storyTwoButton = document.getElementById("storyTwoButton");


// Get the story stage buttons
let beginningButton = document.getElementById("beginningButton");
let middleButton = document.getElementById("middleButton");
let endButton = document.getElementById("endButton");


// Show the beginning of the current story
function showBeginning() {

    storyImage.src = beginningImage;

    stage.innerHTML = "Beginning";

    caption.innerHTML = beginningText;


    // Show Beginning as the active button
    beginningButton.style.backgroundColor = themeColor;
    middleButton.style.backgroundColor = "#777";
    endButton.style.backgroundColor = "#777";
}


// Show the middle of the current story
function showMiddle() {

    storyImage.src = middleImage;

    stage.innerHTML = "Middle";

    caption.innerHTML = middleText;


    // Show Middle as the active button
    beginningButton.style.backgroundColor = "#777";
    middleButton.style.backgroundColor = themeColor;
    endButton.style.backgroundColor = "#777";
}


// Show the end of the current story
function showEnd() {

    storyImage.src = endImage;

    stage.innerHTML = "End";

    caption.innerHTML = endText;


    // Show End as the active button
    beginningButton.style.backgroundColor = "#777";
    middleButton.style.backgroundColor = "#777";
    endButton.style.backgroundColor = themeColor;
}


// Sequence 1: conflict to a new beginning
function showStoryOne() {

    storyTitle.innerHTML = "Growing Together";

    storyPath.innerHTML =
        "Conflict → Reconciliation → New Beginning";


    // Set Sequence 1 theme color
    themeColor = "#315f73";

    storyPath.style.color = themeColor;


    // Set the image order
    beginningImage = image3;
    middleImage = image2;
    endImage = image1;


    // Set the meaning of each image
    beginningText =
        "After an argument, distance grows between them.";

    middleText =
        "They choose to reconnect and repair their relationship.";

    endText =
        "Their relationship moves forward into a new chapter.";


    // Show Sequence 1 as selected
    storyOneButton.style.backgroundColor = themeColor;
    storyTwoButton.style.backgroundColor = "#777";


    // Return to the beginning
    showBeginning();
}


// Sequence 2: happiness to conflict
function showStoryTwo() {

    storyTitle.innerHTML = "Falling Apart";

    storyPath.innerHTML =
        "New Beginning → Happiness → Conflict";


    // Set Sequence 2 theme color
    themeColor = "#a34a4a";

    storyPath.style.color = themeColor;


    // Reverse the image order
    beginningImage = image1;
    middleImage = image2;
    endImage = image3;


    // Give the same images a different interpretation
    beginningText =
        "They begin with exciting news and plans for the future.";

    middleText =
        "For a while, their relationship seems happy and secure.";

    endText =
        "But their happiness eventually gives way to conflict.";


    // Show Sequence 2 as selected
    storyOneButton.style.backgroundColor = "#777";
    storyTwoButton.style.backgroundColor = themeColor;


    // Return to the beginning
    showBeginning();
}


// Beginning button
beginningButton.addEventListener(
    "click",
    showBeginning
);


// Middle button
middleButton.addEventListener(
    "click",
    showMiddle
);


// End button
endButton.addEventListener(
    "click",
    showEnd
);


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