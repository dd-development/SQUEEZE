// THIS IS THE DRIVER CODE OF THE FRONT-END

var songSound = new Audio("song.mp3");
songSound.volume = 0.05;
songSound.loop = true;

//songSound.play();

var buySound = new Audio("buy.mp3");
var errorSound = new Audio("error.mp3");
var moneySound = new Audio("chaChing.mp3");
var tileSound = new Audio("tile.mp3");
var pourSound = new Audio("pour.wav");
var levelSound = new Audio("level.mp3");

tileSound.volume = 0.8;
moneySound.volume = 0.35;
levelSound.volume = 0.2;


// Get browser width and height so we can make the graphics work in any browser
const width = window.innerWidth;
const height = window.innerHeight - 4;

// Get browser image and body into JavaScript variable
var bg = document.getElementById("bg");
var body = document.body;

// Set background image and body to browser width and height
bg.style.width = width.toString() + "px";
bg.style.height = height.toString() + "px";

body.style.width = width.toString() + "px";
body.style.height = height.toString() + "px";

// THESE WILL BE USED TO SCALE ALL IMAGES AND THEIR POSITIONING FOR DIFFERING DISPLAYS
const widthModifier = (width / 1920);
const heightModifier = (height / 923);
var scaleModifier = (width * height) / (1920 * 923); // Used to adjust font size

// Corrective factors for scale modifier because font size moves height and width at same time
if (scaleModifier < 1) {
    scaleModifier = scaleModifier / 0.65; // Correct for over-shrinking
}
else if (scaleModifier > 1) {
    scaleModifier = scaleModifier * 0.65; // Correct for over-growing
}

// SCALING IMAGES TO FIT DISPLAY

// Create array to hold set-piece images
var imgArr = []; 

// Get images into variables
var ingredients = document.getElementById("ingredients");
var stand = document.getElementById("stand");
var seller = document.getElementById("seller2"); // Seller is seller2 by default

// Push image variables into array
imgArr.push(ingredients); // 0
imgArr.push(stand); // 1
imgArr.push(seller); // 2

// Loop through array and change width/height and position of each image to fit display
for (var img of imgArr) {
    // img.style.transform = "scale(" + widthModifier.toString() + ", " + heightModifier.toString() + ")";
    // ^USING SCALE DOESN'T WORK PROPERLY BECAUSE IT DOESN'T CHANGE ACTUAL ELEMENT BOUNDARIES, JUST VISUAL IMAGE SIZE

    img.style.width = (Math.round(img.offsetWidth * widthModifier)).toString() + "px";
    img.style.height = (Math.round(img.offsetHeight * heightModifier)).toString() + "px";

    img.style.left = (Math.round(img.offsetLeft * widthModifier)).toString() + "px";
    img.style.top = (Math.round(img.offsetTop * heightModifier)).toString() + "px";
}


// Manually scale text
var moneyText = document.getElementById("moneyText");

moneyText.style.fontSize = (Math.round(parseFloat(window.getComputedStyle(moneyText, null).getPropertyValue("font-size")) * scaleModifier)).toString() + "px";
moneyText.style.webkitTextStrokeWidth = (parseFloat(window.getComputedStyle(moneyText, null).getPropertyValue("-webkit-text-stroke-width")) * scaleModifier).toString() + "px";

moneyText.style.left = (Math.round(moneyText.offsetLeft * widthModifier)).toString() + "px";

var approvalText = document.getElementById("approvalRating"); // THIS SHOULD BE SCALED LATER

var priceText = document.getElementById("priceText");
priceText.style.left = (Math.round(priceText.offsetLeft * widthModifier)).toString() + "px";
priceText.style.top = (Math.round(priceText.offsetTop * heightModifier)).toString() + "px";
// Done manually scaling text

// Manually scale menu
var ingredientsMenu = document.getElementById("ingredientsMenu");
var ingImages = ingredientsMenu.getElementsByTagName("img");

ingredientsMenu.style.width = (Math.round(ingredientsMenu.offsetWidth * widthModifier)).toString() + "px";
ingredientsMenu.style.height = (Math.round(ingredientsMenu.offsetHeight * heightModifier)).toString() + "px";

ingredientsMenu.style.left = (Math.round(ingredientsMenu.offsetLeft * widthModifier)).toString() + "px";
ingredientsMenu.style.top = (Math.round(ingredientsMenu.offsetTop * heightModifier)).toString() + "px";

for (img of ingImages) {
    img.style.width = (Math.round(40 * widthModifier)).toString() + "%";
    img.style.height = (Math.round(40 * heightModifier)).toString() + "%";
}
// Done manually scaling menu

// Manually scale display
var dispDiv = document.getElementById("dispDiv");
var dispImages = dispDiv.getElementsByTagName("img");

for (img of dispImages) {
    img.style.maxWidth = (Math.round(100 * widthModifier)).toString() + "px";
    img.style.maxHeight = (Math.round(100 * heightModifier)).toString() + "px";
}

var dispP = dispDiv.getElementsByTagName("p");

for (p of dispP) {
    p.style.fontSize = (Math.round(48 * scaleModifier)).toString() + "px";
    p.style.webkitTextStrokeWidth = (Math.round(2 * scaleModifier)).toString() + "px";
    p.style.marginLeft = (Math.round(10 * heightModifier)).toString() + "px";
    p.style.marginTop = (Math.round(20 * widthModifier)).toString() + "px";
}

dispDiv.style.left = (Math.round(dispDiv.offsetLeft * widthModifier)).toString() + "px";
dispDiv.style.top = (Math.round(dispDiv.offsetTop * heightModifier)).toString() + "px";
// Done manually scaling display

var r = document.querySelector(":root");
var rs = getComputedStyle(r);

r.style.setProperty("--tSize", (parseFloat(rs.getPropertyValue("--tSize")) * scaleModifier).toString() + "%");
r.style.setProperty("--pSize", (parseFloat(rs.getPropertyValue("--pSize")) * scaleModifier).toString() + "%");
r.style.setProperty("--hSize", (parseFloat(rs.getPropertyValue("--hSize")) * scaleModifier).toString() + "%");

r.style.setProperty("--cLeft", (parseFloat(rs.getPropertyValue("--cLeft")) * widthModifier).toString() + "px");
r.style.setProperty("--cTop", (parseFloat(rs.getPropertyValue("--cTop")) * heightModifier).toString() + "px");
r.style.setProperty("--aInFrom", (parseFloat(rs.getPropertyValue("--aInFrom")) * widthModifier).toString() + "px");
r.style.setProperty("--aInTo", (parseFloat(rs.getPropertyValue("--aInTo")) * widthModifier).toString() + "px");
r.style.setProperty("--aOutFrom", (parseFloat(rs.getPropertyValue("--aOutFrom")) * widthModifier).toString() + "px");
r.style.setProperty("--aOutTo", (parseFloat(rs.getPropertyValue("--aOutTo")) * widthModifier).toString() + "px");


// Make variables for menu images
var buyLemon = document.getElementById("buyLemon");
var buySugar = document.getElementById("buySugar");
var buyIceBag = document.getElementById("buyIceBag");
var buyWater = document.getElementById("buyWater");
var buyCups = document.getElementById("buyCups");
var lemonadeImg = document.getElementById("lemonadeImg");

// Push menu images into imgArr
imgArr.push(buyLemon); // 3
imgArr.push(buySugar); // 4
imgArr.push(buyIceBag); // 5
imgArr.push(buyWater); // 6
imgArr.push(buyCups); // 7
imgArr.push(lemonadeImg); // 8
imgArr.push(priceText); // 9

// Set hover animations for images
ingredients.onmouseover = function() {hoverImg(0)};
ingredients.onmouseout = function() {unHoverImg(0)};

buyLemon.onmouseover = function() {hoverImg(3)};
buyLemon.onmouseout = function() {unHoverImg(3)};
buySugar.onmouseover = function() {hoverImg(4)};
buySugar.onmouseout = function() {unHoverImg(4)};
buyIceBag.onmouseover = function() {hoverImg(5)};
buyIceBag.onmouseout = function() {unHoverImg(5)};
buyWater.onmouseover = function() {hoverImg(6)};
buyWater.onmouseout = function() {unHoverImg(6)};
buyCups.onmouseover = function() {hoverImg(7)};
buyCups.onmouseout = function() {unHoverImg(7)};
lemonadeImg.onmouseover = function() {hoverImg(8)};
lemonadeImg.onmouseout = function() {unHoverImg(8)};
priceText.onmouseover = function() {hoverImg(9)};
priceText.onmouseout = function() {unHoverImg(9)};


function hoverImg(key) {
    tileSound.load();
    tileSound.play();
    imgArr[key].style.transform = "scale(1.25, 1.25)";
    imgArr[key].style.filter = "saturate(300%)";
}

function unHoverImg(key) {
    imgArr[key].style.transform = "scale(1, 1)";
    imgArr[key].style.filter = "saturate(100%)";
}

// Exit button hover animation
var exitBtn = document.getElementById("exitBtn");

exitBtn.onmouseover = function() {hoverBtn()};
exitBtn.onmouseout = function() {unHoverBtn()};

function hoverBtn() {
    tileSound.load();
    tileSound.play();
    exitBtn.style.backgroundColor = "red";
    exitBtn.style.color = "white";
}

function unHoverBtn() {
    exitBtn.style.backgroundColor = "burlywood";
    exitBtn.style.color = "black";
}


// Ingredient menu open and close functions
function openMenu() {
    buySound.load();
    buySound.play();
    ingredientsMenu.style.visibility = "visible";
}

function exitMenu() {
    buySound.load();
    buySound.play();
    ingredientsMenu.style.visibility = "hidden";
}

// STARTING GAME STUFF
var invCash = 12;
var invLemonade = 0;
var sellPrice = 3;
var level = 0;

// RUNNING GAME STATS FOR SIM
var totalCustomers = 0;
var totalApproval = 0; // Start with 1 approval
var pubAppRating = 3; // Math.round(totalApproval / totalCustomers)

var totalGross = 0;
var totalSpent = 0;
var totalProfit = 0; // Gross - Spent
var avgProfitPerCustomer = 0; // Profit / Total Customers

var cupsServed = 0; // Actual cups served, not counting customers that walked away

// // STATS STRUCT FOR INDIVIDUAL LEVELS (DON'T HAVE TIME RN)
// var levelStats = {
//     levelProfit: 0,
//     cupsServed: 0,
//     avgProfitPerCustomer: 0,
//     cupsMade: 0,
//     avgCustomerApproval: 0, // Out of 5

//     // Total ingredients purchased for this level
//     lemonsBought: 0, // Lemons purchased
//     sugarBought: 0, // In cups
//     waterBought: 0, // In cups
//     iceBought: 0, // In cubes
//     cupsBought: 0 // In literal cups, like plastic cups
// };

// Indexes -> 0: Lemons, 1: Sugar, 2: Water, 3: Ice, 4: Cups
var invArr = [0, 0, 0, 0, 0];

// Price Indexes -> 0: Lemons, 1: Sugar, 2: Water, 3: Ice, 4: Cups
var priceArr = [2, 3, 1, 2, 2];

// Quantity Indexes -> 0: Lemons, 1: Sugar, 2: Water, 3: Ice, 4: Cups
var quantArr = [4, 8, 16, 200, 30];

// Display variables and array (cringe)
var numLemonade = document.getElementById("numLemonade");
var numLemons = document.getElementById("numLemons");
var numSugar = document.getElementById("numSugar");
var numWater = document.getElementById("numWater");
var numIce = document.getElementById("numIce");
var numCups = document.getElementById("numCups");

// Fraction displays
var fL = document.getElementById("fL");
var fS = document.getElementById("fS");
var fW = document.getElementById("fW");
var fI = document.getElementById("fI");
var fC = document.getElementById("fC");

// Price displays
var pL = document.getElementById("pL");
var pS = document.getElementById("pS");
var pW = document.getElementById("pW");
var pI = document.getElementById("pI");
var pC = document.getElementById("pC");

// Display Indexes -> 0: Lemons, 1: Sugar, 2: Water, 3: Ice, 4: Cups
var dispArr = [numLemons, numSugar, numWater, numIce, numCups];
var fArr = [fL, fS, fW, fI, fC];
var pArr = [pL, pS, pW, pI, pC];

// Recipe Indexes -> 0: Lemons, 1: Sugar, 2: Water, 3: Ice, 4: Cups
var recipeArr = [6, 1, 6, 20, 1];

function checkOutOfBusiness() {
    var notEnoughIng = false;

    for (var i = 0; i < 2; i++) { // CHECK IF ANY CHANGEABLE INGREDIENTS ARE 0
        if (invArr[i] < 1) {
            notEnoughIng = true;
        }
    }

    if (invArr[3] < 20 || invArr[4] < 1) {
        notEnoughIng = true;
    }

    console.log(notEnoughIng);
    console.log(invCash);
    console.log(Math.min(priceArr));
    console.log(invLemonade);

    if (notEnoughIng == true && invCash < Math.min(...priceArr) && invLemonade == 0) {
        window.location.replace('loseScreen.html')
    }
}

function updateInvDisp() {
    moneyText.innerHTML = "CASH: $" + invCash;
    numLemonade.innerHTML = invLemonade;
    approvalText.innerHTML = "PUBLIC APPROVAL RATING: " + pubAppRating + "/5";
    priceText.innerHTML = "$" + sellPrice;

    if (pubAppRating > 3) {
        approvalText.style.color = "lightgreen";
    }
    else if (pubAppRating > 1) {
        approvalText.style.color = "yellow";
    }
    else {
        approvalText.style.color = "red";
    }

    for (var i = 0; i < 5; i++) {
        dispArr[i].innerHTML = invArr[i];
        fArr[i].innerHTML = "/ " + recipeArr[i];

        if (invArr[i] >= recipeArr[i]) {
            dispArr[i].style.color = "lightgreen";
            fArr[i].style.color = "lightgreen";
        }
        else {
            dispArr[i].style.color = "red";
            fArr[i].style.color = "red";
        }

        if (invCash >= priceArr[i]) {
            pArr[i].style.color = "green";
        }
        else {
            pArr[i].style.color = "red";
        }
    }

    if (invLemonade > 0) {
        numLemonade.style.color = "lightgreen";
    }
    else {
        numLemonade.style.color = "red";
    }
}

function buyIngredient(index) {
    const ingPrice = priceArr[index];

    if (invCash >= ingPrice) {
        invCash -= ingPrice;
        totalSpent += ingPrice;

        invArr[index] += quantArr[index];

        updateInvDisp();
        checkOutOfBusiness();

        buySound.load();
        buySound.play();
    }
    else {
        errorSound.load();
        errorSound.play();
    }
}

function makeLemonade() {
    if (invArr[0] >= recipeArr[0] && invArr[1] >= recipeArr[1] && invArr[3] >= recipeArr[3] && invArr[2] >= recipeArr[2] && invArr[4] >= recipeArr[4]) {
        invLemonade += 8;
        invArr[0] -= recipeArr[0];
        invArr[1] -= recipeArr[1];
        invArr[3] -= recipeArr[3];
        invArr[2] -= recipeArr[2];
        invArr[4] -= recipeArr[4];

        numLemonade.innerHTML = invLemonade;
        numLemons.innerHTML = invArr[0];
        numSugar.innerHTML = invArr[1];
        numIce.innerHTML = invArr[3];
        numWater.innerHTML = invArr[2];
        numCups.innerHTML = invArr[4];


        pourSound.load();
        pourSound.play();
        updateInvDisp();
        document.getElementById("recipeModal").style.display = "none";
    }
    else{
        errorSound.load();
        errorSound.play();
    }
}

function openRecipeMenu(sound) {
    if (sound == 1) {
        pourSound.load();
        pourSound.play();
    }
    else {
        moneySound.load();
        moneySound.play();
    }
    

    const modal = document.getElementById("recipeModal");
    modal.style.display = "block";

    // Pre-fill inputs with current recipe values
    document.getElementById("recipeLemons").value = recipeArr[0];
    document.getElementById("recipeWater").value = recipeArr[2];
    document.getElementById("recipeSugar").value = recipeArr[1];
    document.getElementById("priceChange").value = sellPrice;
}

function closeRecipeMenu(){
    buySound.load();
    buySound.play();
    document.getElementById("recipeModal").style.display = "none";
}



var levelOne = new Image(1920 * widthModifier, 923 * heightModifier);
var levelTwo = new Image(1920 * widthModifier, 923 * heightModifier);
var levelThree = new Image(1920 * widthModifier, 923 * heightModifier);

levelOne.src = "days/1.png";
levelTwo.src = "days/2.png";
levelThree.src = "days/3.png";

levelOne.classList.add("levelAnim");
levelTwo.classList.add("levelAnim");
levelThree.classList.add("levelAnim");

levelOne.addEventListener('animationend', () => {
    levelOne.classList.remove("levelAnim");
});
levelTwo.addEventListener('animationend', () => {
    levelTwo.classList.remove("levelAnim");
});
levelThree.addEventListener('animationend', () => {
    levelThree.classList.remove("levelAnim");
});

var levelArr = [levelOne, levelTwo, levelThree];

function levelChange(levelIn) {
    level = levelIn;

    levelSound.load();
    levelSound.play();

    if (levelIn == 1) {
        bg.src = "bg/3.png";
    }
    else if (levelIn == 2) {
        bg.src = "bg/4.png";
    }

    document.body.appendChild(levelArr[levelIn]);

    setTimeout(() => {
        songSound.play();
    }, 5000);
    setTimeout(addCustomer, 20000); // ALWAYS CALL THE REFERENCE, NEVER THE FUNCTION WITH PARENTHESES!
}


// CUSTOMER STUFF
var customer;
var cAnimTracker = 0;

// https://craftpix.net/freebies/city-man-pixel-art-character-sprite-sheets/?srsltid=AfmBOoq103JXn475OzOwgoZIDi2siYRq6xdAonHoHmmz8s-otNgp8T72
// https://craftpix.net/freebies/free-homeless-character-sprite-sheets-pixel-art/
var custArr = [];

var walkAnim = "sprites/walk1.gif";
var idleAnim = "sprites/idle1.gif";

function addCustomer() {
    if (level == 2) {
        walkAnim = "sprites/walk2.gif";
        idleAnim = "sprites/idle2.gif";
    }

    totalCustomers++; // INCREMENT TOTAL CUSTOMERS

    customer = new Image(41 * widthModifier, 72 * heightModifier); // width, height
    customer.src = walkAnim;
    customer.classList.add("customer");
    customer.draggable = false;
    customer.classList.add("cAnim1");

    customer.addEventListener('animationend', () => { // HANDLING IMAGE SETUP ON TOP OF CANVAS
        if (cAnimTracker == 0) {
            customer.style.left = (1100 * widthModifier).toString() + "px";
            customer.classList.remove("cAnim1");
            customer.src = idleAnim;
            cAnimTracker = 1;

            customer.onclick = handleCustomer;
            customer.onmouseover = hoverCustomer;
            customer.onmouseout = unHoverCustomer;

            if (invLemonade == 0) { // NO LEMONADE, 1 APPROVAL
                handleCustomer();
            }
        }
        else {
            cAnimTracker = 0; // SUPER IMPORTANT TO KEEP TRACK OF THIS

            for (var member in customer) delete customer[member];
            delete customer;
            document.body.removeChild(customer);

            // THIS IS WHERE THE LEVEL SWITCH WILL HAPPEN
            if (totalCustomers == 4) {
                songSound.pause();
                levelChange(1);
                bg.src = "bg/3.png";

                return;
            }
            else if (totalCustomers == 10) {
                songSound.pause();
                levelChange(2);
                bg.src = "bg/4.png";

                return;
            }
            addCustomer();
        }
    });
    
    document.body.appendChild(customer);
}

function completeSale() {
    invCash += sellPrice;
    totalGross += sellPrice;
    invLemonade -= 1;

    moneyText.innerHTML = "CASH: $" + invCash;
    document.getElementById("numLemonade").innerHTML = invLemonade;

    moneySound.play();
}

function handleCustomer() {
    customer.onclick = null;
    customer.onmouseover = null;
    customer.onmouseout = null;

    if (invLemonade > 0) { // IF WE HAVE LEMONADE, THIS IS A SELL
        

        if (level == 0) { // NORMAL LEMONADE
            if (sellPrice <= 4) {
                if (recipeArr[0] == 6 && recipeArr[1] == 1 && recipeArr[2] == 6) {
                    totalApproval += 3;
                    completeSale();
                }
                else {
                    totalApproval += Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                    completeSale();
                }
            }
            else {
                errorSound.load();
                errorSound.play();
                totalApproval += 1;
            }
        }
        else if (level == 1) { // SOUR LEMONADE
            if (sellPrice <= 5) {
                if (recipeArr[0] > 7 && recipeArr[1] < 3 && recipeArr[2] < 7) {
                    totalApproval += Math.floor(Math.random() * (5 - 4 + 1)) + 4;;
                    completeSale();
                }
                else {
                    totalApproval += Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                    completeSale();
                }
            }
            else {
                errorSound.load();
                errorSound.play();
                totalApproval += 0;
            }
        }
        else if (level == 2) { // SWEETEST LEMONADE
            if (sellPrice <= 10) {
                if (recipeArr[0] <= 6 && recipeArr[1] >= 10 && recipeArr[2] <= 8) {
                    totalApproval += 5;
                    completeSale();
                }
                else {
                    totalApproval += Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                    completeSale();
                }
            }
            else {
                errorSound.load();
                errorSound.play();
                totalApproval += 0;
            }
        }
    }
    else { // NO LEMONADE, WALK AWAY
        errorSound.load();
        errorSound.play();
        totalApproval += 0;
    }

    pubAppRating = Math.round(totalApproval / totalCustomers); // UPDATE APPROVAL RATING

    updateInvDisp(); // UPDATE DISPLAY
    checkOutOfBusiness();

    customer.src = walkAnim;
    customer.classList.add("cAnim2");
    customer.style.transform = "scale(-6, 6)";
    customer.style.filter = "saturate(100%)";
}

function hoverCustomer() {
    tileSound.load();
    tileSound.play();
    customer.style.transform = "scale(-6.2, 6.2)";
    customer.style.filter = "saturate(150%)";
}

function unHoverCustomer() {
    customer.style.transform = "scale(-6, 6)";
    customer.style.filter = "saturate(100%)";
}

function saveRecipe() {
    var rL = parseInt(document.getElementById("recipeLemons").value) || 1;
    var rW = parseInt(document.getElementById("recipeWater").value) || 1;
    var rS = parseInt(document.getElementById("recipeSugar").value) || 1;

    if (recipeArr[0] != rL || recipeArr[2] != rW || recipeArr[1] != rS) {
        recipeArr[0] = rL;
        recipeArr[2] = rW;
        recipeArr[1] = rS;

        invLemonade = 0;

        if (cAnimTracker == 1) {
            handleCustomer();
        }
    }
    
    sellPrice = parseInt(document.getElementById("priceChange").value) || 1;

    buySound.load();
    buySound.play();
    updateInvDisp();
}

levelChange(0);