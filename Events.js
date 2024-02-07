//-------liya ID200485159 Final 2022a-----------

data.sort(function (a, b) {
	var dateA=new Date(a.date);
	var dateB=new Date(b.date);
	
	if(dateA.getTime()<dateB.getTime()){
		return -1;
	}
	if(dateA.getTime()>dateB.getTime()){
		return 1;
	}

	return 0;
});

data.sort(function sortHours( a, b ) {
	var timeA ='';
	var timeB ='';
	if (a.time.length < 5)
		timeA = "0" + a.time;
	else
		timeA = a.time;
	if (b.time.length < 5)
		timeB = "0" + b.time;	
	else
		timeB = b.time;	
  if ( timeA < timeB){
    return -1;
  }
  if ( timeA > timeB){
    return 1;
  }
   return 0;
});

var currDate = moment().format('DD/MM/YYYY');//real date 
var caldrDate;//calander's date 


var arrayOfEvnts = [];
if (localStorage.getItem("Events") != null) {// store the current data to varaible of array 
	arrayOfEvnts = JSON.parse(localStorage.getItem("Events") || "[]");// convert
}

var txt = '';

for (var i = 0; i < data.length; i++) {
	caldrDate = data[i].date;
	txt += '<table width=100%><tr>';
	if(caldrDate != currDate)
		txt += '<td width=20% class="timeFrame">' + '<label class="date">'+data[i].date+'</label>';
	else
		txt += '<td width=20% class="timeFrame">' + '<label class="date">Today</label>';
	txt += '<br />' + '<label class="time">'+data[i].time+'</label>';
	txt += '</td>';
	txt += '<td width=40% class="eventData">' +'<label class="title">'+data[i].title+'</label>';
	txt += '<br /><br />' +'<label class="descr">'+ data[i].description+'</label>';
	txt += '</td><td width=40%><button type="button" onclick="addToStorage(data['+i+'])" class="adding" >+ Add to Calander</button>';
	txt += '</td></tr></table><br />';
}

function addToStorage(item)
{
	var obj = {"date": item.date, "time": item.time, "title": item.title, "description": item.description};
	arrayOfEvnts.push(obj);
	localStorage.setItem("Events", JSON.stringify(arrayOfEvnts));//overiding 
}

document.body.innerHTML += txt;
