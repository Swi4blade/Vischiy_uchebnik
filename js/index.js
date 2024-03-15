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

//Задание 56-59
// for (let key in obj) {
// 	console.log(obj[key])
// }

// obj[sym]()

// obj[sym] = function () {
// 	let sum = 0

// 	for (let key in this) {
// 		sum += this[key]
// 	}

// 	return sum
// }

// console.log(obj[sym]())

// // С помощью метода Symbol.for можно создавать символы с именем. Эти символы будут сохранены в глобальный реестр символов и доступ к ним можно будет получить из любого места кода.

// let sym3 = Symbol.for('test1')
// let sym4 = Symbol.for('test2')

// console.log(Symbol.keyFor(sym3), Symbol.keyFor(sym4))

// let setTest = new Set()
// console.log(setTest[Symbol.iterator])

// let mapTest = new Map()
// console.log(mapTest[Symbol.iterator])