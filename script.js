//your JS code here. If required.
let list=document.querySelector("#bands");
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a,b)=>splited(a).localeCompare(splited(b)));
let fragment=document.createDocumentFragment();
for(let b of bands)
	{
		let li=document.createElement("li");
		li.innerText=b;
		fragment.append(li);
	}
list.append(fragment);


function splited(str) {
	 let arr=str.split(" ");
		if(arr[0]=="A" || arr[0]=="An" || arr[0]=="The")
		{
		let temp=arr.slice(1);
			return temp.join(" ");
		}
		return arr.join(" ");
}



