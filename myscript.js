function changeDisplay()
{
        var mark = document.getElementById('demo').innerHTML;
        if (mark === "JavaScript can change HTML content.")
                {
                document.getElementById('demo').innerHTML = "Hello JavaScript!";
                }
        else
        {
        document.getElementById('demo').innerHTML = "JavaScript can change HTML content."
        }
}
window.alert("CO TAM?");
var komuchy = ["wałęsa śmieć", "kwaśniewski", "kiszczak"];
document.getElementById("demo2").innerHTML = komuchy.toString() + " " + "to sa komuchy";
var numbers = [1,2,3,4,5,6,7,8,9]
document.getElementById('demo3').innerHTML = numbers.join(" * ") + " = WIELE"
