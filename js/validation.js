function nam()
{
    var x = document.getElementById("name").value;
    if(x == "")
    document.getElementById("n").innerHTML = "Mandatory field."
}
function emai()
{
    var x = document.getElementById("name").value;
    if(x == "")
    document.getElementById("e").innerHTML = "Mandatory field."
}
function addd()
{
    var x = document.getElementById("name").value;
    if(x == "")
    document.getElementById("a").innerHTML = "Mandatory field."
}
function formv(myform)
{
    var x = document.getElementById("name").value;
    var y = document.getElementById("email").value;
    var z = document.getElementById("add").value;

    if(x==""||y==""||z=="")
    {
        document.getElementById("k").innerHTML = "* are mandatory details."
    }
}
function promptv() {
  var person = prompt("Please enter your name", "");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}

function checkboxk()
{

    var count = 0;
    for(var i = 0; i < form1.q.length; i++)
    {
        if(form1.q[i].checked === true)
        count++;
    }
    if(count<3)
    {
        alert("Please make at least 3 selections. So far you have made only "+count+" selection");
    }
}
function selectall()
{
    document.getElementById("sl").select();
}
function searc()
{
    var x = document.getElementById("web").value;
    var y = document.getElementById("query").value;
    switch(x)
    {
        case "G":
        {
            window.location.href="https://www.google.com/search?q="+y+"";
            break;
        }
        case "Y":
        {
            window.location.href="https://in.yahoo.com/search?p="+y+"";
            break;
        }
        case "B":
        {
            window.location.href="https://www.bing.com/search?q="+y+"";
            break;
        }
        case "D":
        {
            window.location.href="https://duckduckgo.com/?q="+y+"";
            break;
        }
    }
}