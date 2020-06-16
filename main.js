//Contributors Darius Chappell, Safea Patrick Mansa-Musa, Cynthia Evans
// & Ashley Storer 

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

  let counter7 = 20
    
 let kata7 = document.createElement('h1')
 kata7.append('Kata 7')
    content.append(kata7)
    
  while (counter7 >= 1) {
      if(counter7 % 2 === 0){
        let kata7Heading = document.createElement('p')
    content.append(kata7Heading)
    kata7Heading.append(counter7)
      } 
    
   
    counter7 -= 1
  }

  //Kata 8
let coutner8 = 20
    
let kata8 = document.createElement('h1')
kata8.append('Kata 8')
   content.append(kata8)
   
 while (coutner8 >= 1) {
     if(coutner8 % 2 === 1){
       let kata8Heading = document.createElement('p')
   content.append(kata8Heading)
   kata8Heading.append(coutner8)
     } 
   
  
   coutner8 -= 1
 }

  //Kata 9
  let counter9 = 100
    
  let kata9 = document.createElement('h1')
  kata9.append('Kata 9')
     content.append(kata9)
     
   while (counter9 > 4) {
       
      let kata9Heading = document.createElement('p')
     content.append(kata9Heading)
     kata9Heading.append(counter9)
     
    
     counter9 -= 5
   }

  //Kata 10

  let counter10 = 10
    
let kata10 = document.createElement('h1')
kata10.append('Kata 10')
   content.append(kata10)
   
 while (counter10 >= 1) {
     let newCounter = counter10*counter10
    let kata5Heading = document.createElement('p')
   content.append(kata5Heading)
   kata5Heading.append(newCounter)
     
  
   counter10 -= 1
 }

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
    
   for(let index19 = 0; index19 < 20; index19++) {
    
       
 let kata19Heading = document.createElement('div')
 
    
    content.append(kata19Heading)
    
  
   }

//Kata 20

let kata20 = document.createElement('h1')
    kata20.append('Kata 20')
    content.append(kata20)
    let startOut = 105
    let solve = startOut
    
   for(let index20 = 0; index20 < 20; index20++) {
    
       let newSolve = solve.toString() + 'px'
       

    let kata20Heading = document.createElement('div')
    kata20Heading.style.width = newSolve
    
    content.append(kata20Heading)
    
    solve += 5
   }

   //Kata 21

let kata21 = document.createElement('h1')
kata21.append('Kata 21')
content.append(kata21)


for(let index21 = 0; index21 < sampleArray.length; index21++) {
   let arrayNum = sampleArray[index21]
   let arraySolve = arrayNum.toString() + 'px'
   

let kata21Heading = document.createElement('div')
kata21Heading.style.width = arraySolve

content.append(kata21Heading)

}

   //Kata 22

   let kata22 = document.createElement('h1')
   kata22.append('Kata 22')
   content.append(kata22)
   
   
   for(let index22 = 0; index22 < sampleArray.length; index22++) {
      let arrayNum = sampleArray[index22]
      let arraySolve = arrayNum.toString() + 'px'
      
   
   let kata22Heading = document.createElement('div')
   
   kata22Heading.style.width = arraySolve
   if(index22 % 2 === 0) {
       kata22Heading.style.backgroundColor = 'red'
   }
 
   content.append(kata22Heading)
   
   }
//Kata 23

let kata23 = document.createElement('h1')
kata23.append('Kata 23')
content.append(kata23)


for(let index23 = 0; index23 < sampleArray.length; index23++) {
   let arrayNum = sampleArray[index23]
   let arraySolve = arrayNum.toString() + 'px'
   

let kata23Heading = document.createElement('div')

kata23Heading.style.width = arraySolve
if(sampleArray[index23] % 2 === 0) {
    kata23Heading.style.backgroundColor = 'red'
}

content.append(kata23Heading)

}