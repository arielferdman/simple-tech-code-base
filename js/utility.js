
function process_data(inp) {
    let result = {}

    inp.forEach(element => Object.assign(result, element));

    return result
}

// input
// [
//    {'645': 'a'},
//    {'644': 'b'},
//    {'6441': 'c'},
//    {'6444': 'd'},
//    {'6575': 'e'},
//    {'6534': 'f'},
//    {'6578': 'g'}
// ];


// output
// {
//     '645': 'a',
//     '644': 'b',
//     '6441': 'c',
//     '6444': 'd',
//     '6575': 'e',
//     '6534': 'f',
//     '6578': 'g'
// }










#################################################################################

function st_get_index(inp) {
    let partial_key = ''
    let index = {}
    Object.entries(inp).forEach(entry => {
        const [key, value] = entry;
        for (let i = 2; i <= key.length; i++) {
            partial_key = key.substring(0, i);
            if (!(partial_key in index)) {
                index[partial_key] = []
            }
            index[partial_key].push(value)
        }
    });

    return index
}


// input
// {
//     '645': 'a',
//     '644': 'b',
//     '6441': 'c',
//     '6444': 'd',
//     '6575': 'e',
//     '6534': 'f',
//     '6578': 'g'
// }

// output
// {
//     '64': [ 'b', 'a', 'c', 'd' ], 
//     '65': [ 'f', 'e', 'g' ], 
//     '644': [ 'b', 'c', 'd' ], 
//     '645': [ 'a' ], 
//     '653': [ 'f' ], 
//     '657': [ 'e', 'g' ], 
//     '6441': [ 'c' ], 
//     '6444': [ 'd' ], 
//     '6534': [ 'f' ], 
//     '6575': [ 'e' ], 
//     '6578': [ 'g' ]
// } 

