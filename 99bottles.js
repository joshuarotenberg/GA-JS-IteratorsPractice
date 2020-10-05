// link to lyrics didn't work so I used https://en.wikipedia.org/wiki/99_Bottles_of_Beer

const favBottlesOfBeer = (beer) => {

    const beers = ["Modelo", "Corona", "Stella", "Miller Lite", "Budweiser", "Saporro", "Heineken", "Sour Beer", "Local Craft Beer"];

    const beerSelection = () => {
        if(!beer) {
           return beers[Math.floor(Math.random() * beers.length)];
        } else {
            return beer;
        }
   
    }

    const selectedBeer = beerSelection();

    for (let i = 99; i >= 0; i--) {
        let oneLessBottle = i - 1;

        if (i == 0) {
            console.log(`No more bottles of ${selectedBeer} on the wall, no more bottles of ${selectedBeer}. \n We've taken them down and passed them around; now we're drunk and passed out!`);
        } else if (i < 2) {
            console.log(`${i} bottle of ${selectedBeer} on the wall, ${i} bottle of ${selectedBeer}. \n Take one down, pass it around, no more bottles of ${selectedBeer} on the wall...`);
        } else if (i < 3) {
            console.log(`${i} bottles of ${selectedBeer} on the wall, ${i} bottles of ${selectedBeer}. \n Take one down, pass it around, ${oneLessBottle} bottle of ${selectedBeer} on the wall...`);
        } else {
            console.log(`${i} bottles of ${selectedBeer} on the wall, ${i} bottles of ${selectedBeer}.`);
            if (i % 5 == 0) {
                console.log( ` If one of those bottles should happen to fall, ${oneLessBottle} bottles of ${selectedBeer} on the wall...`);
            } else {
                console.log( ` Take one down, pass it around, ${oneLessBottle} bottles of ${selectedBeer} on the wall...`);
            }
        }
    }

}

console.log(favBottlesOfBeer());