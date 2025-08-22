// let a = 113132432123;
// let b = 352112;
// console.log(a + b);
// console.log(a * b);
// console.log(a % 10);

// let bStr = b.toString();
// let bStrRev = bStr.split('')
// console.log(Number(bStrRev[1]))

// console.log(Math.trunc(a / 86400) + ' days',
//             Math.trunc((a % 86400) / 3600) + ' hours',
//             Math.trunc((a % 3600) / 60) + ' minutes',
//             (a % 3600) % 60 + ' seconds' )
// console.log(Math.max(a, b))

// function findTime(a){
//     let centuries;
//     let isCenturies = false;
//     let years;
//     let isYears = false;
//     let months;
//     let isMonths = false;
//     let days;
//     let hours;
//     let minutes;

//     if (Math.trunc(a / (86400 * 365)) > 99){
//         centuries = Math.trunc(a / (86400 * 365) / 100);
//         isCenturies = true;
//         a = (a % (86400 * 365 * 100))
//     };

//     if (Math.trunc(a / 86400) > 365) {
//         years = Math.trunc(a / (86400 * 365));
//         isYears = true;
//         a = (a % (86400 * 365))
//     };

//     if (Math.trunc(a / 86400) > 12) {
//         months = Math.trunc(a / (86400 * 31));
//         isMonths = true;
//         a = (a % (86400 * 31))
//     };

//     days = Math.trunc(a / 86400);
//     a = (a % 86400);
//     hours = Math.trunc(a / 3600);
//     a = (a % 3600);
//     minutes = Math.trunc(a / 60);
//     a = (a % 60);
//     console.log(
//         isCenturies ? centuries + ' centuries': null ,
//         isYears ? years + ' years': null,
//         isMonths ? months + ' months': null,
//         days + ' days',
//         hours + ' hours',
//         minutes + ' minutes',
//         a + ' seconds'
//     )
// }

// findTime(a)


// let x = 1234
// if (x % 5 == 0){
//     console.log('x is divisible by 5')
// } else {
//     console.log('x is not divisible by 5')
// }


// let letter = 'z'
// let consonants = 'qwrtpsdfghjklzxcvbnm'
// let vowels = 'eyuioa'
// if (vowels.includes(letter)){
//     console.log('letter is a vowel')
// } else{
//     console.log('letter is a consonant')
// }


// let num = 1243
// if (num < 100 && 1 < num){
//     console.log('include')
// } else{
//     console.log('exclude')
// }


// let num1 = 1213234576
// let num2 = 124124324
// let num3 = 9876243562
// let arr = [num1, num2, num3]
// if (num1 > num2 && num1 > num3){
//     console.log(num1)
// } else if (num2 > num3){
//     console.log(num2)
// } else{
//     console.log(num3)
// }


// let input = 123453
// let isprime = input==1 ? false: true;
// for(let i=2; i<input; i++){
//     if (input % i == 0){
//         isprime = false;
//         break
//     }
// }
// console.log(isprime == false ? 'Not Prime!': 'Prime!')

// const grade = 85
// if (grade > 89){
//     console.log('A')
// } else if (grade > 69){ 
//     console.log('B')
// } else if (grade > 59){
//     console.log('C')
// } else if(grade > 49){
//     console.log('D')
// } else{
//     console.log('F')
// }

// let myMonth = 5
// let winter = [1, 2, 12]
// let spring = [3, 4, 5]
// let summer = [6, 7, 8]
// let fall = [9, 10, 11]
// if (winter.includes(myMonth)){
//     console.log('winter')
// } else if (spring.includes(myMonth)){
//     console.log('spring')
// } else if (summer.includes(myMonth)){
//     console.log('summer')
// } else{
//     console.log('fall')
// }

// const now = new Date();
// let hourNow = now.getHours();
// if (4 < hourNow < 12){
//     console.log('Good Morning!')
// } else if (hourNow < 19){
//     console.log('Good Afternoon!')
// } else if (hourNow < 4 || hourNow > 19){
//     console.log('Good Evening!')
// }

// let weather = [20, 'rainy'];
// if (weather[0] > 25){
//     console.log(weather[1] == 'sunny' ? "it's hot outside!": "it's hot outside, don't forget ur umbrella.")
// } else{
//     console.log(weather[1] == 'sunny' ? "it's cold outside!": "it's cold outside, don't forget ur umbrella.")
// }

// const originalText = document.getElementById('txt-top').innerHTML

// const texts = [
//     originalText,
//     'text1',
//     'text2',
//     'text3',
//     'text4'
// ]

// let currentTextIndex = 0

// document.getElementById('txt-change').addEventListener('click', () => {
//     document.getElementById('txt-top').innerHTML = texts[currentTextIndex]
//     currentTextIndex = (currentTextIndex + 1) % texts.length;
// });

// const images = [
//     'assets/puppy.png',
//     'assets/hamster.png'
// ]

// const petDesc = [
//     'This is a puppy',
//     'This is a hamster'
// ]

// let currentDescIndex = 0

// let currentImageIndex = 0

// document.getElementById('img-change').addEventListener('click', () =>{
//     document.getElementById('pet-image').src = images[currentImageIndex]
//     document.getElementById('pet-txt').innerHTML = petDesc[currentDescIndex]
//     currentImageIndex = (currentImageIndex + 1) % images.length
//     currentDescIndex = (currentDescIndex + 1) % petDesc.length
// })

const txtTop = document.getElementById('txt-top');
const originalText = txtTop.innerHTML

const texts = [
    originalText,
    'text1',
    'text2',
    'text3',
    'text4'
]
let currentTextIndex = 0

const txtChange = document.getElementById('txt-change');
txtChange.addEventListener('click', () =>{
    txtTop.innerHTML = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length
})

const petImage = document.getElementById('pet-image')
const petText = document.getElementById('pet-text')
const imgChange = document.getElementById('img-change')

const images = [
    'assets/puppy.png',
    'assets/hamster.png'
]

let currentImageIndex = 0

const petDesc = [
    'This is a puppy',
    'This is a hamster'
]

let currentDescIndex = 0

imgChange.addEventListener('click', () =>{
    petImage.src = images[currentImageIndex];
    petText.innerHTML = petDesc[currentDescIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    currentDescIndex = (currentDescIndex + 1) % petDesc.length
})