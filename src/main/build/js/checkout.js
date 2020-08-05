const checkOutListener = () => {
	$('section').removeClass('active');
	$('.checkout_area').addClass('active');

	fillYourOrder();

	$('#f-option6').click(createCardField);
	$('#f-option5').click(deleteCardField);

	$('.button-paypal').click(startOfThePurchaseProcess);
}

const deleteCardField = () => {
	$('#card-field-parent').remove();
}

const createCardField = () => {
	$('#checkout-form').append($('<div/>', {id: 'card-field-parent'}).addClass('col-md-6 form-group')
			.append($('<input>', {
				id: 'card-field',
				type: 'text',
				placeholder: 'Card number*',
				name: 'cardfield'
			}).addClass('form-control')))
}

const fillYourOrder = () => {
	const cart = JSON.parse(localStorage.getItem('cart'));
	let totalPrice = 0;
	$('#order-products').children().not(':first-child').remove();

	fetch(productsUrl)
			.then(res => res.json())
			.then(res => {
				res.forEach(product => {
					cart.forEach(productInCart => {
						if (productInCart.productId === product.id) {
							createProductInOrder(product, productInCart.count);
							totalPrice += product.price * productInCart.count;
						}
					})
				});
				$('#total-in-order').text(`$ ${totalPrice}`);
			});
}

const createProductInOrder = (product, count) => {
	$('#order-products')
			.append($('<li/>')
					.append($('<div/>').addClass('product-in-order-card')
							.append($('<span/>', {text: product.brand + ' '}))
							.append($('<span/>', {text: product.model}))
							.append($('<span/>', {text: ` x${count}`}))
							.append($('<span/>', {text: ` $${count * product.price}`}))
					));
}