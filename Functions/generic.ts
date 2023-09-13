function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items)
}

let concatResults = getItems<number>([1,2,3,4,5]);

let concatString = getItems<string>(["a","b","c","d","e"]);