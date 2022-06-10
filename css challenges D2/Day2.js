function myFunction(){
	document.getElementById("menu").classList.toggle('active');
	document.getElementById("menu").classList.remove('noAnimation');
}
	// document.getElementById("menu").classList.add('active');

document.getElementById('menu').addEventListener('click', myFunction)

console.log(document.getElementById('menu').addEventListener)

// //抽出來 變數
// document.getElementById('menu').addEventListner('click', function(){
// 	myFunction()
// })

// document.getElementById('menu').addEventListner('click', function(){
// 	// document.getElementById("menu").classList.add('active');
// 	document.getElementById("menu").classList.toggle('active');
// 	document.getElementById("menu").classList.remove('noAnimation');
// })


// classList是這個類別內
// ById是讀到這個身分證
// addEventListner是事件偵聽器
// toggle是新增切換