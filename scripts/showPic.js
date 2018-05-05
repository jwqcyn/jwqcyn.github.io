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
