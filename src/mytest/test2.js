
const a = [
    {
        title: "normal",
        count: 10,
    },

]
let isMapDone = false
function updateArray(arr, title) {
    return arr.map(obj => {

        if (obj.title === title) {
            return {
                ...obj,
                count: obj.count + 1
            };
        }
        if (obj === arr[arr.length - 1]) {
            arr.push({count: 10, title: "nor"});
            console.log(arr)
        }
        return obj;
    });
}
console.log(a)
const updatedArray = updateArray(a, "a");
console.log(updatedArray);



