// Function to iterate over the collection and apply a callback to each element
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            callback(collection[key]);
        }
    }
    return collection;
}

// Function to create a new array by applying a callback to each element of the collection
function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(item) {
        result.push(callback(item));
    });
    return result;
}

// Function to reduce the collection to a single value by applying a callback and an accumulator
function myReduce(collection, callback, acc) {
    let values;
    if (Array.isArray(collection)) {
        values = collection;
    } else {
        values = Object.values(collection);
    }

    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

// Function to find the first element in the collection that satisfies a predicate
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i]) === false) {
                break; // Exit the loop early
            }
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (callback(collection[key]) === false) {
                break; // Exit the loop early
            }
        }
    }
    return collection;
}



// Function to filter elements in the collection based on a predicate
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(item) {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

// Function to return the size of the collection
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

// Function to return the first element of the collection
function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

// Function to return the last element of the collection
function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

// Function to retrieve all the names of the object's own enumerable properties
function myKeys(object) {
    return Object.keys(object);
}

// Function to retrieve all the values of the object's own properties
function myValues(object) {
    return Object.values(object);
}

module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
};
function myFind(collection, predicate) {
    let result;
    myEach(collection, function(item) {
        if (predicate(item) && result === undefined) {
            result = item;
            return false; // Exit the loop early
        }
    });
    return result;
}
function myFind(collection, predicate) {
    let result;
    myEach(collection, function(item) {
        if (predicate(item) && result === undefined) {
            result = item;
            return false; // Exit the loop early
        }
    });
    return result;
}


