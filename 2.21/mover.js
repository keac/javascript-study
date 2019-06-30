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
function mover(obj,arr,iTarget){
"use strict";
  if(arr==='opacity'){
	  iTarget*=100;
  }
	clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
		var car=0;
		if(arr==='opacity'){
			car=parseFloat(getStyle(obj,arr))*100;
		}else{
		    car=parseInt(getStyle(obj,arr));
		}
		
		var speed=(iTarget-car)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(car===iTarget){
				clearInterval(obj.timer);
			}else{
				if(arr==='opacity'){
					obj.style[arr]=(car+speed)/100;
					obj.style[arr]='alpha(opacity:'+(car+speed)+')';
   					}else{
				obj.style[arr]=car+speed+'px';
				}
				
			}
		
		},30);
	
	}