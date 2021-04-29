var languagesArray = ['html', 'css', 'javascrip', 'react', 'node'];
console.log(languagesArray);
console.log(languagesArray.length);

languagesArray.push('C#', 'php');
console.log(languagesArray);

languagesArray.pop('php');
console.log(languagesArray);

languagesArray.unshift('C++');
console.log(languagesArray);

languagesArray.splice(0, 1);
console.log(languagesArray);

var thirdElement = languagesArray[2];
console.log(thirdElement);

var arrayLength = languagesArray.length;
console.log(arrayLength);

var lastItem = languagesArray[5];
console.log(lastItem);
