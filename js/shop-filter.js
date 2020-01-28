let showFilterButton=document.querySelector('.show__filter--button');
let filterList=document.querySelector('.model__list');
showFilterButton.addEventListener('click',showFilterList);



function showFilterList(){
	if(filterList.style.display==='block'){
		filterList.style.display='none';
	}else{
	filterList.style.display='block';
	}
}