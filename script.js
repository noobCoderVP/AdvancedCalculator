let a=document.getElementById("text");
let clas = document.getElementsByClassName("numbers");
for(let key of clas)
{
    console.log(key.id[1]);
    key.addEventListener("click", function()
    {
        if(a.textContent.length<11)
        {
            a.textContent+=Number(key.id[1]);
        }
        else
        {
            alert("maximum limit of digit is reached!");
        }
    });
}

document.getElementById("decimal").addEventListener("click", function()
{
    if(a.textContent.length<11)
    {
        a.textContent+=".";
    }
    else
    {
        alert("maximum limit of digit is reached!");
    }
});


document.getElementById("del").addEventListener("click", function()
{
    let b=a.textContent;
    let c = b.substring(0,b.length-1);
    a.textContent=c;
});

let sp= document.getElementById("span");
document.getElementById("clear").addEventListener("click", function()
{
    a.textContent="";
    sp.textContent="";
});

let num1, num2;

document.getElementById("add").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Addition";
});
document.getElementById("subt").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Subtraction";
});
document.getElementById("multi").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Multiplication";
});
document.getElementById("division").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Division";
});
document.getElementById("rem").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Remainder";
});
document.getElementById("sin").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Sin()";
});
document.getElementById("cos").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Cos()";
});
document.getElementById("tan").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Tan()";
});
document.getElementById("sqrt").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Square root";
});
document.getElementById("pow").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Power";
});
document.getElementById("log").addEventListener("click", function()
{
    num1=a.textContent;
    a.textContent="";
    sp.textContent = "Logarithm(base 10)";
});
document.getElementById("pi").addEventListener("click", function()
{
    a.textContent="3.141592653";
    num1 = "3.141592653";
});
document.getElementById("expo").addEventListener("click", function()
{
    a.textContent="2.718281828";
    num1 = "2.718281828";
});

let angle = document.getElementById("angle");
document.getElementById("equal").addEventListener("click", function()
{
    num2=a.textContent;
    if(sp.textContent=="Addition")
    {
        a.textContent=String(Number(num1) + Number(num2));
    }
    else if(sp.textContent=="Subtraction")
    {
        a.textContent=String(Number(num1) - Number(num2));
    }
    else if(sp.textContent=="Multiplication")
    {
        a.textContent=String(Number(num1)*Number(num2));
    }
    else if(sp.textContent=="Division")
    {
        if(num2==0)
        {
            a.textContent="not defined";
        }
        else
        {
            a.textContent=String(Number(num1)/Number(num2));
        }
    }
    else if(sp.textContent=="Remainder")
    {
        if(num2==0)
        {
            a.textContent=String(num1);
        }
        else
        {
            a.textContent=String(Number(num1)%Number(num2));
        }
    }
    else if(sp.textContent=="Tan()")
    {
        if(angle.textContent="Rad")
        {
            num2 = num2*Math.PI/180;
        }
        a.textContent=String(Math.tan(num2));
    }
    else if(sp.textContent=="Sin()")
    {
        if(angle.textContent="Rad")
        {
            num2 = num2*Math.PI/180;
        }
        a.textContent=String(Math.sin(num2));
    }
    else if(sp.textContent=="Cos()")
    {
        if(angle.textContent="Rad")
        {
            num2 = num2*Math.PI/180;
        }
        a.textContent=String(Math.cos(num2));
    }
    else if(sp.textContent=="Square root")
    {
        a.textContent=String(Math.sqrt(num2));
    }
    else if(sp.textContent=="Power")
    {
        a.textContent=String(Math.pow(num1,num2));
    }
    else if(sp.textContent=="Logarithm(base 10)")
    {
        a.textContent=String(Math.log10(num2));
    }    
});

let counter = 0;
document.getElementById("angle").addEventListener("click", function()
{
    counter++;
    if(counter%2==1)
    {
        angle.textContent="Rad";
    }
    else
    {
        angle.textContent="Deg";
    }
});

let counter2=0;
document.getElementById("mode").addEventListener("click", function()
{
    counter2++;
    if(counter2%2==1)
    {
        this.textContent="NormalMode";
        document.getElementById("calc").style.backgroundColor='black';
        document.getElementById("operation").style.color='white';
        document.getElementById("span").style.color='black';
        document.getElementById("text").style.border='3px solid white';
        document.getElementById("calc").style.border='5px solid white';
    }
    else
    {
        this.textContent="NightMode";
        document.getElementById("calc").style.backgroundColor='azure';
        document.getElementById("operation").style.color='black';
        document.getElementById("text").style.border='3px solid black';
        document.getElementById("calc").style.border='5px outset black';
    }
});
