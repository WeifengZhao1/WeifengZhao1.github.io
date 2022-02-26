// Part A
// Temperature Converter

const celsius = 0
const fahrenheit = 32

console.log("Part A")
console.log (`${celsius}°C is ${celsius*1.8+32}°F`)
console.log (`${fahrenheit}°F is ${(fahrenheit-32)*5/9}°C`)

console.log("")

// Part B
// BMI question
// BMI=mass/(height*height)
console.log("Part B")

const johnMass = 100, johnHeight = 1.80
const johnBMI = johnMass/(johnHeight*johnHeight)

const lucasMass = 120, lucalHeight = 1.75
const lucasBMI = lucasMass/(lucalHeight*lucalHeight)

const lucasHigherBMI = (lucasBMI - johnBMI)

var result = "True"

if (lucasHigherBMI > 0) {
    result = "False"
    console.log("Lucas' BMI is higher than John's!")
    console.log(`John's BMI (${johnBMI}) is higher than Lucal's BMI (${lucasBMI}), that is ${result}!`)
}
else {
    console.log("John' BMI is higher than Lucas's!")
    console.log(`John's BMI (${johnBMI}) is higher than Lucal's BMI (${lucasBMI}), that is ${result}!`)
}

console.log("")


// Part C
function showresult(val){
    if (!Number(val)){return 'Please enter a number!'}      
    else if (val == 10) return 'you win 10 point'
    else if (val == 8) return 'you win 8 point'
    else if (typeof val === 'number' && val !== 8 || val !== 10) return 'NOT MATCHED!!'   
}
console.log(showresult(prompt('Please enter a number')))





// Part 4
console.log("")
console.log('Part D')

const winner = (netsAvg1,knicksAvg1) => {
    if (netsAvg1 === knicksAvg1 || netsAvg1 >= 100 || knicksAvg1 >= 100 ) {
        return 'no team win!, it is a draw!'
    }
    else if (netsAvg1 > knicksAvg1) {
        return 'Team Nets win!!!'
    }

    else {
        return 'Team Knicks win!!!'
    }
}

// Test Data

// Data 1
netsScores1 = [80,82,100]; // 262
knicksScores1 = [80,90,106]; // 276
netsAvg1 = ((netsScores1[0] + netsScores1[1] + netsScores1[2])/3)
knicksAvg1 = ((knicksScores1[0] + knicksScores1[1] + knicksScores1[2])/3)
console.log(winner(netsAvg1,knicksAvg1))


// Data 2
netsScores2 = [98,110,101]; // 309
knicksScores2 = [108,92,110]; // 310
netsAvg2 = ((netsScores2[0] + netsScores2[1] + netsScores2[2])/3)
knicksAvg2 = ((knicksScores2[0] + knicksScores2[1] + knicksScores2[2])/3)
console.log(winner(netsAvg2,knicksAvg2))


