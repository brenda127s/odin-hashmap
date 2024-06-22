export default function createHashMap(size = 8, loadFactor = 0.75) {
    const storage = size;
    let map = new Array(storage).fill(null).map(() => []);
    


    // hash(key) takes a key and produces a hash code with it
    function hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % storage;
    }


    //set(key,value) takes two arguments, the first is a key and the second is a value that is assigned to this key
    function set(key, value) {
        const index = hash(key);

        if (map[index] === undefined) {
        map[index] = [
            [key, value]
        ];
        } else {
            let inserted = false;
            for (let i = 0; i < map[index].length; i++) {
                if (map[index][i][0] === key) {
                    map[index][i][1] = value;
                    inserted = true;
                }
        }
        if (!inserted) {
            map[index].push([key, value]);
        }
        }
    }

    //get(key) takes one arguments as a key and returns the value that is assigned to this key
    function get(key) {
        const index = hash(key);

        if (map[index] === undefined) {
            return null;
        } else {
            for (let i = 0; i < map[index].length; i++) {
                if (map[index][i][0] === key) {
                    return map[index][i][1];
                } 
                return null;
            }
        }
    }

    //has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    function has(key) {
        const index = hash(key);

        if (map[index] === undefined) {
            return false;
        } else {
            for (let i = 0; i < map[index].length; i++) {
                if (map[index][i][0] === key) {
                    return true;
                }
                return false;
            }
            return false;
        }
    }


    //remove(key) takes a key as an arguments if the given key is in the hash map, it should remove the entry with that key and return true
    function remove(key) {
        const index = hash(key);

        if (map[index] === undefined) {
            return false;
        } else {
            for (let i = 0; i < map[index].length; i++) {
                if (map[index][i][0] === key) {
                    map[index].splice(i, 1);
                    return true;
                }
            }
            return false;
        }
    }

    //length() returns the number of stored keys in the hash map
    function length() {
        let count = 0;
        for (let i = 0; i < map.length; i++) {
            if (map[i]!== undefined) {
                count += map[i].length;
            }
        }
        return count;
    }


    //clear() removes all entries in the hash map
    function clear() {
        for (let i = 0; i < map.length; i++) {
            map[i] = null;
        }
    }


    //keys() returns an array containing all the keys inside the hash map
    function keys() {
        let keys = [];
        for (let i = 0; i < map.length; i++) {
            if (map[i] !== undefined) {
                for (let j = 0; j < map[i].length; j++) {
                    keys.push(map[i][j][0]);
                }
            }
        }
        return keys;
    }

    //values() returns an array containing all the values
    function values() {
        let values = [];
        for (let i = 0; i < map.length; i++) {
            if (map[i] !== undefined) {
                for (let j = 0; j < map[i].length; j++) {
                    values.push(map[i][j][1]);
                }
            }
        }
        return values;
    }


    //entries() returns an array that contains each key, value pair.
    function entries() {
        let entries = [];
        for (let i = 0; i < map.length; i++) {
            if (map[i] !== undefined) {
                for (let j = 0; j < map[i].length; j++) {
                    entries.push([map[i][j][0], map[i][j][1]]);
                }
            }
        }
        return entries;
    }


    return {
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
    }


}


let hm = new createHashMap();
hm.set('bea', 'person');
hm.set('ricky', 'cat');


console.log(hm.get('ricky'))
console.log(hm.get('bea'));
console.log(hm.has('hao'));
console.log(hm.has('ricky'));
console.log(hm.length(hm));
console.log(hm.keys(hm));
console.log(hm.values(hm));
console.log(hm.entries(hm));


