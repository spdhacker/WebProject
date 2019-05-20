function save()
{
	var Bid=document.getElementById("Bid").value;
	var color=document.getElementById("color").value;
	var quantity=document.getElementById("quantity").value;

	if(Bid == "" || color == "" || quantity== "")
	{
		alert("fields can't be empty");
		return ;
	}

	var obj={
		col:color,
		qua:quantity
		};
	localStorage.setItem(Bid,JSON.stringify(obj));

	var wow=JSON.parse(localStorage.getItem(Bid));
	console.log(wow.col+" "+wow.qua);

	alert(wow.col+" has been saved")
	location.replace("HomePage.html");
}

function load()
{
	try
	{

		if(!localStorage)
		{
		}
		else
		{		
		}

	}

	catch(err)
	{
		alert("This browser is not Supporting localStorage");
		document.getElementById("error").innerHTML="This browser is not Supporting localStorage.Go to browser settings to allow localStorage.";
	}


	var msg="<table style='width:100%;'> <tr>      <th>Block Id</th>      <th>Color </th>      <th>Quantity</th>     <th> </th>  </tr>	";
	var i;

console.log("entered loadData");

	for(i=0;i<localStorage.length;i++)
	{
		var ke=localStorage.key(i);
		//var valz=JSON.parse(localStorage.getItem(ke));

		//msg=msg+"<br>"+ke+"--"+valz.col+"--"+valz.qua;

		var wow=JSON.parse(localStorage.getItem(ke));

		
		msg=msg+"<tr> <td width='10%' onclick='edit(this)'>"+ke+"</td> <td width='10%'>"+wow.col+"</td> <td width='10%'>"+wow.qua+"</td> <td width='70%'><label class='labelstyle'>edit<input style='display:none;' value="+ke+" onclick='edit(this)'></label></td> </tr>";
	console.log(wow.col+" "+wow.qua);
	}

	msg=msg+"</table>"
	document.getElementById("demo").innerHTML=msg;
}

function edit(x)
{
	
	localStorage.setItem("pass",x.value);
	location.assign("NewBlock.html");

}

function set()
{
	var setID=localStorage.getItem("pass");

	if(setID!=null)
	{
	alert("Block Id can't be change");
	console.log(setID+" from set");
	document.getElementById("Bid").value=setID;
	document.getElementById("Bid").readOnly="true";
	var wow=JSON.parse(localStorage.getItem(setID));
	console.log(wow.col+"--"+wow.qua);
	document.getElementById("color").value=wow.col;
	document.getElementById("quantity").value=wow.qua;
	localStorage.removeItem("pass");
	}
	else
	{
		console.log("opened for add");
	}

}