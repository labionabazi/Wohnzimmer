function showDateTime(){
    var date = new Date();
    var h = date.getHours(); //This returns 0-23h
    var m = date.getMinutes(); //This returns 0-59
    var s = date.getSeconds();//This returns 0-59
	var titel = "Mirdita"

    var year = date.getFullYear();

    var month = date.getMonth();
    var montharray = ["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor"];
    month = montharray[month];
    

    var day = date.getDay();
    var dayarray = ["e hënë", "e marte", "e mërkurë", "e enjte", "e premte", "e shtunë", "e diel"];
    day = dayarray[day - 1];
    console.log(date.getDay())

    var date = date.getDate();

    if(h >= 17){
		titel = "Mirmbrema";
    }
	if(h < 10 ) {
        titel = "Mirmengjes"
	}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " ";
    var date = day + ", " + date + ". " + month + " " + year;
    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;
    document.getElementById("DateDisplay").innerText= date;
    document.getElementById("DateDisplay").textContent = date;
	document.getElementById("titel").innerText = titel;
    document.getElementById("titel").textContent = titel;

    setTimeout(showDateTime, 100);
}