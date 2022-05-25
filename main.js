
let unitArray = [];
let resultArray = [];
function saveGrades() {

    userInput = document.getElementById("name").value;

    userUnit = document.getElementById("unit").value;
    // multiplied by 1 because it kept adding 0 to the numbers
    userUn = 1 * userUnit
    unitArray.push(userUn);

    sumUn = 0;
    for (i = 0; i<unitArray.length; i++)
    sumUn += unitArray[i];
    document.getElementById("totalUnits").value = sumUn;


    userGrade = document.getElementById("grades").value
    if  (userGrade == "A" ){
        result = 5 * userUnit;
    }
   else if (userGrade == "B"){
        result = 4 * userUnit;
    }
   else if (userGrade == "C"){
        result = 3 * userUnit;
    }
   else if (userGrade == "D"){
        result = 2 * userUnit;
    }
   else if(userGrade == "E"){
        result = 1 * userUnit;
    }
   else if(userGrade == "F"){
        result = 0 * userUnit;
   }
   resultArray.push(result);

   sumGr = 0;
   for (i = 0; i<resultArray.length; i++)
   sumGr += resultArray[i];
   document.getElementById("totalPoints").value = sumGr;

}
saveGrades()


function calcGP(){
    let total = (sumGr / sumUn).toFixed(2)
    document.getElementById("total").innerHTML = `Dear ${userInput}, your GPA is ${total}`
}

function cl() {
    document.getElementById("totalPoints").value = 0;
    document.getElementById("totalUnits").value = 0;
    unitArray = []
    resultArray = []
    document.getElementById("total").innerHTML = ""
}

