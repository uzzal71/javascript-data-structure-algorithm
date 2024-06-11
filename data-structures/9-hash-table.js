/**
A hash table, also know as hash map, is a data structure that is used to store key-value pairs

Given a key, you can associate a value with that key for very fast lookup.

JavaScript's Object is a special implementation of the hash table data structure.
However, Object class adds its own keys. Keys that your input may conflict and overwrite the inherited default properties.

Maps which where introduced in JavaScript 2015 allow you to store key-value pairs

Writing your own hash table implementation is a very popular JavaScript interview question

Hashtable store key value pairs
*******************************
1. "in" => "India"
2. "au" => "Australia"
3. "fr" => "France"
4. "It" => "Italy"

We store the key value pairs in a fix sized array

Array have a numeric index

How do we go from using a string as an index to number as a index?

A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numberic index that is within the bounds of the array.

Using the index, store the value

The same hashing function is reused to retrive the value given a key
1. Set to store a key-value pair
2. Get to retrieve a value given a key
3. Delete to remove a key-value pair given a key
*/