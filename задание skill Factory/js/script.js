const forma = document.querySelector('form');
let result = document.querySelector('.result');


forma.addEventListener("submit",function(e) {
	e.preventDefault();
	let inputValue = document.querySelector('input').value;
	let inputWidth = document.querySelector('.width').value;
	let inputHight = document.querySelector('.hight').value;

	if (inputValue >= 100 && inputValue <= 300) {
		result.innerHTML = "";
		let urlResponse = `https://picsum.photos/${inputWidth}/${inputHight}`;

		fetch(urlResponse)
		.then((response) => {
			response.json();
		})
		.then((data) => {
			let img = document.createElement('img');
			result.appendChild(img);
			img.setAttribute('src',urlResponse);
		});
		
			
	} else if (isNaN(inputValue)) {
		result.innerHTML = "Значение  не число";

	} else {
		result.innerHTML = "Значение  не входит в диапазон от 100 до 300";
	}

	forma.reset();

});

