
let unitArray = [];
let resultArray = [];
function saveGrades() {

    userInput = document.getElementById("name").value;
    console.log(userInput)

    userUnit = document.getElementById("unit").value;
    // multiplied by 1 because it kept adding 0 to the numbers
    userUn = 1 * userUnit
    unitArray.push(userUn);
    console.log(unitArray)

    sumUn = 0;
    for (i = 0; i<unitArray.length; i++)
    sumUn += unitArray[i];
    document.getElementById("totalUnits").value = sumUn;
    console.log(sumUn);


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
        console.log(result);
   }
   resultArray.push(result);
   document.getElementById("userGrades").innerHTML += result + " - ";  
   console.log(resultArray);   

   sumGr = 0;
   for (i = 0; i<resultArray.length; i++)
   sumGr += resultArray[i];
   document.getElementById("totalPoints").value = sumGr;
   console.log(sumGr);

}
saveGrades()
console.log(sumGr)
console.log(sumUn)


function calcGP(){
    let total = (sumGr / sumUn).toFixed(2)
    document.getElementById("total").innerHTML = `Dear ${userInput}, your GPA is ${total}`
    console.log(total)
}

function cl() {
    document.getElementById('userGrades').innerHTML = "Grades: ";
    document.getElementById("totalPoints").value = 0;
    document.getElementById("totalUnits").value = 0;
    unitArray = []
    resultArray = []
    document.getElementById("total").innerHTML = ""
    console.log(" ");
}

