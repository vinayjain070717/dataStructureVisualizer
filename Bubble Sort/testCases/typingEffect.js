        function TypingEffect(canvasContext,string,x,y,delay,style,color)
        {
        	var string,x,y,delay,canvasContext;
        	var i = 0;
        	if(string) this.string=string;
        	else string="";
        	if(x) this.x=x;
        	else this.x=0;
        	if(y) this.y=y;
        	else this.y=0;
        	if(delay) this.delay=delay;
        	else this.delay=1000;
        	this.canvasContext=canvasContext;
        	if(style) this.style=style;
        	else this.style="16px arial";
        	if(color) this.color=color;
        	else this.color="black";
        	var THIS=this;
        	this.makeTypingEffect=function()
        	{
        		// console.log(canvasContext);
        		// console.log(x)
        		// console.log(THIS.canvasContext);
	      	    if (i < THIS.string.length) 
	        	{
	        		THIS.canvasContext.font=THIS.style;
	        		THIS.canvasContext.fillStyle=THIS.color;
	                THIS.canvasContext.fillText(THIS.string.charAt(i),THIS.x,THIS.y);
	                THIS.x=THIS.x+THIS.canvasContext.measureText(THIS.string.charAt(i)).width;
			        setTimeout(THIS.makeTypingEffect, THIS.delay);
	                i++;
	        		THIS.canvasContext.font="20px arial";
	        		THIS.canvasContext.fillStyle="black";
	            }
	        }
        }
