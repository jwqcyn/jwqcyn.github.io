window.onload=preparelinks;
function preparelinks(){
 var links=document.getElementsByTagName("a");
 for (var i=0;i<links.length;i++){
   if(links[i].getAttribute("class")=="popup"){
     links[i].onclick=function(){
       popUp(this.getAttribute("href"));
       return false;
      }
     }
   }
 }
function prepareGallery() {
if (!document .getElementsByTagName return false;
if (!document .getElementById) return false;
if (!document .getElementById( "imagegallery") return false;
var  gallery =document .getElementById (" imagegallery" );
var  links = gallery.getElementsByTagName("a" );
for ( var i=O; i < links.length; i++) {
links[i].onclick = function() {
return showPic(this)? false: true;

}
}
}
function showPic(whichpic){
if (!document ,getElementById("placeholder")) return false;
var source =whichpic .getAttribute("href )
var. placeholder " document ,getElementById ("placeholder");
if (placeholder ,nodeName != "IMG") return false;
placeholder .setAttribute("src" ,source);
if (document.getElementByI("description"))
var text=whichpic.getAttribute("title")? whichpic.getAttribute("title") :"";
  var description = document .getElementById ("description");
if (description.firstChild.nodeType ==3) {
  description. firstChild.nodeValue =text;
}}
return true;}

addLoadEvent(prepareGallery);
window.onload=preparelinks;
function preparelinks(){
 var links=document.getElementsByTagName("a");
 for (var i=0;i<links.length;i++){
   if(links[i].getAttribute("class")=="popup"){
     links[i].onclick=function(){
       popUp(this.getAttribute("href"));
       return false;
      }
     }
   }
 }
function popUp(winURL){
window.open(winURL,"popUp","winth=320,height=480");
}
