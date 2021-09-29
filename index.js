// Code your solution here



const findMatching = (someArray, driverName) => {
    let newArray = someArray.filter( aName => aName.toLowerCase() == driverName.toLowerCase() )
    return newArray
}




const fuzzyMatch = (someArray, driverName) => {
    let newArray = someArray.filter( aName => aName.toLowerCase().slice(0,2) == driverName.toLowerCase().slice(0,2) )
    return newArray
}



const matchName = (someArray, someString) => {
    let newArray = someArray.filter( anObject => anObject.name == someString)
    return newArray
}



























// function findMatching (array, name) {
//     let matchingName = array.filter( (driver) => {
//             return driver.toLowerCase() === name.toLowerCase()
//     })
//     return matchingName 
// }



// function fuzzyMatch (array, partialName) {
//     let matchingName = array.filter( (driver) => {
//         return driver.substring(0, partialName.length) == partialName
//     })
//     return matchingName 
// }


// function matchName (array, string) {
//     let matchingName = array.filter( (driverName) => {
//         return driverName.name === string
//     })
//     return matchingName
// }




















/* function findMatching (array, name) {
    let matchingDrivers = array.filter( function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
    return matchingDrivers
}


function fuzzyMatch(array, string) {
    let match = array.filter( function(driverName) {
        return driverName.substring(0, string.length ) == string
    })
    return match 
}


function matchName(array, string) {
    let nameMatch = array.filter( function (driverName) { 
        return driverName.name === string
    })
    return nameMatch
}

// function findMatching (array, name) {
//     let matchingDrivers = array.filter( function (driver) {
//         return driver.toLowerCase() === name.toLowerCase()
//     })
//     return matchingDrivers
// }

*/