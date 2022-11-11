var covid = 0
function cc () {
	covid = covid + 1
}
function ccc () {
	covid = covid + 3
}

function cccc () {
	covid = covid + 7
}

function c () {
	covid = covid + 2
}
console.log(covid)
function p () {
if (covid > 9 ){
	   document.getElementById('c').innerHTML = "ความเสี่ยงสูงมาก!!"
	 }
	 else if (covid > 6 ){
	   document.getElementById('c').innerHTML = "ความเสี่ยงสูง"
	 }
	 else if (covid < 4 ){
	   document.getElementById('c').innerHTML = "ความเสี่ยงปกติ"
	 }
	 else {
		document.getElementById('c').innerHTML = "ความเสี่ยงน้อยมากก"
	 }
}