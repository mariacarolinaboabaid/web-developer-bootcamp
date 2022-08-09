let word = "Hello";
for (let i = 0; i < word.length; i++){
    console.log(`Outer Loop: ${i}`);
    for (let x = 0; x < word.length; x++){
        console.log(`  Inner Loop: ${x} /`, word[x].toUpperCase());
    }
}
console.log(".........................................")
const seatingChart = [
    ["Maria", "Ana"],
    ["Adam", "Joe"]
]
for (let i = 0; i < seatingChart.length; i++){
    console.log(`Row ${i + 1}:`);
    for (let x = 0; x < seatingChart[i].length; x++){
        console.log(`Column ${x + 1}:`, seatingChart[i][x]);
    }
}