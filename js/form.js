

function openForm() {
    document.getElementById("myForm").style.display = "block";
}


function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


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



//https://api.telegram.org/bot1062519589:AAHoNrXrIwCXYJncAw7p_lZMkUcV_Zo13Io/sendMessage?chat_id=-397621618&text=hi_i_am_a_bot


//https://api.telegram.org/bot1062519589:AAHoNrXrIwCXYJncAw7p_lZMkUcV_Zo13Io/getUpdates


let submitBtn=document.querySelector('.btn');
submitBtn.addEventListener('click',submitForm);
let xhttp=new XMLHttpRequest();

function submitForm(){
	let userName=document.querySelector('.user__name').value;
	let phoneNumber=document.querySelector('.phone__number').value;
	let userComments=document.querySelector('.user__comments').value;
	const token='1062519589:AAHoNrXrIwCXYJncAw7p_lZMkUcV_Zo13Io';
	let url='https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-397621618&text='
	xhttp.open("GET",url + 'ФИО: ('+userName +') номер телефона:(' +phoneNumber + ') Комментрарий: (' + userComments + ')',true);
	 setTimeout(xhttp.send(),100);
	 setTimeout(refreshForm(),1000);
	 }

