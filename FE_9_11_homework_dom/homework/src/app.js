let parent = document.getElementById('item-icon');

document.getElementById("btn").disabled  = true;

document.getElementById("input-text").onkeyup = function(){
	btnActive();
}

function btnActive(){
	if (!document.getElementById("input-text").value) {
		
		document.getElementById("btn").disabled  = true;
	}
	else {
		document.getElementById("btn").disabled = false;
	}

}
  
function add_icon(){

	let text = document.getElementById("input-text").value;
    let li = document.createElement("li");
    li.setAttribute("class", "item-li" );
  	let btn_done = document.createElement("button");
    let btn_delete = document.createElement("button");

    btn_delete.setAttribute("class", "btn-delete");
    btn_delete.innerHTML = "<i class=\"material-icons\">delete</i>";
    btn_done.innerHTML = "<i class=\"material-icons\">check_box_outline_blank</i>"
    if (text.length > 0  && parent.getElementsByTagName('li').length <=9) {
    let t = document.createTextNode(text);
    li.appendChild(btn_done);
    li.appendChild(t);
    li.appendChild(btn_delete);
    parent.appendChild(li);
    let text2 = document.getElementById("input-text").value = '';
    document.getElementById("btn").disabled  = true;
    }
}

document.getElementsByClassName("btn-delete").addEventListener("click", function(){
    alert("Hello World!");
});
