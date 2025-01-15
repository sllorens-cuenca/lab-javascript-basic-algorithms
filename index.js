// Iteration 1: Names and Input
const hacker1 = "Sergio";
const hacker2 = "Anjana";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
}


// Iteration 3: Loops
let strDriver = '';
for (let i = 0; i < hacker1.length; i++) {
    const element = hacker1[i].toUpperCase() + ' ';
    strDriver += element;
}

console.log(strDriver)


const hacker2LowCase = hacker2.toLowerCase();

console.log(hacker2LowCase.slice(0, hacker2LowCase.length - 1) + hacker2LowCase[hacker2LowCase.length - 1].toUpperCase());


if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.")
}else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}


const longText = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien nisl, ullamcorper ultrices maximus id, lobortis quis nibh. Suspendisse suscipit purus at pharetra ullamcorper. Suspendisse potenti. Quisque feugiat molestie enim sed malesuada. Cras porta, odio vel suscipit luctus, dolor lectus semper mi, nec malesuada libero lacus sollicitudin ipsum. Nulla tempor quam magna, in elementum elit congue sit amet. Donec faucibus et nibh vel finibus. Donec ultricies elit non pretium sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vestibulum sem nec massa cursus, vel dignissim urna bibendum.

Maecenas felis orci, luctus quis odio quis, fringilla ornare est. Suspendisse potenti. Ut accumsan consequat erat, eget fringilla metus interdum id. Suspendisse in condimentum est. Donec eleifend condimentum imperdiet. Maecenas hendrerit orci sed feugiat faucibus. Etiam gravida pulvinar velit, et dapibus nisi efficitur eget. Sed quam orci, fermentum et gravida et, dictum at justo. Sed a quam libero. Curabitur non ipsum mi. Sed mollis metus a faucibus vestibulum. Integer at aliquet magna. Aliquam lorem mi, ullamcorper id risus efficitur, rutrum consequat augue.

Quisque maximus at ante et sagittis. Etiam ornare mauris vel convallis condimentum. Sed vestibulum id lorem sed rutrum. Nunc aliquam bibendum nunc, dapibus laoreet nulla. Donec vehicula purus non vehicula luctus. Etiam aliquet augue felis, vel tristique velit fermentum nec. Duis non velit pharetra, dignissim ligula ac, bibendum diam. Curabitur odio quam, vulputate sed ex nec, vestibulum vehicula metus. Curabitur in auctor ipsum. Donec semper dui ac orci tempor, ac pellentesque diam euismod. In arcu augue, sagittis ac lobortis sed, ullamcorper at magna. Nam pretium risus finibus auctor gravida. Etiam at leo ac quam congue tristique sit amet ac sem. Phasellus nec dolor augue. Sed non congue nisl, placerat luctus lacus. Aenean sed tempor augue.`;

let words = 1;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === ' ') {
        words ++;
    }
}

console.log('The numbers of words in the string is: ' + words);

let wordEt = 0;

for (let i = 0; i < longText.length; i++) {
    const twoChars = longText[i] + longText[i + 1];
    if (twoChars === "et") {
        wordEt ++;
    }
}
console.log('The number of times the Latin word et appears is: ' + wordEt)




