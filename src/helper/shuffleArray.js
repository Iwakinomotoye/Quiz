export default function shuffleArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * (arr.length));
        let elementInRandomIndex = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = elementInRandomIndex;
    }
    return arr;
}