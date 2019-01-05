function loadXML(file)
{
    var xmlHttp;
    if(window.XMLHttpRequest)
    {
        // Instansiasi untuk IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
    }
    else
    {
        //Instansiasi untuk IE5, IE6
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

    }

    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState==4 && xmlHttp.status==200){

        var xml = xmlHttp.responseXML
        Bio = xml.documentElement.getElementsByTagName("Bio");
        judul = Bio[0].getElementsByTagName("Data")[0].childNodes[0].nodeValue;
        document.getElementById("keterangan").innerHTML = Data;
        }
    }

    xmlHttp.open("GET",file,true);
    xmlHttp.send("");
}