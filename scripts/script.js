window.onload = function(){


// create page

// form handle for create page input

var formhandle0 = document.forms.createFlower;
formhandle0.onsubmit = newFlower;

// function clears create page and reveals main page
function newFlower(){

    var createContainer = document.getElementById("createContainer");
    var mainContainer = document.getElementById("mainContainer");
    var createInput = formhandle0.input0.value;
    var error = document.getElementById("input0Empty");

    if(createInput == ""){

        error.style.display = "inline";

    }
    else{
        mainContainer.style.display = "flex";
        createContainer.style.display = "none";
    
        output0.innerHTML = createInput;
    
        input1.focus();
    }
   

    return false;
}



// main page

// output variables
var output0 = document.getElementById("flowerCenterText");
var output1 = document.getElementById("flowerPetal1Text");
var output2 = document.getElementById("flowerPetal2Text");
var output3 = document.getElementById("flowerPetal3Text");
var output4 = document.getElementById("flowerPetal4Text");
var output5 = document.getElementById("flowerPetal5Text");
var output6 = document.getElementById("flowerPetal6Text");
var output7 = document.getElementById("flowerPetal7Text");
var output8 = document.getElementById("flowerPetal8Text");

// formhandles

var formhandle1 = document.forms.flowerform1;
var formhandle2 = document.forms.flowerform2;
var formhandle3 = document.forms.flowerform3;
var formhandle4 = document.forms.flowerform4;
var formhandle5 = document.forms.flowerform5;
var formhandle6 = document.forms.flowerform6;
var formhandle7 = document.forms.flowerform7;
var formhandle8 = document.forms.flowerform8;

// form submit events

formhandle1.onsubmit = processForm1;
formhandle2.onsubmit = processForm2;
formhandle3.onsubmit = processForm3;
formhandle4.onsubmit = processForm4;
formhandle5.onsubmit = processForm5;
formhandle6.onsubmit = processForm6;
formhandle7.onsubmit = processForm7;
formhandle8.onsubmit = processForm8;

// form process,  functions add relevant inputs to the flower

function processForm1(){
    
    var outputvalue1 = formhandle1.input1.value;
    console.log(outputvalue1);
    output1.innerHTML = outputvalue1;

    formhandle2.input2.focus();

    return false
}

function processForm2(){
    
    var outputvalue2 = formhandle2.input2.value;
    console.log(outputvalue2);
    output2.innerHTML = outputvalue2;

    formhandle3.input3.focus();

    return false
}
function processForm3(){
    
    var outputvalue3 = formhandle3.input3.value;
    console.log(outputvalue3);
    output3.innerHTML = outputvalue3;

    formhandle4.input4.focus();

    return false
}
function processForm4(){
    
    var outputvalue4 = formhandle4.input4.value;
    console.log(outputvalue4);
    output4.innerHTML = outputvalue4;

    formhandle5.input5.focus();

    return false
}
function processForm5(){
    
    var outputvalue5 = formhandle5.input5.value;
    console.log(outputvalue5);
    output5.innerHTML = outputvalue5;

    formhandle6.input6.focus();

    return false
}
function processForm6(){
    
    var outputvalue6 = formhandle6.input6.value;
    console.log(outputvalue6);
    output6.innerHTML = outputvalue6;

    formhandle7.input7.focus();

    return false
}
function processForm7(){
    
    var outputvalue7 = formhandle7.input7.value;
    console.log(outputvalue7);
    output7.innerHTML = outputvalue7;

    formhandle8.input8.focus();

    return false
}

function processForm8(){
    
    var outputvalue8 = formhandle8.input8.value;
    console.log(outputvalue8);
    output8.innerHTML = outputvalue8;

    formhandle1.input1.focus();

    return false
}


// menu functionality

// clear button

// document variable and button event handler
var clearButton = document.getElementById("clear");
clearButton.onclick = clearFlowerConfirm;

//confirm screen function

function clearFlowerConfirm(){
    closeInstructions();
    openConfirm();
    createButton.className = "navIcon";

    var confirm = document.getElementById("confirm");
    var cancel = document.getElementById("cancel");
    clearButton.className = "navSelected";

    confirm.onclick = function(){

        closeConfirm();
        clearFlower();

    }

    cancel.onclick = function(){ closeConfirm();}
}

// function that clears all values

function clearFlower(){

    formhandle0.input0.value = "";
    output0.innerHTML = "";

    formhandle1.input1.value = "";
    output1.innerHTML = "";

    formhandle2.input2.value = "";
    output2.innerHTML = "";
    
    formhandle3.input3.value = "";
    output3.innerHTML = "";

    formhandle4.input4.value = "";
    output4.innerHTML = "";

    formhandle5.input5.value = "";
    output5.innerHTML = "";

    formhandle6.input6.value = "";
    output6.innerHTML = "";

    formhandle7.input7.value = "";
    output7.innerHTML = "";

    formhandle8.input8.value = "";
    output8.innerHTML = "";

    clearButton.className = "navIcon";
}

// create

// document variable and button event handler
var createButton = document.getElementById("create");
createButton.onclick = createNewConfirm;

// confirm screen function
function createNewConfirm(){
        closeInstructions();
        createButton.className = "navSelected";
        clearButton.className = "navIcon";
        openConfirm();

        var confirm = document.getElementById("confirm");
        var cancel = document.getElementById("cancel");

        confirm.onclick = function(){

            closeConfirm();
            createNew();
            createButton.className = "navIcon";
        }

        cancel.onclick = function(){ closeConfirm();}


}
// function clears all values, hides the main screen, reveals the create screen
function createNew(){

    clearFlower();

    var createContainer = document.getElementById("createContainer");
    var mainContainer = document.getElementById("mainContainer");

    mainContainer.style.display = "none";
    createContainer.style.display = "flex";
}

// instructions

// document variables
var instructionButton = document.getElementById("instructions");
var instructionPanel = document.getElementById("instructionPanel");
var instructionCloseButton = document.getElementById("closeInstructions");
// event handler
instructionCloseButton.onclick = closeInstructions;

var instructionStatus = false; // false is closed, true is open



 instructionButton.onclick = instructionToggle;


// open function
function openInstructions(){
    closeConfirm();
    instructionPanel.style.display = "flex";
    instructionButton.classList = "navSelected";
    
    instructionStatus = true;
    console.log(instructionStatus);
}
// close function
function closeInstructions(){

    instructionPanel.style.display = "none";
    instructionButton.classList = "navIcon";
    instructionStatus = false;
}
// function handles open/close functions
function instructionToggle(){

       if(instructionStatus){
        closeInstructions();
       } 
       else{
        openInstructions();
       }

}

// confirm message function
// document variable
var confirmBox = document.getElementById("confirmBox");
var confirmBoxStatus = false; // false is closed true is open

// open function

function openConfirm(){

confirmBox.style.display = "flex";  
confirmBoxStatus = true;  

}

// close function
function closeConfirm(){

   confirmBox.style.display = "none";
    confirmBoxStatus = false;
    clearButton.className = "navIcon";
    createButton.className = "navIcon";
}


}

