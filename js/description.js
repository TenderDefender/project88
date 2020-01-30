window.onload.Swal.fire({
  title: 'Sweet!',
  text: 'Modal with a custom image.',
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})


function refreshForm(){
	document.getElementById("myForm").style.display = "none";
	document.querySelector('.user__name').value='';
	document.querySelector('.phone__number').value='';
	document.querySelector('.user__comments').value='';
	Swal.fire(
  'Good job!',
  'we contact you shortly',
  'success'
)
}