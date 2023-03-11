export function display(value) {
    return function(x) {
        return `${x + " " + value}`
    }
}