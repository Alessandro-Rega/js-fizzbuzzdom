const cont = document.querySelector("div.container");



for(let index = 1; index <= 100; index++){

    if(index%15 == 0){
        const box = `<div class="box rosso">fizzbuzz</div>`;
        cont.innerHTML += box;
    }
    else if(index%5 == 0){
        const box = `<div class="box giallo">buzz</div>`;
        cont.innerHTML += box;
    }
    else if(index%3 == 0){
        const box = `<div class="box verde">fizz</div>`;
        cont.innerHTML += box;
    }
    else{
        const box = `<div class="box">${index}</div>`;
        cont.innerHTML += box;
    }
    
}