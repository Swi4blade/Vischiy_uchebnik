//Выполнил Жогин Дмитрий 3ИСИП-821

//Высший учебник практики
//Задание 2
// //№1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// function func1() {
// 	   elem.style.width = '400px';
//     elem.style.height = '300px';
//     elem.style.background = 'red';
// };
// //№2
// let elem1 = document.querySelector('#elem1');
// let button1 = document.querySelector('#button1');
// let width1 = elem1.style.width;
// let height1 = elem1.style.height;
// button1.addEventListener('click', func2);
// function func2() {
//     console.log(parseInt(width1));
//     console.log(parseInt(height1));
// };
// //№3
// let elem2 = document.querySelector('#elem2');
// let button2 = document.querySelector('#button2');
// let font = elem2.style.fontSize ;
// button2.addEventListener('click', func3);
// function func3() {
//     console.log(parseFloat(font));
// };

//Задание 3
// //№1-№3
// let elem = document.querySelector('div');
// let fontPx = elem.style.fontSize;
// let fontNm = parseInt(fontPx);
// elem.style.fontSize = (fontNm + 2) + 'px';
// //№4
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// function func1() {
//     let widthPx = elem.style.width;
//     let widthNm = parseInt(widthPx);
//     elem.style.width = (widthNm + 50) + 'px';

//     let heightPx = elem.style.height;
//     let heightNm = parseInt(heightPx);
//     elem.style.height = (heightNm + 50) + 'px';
// };
// //№5
// let elem1 = document.querySelector('#elem1');
// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func2);
// function func2() {
//     let widthPx = elem1.style.width;
//     let widthNm = parseInt(widthPx);
//     elem1.style.width = (widthNm + (widthNm * 0.1)) + 'px';

//     let heightPx = elem1.style.height;
//     let heightNm = parseInt(heightPx);
//     elem1.style.height = (widthNm + (widthNm * 0.1)) + 'px';
// };

//Задание 4
// //№1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// function func1() {
//     console.log(elem.style.borderWidth);
//     console.log(elem.style.borderStyle);
//     console.log(elem.style.borderColor);
// };

//Задание 5
// //№1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// button.addEventListener('click', func1);
// function func1() {
//     elem.style.display = 'none';
// };
// button1.addEventListener('click', func2);
// function func2() {
//     elem.style.display = '';
// };
// //№2
// let elem1 = document.querySelector('#elem1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button2.addEventListener('click', func3);
// function func3() {
//     elem1.style.color = 'red';
// };
// button3.addEventListener('click', func4);
// function func4() {
//     elem1.style.color = '';
// };

//Задание 6
// //№1
// let elem = document.querySelector('#elem');
// elem.style.cssText = `
// 	width: 100px;
// 	height: 100px;
// 	display: block;
//     margin: 10px auto;
//     color: red;
// `;

//Задание 8
// //№1
// let elem1_n8 = document.querySelector('#elem1_n8');
// let button = document.querySelector('#button');
// let computedStyle = getComputedStyle(elem1_n8);
// button.addEventListener('click', func1);
// function func1() {
//     console.log(computedStyle.width);
//     console.log(computedStyle.height);
// };
// //№2
// let elem2_n8 = document.querySelector('#elem2_n8');
// let button1 = document.querySelector('#button1');
// let computedStyle = getComputedStyle(elem2_n8);
// button1.addEventListener('click', func2);
// function func2() {
//     widthNum = parseInt(computedStyle.width);
//     elem2_n8.style.width = widthNum * 2 + 'px';
//     console.log(elem2_n8.style.width);

//     heightNum = parseInt(computedStyle.height);
//     elem2_n8.style.height = heightNum * 2 + 'px';
//     console.log(elem2_n8.style.height)
// };

//Задание 9
// //№1
// let elem_n9 = document.querySelector('#elem_n9');
// let button = document.querySelector('#button');
// let computedStyle = getComputedStyle(elem_n9);
// button.addEventListener('click', func1);
// function func1() {
//     console.log(computedStyle.fontSize);
// };

//Задание 10
// //№1
// let elems = document.querySelectorAll('p');
//     for (let i = 0; i < elems.length; i++) {
//         let number = parseInt(elems[i].textContent);
//     if (number % 2 === 0) {
//         elems[i].classList.add('success');
//     } else {
//         elems[i].classList.add('error');
//     }
// }

//Задание 11
// //№1
// let elems = document.querySelectorAll('.elem');
// elems.forEach(function(elem) {
// elem.addEventListener('click', function() {
//     elem.classList.toggle('active');
// });
// });

//Задание 12
// //№1
// let input = document.getElementById('input_border');
//     input.addEventListener('blur', function() {
//       if (input.value.length <= 9) {
//         input.classList.remove('invalid');
//         input.classList.add('valid');
//       } else {
//         input.classList.remove('valid');
//         input.classList.add('invalid');
//       }
// });

//Задание 13
// //№1
// let number_input = document.getElementById('number_input');
// number_input.addEventListener('blur', function() {
//   let value = parseInt(number_input.value);
//   if (value < 10) {
//     number_input.dataset.type = 'success';
//   } else if (value >= 10 && value <= 20) {
//     number_input.dataset.type = 'warning';
//   } else {
//     number_input.dataset.type = 'error';
//   }  
// });

//Задание 15-19
// //№1
// let elem = document.querySelector('#elem_n15');
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button.addEventListener('click', func1);
// function func1() {
//     console.log("Клиентская ширина элемента:" , elem.clientWidth);
//     console.log("Клиентская длина элемента:" , elem.clientHeight);
//     console.log("Полная ширина элемента:" , elem.offsetWidth);
//     console.log("Полная длина элемента:" , elem.offsetHeight);
//     console.log("Разница между клиентской и полной ширина элемента:" , elem.offsetWidth - elem.clientWidth);
//     console.log("Разница между клиентской и полной длиной элемента:" , elem.offsetHeight - elem.clientHeight);
//     console.log("Ширина элемента с прокруткой:" , elem.scrollWidth);
//     console.log("Длина элемента с прокруткой:" , elem.scrollHeight);
//     console.log("Разница между шириной элемента с прокруткой и полной шириной элемента:" , elem.scrollWidth - elem.offsetWidth);
//     console.log("Разница между длиной элемента с прокруткой и полной длиной элемента:" , elem.scrollHeight - elem.offsetHeight);
// };
// button1.addEventListener('click', func2);
// function func2() {
//     console.log("Элемент прокручен по вертикали на:" , elem.scrollTop);
// };
// //№2
// button2.addEventListener('click', func3);
// function func3() {
//     let maxscroll = elem.scrollHeight - elem.clientHeight; //elem.scrollTop; //225;
//     let value = parseInt(elem.scrollTop);
//     if (value > 0) {
//         console.log("Элемент прокручен по вертикали.");
//     } else {
//         console.log("Элемент не прокручен.");
//     }
//     console.log("Разница между длиной элемента с прокруткой и величиной полной прокрутки:" , elem.scrollHeight - maxscroll);
//     console.log("Разница между длиной элемента с прокруткой и величиной полной прокрутки:" , maxscroll - (elem.offsetHeight + elem.scrollHeight));

//     // else if (value = 225) {
//     //     console.log("Элемент прокручен по вертикали до конца.");
//     // } else if (value = 0) {
//     //     console.log("Элемент не прокручен.");
//     // }
// };

//Задание 20
// //№1-№4
// let elem = document.querySelector('#elem_n20');
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button.addEventListener('click', func1);
// function func1() {
//     elem.scrollTop = 100;
//     elem.scrollLeft = 50;
// };

// button1.addEventListener('click', func2);
// function func2() {
//     elem.scrollTop = elem.scrollTop + 50;
// };

// button2.addEventListener('click', func3);
// function func3() {
//     elem.scrollTop = 0;
// };

// button3.addEventListener('click', func4);
// function func4() {
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// };

//Задание 21
// //№1-№2
// let elem = document.querySelector('#elem_n21');
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let maxscroll = elem.scrollHeight - elem.clientHeight;
// button.addEventListener('click', func1);
// function func1() {
//     elem.scrollTop = maxscroll;
// };

// button1.addEventListener('click', func2);
// function func2() {
//     if (elem.scrollTop == maxscroll) {
//         console.log("Элемент прокручен до конца по вертикали.");
//     } else {
//         console.log("Элемент не прокручен до конца.");
//     }
// };

//Задание 22
// //№1
// let elem = document.querySelector('#elem_n22');
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// function func1() {
//     elem.style.height = elem.scrollHeight + 'px';
// };

//Задание 23
// //№1
// let button = document.querySelector('#button');
// let div = document.createElement('div');
// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
// document.body.append(div);
// let scrollWidth = div.offsetWidth - div.clientWidth;
// div.remove();
// button.addEventListener('click', func1);
// function func1() {
//     console.log(scrollWidth);
// };

//Задание 24
// //№1-3
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let w = document.documentElement.clientWidth;
// let h = document.documentElement.clientHeight;
// button.addEventListener('click', func1);
// function func1() {
//     console.log("Ширина окна браузера:" , w + 'px');
//     console.log("Высота окна браузера:" , h + 'px');
// };

// button1.addEventListener('click', func2);
// function func2() {
//     if (window == window.innerHeight) {
//         console.log("Вертикальная прокрутка присутствует.");
//     } else {
//         console.log("Вертикальная прокрутка отсутствует.");
//     }
// };

// button2.addEventListener('click', func3);
// function func3() {
//     if (window == window.innerWidth) {
//         console.log("Горизонтальная прокрутка присутствует.");
//     } else {
//         console.log("Горизонтальная прокрутка отсутствует.");
//     }
// };

//Задание 25
// //№1-3
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let h = document.documentElement.offsetHeight;
// button.addEventListener('click', func1);
// function func1() {
//     let scrollHeight = Math.max(
//     	document.body.scrollHeight, document.documentElement.scrollHeight,
//     	document.body.offsetHeight, document.documentElement.offsetHeight,
//     	document.body.clientHeight, document.documentElement.clientHeight
//     );
//     console.log(scrollHeight);
// };

// button1.addEventListener('click', func2);
// function func2() {
//     let scrollWidth = Math.max(
//         document.body.scrollWidth, document.documentElement.scrollWidth,
//         document.body.offsetWidth, document.documentElement.offsetWidth,
//         document.body.clientWidth, document.documentElement.clientWidth
//     );
//     console.log(scrollWidth);
// };

// button2.addEventListener('click', func3);
// function func3() {
//     let hiddenScrollHeight = Math.max(
//     	document.body.scrollHeight, document.documentElement.scrollHeight,
//     	document.body.offsetHeight, document.documentElement.offsetHeight,
//     	document.body.clientHeight, document.documentElement.clientHeight
//     );
//     console.log(h - hiddenScrollHeight);
// };

//Задание 26
// //№1-2
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let x = window.scrollX; // слева
// let y = window.scrollY; // сверху
// button.addEventListener('click', func1);
// function func1() {
//     console.log(y);
// };

// button1.addEventListener('click', func2);
// function func2() {
//     console.log(x);
// };

//Задание 27
// //№1
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// let t = document.documentElement.scrollTop;
// let b = document.documentElement.scrollHeight;
// let l = document.documentElement.scrollLeft;
// button.addEventListener('click', func1);
// function func1() {
//     document.documentElement.scrollTop = 300;
// };
// //№2
// button1.addEventListener('click', func2);
// function func2() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight - 100;
// };
// //№3
// button2.addEventListener('click', func3);
// function func3() {
//     document.documentElement.scrollTop = 0;
// };
// //№4
// button3.addEventListener('click', func4);
// function func4() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight;
// };

//Задание 28
// //№1
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button.addEventListener('click', func1);
// function func1() {
//     window.scrollTo(0, 300);
// };
// //№2
// button1.addEventListener('click', func2);
// function func2() {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// };
// //№3
// button2.addEventListener('click', func3);
// function func3() {
//     window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         left: 0,
//         behavior: 'smooth'
//     });
// };

//Задание 29
// //№1
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');

// button.addEventListener('click', func1);
// function func1() {
//     window.scrollBy(0, 100);
// };
// //№2
// button1.addEventListener('click', func2);
// function func2() {
//     window.scrollBy(0, -100);
// };
// //№3
// button2.addEventListener('click', func3);
// function func3() {
//     window.scrollBy({
//         top: 300,
//         left: 0,
//         behavior: 'smooth'
//     });
// };
// //№3
// button3.addEventListener('click', func4);
// function func4() {
//     window.scrollBy({
//         top: -300,
//         left: 0,
//         behavior: 'smooth'
//     });
// };

//Задание 30
// //№1
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let elem1 = document.querySelector('#elem1');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', func1);
// function func1() {
//     elem1.scrollIntoView({
//         behavior: 'smooth',
//         block: 'end',
//         inline: 'end',
//     });
// };

// button1.addEventListener('click', func2);
// function func2() {
//     elem.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'end',
//     });
// };

//Задание 31
// //№1
// window.addEventListener('scroll', function() {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         console.log('Страница прокручена до конца');
//     }
// 	else {
//     }
// });

//Задание 32
// //№1
// let map = new Map;
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [4, 5];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
// map.set(arr3, 'data3');

// console.log(map.get(arr1));
// console.log(map.get(arr2));
// console.log(map.get(arr3));

// //№2
// let map = new Map;
// let obj1 = { id: 1, name: "Object 1" };
// let obj2 = { id: 2, name: "Object 2" };
// let obj3 = { id: 3, name: "Object 3" };

// let array1 = [1, 2, 3];
// let array2 = ["a", "b", "c"];
// let array3 = ["x", "y", "z"];

// map.set(obj1, array1);
// map.set(obj2, array2);
// map.set(obj3, array3);
// console.log(map.get(obj1));
// console.log(map.get(obj2));
// console.log(map.get(obj3));


//Задание 34
// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');

// // for (let [key, elem] of map) {
// // 	console.log(key);
// // 	console.log(elem);
// // }

// for (let elem of map) {
// 	console.log(elem); // сначала [[1, 2], 'data1'], потом [[3, 4], 'data2']
// }

//Задание 35
// //№1
// let map = new Map;
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [4, 5];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
// map.set(arr3, 'data3');

// for (let key of map) {
// 	console.log(key);
// }

// //№2
// let map = new Map;
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [4, 5];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
// map.set(arr3, 'data3');

// let values = map.values();
// console.log(values);

// for (let values of map) {
// 	console.log(values);
// }

//Задание 36
// //№1
// // Получаем все инпуты на странице
// let inputs = document.querySelectorAll('input[type="text"]');
    
// // Создаем коллекцию Map для хранения порядковых номеров
// let inputMap = new Map();

// // Перебираем инпуты и добавляем их в Map с порядковым номером
// inputs.forEach((input, index) => {
//   inputMap.set(input, index);
// });

// // При клике на инпут записываем его порядковый номер в value
// inputs.forEach(input => {
//   input.addEventListener('click', function() {
//     const index = inputMap.get(this);
//     this.value = index;
//   });
// });
// //№2
// const inputElements = document.querySelectorAll('input[type="text"]');

//     // Массив для хранения введенных чисел
//     let numbersArray = [];

//     // Функция для обработки нажатия клавиши Enter
//     function handleEnterKeyPress(event) {
//       if (event.key === "Enter") {
//         const inputValue = parseFloat(this.value);
//         if (!isNaN(inputValue)) {
//           numbersArray.push(inputValue);
//           this.value = ""; // Очищаем значение инпута после ввода числа
//         }
//       }
//     }

//     // Функция для обработки потери фокуса
//     function handleInputBlur() {
//       console.log("Массив введенных чисел:", numbersArray);
//     }

//     // Привязываем обработчики событий к каждому инпуту
//     inputElements.forEach(input => {
//       input.addEventListener('keypress', handleEnterKeyPress);
//       input.addEventListener('blur', handleInputBlur);
//     });

//Задание 37
// //№1
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);

//Задание 38
// //№1
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr);
// console.log(set);
// //№2
// let set = new Set([1, 2, 3]);
// set.add(2);
// console.log(set);

//Задание 39
// //№1
// let set = new Set([1, 2, 3]);
// console.log(set.size);
// //№2
// let set = new Set([1, 2, 3]);
// console.log(set.has(3));
// console.log(set.has(4));

//Задание 40
// //№1
// let set = new Set([1, 2, 3, 4, 5]);
// let sum = 0;
// for (let elem of set) {
// 	sum += elem;
// }
// console.log("Сумма элементов коллекции:", sum);

//Задание 41
// //№1
// let set = new Set([1, 2, 3]);
// let arr = [...set];
// console.log(arr);
// let arr1 = Array.from(set);
// console.log(arr1);
// //№2
// let arr = [1, 2, 3];
// let set = new Set(arr);
// console.log(set);

//Задание 42
// //№1
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr);
// let res = [...new Set(arr)];
// console.log(res);

//Задание 43
// //№1
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let set = new Set;
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		set.add(this);
// 	});
// }
// button.addEventListener('click', function() {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!';
// 	}
// });

//Задание 45
// //№1
// let elems = document.querySelectorAll('p');
// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);
// console.log(elems.length);
// for (let elem of elems) {
// 	console.log(elem);
// }

//Задание 46
// //№1
// let elems = document.querySelectorAll('p');
// console.log(elems.slice(1, 3));
// console.log(elems.join());
// console.log(elems.map());

//Задание 47
// //№1
// let test = [
// 	[1, 2, 3],
// 	{a: 1, b: 2, c: 3},
// 	[3, 4, 5],
// 	{x: 1, y: 2, z: 3},
// ];
// let res = Array.isArray(test);
// console.log(res);

// test.forEach(item => {
//     if (Array.isArray(item)) {
//         console.log(item, "является массивом.");
//     } else {
//         console.log(item, "не является массивом.");
//     }
// });

//Задание 48
// //№1
// let elems = document.querySelectorAll('p');
// let arr = [];
// for (let elem of elems) {
// 	arr.push(elem);
// }
// console.log(arr);

// let arr1 = [...elems];
// console.log(arr1);

// let arr2 = Array.from(elems);
// console.log(arr2);
// //№2
// let elems = document.querySelectorAll('p');
// let arr = Array.from(elems);
// let middleElems = arr.slice(1, -1);
// console.log(middleElems);

//Задание 49
// //№1
// let elems = document.querySelector('p');
// let childNodesCollection = elems.childNodes;
// console.log(childNodesCollection);
// //№2
// let parent = document.querySelector('p');
// let elems = parent.children;

// for (let elem of elems) {
// 	console.log(elem.textContent);
// }
// //№3
// let elems = document.getElementsByClassName('www');
// console.log(elems);

//Задание 51-52
// //№1
// let sym1 = Symbol('текстовое описание')
// let sym2 = Symbol('текстовое описание2')
// console.log(sym1, sym2)

//Задание 53
// //№1
// let obj = { a: 1, b: 2, c: 3 }
// let sym = Symbol()
// //№2
// obj[sym] = '4'
// console.log(obj)

//Задание 54
// //№1
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// for (let key in obj) {
// 	console.log(obj[key]);
// }

//Задание 55
// //№1
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = '4'
// obj[sym] = function () {
// 	console.log(new Date())
// 	console.log(this)
// }

//Задание 56
// //№1-№3
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// let sym = Symbol();
// arr[sym] = function() {
// 	let sum = 0;
// 	for (let key in this) {
// 		sum += this[key];
// 	}
// 	return sum;
// };
// let sum = arr[sym]();
// console.log(sum);

//Задание 56
// //№1-№3
// let elems = document.getElementsByClassName('www');
// let arr = [1, 2, 3];

// for (let elem of elems) {
// 	arr.push(+elem.textContent);
// }
// console.log(arr);

// let sym = Symbol();
// arr[sym] = function() {
// 	let sum = 0;
// 	for (let key in this) {
// 		sum += this[key];
// 	}
// return sum;
// };
// let sum = arr[sym]();
// console.log(sum);

//Задание 57
// //№1
// // Создаем объекты
// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { x: 10, y: 20, z: 30 };

// // Создаем символ 'sum'
// let sumSymbol = Symbol.for('sum');

// // Добавляем каждому объекту ключ 'sum' с функцией для вычисления суммы
// obj1[sumSymbol] = function() {
//     let sum = 0;
//     for (let key in this) {
//         sum += this[key];
//     }
//     return sum;
// };

// obj2[sumSymbol] = function() {
//     let sum = 0;
//     for (let key in this) {
//         sum += this[key];
//     }
//     return sum;
// };

// console.log(obj1[sumSymbol]());
// console.log(obj2[sumSymbol]());

//Задание 58
// //№1
// let sym1 = Symbol.for('test1')
// let sym2 = Symbol.for('test2');
// let key1 = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);
// console.log(key1);
// console.log(key2);

//Задание 59
// //№1
// let mapTest = new Map()
// console.log(mapTest[Symbol.iterator])
// //№2
// let setTest = new Set()
// console.log(setTest[Symbol.iterator])

//Задание 61
// //№1
// let arr = [1, 2, 3];
// let func = arr[Symbol.iterator];
// console.log(func);

// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// let func1 = map[Symbol.iterator];
// console.log(func1);

// let elems = document.querySelectorAll('p');
// let func2 = elems[Symbol.iterator];
// console.log(func2);

// let obj = {a: 1, b: 2, c: 3};
// let func3 = obj[Symbol.iterator];
// console.log(func3);

//Задание 62
// //№1
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// let iter = map[Symbol.iterator]();
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
// console.log( iter.next() );
// //№2
// let elems = document.querySelectorAll('p');
// let iter1 = elems[Symbol.iterator]();
// console.log( iter1.next() );
// console.log( iter1.next() );
// console.log( iter1.next() );
// console.log( iter1.next() );
// //№3
// let elems1 = document.getElementsByClassName('www');
// let iter2 = elems1[Symbol.iterator]();
// console.log( iter2.next() );
// console.log( iter2.next() );
// console.log( iter2.next() );
// console.log( iter2.next() );

//Задание 63
// //№1
// function *func() {
// 	yield 5;
// 	yield 4;
// 	yield 3;
//     yield 2;
//     yield 1;
// }
// let iter = func();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

//Задание 64
// //№1
// function *func() {
//     yield 10;
//     yield 9;
//     yield 8;
//     yield 7;
//     yield 6;
// 	yield 5;
// 	yield 4;
// 	yield 3;
//     yield 2;
//     yield 1;
//     yield 0;
// }
// let iter = func();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// //№2
// function *func1() {
// 	for (let i = 5; i >= 0; i--) {
// 		yield i;
// 	}
// }
// let iter1 = func1();
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// //№3
// function *func2() {
// 	for (let i = 100; i >= 0; i--) {
// 		yield i /=2;
// 	}
// }
// let iter2 = func2();
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// //№4
// function *func3() {
//     let count = 0;
// 	while(true){
//         yield Math.pow(2, count);
//         count++;
//     }
// }
// let iter3 = func3();
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// //№5
// function *fibonacci() {
//     let [prev, curr] = [0, 1];
// 	while(true){
//         yield curr;
//         [prev, curr] = [curr, prev + curr];
//     }
// }
// let iter4 = fibonacci();
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());

//Задание 65
// //№1
// function *func() {
// 	for (let i = 1; i <= 3; i++) {
// 		yield i;
// 	}
// }
// for (let elem of func()) {
// 	console.log(elem);
// }
// for (let elem of func()) {
// 	console.log(elem);
// }

//Задание 66
// //№1
// function *func(obj) {
// 	for (let key in obj) {
// 		yield [key, obj[key]];
// 	}
// }
// let iter = func({a: 1, b: 2, c: 3});

// for (let elem of iter) {
// 	console.log(elem);
// }

//Задание 67
// //№1
// let obj = {a: 1, b: 2, c: 3};

// obj[Symbol.iterator] = function *() {
// 	for (let key in this) {
// 		yield { key: key, val: obj[key] };
// 	}
// }

// for (let elem of obj) {
// 	console.log(elem);
// }

//Задание 68
// //№1
// let obj = {
// 	a: 1, 
// 	b: 2, 
// 	c: 3,
// 	[Symbol.iterator]: function *() {
// 		for (let key in this) {
// 			yield { key: key, val: this[key] };
// 		}
// 	}
// };

// for (let elem of obj) {
// 	console.log(elem);
// }

//Задание 69
// //№1
// let arr = [1, 2, 3];
// let iter = arr.values();
// for (let elem of iter) {
// 	console.log(elem);
// }
// //№2
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// let iter1 = set.values();
// for (let elem1 of iter1) {
// 	console.log(elem1);
// }

//Задание 70
// //№1
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// let iter = map.keys();
// for (let elem of iter) {
// 	console.log(elem);
// }
// //№2
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// let iter1 = set.keys();
// for (let elem1 of iter1) {
// 	console.log(elem1);
// }

//Задание 71
// //№1
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// let iter = map.entries();
// // for (let entry of iter) {
// // 	console.log(entry);
// // }
// // Выполним деструктуризацию при переборе:
// for (let [key, value] of iter) {
// 	console.log(key);
// 	console.log(value);
// }
// // №2
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// let iter1 = set.entries();
// // for (let entry1 of iter1) {
// // 	console.log(entry1);
// // }
// // Выполним деструктуризацию при переборе:
// for (let [key1, value1] of iter1) {
// 	console.log(key1);
// 	console.log(value1);
// }
// // №3
// let elems = document.querySelectorAll('p');
// let iter2 = elems.entries();
// // for (let entry2 of iter2) {
// // 	console.log(entry2);
// // }
// // Выполним деструктуризацию при переборе:
// for (let [key2, value2] of iter2) {
// 	console.log(key2);
// 	console.log(value2);
// }

//Задание 72
// //№1
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// for (let elem of set) {
// 	console.log(elem);
// }
// Ответ: В коллекции Set по умолчанию действует итератор values, так как коллекция Set позволяют создавать массивы.

//Задание 73
// //№1
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function *(){
// 		for (let key in this){
// 			yield this[key];
// 		}
// 	}
// };
// let arr = [...obj];
// console.log(arr);

//Задание 74
// //№1
// let str = '12345';
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
// }
// console.log("Сумма цифр числа " + str + " равна: " + sum);

//Задание 75
// //№1
// let num = 12345;
// let sum = 0;
// let arr = [...String(num)].map(Number);
// for (let i = 0; i < arr.length; i++) {
//     sum += parseInt(arr[i]);
// }
// console.log("Сумма цифр числа " + arr + " равна: " + sum);

//Задание 76
// //№1
// // let table = document.getElementById('myTable');
// // let rows = table.getElementsByTagName("tr");
// // for (let i = 0; i < rows.length; i++) {
// //   let cells = rows[i].getElementsByTagName("td");
// //   for (let j = 0; j < cells.length; j++) {
// //     cells[j].innerHTML += " (" + ((i * cells.length) + j + 1) + ")";
// //   }
// // }

// let elems = document.querySelectorAll('td');
// for (let [num, elem] of elems.entries()) {
// 	elem.textContent += " (" + (num) + ")";
// }

//Задание 77
// //№1
// let elems = document.querySelectorAll('input');
// for (let [key, {id, value}] 
// 	of elems.entries()
// 	){ 
// 	console.log(key, id, value);
// }

//Задание 78
// //№1
// let json = '[1, 2, 3, "a", "b", "c"]'
// //№2
// let json1  = `{
// 	"a": 1,
// 	"b": 2,
// 	"c": "eee",
// 	"d": true
// }`;
// //№3
// let obj = `{
// 	"a": ["a", "b", "c"],
// 	"b": "111",
// 	"c": "eee"
// }`;

//Задание 79
// //№1
// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json); 
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i]
// }
// console.log("Сумма цифр числа " + arr + " равна: " + sum);
// //№2
// let json1 = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;
// let arr1 = JSON.parse(json1);
// let sum1 = 0
// for (let prop in arr1) {
//     // Проверяем, что свойство является массивом
//     if (Array.isArray(arr1[prop])) {
//         // Суммируем все числа в массиве
//         sum1 += arr1[prop].reduce((acc, val) => acc + val, 0);
//     }
// }
// console.log("Сумма чисел из представленных данных:", sum1);
// //№3
// let json2 = '["user1","user2","user3","user4","user5"]';
// let arr2 = JSON.parse(json2)
// let ul = document.createElement('ul')
// for (let arr of arr2) {
// 	let li = document.createElement('li')
// 	li.textContent = arr
// 	ul.appendChild(li)
// }
// document.body.appendChild(ul)
// //№4
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;

// // Преобразование строки JSON в объект JavaScript
// let employees = JSON.parse(json);

// // Создание HTML-разметки для таблицы
// let tableHTML = "<table border='1'><tr><th>Name</th><th>Age</th><th>Salary</th></tr>";

// // Добавление строк в таблицу для каждого работника
// employees.forEach(function(employee) {
//     tableHTML += "<tr>";
//     tableHTML += "<td>" + employee.name + "</td>";
//     tableHTML += "<td>" + employee.age + "</td>";
//     tableHTML += "<td>" + employee.salary + "</td>";
//     tableHTML += "</tr>";
// });

// tableHTML += "</table>";

// // Вывод таблицы на экран
// document.body.innerHTML = tableHTML;


//Задание 80
// //№1
// let json = ['user1', 'user2', 'user3', 'user4', 'user5']; 
// let arr = JSON.stringify(json);
// console.log(arr);
// //№2
// let li = document.querySelectorAll('li')
// let goroda = [...li].map(city => city.textContent)
// let json1 = JSON.stringify(goroda)
// console.log(json1)
// //№3
// let rows = document.querySelectorAll('tr')
// let data = Array.from(rows)
// 	.slice(1)
// 	.map(row => {
// 		let columns = row.querySelectorAll('td')
// 		return {
// 			surname: columns[0].textContent,
// 			name: columns[1].textContent,
// 			patronymic: columns[2].textContent,
// 		}
// 	})
// console.log(JSON.stringify(data));

//Задание 81
// //№1
// let json = '["user1","user2","user3","user4","user5"]';
// let arr  = JSON.parse(json);
// arr.push('user6');
// let res = JSON.stringify(arr);
// console.log(res);
// //№2
// let json1 = '["user1","user2","user3","user4","user5"]';
// let arr1 = JSON.parse(json1);
// arr1[1] = ('юзер2');
// let res1 = JSON.stringify(arr1);
// console.log(res1);
// //№3
// let json2 = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`
// let arr2 = JSON.parse(json2);
// arr2.push({ name: 'user4', age: 28, salary: 3000 });
// console.log(JSON.stringify(arr2));

//Задание 84
// //№1
// localStorage.setItem('key1', 1);
// localStorage.setItem('key2', 2);
// localStorage.setItem('key3', 3);
// let str1 = parseInt(localStorage.getItem('key1'));
// let str2 = parseInt(localStorage.getItem('key2'));
// let str3 = parseInt(localStorage.getItem('key3'));
// let sum = str1 + str2 + str3;
// console.log(sum);

//Задание 85
// //№1
// let lastVisitTime = localStorage.getItem('lastVisitTime');

// if (lastVisitTime) {
//     lastVisitTime = parseInt(lastVisitTime, 10);

//     let now = Date.now();

//     let secondsSinceLastVisit = Math.floor((now - lastVisitTime) / 1000);

//     console.log(`С момента вашего последнего визита прошло ${secondsSinceLastVisit} секунд.`);
// } else {
//     console.log("Это ваш первый визит на сайт!");
// }

// localStorage.setItem('lastVisitTime', Date.now());
// //№2
// function getFormattedDate(date) {
//     let day = date.getDate();
//     let month = date.getMonth() + 1;

//     day = day < 10 ? `0${day}` : day;
//     month = month < 10 ? `0${month}` : month;

//     return `${month}-${day}`;
// }

// let birthDate = localStorage.getItem('birthDate');

// if (birthDate) {
//     const today = getFormattedDate(new Date());
//     if (birthDate === today) {
//         alert("Поздравляем с Днем Рождения!");
//     } else {
//         console.log("Сегодня не ваш день рождения.");
//     }
// } else {
//     let userBirthDate = prompt("Пожалуйста, введите вашу дату рождения в формате ММ-ДД, например, 12-31.");
//     if (userBirthDate) {
//         localStorage.setItem('birthDate', userBirthDate);
//     }
// }
// //№3
// let input = document.querySelector('input')
// let txt = localStorage.getItem('txt')

// input.addEventListener('blur', function () {
// 	localStorage.setItem('txt', input.value)
// })

// input.value = txt

//Задание 86
// //№1
// let reload = localStorage.getItem('reload');
// let i = 0;
// i = Number(reload) + 1;
// localStorage.setItem('reload', i);
// console.log(reload);

//Задание 87
// //№1
// let reload = localStorage.getItem('reload');
// let i = 0;
// i = Number(reload) + 1;
// localStorage.setItem('reload', i);
// console.log(reload);
// if (reload >= 10) {
// 	localStorage.removeItem('reload');
// }

//Задание 88
// //№1
// let reload = localStorage.getItem('reload');
// let i = 0;
// i = Number(reload) + 1;
// localStorage.setItem('reload', i);
// console.log(reload);
// if (reload >= 10) {
// localStorage.clear();
// }

//Задание 89
// //№1
// document.getElementById('showCount').addEventListener('click', function() {
//     let num = localStorage.length;
//     console.log('Количество записей в localStorage:', num);
//     alert('Количество записей в localStorage: ' + num);
// });
// //№2
// document.getElementById('checkStorage').addEventListener('click', function() {
//     let num = localStorage.length;
//     if (num > 10) {
//         localStorage.clear();
//         alert('localStorage был очищен, так как содержал более 10 записей.');
//     } else {
//         alert('Количество записей в localStorage: ' + num + '. Очистка не требуется.');
//     }
// });

//Задание 90
// // №1
// for (let i = 0; i < 3; i++) {
//     let key = localStorage.key(i);
//     if (key !== null) {
//         let value = localStorage.getItem(key);
//         console.log(`Запись №${i}: ключ = "${key}", значение = "${value}"`);
//     } else {
//         console.log(`Запись с номером ${i} не найдена.`);
//     }
// }
// localStorage.setItem('firstKey', 'First Value');
// localStorage.setItem('secondKey', 'Second Value');
// localStorage.setItem('thirdKey', 'Third Value');

//Задание 91
// // №1
// document.getElementById('showStorage').addEventListener('click', function() {
//     let storageContents = document.getElementById('storageContents');
//     storageContents.innerHTML = '';
//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         let val = localStorage.getItem(key);
//         console.log(key, val);
//         storageContents.innerHTML += `Ключ: ${key}, Значение: ${val}<br>`;
//     }
//     if (localStorage.length === 0) {
//         storageContents.innerHTML = 'localStorage пуст';
//     }
// });

//Задание 92
// // №1
// document.getElementById('showKeys').addEventListener('click', function() {
//     let storageContents = document.getElementById('storageContents');
//     storageContents.innerHTML = '';
//         let keys = Object.keys(localStorage);
//         console.log(keys);
//         storageContents.innerHTML += `Ключи: ${keys}<br>`;
// });
// // №2
// document.getElementById('showValues').addEventListener('click', function() {
//     let storageContents = document.getElementById('storageContents');
//     storageContents.innerHTML = '';
//         let values = Object.values(localStorage);
//         console.log(values);
//         storageContents.innerHTML += `Значения: ${values}<br>`;
// });

//Задание 93
// // №1
// document.getElementById('save').addEventListener('click', function() {
//     let inputsTextArray = [
//         document.getElementById('input1').value,
//         document.getElementById('input2').value,
//         document.getElementById('input3').value
//     ];

//     localStorage.setItem('inputsText', JSON.stringify(inputsTextArray));
// });
// // №2
// document.getElementById('save').addEventListener('click', function() {
//     let inputsTextArray = [
//         document.getElementById('input1').value,
//         document.getElementById('input2').value,
//         document.getElementById('input3').value
//     ];

//     localStorage.setItem('inputsText', JSON.stringify(inputsTextArray));
// });
// function loadSavedInputs() {
//     let savedInputs = localStorage.getItem('inputsText');
//     if (savedInputs) {
//         let inputsTextArray = JSON.parse(savedInputs);

//         if (inputsTextArray.length >= 3) {
//             document.getElementById('input1').value = inputsTextArray[0];
//             document.getElementById('input2').value = inputsTextArray[1];
//             document.getElementById('input3').value = inputsTextArray[2];
//         }
//     }
// }
// window.onload = loadSavedInputs;

//Задание 94
// // №1
// let users = [
// 	{
// 		surn: 'surn1',
// 		name: 'name1',
// 		age: 31,
// 	},
// 	{
// 		surn: 'surn2',
// 		name: 'name2',
// 		age: 32,
// 	},
// 	{
// 		surn: 'surn',
// 		name: 'name3',
// 		age: 33,
// 	},
// ];

// localStorage.setItem('users', JSON.stringify(users));

// function addNewUser() {
//     let usersFromStorage = JSON.parse(localStorage.getItem('users'));
    
//     let newUser = {
//         surn: document.getElementById('surn').value,
//         name: document.getElementById('name').value,
//         age: parseInt(document.getElementById('age').value, 10),
//     };
    
//     usersFromStorage.push(newUser);
    
//     localStorage.setItem('users', JSON.stringify(usersFromStorage));
// }

// document.getElementById('addUser').addEventListener('click', addNewUser);


//Задание 95
// // №1
// document.addEventListener('DOMContentLoaded', () => {
//     loadTasks();
//     document.getElementById('addTask').addEventListener('click', addTask);
// });

// function loadTasks() {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     let tasksList = document.getElementById('tasksList');
//     tasksList.innerHTML = '';

//     tasks.forEach((task, index) => {
//         let taskElement = document.createElement('li');
//         taskElement.textContent = task.text;

//         if (task.completed) {
//             taskElement.style.textDecoration = 'line-through';
//         }

//         let deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Удалить';
//         deleteBtn.onclick = () => deleteTask(index);

//         let editBtn = document.createElement('button');
//         editBtn.textContent = 'Изменить';
//         editBtn.onclick = () => editTask(index, task.text);

//         let completeBtn = document.createElement('button');
//         completeBtn.textContent = 'Выполнено';
//         completeBtn.onclick = () => toggleCompletion(index);

//         taskElement.appendChild(deleteBtn);
//         taskElement.appendChild(editBtn);
//         taskElement.appendChild(completeBtn);

//         tasksList.appendChild(taskElement);
//     });
// }

// function addTask() {
//     let newTaskInput = document.getElementById('newTask');
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.push({ text: newTaskInput.value, completed: false });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     newTaskInput.value = '';
//     loadTasks();
// }

// function deleteTask(index) {
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     tasks.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     loadTasks();
// }

// function editTask(index, oldText) {
//     let newText = prompt('Измените задачу', oldText);
//     if (newText !== null && newText.trim() !== '') {
//         let tasks = JSON.parse(localStorage.getItem('tasks'));
//         tasks[index].text = newText;
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         loadTasks();
//     }
// }

// function toggleCompletion(index) {
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     tasks[index].completed = !tasks[index].completed;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     loadTasks();
// }
// // №2
// document.addEventListener('DOMContentLoaded', function() {
//     let editor = document.getElementById('noteEditor');
//     let saveButton = document.getElementById('saveNote');
//     let notesList = document.getElementById('notesList');

//     function loadNotes() {
//         notesList.innerHTML = ''; 
//         let notes = JSON.parse(localStorage.getItem('notes') || '[]');
//         notes.forEach((note, index) => {
//             let noteLink = document.createElement('a');
//             noteLink.href = '#';
//             noteLink.textContent = `Запись ${index + 1}`;
//             noteLink.onclick = () => loadNoteIntoEditor(index);
//             notesList.appendChild(noteLink);
//             notesList.appendChild(document.createElement('br'));
//         });
//     }
    
//     function loadNoteIntoEditor(index) {
//         let notes = JSON.parse(localStorage.getItem('notes') || '[]');
//         if (notes[index]) {
//             editor.value = notes[index];
//             editor.dataset.noteIndex = index; 
//         }
//     }

//     saveButton.onclick = () => {
//         let notes = JSON.parse(localStorage.getItem('notes') || '[]');
//         let noteText = editor.value.trim();
//         if (noteText) {
//             let index = editor.dataset.noteIndex ? parseInt(editor.dataset.noteIndex, 10) : notes.length;
//             notes[index] = noteText; 
//             localStorage.setItem('notes', JSON.stringify(notes));
//             delete editor.dataset.noteIndex; 
//             editor.value = ''; 
//             loadNotes(); 
//         }
//     };
    
//     editor.addEventListener('input', () => {
//         delete editor.dataset.noteIndex; 
//     });

//     loadNotes(); 
// });
// // №3
// document.addEventListener('DOMContentLoaded', function() {
//     let addStickerBtn = document.getElementById('addSticker');
//     let newStickerText = document.getElementById('newStickerText');
//     let stickersContainer = document.getElementById('stickersContainer');

//     function saveStickers(stickers) {
//         localStorage.setItem('stickers', JSON.stringify(stickers));
//     }

//     function loadStickers() {
//         let stickers = JSON.parse(localStorage.getItem('stickers') || '[]');
//         stickersContainer.innerHTML = ''; 
//         stickers.forEach((text, index) => createSticker(text, index));
//     }

//     function createSticker(text, index) {
//         let sticker = document.createElement('div');
//         sticker.className = 'sticker';
        
//         let textarea = document.createElement('textarea');
//         textarea.value = text;
        
//         let deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Удалить';
//         deleteBtn.onclick = function() {
//             deleteSticker(index);
//         };
        
//         sticker.appendChild(textarea);
//         sticker.appendChild(deleteBtn);
//         stickersContainer.appendChild(sticker);

//         textarea.addEventListener('blur', () => {
//             updateSticker(index, textarea.value);
//         });
//     }

//     function updateSticker(index, newText) {
//         let stickers = JSON.parse(localStorage.getItem('stickers') || '[]');
//         stickers[index] = newText;
//         saveStickers(stickers);
//     }

//     function deleteSticker(index) {
//         let stickers = JSON.parse(localStorage.getItem('stickers') || '[]');
//         stickers.splice(index, 1);
//         saveStickers(stickers);
//         loadStickers(); 
//     }

//     addStickerBtn.addEventListener('click', () => {
//         let text = newStickerText.value.trim();
//         if (text) {
//             let stickers = JSON.parse(localStorage.getItem('stickers') || '[]');
//             stickers.push(text);
//             saveStickers(stickers);
//             createSticker(text, stickers.length - 1);
//             newStickerText.value = ''; 
//         }
//     });

//     loadStickers(); 
// });