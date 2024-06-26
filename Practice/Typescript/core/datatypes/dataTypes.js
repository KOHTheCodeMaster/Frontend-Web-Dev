/*

Date: 28th June 2K23 - 01:13 PM

Title: Data Types & Enum

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/
main();
function main() {
    availableDataTypes();
    unknownDataType();
    tupleDataType();
    compileTimeErrorOnChangingDataType();
}
function availableDataTypes() {
    console.log("Method: availableDataTypes Begins.");
    var num1 = 123;
    var str1 = 'ABC';
    var flag = true;
    var anyVar;
    var numArr = [1, 2, 3];
    var anyArr = [1, true, 'XYZ'];
    var employee = [12345, "John Doe"]; // Tuple - First element: number, Second element: string
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var myColor = Color.Green;
    function printMessage() {
        console.log("Hola..!! ^-^");
    }
    function neverReturns() {
        throw new Error("This function never returns.");
    }
    console.log("Method: availableDataTypes Ends.\n");
}
function unknownDataType() {
    /*
        In Typescript, any value can be assigned to unknown. Similar to 'any', we can assign any value to the unknown.
        The 'unknown' type in TypeScript represents a value that can be of any type. It is similar to 'any' type, but with stricter usage rules.
        While any allows you to perform any operation on it without type checking, unknown requires you to perform some type checking before operating on it.

        Unknown type is used to make our code type-safe. when we use the unknown type we have to write extra code but finally,
        our code will be type-safe. Type safety is nothing but the prevention of type errors.
     */
    console.log("Method: unknownDataType Begins.");
    var unknownX;
    console.log(unknownX);
    unknownX = true; //  Assigning boolean value
    console.log(unknownX);
    unknownX = 1; //  Assigning number value
    console.log(unknownX);
    unknownX = "ABC"; //  Assigning string value
    console.log(unknownX);
    unknownX = [1, 2, 3, 4]; //  Assigning Array value
    console.log(unknownX);
    unknownX = { name: "John Doe" }; //  Assigning object value
    console.log(unknownX);
    unknownX = Math.random(); //  Assigning random number value
    console.log(unknownX);
    unknownX = null; //  Assigning null value
    console.log(unknownX);
    unknownX = undefined; //  Assigning undefined value
    console.log(unknownX);
    var str = "ABC";
    console.log(str);
    // Uncommenting the following line will cause a type error
    //  When we attempt to perform any operation directly on unknown type variable, we will get compile time error.
    //     let strLen1: number = str.length;    //  TS2339: Property 'length' does not exist on type 'unknown'.
    //     console.log('strLen1: ' + strLen1);
    console.log("\nMethod: unknownDataType Ends.\n");
}
function tupleDataType() {
    /*
        In the below example, we have defined a variable num1 as number type and str1 as string type with values.
        The same thing can be achieved by using a single tuple type variable with two values of number and string type.
        Thus, removing the need to declare two different variables.

        Tuple can be considered as 'Any' Array
     */
    console.log("Method: tupleDataType Begins.");
    var num1 = 1;
    var str1 = "ABC";
    var tuple1 = [1, "ABC"]; // Tuple type variable
    //  A tuple type variable can include multiple data types as well.
    var employee = [1, "John"];
    var person = [1, "Doe", true];
    var user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
    //  We can declare an array of tuple also.
    var tupleArr = [[1, "A"], [2, "B"], [3, "C"]];
    //  Accessing Tuple Elements
    var tuple2 = [1, "XYZ"];
    tuple2[0]; // returns 1
    tuple2[1]; // returns "XYZ"
    //  Add Elements into Tuple
    var tuple3 = [1, "John"];
    tuple3.push(2, "Doe");
    console.log('Tuple3: ' + tuple3);
    tuple3.push(3, 4, 5, 6, 7); //  This is also valid, not sure why... Suspicious Doubt Unresolved!
    console.log('Tuple3: ' + tuple3);
    //  Uncommenting the following line will cause a type error
    //  When trying to add invalid data type to tuple, we get compile time error.
    //  tuple3.push(true);  //  TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
    console.log("\nMethod: tupleDataType Ends.\n");
}
function compileTimeErrorOnChangingDataType() {
    console.log("Method: compileTimeErrorOnChangingDataType Begins.\n");
    var count; //  Declaring variable num1 of data type number.
    count = 3; //  Initializing count with number value.
    //  Uncommenting the following line will cause a type error
    //  When we try to assign string value to count, we get compile time error. 'TS2322: Type 'string' is not assignable to type 'number'.
    //  count = 'ABC';
    /*
        We are using count variable and trying to perform numeric add operation.
        Since we assigned count with string value, it'll concatenate instead of adding 100 value.
        In JS, we will get to know about this logical error during runtime,
        But Data Types in TypeScript allows us to see these errors during compile time itself.
     */
    console.log('Count + 100: ' + (count + 100));
    console.log("Method: availableDataTypes Ends.\n");
}
