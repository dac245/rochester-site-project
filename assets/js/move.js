var images = new Array();
var x = 0;
images[0] = 'assets/images/zoo.jpg';
images[1] = 'assets/images/seabreeze.jpg';
images[2] = 'assets/images/art.jpg';
images[3] = 'assets/images/science.jpg';
images[4] = 'assets/images/frontier.jpg';
images[5] = 'assets/images/arena.jpg';
images[6] = 'assets/images/eastman.jpg';
images[7] = 'assets/images/toy.jpg';

var newPara = new Array();
var y = 0;
var w = 0;
var z = 0;
newPara[0] = 'par1';
newPara[1] = 'par2';
newPara[2] = 'par3';
newPara[3] = 'par4';
newPara[4] = 'par5';
newPara[5] = 'par6';
newPara[6] = 'par7';
newPara[7] = 'par8';

function moveleft(){
	var leftImg = document.getElementById("chng");
	
	if (x <= 0) {
        x = images.length - 1;
    } 
    else {
        x--;
    }
    
    if (y <= 0){
        y = newPara.length - 1;
        w = y - 1;
        z = 0;
    } 
     else{
        y--;
        w = y - 1;
        z = y + 1;
        
        if(y === 0){
			y = 0;
			w = newPara.length - 1;
			z = 1;
		}
    }

    leftImg.src = images[x];
 
	 document.getElementById(newPara[w]).style.display = "none";
	 document.getElementById(newPara[y]).style.display = "initial";
	 document.getElementById(newPara[z]).style.display = "none";
}

function moveright(){
	var rightImg = document.getElementById("chng");
	
	x = (x + 1) % images.length;         //  modulus keeps x within the bounds, while incrementing
	y = (y + 1) % newPara.length;
	
   rightImg.src = images[x];     	
   
   if(y === 0){
		w = 7;
		z = 1;
	}
	else{
		w = y - 1;
		z = y + 1;
	}
   
   document.getElementById(newPara[w]).style.display = "none";
   document.getElementById(newPara[y]).style.display = "initial";
   document.getElementById(newPara[z]).style.display = "none";
}
