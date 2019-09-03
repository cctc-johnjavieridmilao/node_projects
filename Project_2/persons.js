class Person {
    constructor(name, age, favorite_color) {
        this.name = name;
        this.age = age;
        this.favorite_color = favorite_color;
    }

    greatings() {
        console.log(`Hello my name ${this.name} and my age is ${this.age} and my favorite color is ${this.favorite_color}`)
    }
}

module.exports = Person;