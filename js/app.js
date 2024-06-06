let namee = document.querySelector("#name");
let height = document.querySelector("#email");
let weight = document.querySelector("#phone");
let check = document.querySelector("#check");
let bmires = document.querySelector("#bmires");
let summry = document.querySelector("#summry");
let prev = document.querySelector("#prev");
let forward = document.querySelector(".forward");
let result2 = document.querySelector(".result2");
let names = document.querySelector(".namesaa");
let my = document.querySelector(".my");
let bmis = document.querySelector(".bmis");
let heights = document.querySelector(".heights");
let weights = document.querySelector(".weights");
let ids = document.querySelector(".ids");
let mainsummmry = document.querySelector(".mainsummmry");
let id = 0;

const  idarr = [];
const  bmiarr = [];
const  namearr = [];
const  heightarr = [];
const weightarr = [];
check.addEventListener("click",()=>{
    id = id + 1;
    idarr.push(id);
    console.log(idarr);

    if(!namee.value && !height.value){
    }else if(!weight.value){
        
    }else{
        const bmi = weight.value / (height.value * 0.3048 )**2 ;
        bmiarr.push(bmi.toFixed(2));
        namearr.push(namee.value);
        heightarr.push(height.value);
        weightarr.push(weight.value);
        if(bmi >= 25 && bmi <=29.99){
            result2.innerHTML = `<label id="bmires" class="container_radio version_2 res1">${bmi.toFixed(2)} (OverWeight)</label>`
            mainsummmry.innerHTML=`<label id="summry" class="container_radio version_2 res4">!! Decrease Your Weight. Reducing calories and practicing healthier eating habits are key to overcoming obesity. Although you may lose weight quickly 
            </label>`;
        }else if(bmi < 18.5){
            result2.innerHTML = `<label id="bmires" class="container_radio version_2 res2">${bmi.toFixed(2)} (UnderWeight)</label>`
            mainsummmry.innerHTML=`<label id="summry" class="container_radio version_2 res6">!! Increase Your Weight .Eat a variety of foods that give you the nutrition you need. You should make sure you eat foods with enough energy to help you gain weight.</label>`;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result2.innerHTML = `<label id="bmires" class="container_radio version_2 res3">${bmi.toFixed(2)} (HealthyWeight)</label>`
            mainsummmry.innerHTML=`<label id="summry" class="container_radio version_2 res5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam magnam architecto ex dolorum dolorem ab repudiandae omnis sit atque!</label>`;
        }else {
            result2.innerHTML = `<label id="bmires" class="container_radio version_2 res9">${bmi.toFixed(2)} (Obese)</label>`
            mainsummmry.innerHTML=`<label id="summry" class="container_radio version_2 res7">loss your weight first.eat a healthy, reduced-calorie diet and exercise regularly. To do this you should: eat a balanced, calorie-controlled diet</label>`;
        }
    }
    console.log(bmiarr);
    console.log(namearr);

    function gen(arg){
        let items = "";
        for(i = 0; i < arg.length ; i++){
            items += `<li> ${arg[i]}</li>`;
        }
        return items;
    }

    ids.innerHTML = `<li>Id</li><li>${gen(idarr)}</li>`;
    names.innerHTML = `<li>Name</li><li>${gen(namearr)}</li>`;
    heights.innerHTML = `<li>Height(Foot)</li><li>${gen(heightarr)}</li>`;
    weights.innerHTML = `<li>Weight(Kg)</li><li>${gen(weightarr)}</li>`;
    bmis.innerHTML = `<li class="">Bmi</li>${gen(bmiarr)}`;
})














