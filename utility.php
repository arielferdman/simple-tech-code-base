<?php
// example code

$arr = array('645' => 'this is a test', '644' => 2, '6441' => 3, '6444' => 4, '6475' => 5);
$title = '';
$index = [];
$keys = [];
foreach ($arr as $key => $value) {
    for ($i = 2; $i < strlen($key); $i++) {
        $partial_index = substr($key, 0, $i);
        if (!array_key_exists($partial_index, $index)) {
            $index[$partial_index] = [];
        }
        array_push($index[$partial_index], $value);
    }
}

print var_dump($index);






// transformation:
    
//     [
//         '645' => 'this is a test',
//         '644' => 2,
//         '6441' => 3,
//         '6444' => 4,
//         '6475' => 5
//     ]
    
    
//     |
//     |
//     |
//     v
    
//     [
//         '645' => 'this is a test',
//         '644' => 2,
//         '6441' => 3,
//         '6444' => 4,
//         '6475' => 5
//     ]
    
    
//     [
//         '64' => ['this is a test', 2, 3, 4, 5],
//         '644' => [2, 3, 4],
//         '647' => [5]
//     ]
    
    
    
