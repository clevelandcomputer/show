//Contributors Darius Chappell, Safea Patrick Mansa-Musa, Cynthia Evans

//Kata 1
const content = document.querySelector('main')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

let counter = 1
    
let headingOne = document.createElement('h1')
    headingOne.append('Kata 1')
    content.append(headingOne)
    
  while (counter <= 20) {
    let headingTwo = document.createElement('p')
    content.append(headingTwo)
    headingTwo.append(counter)
   
    counter += 1
  }

//Kata 2

let counter2 = 1
    
 let kata2 = document.createElement('h1')
 kata2.append('Kata 2')
    content.append(kata2)
    
  while (counter2 <= 20) {
      if(counter2 % 2 === 0){
        let kata2Heading = document.createElement('p')
    content.append(kata2Heading)
    kata2Heading.append(counter2)
      } 
    
   
    counter2 += 1
  }

  //Kata 3

let counter3 = 1
    
let kata3 = document.createElement('h1')
kata3.append('Kata 3')
   content.append(kata3)
   
 while (counter3 <= 20) {
     if(counter3 % 2 === 1){
       let kata3Heading = document.createElement('p')
   content.append(kata3Heading)
   kata3Heading.append(counter3)
     } 
   
  
   counter3 += 1
 }

   //Kata 4

let counter4 = 5
    
let kata4 = document.createElement('h1')
kata4.append('Kata 4')
   content.append(kata4)
   
 while (counter4 <= 100) {
     
    let kata4Heading = document.createElement('p')
   content.append(kata4Heading)
   kata4Heading.append(counter4)
   
  
   counter4 += 5
 }

    //Kata 5

let counter5 = 1
    
let kata5 = document.createElement('h1')
kata5.append('Kata 5')
   content.append(kata5)
   
 while (counter5 <= 10) {
     let newCounter = counter5*counter5
    let kata5Heading = document.createElement('p')
   content.append(kata5Heading)
   kata5Heading.append(newCounter)
     
  
   counter5 += 1
 }

 // Kata 6

 let counter6 = 20
    
let kata6 = document.createElement('h1')
    kata6.append('Kata 6')
    content.append(kata6)
    
  while (counter6 >= 1) {
    let kata6Heading = document.createElement('p')
    content.append(kata6Heading)
    kata6Heading.append(counter6)
   
    counter6 -= 1
  }

  //Kata 7
  //Kata 8
  //Kata 9
  //Kata 10

  //Kata 11

    
let kata11 = document.createElement('h1')
    kata11.append('Kata 11')
    content.append(kata11)
    
  for(let index11 = 0; index11 < sampleArray.length; index11++) {
    let kata11Heading = document.createElement('p')
    content.append(kata11Heading)
    kata11Heading.append(sampleArray[index11])
   
  }

    //Kata 12

    
let kata12 = document.createElement('h1')
kata12.append('Kata 12')
content.append(kata12)

for(let index12 = 0; index12 < sampleArray.length; index12++) {
    if(sampleArray[index12] % 2 === 0) {
let kata12Heading = document.createElement('p')
content.append(kata12Heading)
kata12Heading.append(sampleArray[index12])
    } 
}
  
 //Kata 13

    
 let kata13 = document.createElement('h1')
 kata13.append('Kata 13')
 content.append(kata13)
 
 for(let index13 = 0; index13 < sampleArray.length; index13++) {
     if(sampleArray[index13] % 2 === 1) {
 let kata13Heading = document.createElement('p')
 content.append(kata13Heading)
 kata13Heading.append(sampleArray[index13])
     } 
 }

 //Kata 14

    
 let kata14 = document.createElement('h1')
 kata14.append('Kata 14')
 content.append(kata14)
 
 for(let index14 = 0; index14 < sampleArray.length; index14++) {
    
 let kata14Heading = document.createElement('p')
 content.append(kata14Heading)
 kata14Heading.append(sampleArray[index14] * sampleArray[index14])
    
 }

 //Kata 15

let counter15 = 1
let sum = 0
    
let kata15 = document.createElement('h1')
kata15.append('Kata 15')
   content.append(kata15)
   
 while (counter15 <= 20) {
     sum += counter15
   counter15 += 1
 }
 let kata15Heading = document.createElement('p')
   content.append(kata15Heading)
   kata15Heading.append(sum)

   
 //Kata 16

let index16 = 0
let sum16 = 0
    
let kata16 = document.createElement('h1')
kata16.append('Kata 16')
   content.append(kata16)
   
 while (index16 < sampleArray.length) {
     sum16 += sampleArray[index16]
   index16 += 1
 }
 let kata16Heading = document.createElement('p')
   content.append(kata16Heading)
   kata16Heading.append(sum16)


 //Kata 17

    
 let kata17 = document.createElement('h1')
 kata17.append('Kata 17')
 content.append(kata17)

 let smallest = 1000000
 
 for(let index17 = 0; index17 < sampleArray.length; index17++) {
    if(sampleArray[index17] < smallest) {
        smallest = sampleArray[index17]
    }
    
    
 }

 let kata17Heading = document.createElement('p')
    content.append(kata17Heading)
    kata17Heading.append(smallest)

//Kata 17 b
let kata17b = document.createElement('h1')
 kata17b.append('Kata 17 b')
 content.append(kata17b)


let answer = Math.min(...sampleArray)
let kata17bHeading = document.createElement('p')
content.append(kata17bHeading)
kata17bHeading.append(answer)

//Kata 18
let kata18 = document.createElement('h1')
 kata18.append('Kata 18')
 content.append(kata18)


let answer2 = Math.max(...sampleArray)
let kata18Heading = document.createElement('p')
content.append(kata18Heading)
kata18Heading.append(answer2)
 
//Kata 19

let kata19 = document.createElement('h1')
    kata19.append('Kata 19')
    content.append(kata19)
    let startOut = 100 + 5
    let solve = startOut
    
   for(let index19 = 0; index19 < 20; index19++) {
    
       let newSolve = solve.toString() + 'px'
       

    let kata19Heading = document.createElement('div')
    kata19Heading.style.width = newSolve
    // div.id = 'box'
    content.append(kata19Heading)
    
    solve += 5
   }