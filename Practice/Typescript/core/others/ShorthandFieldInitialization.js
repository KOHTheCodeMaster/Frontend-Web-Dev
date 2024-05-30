/*

Date: 30th May 2K24 - 07:10 PM

Title: Access Modifiers

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev

*/
main();
function main() {
    demoShortHandFieldInitialization();
}
function demoShortHandFieldInitialization() {
    var Person = /** @class */ (function () {
        function Person(name, age) {
        }
        return Person;
    }());
    var john = new Person("John Doe", 26);
    console.log(john.name); // Compile-time error: Property 'name' does not exist on type 'Person'
}
