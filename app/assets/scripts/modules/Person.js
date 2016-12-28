class Person
{
    constructor(name, favCol)
    {
        this.name = name;
        this.favCol = favCol;
    }

    greet()
    {
        console.log( "Hi, I'm " + this.name + '. My favorite color is ' + this.favCol );
    }
}

// module.exports = Person;
export default Person; // ES6 way to export