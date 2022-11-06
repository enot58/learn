// Бинарный поиск

//let arr = [555, 6, 9, 4, 5, 2, 7, 8, 10, 11, 3, 19, 20, 51, 89, 93, 68, 1,77, 564];


const getItem = (n, arr) => {
    let lengthArr = arr.length
    let sortArr = arr.sort((a, b) => {
        return a - b
    })

    const findOther = (sA) => {
        const middleItem = Math.floor(sA.length / 2)
        if (sA[middleItem] != n && n < sA[middleItem]) {
            let newArr = sA.splice(0, middleItem)
            return getItem(n , newArr)
        } else if (sA[middleItem] != n && n > sA[middleItem]){
            let newArr = sA.splice(middleItem + 1, sA.at(-1))
            return getItem(n, newArr)
        } else if (sA[middleItem] == n) {
            return {
                bool: true,
                value: sA[middleItem]
            }
        } else {
            return false
        }
    }

    return findOther(sortArr)
}

/*
console.time('FirstWay');
console.log(arr.includes(89))
console.timeEnd('FirstWay');
console.log('________________________')
console.time('Bin search');
console.log(getItem(89, arr))
console.timeEnd('Bin search');

let lengthArr = 1000000000;
let count = 0
while (lengthArr != 1) {
    count++
    lengthArr = Math.floor(lengthArr / 2)
}
console.log(count)*/


// Сортировка


const listTracks = [
    {
        name: "radiohead",
        count: 156
    },
    {
        name: "kishor kumar",
        count: 141
    },
    {
        name: "the black keys",
        count: 35
    },
    {
        name: "neutral milk hotel",
        count: 94
    },
    {
        name: "beck",
        count: 88
    },
    {
        name: "the strokes",
        count: 61
    },
    {
        name: "wilko",
        count: 111
    }
]

// берём первое число и сравниваем со следующим
// и так до конца массива
// Для начала нужно достать числа из объектов

let nIndex = new Array(listTracks.length)
let valueObject = new Array()

for (let i = 0; i < listTracks.length; i++) {
    nIndex[i] = i;
    valueObject.push(Object.values(listTracks[i])[1]);
}

/*console.log(nIndex)
console.log(valueObject)*/

let x = 0;
let n;
for (let i = 0; i < valueObject.length; i++) {
    if (valueObject[i] < valueObject[x]) {
        n = valueObject[i]
    } else {

    }
}

let arr = [3, 2, 1, 4]

const minValue = (arr) => {
    let small = arr[0] // Для хранения наименьшего значения
    let small_index = 0 // Для хранения индекса наименьшего значения
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i]
            small_index = i
        }
    }
    return {
        index: small_index,
        value: small
    }
}

const selectionSort = (arr) => {
    console.log(`Старый - ${arr}`)
    console.log(arr.length)
    let oldArr = arr
    let newArr = new Array();
    console.log(`Новый - ${newArr}`)
    let i = 0
    while (i != arr.length) {
        let smallIndex = minValue(oldArr).index
        let smallValue = minValue(oldArr).value
        newArr.push(smallValue)
        oldArr.splice(smallIndex, 1)
        i++
    }

    /*for (let i = 0; i < arr.length; i++) {
        let smallIndex = minValue(oldArr).index
        let smallValue = minValue(oldArr).value
        newArr.push(smallValue)
        oldArr.splice(smallIndex, 1)
    }*/
    console.log(arr.length)
    return newArr
}

//console.log(minValue(arr))

console.log(selectionSort(arr))


/*
console.log(arr.splice(2, 1))
console.log(arr)
*/



/*
const testName = (arr) => {
    const sortArray = [];
    const arrTwo = arr;

    console.log(arrTwo)

    const minValue = (arr) => {
        let small = arr[0] // Для хранения наименьшего значения
        let small_index = 0 // Для хранения индекса наименьшего значения
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < small) {
                small = arr[i]
                small_index = i
            }
        }
        return small_index
    }

    const createArray = (arr, minIndex) => {
        let minI = minIndex;

    }
    /!*if (arr.length != 0) {
        sortArray.push(arrTwo[minValue()])
        arrTwo.splice(arrTwo[minValue()], 1)
        testName(arrTwo)
    }

    return sortArray*!/
}
*/



