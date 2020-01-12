
export default languages => {
    let reverseArray = [];
    let copyLanguagesArray = [...languages];
    let popularLanguages = [];
    let popularLanguagesLength = 2;

    copyLanguagesArray.sort((x, y) => {
        return x.count - y.count
    });

    reverseArray = copyLanguagesArray.reverse();
    reverseArray.length = popularLanguagesLength;
    popularLanguages = [...reverseArray];


    return popularLanguages

};
