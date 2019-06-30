// JavaScript Document
function Mover2(id)
{
	Mover.call(this,id);	
}
for (var i in Mover.prototype)
{
	Mover2.prototype[i]=Mover.prototype[i];
}