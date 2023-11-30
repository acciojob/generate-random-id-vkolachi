// function random() {
// 	let randomNo=parseInt(Math.random()*100);
// 	if(randomNo<47  ){
// 		randomNo +=32;
// 	}else if(randomNo>57 && randomNo<64){
// 		randomNo +=32;
// 	}else if (randomNo>90 && randomNo<99) {
// 		randomNo -=12;
// 	}
// 	return randomNo;
// }
function makeid(n) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l)); 
