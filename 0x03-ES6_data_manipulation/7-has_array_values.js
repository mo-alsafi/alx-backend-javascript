export default function hasValuesFromArray(seet, arr){
    return arr.every((value) => seet.has(value));
}
