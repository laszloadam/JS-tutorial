let list = document.getElementById('list');
let number = 1;

function adding() {
  
  let newItemTitle = document.getElementById('newItemTitle').value;
    let newItemTime = document.getElementById('newItemTime').value;
  let newItemText = document.getElementById('newItemText').value;
  let id = "item"+number;
  if(newItemTitle==''){
    alert('Nem adtál meg címet.')
    return
  };
  list.innerHTML +='<li id="'+id+'"><div class="items"><div class="itemContent"><h3>'+newItemTitle +'</h3><p>'+ newItemTime+ '</p><p>'+newItemText+'</p></div><button class="btns" onclick="{item'+number+'.remove()}">X</button></div></li>';
  number++; 
  document.getElementById('newItemTitle').value = '';
  document.getElementById('newItemTime').value = '';
  }


function maxLengthNumber() {
  let maxLength = document.getElementById('maxLength');
  let lengthWatcher = document.getElementById('lengthWatcher');
  let newItemText = document.getElementById('newItemText').value;
  maxLength.innerHTML = newItemText.length;
  if(newItemText.length > 139){
    lengthWatcher.classList.add('lengthWatcherAlert')
  } else { lengthWatcher.classList.remove('lengthWatcherAlert')
  }
}