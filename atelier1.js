//ex1 
function calcul(x,y)
{
    var pi = 3.14;
    if (x>0) 
        {return (x+y) * pi;}
    else 
        {return y * pi };

}
console.log(calcul(-1,5));

//ex2

function nombre_parfait(n)
{
    var i = 2;
    var c = 1;
    for(i;i<n;i++)
    {
        if (n%i==0)
        {
           c=c+i;

        }

    }
    if (c==n)
    {return 1;}
    else
    { return 0;}


}
console.log(nombre_parfait(6));
//ex 3 
var ch1='abc';
var ch2='de';
var T=[];
for (i=0;i<ch1.length;i++)
    { for (j=0;j<ch2.length;j++)
        {
            T.push(ch1[i]+ch2[j]);
           
        }
    }
    console.log(T);


//ex 4 
var T=[17, 38, 10, 25, 72]; 


    var i,j,x;
    for( i = 0 ; i <= 4 ; i++)
    {
            x = T[i];
            j = i;
            while( j > 0 & T[j-1] > x )
            {
                   T[j] = T[j-1];
                   j = j - 1;       
            }
            T[j] = x;
    }

console.log(T);
T[5]=12;
console.log(T);

var i;
for( i =5 ; i >=0 ; i--)
{
    console.log(T[i]);
}

console.log(T.indexOf(17));
delete T[1];
console.log(T);
console.log(T.splice(1,2));
console.log(T.splice(0,1));
console.log(T.splice(2));

//ex 5 
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var i=1; 
    var x = entierAleatoire(0,10);
    var n=prompt("guess the number");

    while (i<3)
    {
        
        if (n!=x)
        {   i++;
            n=prompt("try again ! ");
            
        }
        else 
        {
            alert("well done you guessed the number");
        }      
    }
    if (i==3)
    {
        alert("you lost !");
    }
    

//ex 6 
function modif_paragraphe()
{
 
    const vari = document.getElementById("clicked");
    vari.innerHTML="<em>paragraph in italic</em>";
     
}
function centrage_h1() {

    var h1 = document.getElementById('onclick');

        h1.setAttribute('align', 'center');
    
}
