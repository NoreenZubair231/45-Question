// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("  - No items selected.");
    } else {
        items.forEach((item, index) => {
            console.log(`  - Item ${index + 1}: ${item}`);
        });
    }
    console.log("Enjoy your sandwich!\n");
}

makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Chicken", "Mayonnaise");
makeSandwich();
