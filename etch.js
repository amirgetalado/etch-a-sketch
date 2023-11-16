const gContainer=document.querySelector('.grid-container');


const row=16;
const column=16;

for(i=0; i<row*column; i++){
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gContainer.appendChild(gridItem);
}

let gridItemAll = document.querySelectorAll('.grid-item'); //querySelectorAll returns arraylike nodelist
let items = Array.from(gridItemAll);

for(const item of items){
    item.addEventListener('mousedown', function(){
        item.setAttribute('style', 'background-color: pink;');
    });
   
}


// Inputs from user:
//  -color
//  -clicking the grid to color
//  -grid size(row x column)
//  -clear button 
