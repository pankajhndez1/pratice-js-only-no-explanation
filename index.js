console.log('hey there !!');
const myArray = ['pankaj', 'yogesh', 'jaynath'];

console.log(myArray, 'myArray');

const newArray = myArray;

console.log(newArray);

newArray[0] = 'jai';

console.log(newArray, 'newArray');
console.log(myArray, 'myArray');


delete newArray[0];

console.log(newArray, 'after deletion');

const newArray2 = ['aaj', 'ka', 'din', 'bindas'];

let myStr = '';
for (const ele of newArray2) {
    myStr += ele + ' ';
}

console.log(myStr);

const myNum = +'5';
console.log(myNum, typeof (myNum));

const myArr = ['kumar', 'pankaj'];
myArr.reverse();

console.log(myArr, 'myArr');
const newStr = myArr.join(' ');
console.log(newStr, 'newStr');


const arr = ["Rahul", "Sonam", "Dell", "Sumit", "Raj", "Rohan"];

arr.splice(2, 1, '22');

console.log(arr);

let str = "pankaj kumar";
let newStrs = str.replace("kumar", "singh");

console.log(str);
console.log(newStrs);


let myNew = str.slice(0, 2);
console.log(myNew);


// const mySetFunc = setTimeout(() => {
//     console.log(" hi i am set time out !!");
// }, 3000);


// const clearIt = () => {
//     console.log('clicked !!');
//     clearTimeout(mySetFunc)
// }

// document.getElementById('myBtn').addEventListener('click', clearIt);

// const mySetIntFunc =setInterval(() => {
//     console.log('hiiii clearTimeout');
// }, 2000);

// const clearItx = () => {
//     console.log('clicked  clearInterval!!');
//     clearInterval(mySetIntFunc)
// }
// document.getElementById('myBtn2').addEventListener('click', clearItx);

const myListener = (e) => {
    console.log(e.target.value, 'e.target.value');
    document.getElementById('formData').textContent = e.target.value
}

document.getElementById("myInp").addEventListener('change', myListener);


// 


const myRegex = /^[1-9][0-9]*$/;

const testRegex = (e) => {
    if (myRegex.test(e.target.value)) {
        console.log('valid data');
    } else {
        console.log('in valid data ');
    }
}

document.getElementById('myInpInt').addEventListener('change', testRegex);

console.log(window.localStorage, ' window.localStorage');
window.localStorage.setItem('name', 'pankaj');
window.localStorage.setItem('house', 'itbp');
console.log(window.localStorage);
console.log(window.localStorage.getItem('name'));

console.log(window.localStorage.key(0), ' window.localStorage.key');
console.log(window.localStorage.key(1), ' window.localStorage.key');

window.localStorage.removeItem('age')

console.log(window.localStorage);


window.localStorage.clear();

console.log(window.localStorage);


function checkIsNum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw 'one of them is not a number';
    } else {
        console.log('both are numbers !!');
    }
}

try {
    checkIsNum(15, 'pankaj')
} catch (error) {
    console.log(error, ' 666 error');
}
finally {
    console.log('i get executed no matter what !!');
}



function myDestruct(a, b) {
    const newObj = { ...a, ...b }
    return newObj;
}

const myData = myDestruct({ name: 'pankaj', lastname: 'kumar' }, { roll: '25', lastname: 'Raj' })
console.log(myData, 'myData');

const myObjData = {
    myName: 'pankaj',
    lastName: 'kumar',
    myPersonalData: {
        age: '15',
        phone: '8264672672',
        male: 'yes'
    }
}

const { myName: cname = 'no name', lastName, myPersonalData: { age, phone, male }, house = '182/6' } = myObjData;

console.log(cname, 'cname');
console.log(age, 'age');
console.log(house, 'house');


// console.log('start');

// setTimeout(() => {
//     console.log("inside setTimeOut");
// }, 2000);

// console.log('end');


console.log('start');

function getNameFunc(name) {
    setTimeout(() => {
        console.log('inside setTimeout func');
        return name;
    }, 2000);
}

const myName = getNameFunc('pankaj');
console.log(myName, 'myName');
console.log('end');

//  solving the undefined problem using callback !!


console.log('start2');

function getNameFunc(name, callback) {
    setTimeout(() => {
        console.log('inside setTimeout func 2');
        callback(name)
        // return name;
    }, 2000);
}

const myName2 = getNameFunc('Raj', (nm) => { return console.log(nm, 'is the name '); });
console.log('end2');


//  now the basis of name we will be getting the hobbies !!

console.log('start3');

function getNameFirst(name, callback) {
    setTimeout(() => {
        callback(name)
    }, 2000);
}

function getHobbiesBasedOnName(name, callback) {
    setTimeout(() => {
        callback(['badminton', 'cricket'])
    }, 1000);
}

getNameFirst('Raju bndr', (nm) => {
    console.log(nm, 'is the name');
    getHobbiesBasedOnName(nm, (x) => { console.log(x, 'are the hobbies'); })
})

console.log('end3');


//  2nd logic depends on first , so creates the callback hell !! to save ourself from this we use promises !!

console.log('start xx');

function myFunc1(name) {
    setTimeout(() => {
        return name;
    }, 2000);
}

const myNameIs = myFunc1('pankaj')
console.log(myNameIs, 'myNameIs');
console.log('end xx');


//  undefined problem arised !!

console.log('eeeeeeee');

function getNameNow(name, callback) {
    setTimeout(() => {
        callback(name)
    }, 2000);
}


function getHobbiesNow(name, callback) {
    setTimeout(() => {
        name ? callback(['racing', 'biking']) : null
    }, 2000);
}
getNameNow("pankaj kumar", (x) => {
    console.log(x);
    getHobbiesNow(x, (hobby) => { console.log(hobby, 'hobby'); })
})

console.log('ffffffff');


new Promise((resolve, reject) => {
    let myBool = false;
    if (myBool) {
        resolve('success !!')
    } else {
        reject('failure !!')
    }
}).then((value) => { console.log(value); }).catch((error) => { console.log(error); })


new Promise((resolve, reject) => {
    const myBool = true;
    if (myBool) {
        resolve(12);
    } else {
        reject('error occured !!')
    }
}).then((value) => {
    console.log(value);
    return value + 12
}).then((value) => {
    console.log(value, 'value');
}).then(() => {
    throw new Error('an error occured bro !!')
}
).catch(
    (error) => { console.log(error, 'error error'); }
).finally(
    () => { console.log('finally got runned !!'); }
)



function myFunc3(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['cricket', 'football', 'golf'])
        }, 2000);
    })
}

function myFunc4(hobby) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(hobby);
        }, 1000);
    })
}

myFunc3('pankaj')
    .then((value) => { return myFunc4(value); })
    .then((value) => { console.log(value, 'value  ffffffffffffffffffffffffffffffffff'); })



const myAsyncFunc = async () => {
    const hooby = await myFunc3('Raj kumar devta');
    const hoobies = await myFunc4(hooby);
    console.log(hoobies, 'hobbies');
}

myAsyncFunc();



// const myFuncToHandleAsync = () => {
//     console.log('hehheehhehe');
//     fetch('data.txt')
//         .then((res) => { console.log(res); 
//             if (!res.ok) {
//                 throw new Error('an error occured !!')
//             }
//             return res.text() })
//         .then((data) => { console.log(data, 'data'); })
//         .catch((error) => { console.log(error, 'error'); })
// }


const myFuncToHandleAsync = async () => {
    try {
        const res = await fetch('data.txt');
        console.log(res, 'ressssss');
        if (!res.ok) {
            throw new Error('an error network  .....  occurred !!')
        }
        const resText = await res.text();
        console.log(resText, 'resText');
    } catch (error) {
        console.log(error, 'error');
    }
}

document.getElementById("btnSub").addEventListener('click', myFuncToHandleAsync)



// btnSubJson

// const myFuncToHandleAsyncJson = () => {
//     fetch('data.json')
//         .then((res) => {
//             console.log(res, 'res');
//             if (!res.ok) {
//                 throw new Error("an error occred while fetching the json !!")
//             }
//             return res.json();
//         })
//         .then((data) => { console.log(data, 'data'); })
//         .catch((error) => { console.log(error, 'error'); })
// }

const myFuncToHandleAsyncJson = async () => {
    try {
        const res = await fetch('data.json');
        if (!res.ok) {
            throw new Error('an error occured !!')
        }
        const data = await res.json(res);
        console.log(data, 'data');
    } catch (error) {
        console.log(error, 'error');
    }
}


document.getElementById("btnSubJson").addEventListener('click', myFuncToHandleAsyncJson)

// fetching api from server !! single data 

const myFuncToHandleAsyncApiJson = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            console.log(res, 'res');
            if (!res.ok) {
                throw new Error('an error occured while fetching the Api')
            }
            return res.json()
        })
        .then((data) => { console.log(data, 'data'); }).catch((error) => { console.log(error, 'error!!'); })
}

document.getElementById("getApi").addEventListener('click', myFuncToHandleAsyncApiJson)


// fetching api from server !! multiple data 

const myFuncToHandleAsyncMultipleApiJson = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        const data = await res.json();
        console.log(data, 'data');
        {

            const output = document.getElementById('showMulti')
            Array.isArray(data) && data.length && data.map((ele) => {
                return (
                    output.innerHTML += `
                    <div>
                    <p>${ele.id}</p>
                    </div>
                    `
                )
            })
        }
    } catch (error) {
        console.log(error, 'error');
    }
}

document.getElementById("getMultiApi").addEventListener('click', myFuncToHandleAsyncMultipleApiJson)


//  send data to server using the post method and init !!

// postApi

const myFuncToHandleAsyncPostApiJson = () => {
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: '{"name": "morpheus","job": "leader"}'
    }
    fetch('https://reqres.in/api/users', init).then((res) => { console.log(res, 'res'); return res.json() }).then((data) => { })

}


document.getElementById("postApi").addEventListener('click', myFuncToHandleAsyncPostApiJson)


//  now doing the same thing using async and await !!

const handleAsyncPostData = async () => {
    console.log('clicked zzzzzzzzzzzzzz');
    const init =
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: '{"name": "Raja kumar singh ","job": "Raja "}'
    }

    try {
        const res = await fetch('https://reqres.in/api/users', init);
        console.log(res, 'adsbsghs');
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        const data = await res.json();
        console.log(data, 'data');
    } catch (error) {
        console.log(error, 'error');
    }
}


document.getElementById("postApiAsync").addEventListener("click", handleAsyncPostData);


//  getting the form data !!


// formValues

document.getElementById("formValues").addEventListener("click", (e) => {
    e.preventDefault();
    const myName = document.getElementById("myName").value;
    const myJob = document.getElementById("myJob").value;
    const stringfyObj = JSON.stringify({ name: myName, job: myJob })

    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringfyObj
    }

    fetch("https://reqres.in/api/users", init).then((res) => { console.log(res, 'adcgsauihfihfoejdo'); return res.json() }).then((res) => { console.log(res, 'res'); })
});

//  doing the same thing with async and await !!

// formValuesData


document.getElementById("formValuesData").addEventListener("click", async (e) => {
    e.preventDefault();
    const myName = document.getElementById("myNameD").value;
    const myJob = document.getElementById("myJobD").value;
    const stringfyObj = JSON.stringify({ name: myName, job: myJob });

    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringfyObj
    }
    try {
        const res = await fetch("https://reqres.in/api/users", init)
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        const data = await res.json();
        console.log(data, 'data');
    } catch (error) {
        console.log(error, "error");
    }
});







