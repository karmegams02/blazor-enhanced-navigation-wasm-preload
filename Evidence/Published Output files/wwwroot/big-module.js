export function greet(name) {
    return `Hello, ${name}!`;
}
export function add(a, b) {
    return a + b;
}
export async function loadData() {
    const response = await fetch('/api/data');
    return await response.json();
}
export default class Calculator {
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }
}