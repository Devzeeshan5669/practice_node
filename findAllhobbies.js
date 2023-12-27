function findAllHobbyists(hobby, hobbies) {
    let result = Object.keys(hobbies).filter(key => {
        // console.log(hobbies[key])
        return hobbies[key].includes(hobby)
        // return hobbies[key].filter((hb) => {
        //     if (hobby === hb) {
        //         return key
        //     }
        // })[0]
    })
    return result
}



const hobbies = {
    "Steve": ["Reading", "Writing", "Singing"],
    "John": ["Singing", "Yoga", "Dancing"],
    "Patt": ["Reading", "Cycling", "Yoga"],
}



console.log(findAllHobbyists("Yoga", hobbies));