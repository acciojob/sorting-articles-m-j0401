//your JS code here. If required.
let list=document.querySelector("#band");
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a,b)=>a.localeCompare(b));
let fragment=document.createDocumentFragment();
for(let b of bands)
	{
		let li=document.createElement("li");
		li.innerText=b;
		fragment.append(li);
	}
list.append(fragment);


