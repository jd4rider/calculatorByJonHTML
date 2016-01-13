window.onkeyup = function (e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (key == 103 || key == 55) {
        v("7");
    } else if (key == 104 || key == 56 && !16) {
        v("8");
    } else if (key == 105 || key == 57) {
        v("9");
    } else if (key == 100 || key == 52) {
        v("4");
    } else if (key == 101 || key == 53) {
        v("5");
    } else if (key == 102 || key == 54) {
        v("6");
    } else if (key == 97 || key == 49) {
        v("1");
    } else if (key == 98 || key == 50) {
        v("2");
    } else if (key == 99 || key == 51) {
        v("3");
    } else if (key == 111 || key == 191) {
        v("/");
    } else if (key == 106 || key == 16 && 56) {
        v("*");
    } else if (key == 109 || key == 189) {
        v("-");
    } else if (key == 107 || key == 187) {
        v("+");
    } else if (key == 96 || key == 48) {
        v("0");
    } else if (key == 110 || key == 190) {
        v(".");
    } else if (key == 13) {
        {
            try {
                c(eval(document.getElementById("d").value))
            }
            catch (e) {
                c('Error')
            }
        }
    } else if (key == 67 || key == 8) {
        c("");
    }
}
function c(val)
{
document.getElementById("d").value=val;
}
function v(val)
{
document.getElementById("d").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
}

}  