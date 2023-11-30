function random() {
	let randomNo=parseInt(Math.random()*100);
	if(randomNo<47){
		randomNo +=47;
	}
	return randomNo;
}
function makeid(n) {
  let str="";
	for(i=0;i<n;i++){
		str +=String.fromCharCode(random());
	}
    return str;
}
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
