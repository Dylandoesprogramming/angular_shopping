document.getElementById("body").addEventListener("click", strikeOut);

function strikeOut(){
  var purchased = document.getElementsByClassName('bought');
  var notPurchased = document.getElementsByClassName('not-bought')
  for(var i = 0; i < purchased.length; i++){
    purchased[i].style.textDecoration = "line-through";
  }
  for(var i = 0; i < notPurchased.length; i++){
    notPurchased[i].style.textDecoration = "none";
  }
}
