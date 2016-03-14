window.onload=function(){
	var button=document.getElementById("previewButton");
	button.onclick=previewHandler;
	makeImage();
}


function previewHandler(){
    var canvas=document.getElementById("tshirtCanvas");
    var context=canvas.getContext("2d");
    drawBird(canvas,context);
    fillBackgroundColor(canvas,context);
    drawText(canvas,context);
    
    

	var selectObj=document.getElementById("shape");
	var index=selectObj.selectedIndex;
	var shape=selectObj[index].value;
	
	if(shape=="squares"){
	  for(var squares=0; squares<20; squares++){
	    drawSquares(canvas,context);
	  }
	}else if(shape=="circles"){
		for(var circles=0; circles<20; circles++){
			drawCircles(canvas,context);
		}
	}
}

	 function drawSquares(canvas,context){
	   var w=Math.floor(Math.random() * 40);
	   var x=Math.floor(Math.random() * canvas.width);
	   var y=Math.floor(Math.random() * canvas.height);
	   context.fillStyle="lightblue";
	   context.fillRect(x,y,w,w);
	 }

	 function drawCircles(canvas, context){
	 	var radius=Math.floor(Math.random() * 40);
	 	var x=Math.floor(Math.random() * canvas.width);
	 	var y=Math.floor(Math.random() * canvas.height);
        context.beginPath();
	 	context.arc(x,y,radius,0,degreesToRadians(360),true);
	 	context.fillStyle="lightblue";
	 	context.fill();
	 }

	 function fillBackgroundColor(canvas,context){
	 	var selectObj=document.getElementById("backgroundColor");
	 	var index=selectObj.selectedIndex;
	 	var bgColor=selectObj[index].value;
	 	context.fillStyle=bgColor;
	 	context.fillRect(0,0,canvas.width,canvas.height);
	 }

	 function degreesToRadians(degree){
        return (degree*Math.PI)/180;
	 }

	 function updateTweets(sales){
	 	var tweetsSelection=document.getElementById("tweets");

	 	for (var i=0; i<sales.length; i++){
	 		tweet=sales[i];
	 		var option=document.createElement("option");
	 		option.text=tweet.text;
	 		option.value=tweet.text.replace("\"","'");
	 		option.innerHTML=tweet.text;

	 		tweetsSelection.options.add(option);
     	}

	 	tweetsSelection.selectedIndex=0;
	 }

	 function drawText(canvas,context){
	 	var selectObj=document.getElementById("foregroundColor");
	 	var index=selectObj.selectedIndex;
	 	var fgColor=selectObj[index].value;

	 	context.fillStyle=fgColor;
	 	context.font="bold 2.3em sans-serif";
	 	context.textAlign="left";
	 	context.fillText("I saw this tweet", 20, 40);
        
        selectObj=document.getElementById("tweets");
        index=selectObj.selectedIndex;
        var tweet=selectObj[index].value;
        context.font="italic 2em serif";
        context.fillText(tweet,100,200);

	 	context.font="bold 2em sans-serif";
	 	context.textAlign="right";
	 	context.fillText("and all I got was this lousy t-shirt!", canvas.width-20, canvas.height-40);
	 }

	 function drawBird(canvas,context){
	 	var twitterBird=new Image();
	 	twitterBird.src="twitterBird.png"
	 	twitterBird.onload=function(){
	 		context.drawImage(twitterBird,20,300,80,80);
	 	}
	 }

	 function makeImage(){
	 	var canvas=document.getElementById("tshirtCanvas");
	 	canvas.onclick=function(){
	 		window.location=canvas.toDataURL("image/png");
	 	}
	 }



	 

	 


