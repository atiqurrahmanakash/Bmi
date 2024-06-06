const city = [
    "Bangladesh",
    "India",
    "Pakistan",
    "America",
    "China",
    "Rusia"
];

function gen(arg){
    let items = "";
    for(i = 0; i < arg.length ; i++){
        items += `<li> ${arg[i]}</li>`;
    }
    return items;
}

document.querySelector(".main").innerHTML = `
<ul>
    ${gen(city)}
</ul>
`;