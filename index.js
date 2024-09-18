function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i], i, collection));
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                newArray.push(callback(collection[key], key, collection));
            }
        }
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let beginningIndex;

    if (acc === undefined) {
        acc = Array.isArray(collection) ? collection[0] : Object.values(collection)[0];
        beginningIndex = 1
    } else {
        beginningIndex = 0;
    }

    if (Array.isArray(collection)) {
        for (let i = beginningIndex; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else if (typeof collection === 'object') {
        const values = Object.values(collection);
        for (let i = beginningIndex; i < values.length; i++) {
            acc = callback(acc, values[i], collection);
        }
    }
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
              if (predicate(collection[key], key, collection)) {
                return collection[key];
              }
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let number = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                number.push(collection[i]);
            }
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
              if (predicate(collection[key])) {
                number.push(collection[key]);
              }
            }
        }
    }
    return number;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
            return collection.length
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
              return Object.entries(collection).length;
            }
        }
    }
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(array.length - n); 
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}