    const fun =(a,b)=>{
    const d=a.split(' ');
    const c=b.split(' ');
    let num1=0;
    let num2=0;
    
    for(i=0;i<d.length;i++)
        {
            num1++;
        }
     for(i=0;i<c.length;i++)
        {
            num2++;
        }
    if(num1==num2)
        {
            console.log('true')
        }
    else{
        console.log('false')
    }
}
console.log(fun('abc','ABC'));