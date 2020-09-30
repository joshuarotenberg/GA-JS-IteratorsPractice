// link to lyrics didn't work so I used https://en.wikipedia.org/wiki/99_Bottles_of_Beer


for (let i = 99; i >= 0; i--) {
    let bottleCount = i - 1;

    if (i == 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("We've taken them down and passed them around; now we're drunk and passed out!");
    } else if (i < 2) {
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.");
        console.log(" Take one down, pass it around, no more bottles of beer on the wall...");
    } else if (i < 3) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        console.log(" Take one down, pass it around, " + bottleCount + " bottle of beer on the wall...");
    } else {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        if (i % 5 == 0) {
            console.log( " If one of those bottles should happen to fall, " + bottleCount + " bottles of beer on the wall...");
        } else {
            console.log( " Take one down, pass it around, " + bottleCount + " bottles of beer on the wall...");
        }
    }
}