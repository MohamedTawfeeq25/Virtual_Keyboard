const box=document.getElementById("txt");
var caps="off";var shift=-1;
function eve(e){
	if(e=="space"){
		if (shift==0){
			shift=-1
			var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:lowercase";
		})
		}
		box.value+=" ";
	}
	else if(e=="tab"){
		if (shift==0){
			shift=-1
			var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:lowercase";
		})
		}
		box.value+="    ";
	}
	else if(e=="shift"){
		if(shift==-1){
			shift=0;
			var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:capitalize";
		})
		}
		else if (shift==0){
			shift=-1
			var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:lowercase";
		})
		}
	}
	else if(e=="back"){
		if (shift==0){
			shift=-1
			var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:lowercase";
		})
		}
		var a=box.value;
		box.value=a.slice(0,a.length-1);
	}
	
	else if(e=="caps"){
			if (shift==0){
			shift=-1
			var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:lowercase";
		})
		}
		if(caps=="off"){
			caps="on";
		var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:capitalize";
		})
			
		}
		else{
			caps="off";
			var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:lowercase";
		})
		}
	}
	else{
		if (shift==0){
			shift=-1;
			box.value+=e.toUpperCase();
			var a=document.querySelectorAll(".key");
		a.forEach((a)=>{
			a.style="text-transform:lowercase";
		})
		}
		else if(caps=="on"){
			box.value+=e.toUpperCase();
		}
		else if(caps=="off"){
			box.value+=e.toLowerCase();
		}
		
	}
	
}