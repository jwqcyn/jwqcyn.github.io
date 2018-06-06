addLoadEvent(displayAbbr);  
function displayAbbr(){  
    if(!document.getElementById) return false;  
    if(!document.getElementsByTagName) return false;  
    if(!document.createElement) return false;  
     var abbrs = document.getElementsByTagName("abbr");  
    // if(abbrs.length < 1) return false;  
     var arr = new Array();  
    for(var i=0; i<abbrs.length; i++){  
        var abbr = abbrs[i];  
        if(abbr.childNodes.length < 1) continue;  
        var key = abbr.lastChild.nodeValue;  
        var description = abbr.getAttribute("title");  
        arr[key] = description;  
    }  
    //创建定义列表  
    var xdl = document.createElement("dl");  
    for(key in arr){  
        var xdt = document.createElement("dt");  
        var atxt = document.createTextNode(key);  
        xdt.appendChild(atxt);  
        var xdd = document.createElement("dd");  
        var btxt = document.createTextNode(arr[key]);  
        xdd.appendChild(btxt);  
        xdl.appendChild(xdt);  
        xdl.appendChild(xdd);  
    }
     var header = document.createElement("h2");
     var header_text = document.createTextNode("Abbreviations");
     header.appendChild(header_text);
     document.body.appendChild(header);
     document.body.appendChild(xdl);  
}  
