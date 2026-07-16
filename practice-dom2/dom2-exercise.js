//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

let b = document.querySelector('button#show')
b.addEventListener('click', show)

function show(){
	let a = document.createElement('p');
	a.textContent = campus.address;
	let p = document.querySelector('#addr')
	p.insertAdjacentElement('afterend', a);

	let c = document.querySelector('#dept')
	let d = document.createElement('ul')
	c.insertAdjacentElement('afterend',d)
	for(let e of gakka){
		let li = document.createElement('li')
		li.textContent=e.name;
		d.insertAdjacentElement('beforeend',li)
	}
	
} 
