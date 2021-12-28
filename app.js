// //The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight, height) {
//     var bmi = weight / (height * height) ;
//     return bmi ;
// }


// /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

// var bmi = bmiCalculator(65, 1.8); 

// bmi should equal 20 when it's rounded to the nearest whole number. */


let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let weight = document.getElementById('weight-input').value;
    let height = document.getElementById('height-input').value;
    let bmi = weight / (height * height);
    document.getElementById('bmi-output').value =Math.floor(bmi)
})

