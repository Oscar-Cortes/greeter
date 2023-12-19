class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

// A welcome message

var greeter = new Greeter("Hello, developers!");
    
document.body.innerHTML = greeter.greet();
