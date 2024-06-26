let s1 = parseInt(prompt("enter subject 1 marks"));
let s2 = parseInt(prompt("enter subject 2 marks"));
let s3 = parseInt(prompt("enter subject 3 marks"));
let p = ((s1+s2+s3)/300)*100;
document.write(p);

if(p>75)
    {
        alert("distinction");
    }
else
{
    alert("pass");
}
    document.write("<br>");
