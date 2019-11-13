// * Function hides homepage when start button is clicked
function startGame() {
    document.getElementById("homepage-container").style.display = "none";
    document.getElementById("gamepage-container").style.display = "block";
}

var arrayOfAddedStates = [];
function checkEntryCombination() {
    let stateInputProper, capitalInputProper, numberInputProper, stateInput, capitalInput, numberInput;

    // * Variables extracting all three user inputs. trim is used to get rid of whitespaces
    stateInputProper = (document.form.state.value).trim();
    capitalInputProper = (document.form.capital.value).trim();
    numberInputProper = (document.form.position.value).trim();

    stateInput = stateInputProper.toLowerCase();
    capitalInput = capitalInputProper.toLowerCase();
    numberInput = numberInputProper



    // * List of objects with which user inputs are compared
    var stateObjects = [
        {stateName: "abia", capital: "umuahia", position: 1},
        {stateName: "adamawa", capital: "yola", position: 2},
        {stateName: "akwa ibom", capital: "uyo", position: 3},
        {stateName: "anambra", capital: "awka", position: 4},
        {stateName: "bauchi", capital: "bauchi", position: 5},
        {stateName: "bayelsa", capital: "yenogoa", position: 6},
        {stateName: "benue", capital: "makurdi", position: 7},
        {stateName: "borno", capital: "maiduguri", position: 8},
        {stateName: "cross river", capital: "calabar", position: 9},
        {stateName: "delta", capital: "asaba", position: 10},
        {stateName: "ebonyi", capital: "abakaliki", position: 11},
        {stateName: "edo", capital: "benin", position: 12},
        {stateName: "ekiti", capital: "ado ekiti", position: 13},
        {stateName: "enugu", capital: "enugu", position: 14},
        {stateName: "gombe", capital: "gombe", position: 15},
        {stateName: "imo", capital: "owerri", position: 16},
        {stateName: "jigawa", capital: "dutse", position: 17},
        {stateName: "kaduna", capital: "kaduna", position: 18},
        {stateName: "kano", capital: "kano", position: 19},
        {stateName: "katsina", capital: "katsina", position: 20},
        {stateName: "kebbi", capital: "birnin kebbi", position: 21},
        {stateName: "kogi", capital: "lokoja", position: 22},
        {stateName: "kwara", capital: "ilorin", position: 23},
        {stateName: "lagos", capital: "ikeja", position: 24},
        {stateName: "nasarawa", capital: "Lafia", position: 25},
        {stateName: "niger", capital: "minna", position: 26},
        {stateName: "ogun", capital: "abeokuta", position: 27},
        {stateName: "ondo", capital: "akure", position: 28},
        {stateName: "osun", capital: "oshogbo", position: 29},
        {stateName: "oyo", capital: "ibadan", position: 30},
        {stateName: "plateau", capital: "jos", position: 31},
        {stateName: "rivers", capital: "port harcourt", position: 32},
        {stateName: "sokoto", capital: "sokoto", position: 33},
        {stateName: "taraba", capital: "jalingo", position: 34},
        {stateName: "yobe", capital: "damaturu", position: 35},
        {stateName: "zamfara", capital: "gusau", position: 36}
    ]
        
    // * Variable extracting form fields from HTML document
    var formEntryBoxes = document.getElementsByClassName("form-entry")

    // ! SC comparison begins - Method used here is repeated for SN below
        // * Filter method used to pick out object containing data that matches the user's input. Great alternative to a for-loop through the objects
        // todo If method ever gets confusing again, Google "filtering an array of objects"
        var arrayScFilter =  stateObjects.filter(function(pickMatchingObject) {
            return pickMatchingObject.stateName == stateInput && pickMatchingObject.capital == capitalInput
        });

        // * Variables created to extract values in alert section of HTML document.
        var scStatus = document.getElementById("sc-status");

        // * if/else statement checks the success of the filtering performed earlier, uses this to generate alerts
        if (arrayScFilter.length) {
            scStatus.innerHTML = "✔";
            scStatus.style.color = "#356859";

            // * Border of form fields used to alert user on what needs to be corrected. Index used because getElementsByClassName used earlier returns an array
            // formEntryBoxes[0].style.borderColor = "#356859";
            // formEntryBoxes[1].style.borderColor = "#356859";
        } else {
            scStatus.innerHTML = "✘";
            scStatus.style.color = "#bf0000";

            // formEntryBoxes[0].style.borderColor = "#bf0000";
            // formEntryBoxes[1].style.borderColor = "#bf0000";
        }
    // ! SC comparison ends

    // ! SN comparison begins
        var arraySnFilter =  stateObjects.filter(function(pickMatchingObject) {
            return pickMatchingObject.stateName == stateInput && pickMatchingObject.position == numberInput
        });

        var snStatus = document.getElementById("sn-status");

        if (arraySnFilter.length) {
            snStatus.innerHTML = "✔";
            snStatus.style.color = "#356859";

            // formEntryBoxes[0].style.borderColor = "#356859";
            // formEntryBoxes[2].style.borderColor = "#356859";
        } else {
            snStatus.innerHTML = "✘";
            snStatus.style.color = "#bf0000";

            // formEntryBoxes[0].style.borderColor = "#bf0000";
            // formEntryBoxes[2].style.borderColor = "#bf0000";
        }
    // ! SN comparison ends

    // * Dictionary containing state, capital, number when combination is correct is filtered below
    var arrayAllFilter =  stateObjects.filter(function(pickMatchingObject) {
        return pickMatchingObject.stateName == stateInput && pickMatchingObject.capital == capitalInput && pickMatchingObject.position == numberInput
    });

    // * Deletes the "none yet" bit
    document.getElementById("none-yet").innerHTML = "";

    // * if/else to make sure users do not repeat answers to inflate score
    var repeatSheatAlert = document.getElementById("alert");
    var alertParagpraph = document.getElementById("alert-paragraph");
    if (arrayOfAddedStates.includes(stateInput)) {
        repeatSheatAlert.innerHTML = "You don enter am before, sheat.";
        alertParagpraph.style.display = "block";
        alertParagpraph.style.color = "#FFFBE6";
        alertParagpraph.style.backgroundColor = "#780101";
        setTimeout(function () {
            alertParagpraph.style.display = "none";
        }, 2000);
    } else {
        // * Picks out added state's name and adds it to list of entered states
        var newlyAddedState = arrayAllFilter[0].stateName;
        var appendedState = document.createTextNode(`${newlyAddedState}, `);
        document.getElementById("entered-states-inner").appendChild(appendedState);

        // * Adds entered state into "array of added states" which is defined outside (before) this function
        arrayOfAddedStates.push(arrayAllFilter[0].stateName)

        // * This bit records the score out of 36
        var totalAttemptsValue = parseInt(document.getElementById("total-attempts-value").innerHTML);
        if (arrayAllFilter.length) {
        // * if/else statement prevents attempts count from reaching values greater than 36 (states)
            if (totalAttemptsValue <= 35) {
                newTotalAttemptsValue = totalAttemptsValue + 1;
                document.getElementById("total-attempts-value").innerHTML = newTotalAttemptsValue;     
            }

            if (totalAttemptsValue >= 35) {
                repeatSheatAlert.innerHTML = "You be confam 10/10 Naija pesin. Congrats on completing the states. capital. number. challenge!";
                alertParagpraph.style.display = "block";
                alertParagpraph.style.color = "#FFFBE6";
                alertParagpraph.style.backgroundColor = "#356859";
            }
        }
    }

    // * Clears form fields after submit button is clicked.
    document.getElementById("state").value = '';
    document.getElementById("capital").value = '';
    document.getElementById("position").value = '';
}


// * Function shows answers when practice ("sheat") button is clicked
function practice() {
    document.getElementById("homepage-container").style.display = "none";
    document.getElementById("gamepage-container").style.display = "none";
    document.getElementById("table-container").style.display = "block";
}

// * Function makes display of answers last only 3 seconds
function hideAfter2Secs() {
    setTimeout(function () {
        document.getElementById('table-container').style.display='none';
        document.getElementById("gamepage-container").style.display = "block"
    }, 2000);
    // return false;
};

// * Function limits cheat clicks to three.
clickCount = 0;
function practiceLimiter() {
    clickCount += 1;

    var repeatSheatAlert = document.getElementById("alert");
    var alertParagpraph = document.getElementById("alert-paragraph");
    if (clickCount == 3) {
        document.getElementById("practice").disabled = true;
        repeatSheatAlert.innerHTML = "Abeg, enough with the sheating!";
        alertParagpraph.style.display = "block";
        alertParagpraph.style.color = "#FFFBE6";
        alertParagpraph.style.backgroundColor = "#780101";
        setTimeout(function () {
            alertParagpraph.style.display = "none";
        }, 4000);
        // alert("Abeg, enough with the sheating!")
        document.getElementById("practice").innerHTML = "toush not";
        document.getElementById("practice").style.backgroundColor = "#d15252";
    };
};

function resetGameProgress() {
    var repeatSheatAlert = document.getElementById("alert");
    var alertParagpraph = document.getElementById("alert-paragraph");

    // repeatSheatAlert.innerHTML = "So you went to google clues abi? Oya seriously, stop sheating.";
    // alertParagpraph.style.display = "block";
    // alertParagpraph.style.color = "#FFFBE6";
    // alertParagpraph.style.backgroundColor = "#780101";
    // setTimeout(function () {
    //     alertParagpraph.style.display = "none";
    // }, 4500);

    // * Originally added to reset scores when users open other tabs. Doesnt work properly
    // var totalAttemptsValue = document.getElementById("total-attempts-value");
    // totalAttemptsValue.innerHTML = 0;
    // document.getElementById("none-yet").innerHTML = "None Yet.";
    // document.getElementById("entered-states-inner").innerHTML = "";

    document.title = "Come Back ❤";
}

function originalTitle() {
    document.title = "state. capital. number.";
}