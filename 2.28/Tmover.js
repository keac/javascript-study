// JavaScript Document
function Mover(id)
{
	var _this=this;
	this.disX=0;
	this.disY=0;
	this.oDiv=document.getElementById(id);
	this.oDiv.onmousedown=function(ev)
	{
		_this.fnmoused(ev)
	}
}	
Mover.prototype.fnmoused=function(ev)
{
	var _this=this;
	var oEvent=ev||event;
	this.disX=oEvent.clientX-this.oDiv.offsetLeft;
	this.disY=oEvent.clientY-this.oDiv.offsetTop;
	
	document.onmousemove=function(ev)
	{
		_this.fnMousem(ev)
		
	}
	document.onmouseup=function(ev)
	{
		_this.fnMouseu(ev)
	};	
}
Mover.prototype.fnMousem=function (ev)
{
  var oEvent=ev||event;
  this.oDiv.style.left=oEvent.clientX-this.disX+'px';
  this.oDiv.style.top=oEvent.clientY-this.disX+'px';
  document.title=this.oDiv.offsetLeft;
}
Mover.prototype.fnMouseu=function (ev)
{
    document.onmousemove=null;
	this.oDiv.onmouseup=null;
}