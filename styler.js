let sheet;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
{
    sheet = "mobile.css";
    document.getElementById("pagestyle").setAttribute("href", sheet);
}
document.getElementById("content").style.opacity = 1;