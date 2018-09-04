let parent = document.getElementById('item-icon');
const max = 10;
const zero = 0;
const one = 1;
document.getElementById('btn').disabled = true;
document.getElementById('input-text').onkeyup = function() {
  btnActive();
}
function btnActive() {
  if (!document.getElementById('input-text').value) {
    document.getElementById('btn').disabled = true;
  } else {
    document.getElementById('btn').disabled = false;
  }
}
function addContent() {
  const li = document.createElement('li');
  li.setAttribute('class', 'item-li');
  let text = document.getElementById('input-text').value;
  let btn_done = document.createElement('button');
  btn_done.setAttribute('class', 'btn-done');
	btn_done.innerHTML = '<i class="material-icons">check_box_outline_blank</i>'
  let btn_delete = document.createElement('button');
  btn_delete.setAttribute('class', 'btn-delete');
  btn_delete.innerHTML = '<i class="material-icons">delete</i>';
  let t = document.createTextNode(text);
  parent.appendChild(li);
  li.appendChild(btn_done);
  li.appendChild(t);
  li.appendChild(btn_delete);
  btn_done.onclick = event => {
 btn_done.innerHTML = '<i class="material-icons">check_box</i>' 
};
  btn_delete.onclick = event => {
 parent.removeChild(li); 
  document.getElementById('input-text').disabled = false;
    };
  if (text.length > zero && parent.getElementsByTagName('li').length <= max - one) {
    document.getElementById('input-text').value = '';
    document.getElementById('btn').disabled = true;
  } else if(parent.getElementsByTagName('li').length === max) {
    document.getElementById('input-text').value = '';
    document.getElementById('btn').disabled = true;
    document.getElementById('text-limit').style.display = 'block';
    document.getElementById('input-text').disabled = true;
    document.getElementById('input-text').value = '';
    document.getElementById('btn').disabled = true;
  }
}
