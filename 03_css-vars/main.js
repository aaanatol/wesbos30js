document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    console.log(this.value);
  }


  inputs.forEach(input =>  {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);

    var suffix = this.dataset.sizing
  })

}); 