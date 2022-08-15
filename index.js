function myEach (collection, callback) {
    const newCollection = Object.values(collection) 
    newCollection.forEach(item => callback(item))
    return collection
}

function myMap (collection, callback) {
    const newCollection = Object.values(collection)
    const newArray = []
    for(const item of newCollection) {
        newArray.push(callback(item))
    }
    return newArray
}

function myReduce (collection, callback, acc) {
    const newCollection = Object.values(collection)
    let newAcc
    let i
    if(acc >= 0) {
        newAcc = acc
        i = 0
    } else {
        newAcc = newCollection[0]
        i = 1
    }
    for(i; i < newCollection.length; i++) {
        newAcc = callback(newAcc, newCollection[i], collection)
    }
    return newAcc
}

function myFind (collection, predicate) {
    const newCollection = Object.values(collection)
    // return newCollection.find(item => predicate(item)===true)
    let i
    for(i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i]) === true) {
            return newCollection[i]
        }
    }
}

function myFilter (collection, predicate) {
    const newCollection = Object.values(collection)
    let array = []
    for(const item of newCollection) {
        if(predicate(item) === true) {
            array.push(item)
        } 
    }
    return array
}

function mySize (collection) {
    const newCollection = Object.values(collection)
    // return newCollection.length
    let i = 0
    for(const item of newCollection) {
        i++
    }
    return i
}

function myFirst (array, n) {
    const newArray = [...array]
    if(n) {
        return newArray.slice(0, n)
    } else {
        return newArray[0]
    }
}

function myLast (array, n) {
    const newArray = [...array]
    if(n) {
        return newArray.slice(-n)
    } else {
        return newArray[newArray.length-1]
    }
}

function myKeys (object) {
    const array = Object.keys(object)
    return array
}

function myValues (object) {
    const array = Object.values(object)
    return array
}