// Current Balance Element
const current_balance_element = document.getElementById('current_balance');

// Buttons
const add_money_btn = document.getElementById('add_money_btn');
const draw_money_btn = document.getElementById('draw_money_btn');

// Input Fields
const add_money_field = document.getElementById('add_money_field');
const draw_money_field = document.getElementById('draw_money_field');

// ------ End of Grabbing ------- //

// Add Money Button Event Listener
//
add_money_btn.addEventListener('click', function () {
	const current_balance = parseFloat(current_balance_element.innerHTML);
	const input_add_amount = parseFloat(add_money_field.value)

	current_balance_element.innerText = current_balance + input_add_amount

	add_money_field.value = ''
})

// Draw Money Button Event Listener
//
draw_money_btn.addEventListener('click', function () {
	const current_balance = parseFloat(current_balance_element.innerHTML);
	const input_draw_amount = parseFloat(draw_money_field.value)

	current_balance_element.innerText = current_balance - input_draw_amount

	draw_money_field.value = ''
})
