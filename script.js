function randomRGB(){
let a,b,c;
a=parseInt(Math.random()*256);
b=parseInt(Math.random()*256);
c=parseInt(Math.random()*256);
    // console.log('rgb('+a+','+b+','+c+');');
    let rgb = 'rgb('+a+','+b+','+c+')';
    let text = "Background color : ";
    document.body.style.backgroundColor = rgb
    document.getElementById("speaker").innerHTML = text+rgb


}

function randomHEX(){
    let value= Array(6)
    hexLog = ["A","B","C","D","E","F"]
    let hex = '#';
    for(let i =0 ; i<6;i++){
        value[i]=parseInt(Math.random()*16)
        // console.log("value is: "+value[i]);
        if(value[i]>=10)
            value[i]=hexLog[value[i]%10]
        hex+=value[i]
        // console.log("final value is: "+value[i]);
    }
        
        let text = "Background color : hex "
        document.body.style.backgroundColor = hex
        document.getElementById("speaker").innerHTML = text+hex


    }