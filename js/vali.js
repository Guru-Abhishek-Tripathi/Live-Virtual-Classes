function jfun1()
{
    var x = document.getElementById('eng').value;
    var y = document.getElementById('gk').value;
    var z = document.getElementById('math').value;
    var i = parseInt(x,10);
    var j = parseInt(y,10);
    var k = parseInt(z,10);
        if(i<=100&&i>=0&&j<=100&&j>=0&&k<=100&&k>=0)
        {
            document.getElementById('tot').value = i+j+k;
            document.getElementById('per').value = (i+j+k)/3;
            document.getElementById('high').value = max_of_three(i,j,k);
        }
        else
        {
            alert("Enter your marks b/w 0 to 100.");
            document.getElementById('eng').value="";
            document.getElementById('gk').value="";
            document.getElementById('math').value="";
        }
}
function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}
function result()
{
  var count = 0;
    if(myform.q1[3].checked)
    count++;
    if(myform.q2[1].checked)
    count++;
    if(myform.q3[1].checked)
    count++;
    alert("You got "+ count*2 + " marks out of 6");
    document.getElementById("demo").innerHTML = "You got "+ count*2 + " marks out of 6";
}