// link to lyrics didn't work so I used https://en.wikipedia.org/wiki/99_Bottles_of_Beer

const FavBottlesOfBeer = (beer) => {

    for (let i = 99; i >= 0; i--) {
        let oneLessBottle = i - 1;

        if (i == 0) {
            return(`No more bottles of ${beer} on the wall, no more bottles of ${beer}.
                We've taken them down and passed them around; now we're drunk and passed out!`);
        } else if (i < 2) {
            return(`${i} bottle of ${beer} on the wall, ${i} bottle of ${beer}.
             Take one down, pass it around, no more bottles of ${beer} on the wall...`);
        } else if (i < 3) {
           return(`${i} bottles of ${beer} on the wall, ${i} bottles of ${beer}.
                Take one down, pass it around, ${oneLessBottle} bottle of ${beer} on the wall...`);
        } else {
            console.log(`${i} bottles of ${beer} on the wall, ${i} bottles of ${beer}.`);
            if (i % 5 == 0) {
                console.log( ` If one of those bottles should happen to fall, ${oneLessBottle} more bottles of ${beer} on the wall...`);
            } else {
                console.log( ` Take one down, pass it around, ${oneLessBottle} more bottles of ${beer} on the wall...`);
            }
        }
    }
}

console.log(FavBottlesOfBeer("Corona"));