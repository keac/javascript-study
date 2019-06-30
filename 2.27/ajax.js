// JavaScript Document
function ajax(url,fnSess,fnFaild){
	
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else{
		var oAjax=new ActiveXobject("Microsoft.XMLHTTP");
	}
	oAjax.open('GET',url,true);
	oAjax.send();
	oAjax.onreadystatechange=function()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
			  fnSess(oAjax.responseText);
			}
		}
		else
		{
			if(fnFaild)
			{
				fnFaild(oAjax.status);
			}
		}
	}
		
	
	
}