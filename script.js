const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// fetch

	let formData = new FormData(form);

	fetch('mail.php', { method: 'POST', body: formData })
		.then(() => console.log('отправлено'))
		.catch(() => console.log('some error'));

	// let xhr = new XMLHttpRequest();

	// xhr.onreadystatechange = function() {
	// 	if (xhr.readyState === 4) {
	// 		if (xhr.status === 200) {
	// 			console.log('Отправлено');
	// 		}
	// 	}
	// }

	// xhr.open('POST', 'mail.php', true);
	// xhr.send(formData);

	form.reset();

});