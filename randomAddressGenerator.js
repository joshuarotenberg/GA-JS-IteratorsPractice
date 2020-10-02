

// street number, street name, city name, state name and zip code

const randomGenerator = () => {

    const direction = ['N', 'NE', 'NW', 'W', 'S', 'SE', 'SW', 'E'];
    const name = ['Maple', 'Elm', 'Oak', 'Palm', 'Hibiscus', 'Cactus', 'Pine'];
    const type = ['Blvd', 'Rd', "Ln", "St"];
    const city = ["Boulevard Gardens", "Broadview Park", "Chula Vista", "Coconut Creek", "Cooper City", "Coral Springs", "Dania Beach", "Davie", "Deerfield Beach", "Fern Crest Village", "Fort Lauderdale", "Franklin Park", "Hallandale Beach", "Hillsboro Beach", "Hillsboro Pines", "Hollywood", "Lake Forest", "Lauderdale Lakes", "Lauderdale-by-the-Sea", "Lauderhill", "Lazy Lake", "Lighthouse Point", "Margate", "Miramar", "North Lauderdale", "Oakland Park", "Parkland", "Pembroke Park", "Pembroke Pines", "Plantation", "Pompano Beach", "Roosevelt Gardens", "Sea Ranch Lakes", "Southwest Ranches", "Sunrise", "Tamarac", "Washington Park", "West Park", "Weston"];
    const state_abbrev = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    let streetNum = Math.floor(Math.random() * 10000);
    let streetZip = Math.floor(Math.random()*90000) + 10000;

    let streetDirection = direction[Math.floor(Math.random() * direction.length)];
    let streetName = name[Math.floor(Math.random() * name.length)];
    let streetType = type[Math.floor(Math.random() * type.length)];
    let streetCity = city[Math.floor(Math.random() * city.length)];
    let streetState = state_abbrev[Math.floor(Math.random() * state_abbrev.length)];

    //figure out how to make this dry => array[Math.floor(Math.random() * array.length)];

    return(`${streetNum} ${streetDirection} ${streetName} ${streetType}, ${streetCity} ${streetState}, ${streetZip}`);

}

console.log(randomGenerator());

