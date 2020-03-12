function showDateTime(){
    var date = new Date();
    var h = date.getHours(); //This returns 0-23h
    var m = date.getMinutes(); //This returns 0-59
    var s = date.getSeconds();//This returns 0-59
    // var session =  "a.m.";
	var titel = "Mirëmengjesi"

    var year = date.getFullYear();

    var month = date.getMonth();
    var montharray = ["Januar", "Shkurt", "Mars", "Prill", "Mai", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nentor", "Dhjetor"];
    month = montharray[month];

    var day = date.getDay();
    var dayarray = ["Hëne", "Marte", "Merkur", "Ejte", "Premte"];
    day = dayarray[day - 1];

    var date = date.getDate();

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        // session = "p.m.";
		titel = "Mirëmbrama";
        // h = h - 12;
    }
	if(h < 10 ) {
		titel = "Mirdita";
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
    
    // document.getElementById("ClockDisplay").innerText = date;
    // document.getElementById("ClockDisplay").textContent = date;
    // document.getElementById("DateDisplay").innerText= title;
    // document.getElementById("DateDisplay").textContent = title;
	// document.getElementById("titel").innerText = time;
	// document.getElementById("titel").textContent = time;
	

    setTimeout(showDateTime, 100);
}