/*jshint unused:false*/
function getByClass(oParnet,sClass){
"use strict";	
	var aEle=oParnet.getElementsByTagName('*');
	var aResult=[];
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className===sClass){
		aResult.push(aEle[i]);
		}
		}
	return aResult;
}	
	
function getStyle(obj,name){
"use strict";
		if(obj.currentStyle){
			return obj.currentStyle[name];
		}else{
			return getComputedStyle(obj,null)[name];
		}
}
function mover(obj,json,fnEnd){
"use strict";

	clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
		
		var bstop=true;
		for( var attr in json ){
			if(json.hasOwnProperty(attr)){
		var cur=0;
		if(attr==='opacity'){
			cur=parseFloat(getStyle(obj,attr))*100;
		}else{
		    cur=parseInt(getStyle(obj,attr));
		}
		
		
		var speed=(json[attr]-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur!==json[attr]){
				bstop=false;
				}

				if(attr==='opacity'){
					obj.style[attr]=(cur+speed)/100;
					obj.style[attr]='alpha(opacity:'+(cur+speed)+')';
   					}else{
				obj.style[attr]=cur+speed+'px';
				}
			if(bstop){
				clearInterval(obj.timer);
				if(fnEnd){fnEnd();}
				
				}
			
		}
		}
		},30);
	
	}