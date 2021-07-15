 // Create a close button and append it to each list item
 var myList = document.getElementsByTagName("LI");
 var i;
 for (i = 0; i < myList.length; i++)
 {
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     myList[i].appendChild(span);
 }
 
 //Click on close button to hide/remove current list item
 var close = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < close.length; i++)
 {
     close[i].onclick = function() {
         var div = this.parentElement;
         div.style.display = "none";
     }
 }
 
 // Add a checked symbol when clicked on a list item
 var list = document.querySelector('ul');
 list.addEventListener('click', function(ev) {
     if (ev.target.tagName === 'LI') {
         ev.target.classList.toggle('checked');
     }
 }, false);
 
 // Create a new list item when adding an item to To Do List
 function newElementToDo() {
     var li = document.createElement("li");
     var inputValue = document.getElementById("myInput").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if (inputValue === '') {
         alert('You must write something!');
     } else {
         document.getElementById('myToDoList').appendChild(li);
     }
     document.getElementById("myInput").value = "";
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     li.appendChild(span);
     
     for (i = 0; i < close.length; i++) {
         close[i].onclick = function() {
             var div = this.parentElement;
             div.style.display = "none";
         }
     }
 }

 //Ongoing List
 function newElementToOngoing() {
     var li = document.createElement("li");
     var inputValue = document.getElementById("myInput").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if (inputValue === '') {
         alert('You must write something!');
     } else {
         document.getElementById('myOngoingList').appendChild(li);
     }
     document.getElementById("myInput").value = "";
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     li.appendChild(span);
     
     for (i = 0; i < close.length; i++) {
         close[i].onclick = function() {
             var div = this.parentElement;
             div.style.display = "none";
         }
     }
 }

 //Done List
 function newElementToDone() {
     var li = document.createElement("li");
     var inputValue = document.getElementById("myInput").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if (inputValue === '') {
         alert('You must write something!');
     } else {
         document.getElementById('myDoneList').appendChild(li);
     }
     document.getElementById("myInput").value = "";
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     li.appendChild(span);
     
     for (i = 0; i < close.length; i++) {
         close[i].onclick = function() {
             var div = this.parentElement;
             div.style.display = "none";
         }
     }
 }