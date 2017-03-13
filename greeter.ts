class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return this.greeting;
    }
};

var greeter = new Greeter("What's up");
    
alert(greeter.greet());