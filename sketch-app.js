function createGrid(){
    
    let cont=document.querySelector('.container');
    cont.style.height="400px";
    cont.style.width="400px";
    cont.style.display="flex";
    cont.style.flexDirection='column';
    cont.style.padding='0px';
    cont.style.border='thin dotted black'
    
    
    
    //cont.style.justifyContent="start";
    //cont.style.alignItems="strech";
    
    for(let i=0;i<16;i++)
     {
        let r = document.createElement('div');
        
        r.innerHTML=' ';
       // r.style.backgroundColor='grey';
       //r.style.border='thin solid black';
        //r.style.width='400px';
        // r.style.height='20px';
       // r.style.width='400px';
        r.style.margin='0px';
        r.style.flexGrow="1";

        r.style.display='flex';
        r.style.flexDirection='row';
       // r.style.alignContent='start';
        

        document.querySelector('.container').append(r);

        for(let j=0;j<16;j++)
        {
            let c= document.createElement('div');
            c.innerHTML=' ';
            c.style.backgroundColor='white';
            //c.style.border='thin solid black';
            c.style.margin="0px";
            c.style.height=calculateDim(16);
            c.style.width=calculateDim(16);
            c.style.flexGrow='1';
            
            r.append(c);

            //event listener on each pixel

            c.addEventListener('mouseenter' , draw);
            function draw()
            {
                c.style.backgroundColor='black';
            }
        }
   }
}

function calculateDim(n){
     return Math.floor(400/n);
}
createGrid();

