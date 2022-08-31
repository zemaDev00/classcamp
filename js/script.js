// Plus Value
function plusValue() {
    let valone = document.getElementById("cal1").value;
    let valtwo = document.getElementById("cal2").value;
    let result = +valone + +valtwo;

    if (!valone == "") {
        if (!valtwo == "") {
            document.getElementsByClassName("box")[0].innerHTML =
                `
            <div class='result'>
                Result is: ` +
                result +
                `
            </div>
            <button class='clr' onclick='clrValue()'>Clear</button>`;
        } else {
            alert("Plz add second value");
        }
    } else {
        alert("Plz add first value");
    }
}

// Subtraction Value
function subtractionValue() {
    let valone = document.getElementById("cal1").value;
    let valtwo = document.getElementById("cal2").value;
    let result = valone - valtwo;

    if (!valone == "") {
        if (!valtwo == "") {
            document.getElementsByClassName("box")[0].innerHTML =
                `
            <div class='result'>
                Result is: ` +
                result +
                `
            </div>
            <button class='clr' onclick='clrValue()'>Clear</button>`;
        } else {
            alert("Plz add second value");
        }
    } else {
        alert("Plz add first value");
    }
}
// Multiply Value
function multiplyValue() {
    let valone = document.getElementById("cal1").value;
    let valtwo = document.getElementById("cal2").value;
    let result = valone * valtwo;

    if (!valone == "") {
        if (!valtwo == "") {
            document.getElementsByClassName("box")[0].innerHTML =
                `
            <div class='result'>
                Result is: ` +
                result +
                `
            </div>
            <button class='clr' onclick='clrValue()'>Clear</button>`;
        } else {
            alert("Plz add second value");
        }
    } else {
        alert("Plz add first value");
    }
}
// Division Value
function divisionValue() {
    let valone = document.getElementById("cal1").value;
    let valtwo = document.getElementById("cal2").value;
    let result = valone / valtwo;

    if (!valone == "") {
        if (!valtwo == "") {
            document.getElementsByClassName("box")[0].innerHTML =
                `
            <div class='result'>
                Result is: ` +
                result +
                `
            </div>
            <button class='clr' onclick='clrValue()'>Clear</button>`;
        } else {
            alert("Plz add second value");
        }
    } else {
        alert("Plz add first value");
    }
}
// Clear Value
function clrValue() {
    document.getElementsByClassName("box")[0].innerHTML = `
        <div class="main-heading">
           Single Calculation
        </div>
        <div class="cal">
            <input type="number" placeholder="Add Value" name="" id="cal1">
            <input type="number" placeholder="Add Value" name="" id="cal2">
            <div class="heading">
                Calculate
            </div>
            <button id="plus" onclick="plusValue()" title="Plus">+</button>
            <button id="subtraction" onclick="subtractionValue()" title="Subtraction">-</button>
            <button id="multiply" onclick="multiplyValue()" title="Multiply">x</button>
            <button id="division" onclick="divisionValue()" title="Division">/</button>
        </div>
        `;
}

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
// Multiple Plus Value
function mplusValue() {
    let valone = document.getElementById("mcal1").value;
    let valtwo = document.getElementById("mcal2").value;
    let result = +valone + +valtwo;

    if (!valone == "") {
        if (!valtwo == "") {
            document.getElementById("mcal1").value = result;
            document.getElementById("mlb").classList.add("active");
            document.getElementById("mcal1").disabled = true;
            document.getElementById("mcal2").value = "";
            document.getElementsByClassName("mboxbtn")[0].classList.add("active");
        } else {
            alert("Plz add second value");
        }
    } else {
        alert("Plz add first value");
    }
}
// Multiple Subtraction Value
function msubtractionValue() {
    let valone = document.getElementById("mcal1").value;
    let valtwo = document.getElementById("mcal2").value;
    let result = valone - valtwo;

    if (!valone == "") {
        if (!valtwo == "") {
            document.getElementById("mcal1").value = result;
            document.getElementById("mlb").classList.add("active");
            document.getElementById("mcal1").disabled = true;
            document.getElementById("mcal2").value = "";
            document.getElementsByClassName("mboxbtn")[0].classList.add("active");
        } else {
            alert("Plz add second value");
        }
    } else {
        alert("Plz add first value");
    }
}
// Multiple Multiply Value
function mmultiplyValue() {
    let valone = document.getElementById("mcal1").value;
    let valtwo = document.getElementById("mcal2").value;
    let result = valone * valtwo;

    if (!valone == "") {
        if (!valtwo == "") {
            document.getElementById("mcal1").value = result;
            document.getElementById("mlb").classList.add("active");
            document.getElementById("mcal1").disabled = true;
            document.getElementById("mcal2").value = "";
            document.getElementsByClassName("mboxbtn")[0].classList.add("active");
        } else {
            alert("Plz add second value");
        }
    } else {
        alert("Plz add first value");
    }
}
// Multiple Division Value
function mdivisionValue() {
    let valone = document.getElementById("mcal1").value;
    let valtwo = document.getElementById("mcal2").value;
    let result = valone / valtwo;

    if (!valone == "") {
        if (!valtwo == "") {
            document.getElementById("mcal1").value = result;
            document.getElementById("mlb").classList.add("active");
            document.getElementById("mcal1").disabled = true;
            document.getElementById("mcal2").value = "";
            document.getElementsByClassName("mboxbtn")[0].classList.add("active");
        } else {
            alert("Plz add second value");
        }
    } else {
        alert("Plz add first value");
    }
}

// Multiple Clear Value
function mclrValue() {
    document.getElementsByClassName(
        "mbox"
    )[0].innerHTML = document.getElementsByClassName("mbox")[0].innerHTML;
    document.getElementById("mlb").classList.remove("active");
    document.getElementsByClassName("mboxbtn")[0].classList.remove("active");
    document.getElementById("mcal1").disabled = false;
}

//-------------------------------------
//theme mode switcher
document.getElementById("mode").addEventListener("click", function () {
    let mode = document.getElementById("mode");
    let checked = document.getElementById("mode").checked;
    if (!mode == checked) {
        document.getElementsByTagName("body")[0].style.background = "#fff";
        document.getElementsByClassName("header")[0].style.background = "#fff";
        document.getElementsByClassName("box")[0].style.background = "#fff";
        document.getElementsByClassName("box")[0].style.boxShadow =
            " 2px 2px 5px rgb(0,0,0,0.2)";
        document.getElementsByClassName("mbox")[0].style.background = "#fff";
        document.getElementsByClassName("mbox")[0].style.boxShadow =
            " 2px 2px 5px rgb(0,0,0,0.2)";
        document.getElementsByClassName("htext")[0].style.color = "black";
        document.getElementById("mlb").style.color = "black";
    } else {
        document.getElementsByTagName("body")[0].style.background = "rgb(50,50,50)";
        document.getElementsByClassName("header")[0].style.background = "#000";
        document.getElementsByClassName("box")[0].style.background = "#000";
        document.getElementsByClassName("box")[0].style.boxShadow =
            " 2px 2px 15px grey";
        document.getElementsByClassName("mbox")[0].style.background = "#000";
        document.getElementsByClassName("mbox")[0].style.boxShadow =
            " 2px 2px 15px grey";
        document.getElementsByClassName("htext")[0].style.color = "white";
        document.getElementById("mlb").style.color = "white";
    }
});
