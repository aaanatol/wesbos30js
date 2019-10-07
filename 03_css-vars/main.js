document.addEventListener('DOMContentLoaded', () => {
	const inputs = document.querySelectorAll('.controls input');

	function handleUpdate() {
		var suffix = this.dataset.sizing || "";
		const rootEl = document.querySelector(':root');
		rootEl.style.setProperty(`--${this.name}`, this.value + suffix);
	}

	inputs.forEach(input =>  {
		input.addEventListener('change', handleUpdate);
		input.addEventListener('mousemove', handleUpdate);
	})

}); 