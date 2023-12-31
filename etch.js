//all query selectors
const gContainer=document.querySelector('.grid-container');
const colorBtn = document.querySelector('.color-btn');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const size = document.querySelector('.size');
const input = document.querySelector('.color');
const size16 = document.querySelector('.size16');
const size48 = document.querySelector('.size48');
const size64 = document.querySelector('.size64');

//default size
let row=16;
let column=16;

//for creating the grid items inside the container
for(i=0; i<row*column; i++){
    let gridItem = document.createElement('div');
    gridItem.setAttribute( 'class', 'grid-item');
    gContainer.appendChild(gridItem);
}

let gridItemAll = document.querySelectorAll('.grid-item'); //querySelectorAll returns arraylike nodelist so that you can loop through the div items
let items = Array.from(gridItemAll);


// Checks if the mouse is clicked or not
let isMouseDown=false;

gContainer.addEventListener('mousedown', (e) =>{
    return isMouseDown = true;
}); //if mouse is clicked inside the grid container, isMouseDown returns true, 
//else false
gContainer.addEventListener('mouseup', (e) =>{
    return isMouseDown = false;
});

for(const item of items){
    //if mousedown is triggered, change color
    item.addEventListener('mousedown', (e)=> {
                color = input.value;
                item.style.backgroundColor = color;
            });
    //trigger mouse over only if isMouseDown is true
    //added mouseover so that if the mouse is clicked and being held, the color will still change
    item.addEventListener('mouseover', (e) =>{
        if(isMouseDown){
            color = input.value;
            item.style.backgroundColor=color;
        }
    });
}



// for the Color Button
colorBtn.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='white';
    rainbow.style.backgroundColor='#efff75';
    eraser.style.backgroundColor='#efff75';

    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
                    color = input.value;
                    item.style.backgroundColor = color;
                });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                color = input.value;
                item.style.backgroundColor=color;
            }
        });
    }
});


// for the Rainbow button
rainbow.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='#efff75';
    rainbow.style.backgroundColor='white';
    eraser.style.backgroundColor='#efff75';
    
    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
                    item.style.backgroundColor = randomColorGenerator();
                });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                item.style.backgroundColor=randomColorGenerator();
            }
        });
    }
});

// for the Eraser button
eraser.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='#efff75';
    rainbow.style.backgroundColor='#efff75';
    eraser.style.backgroundColor='white';
    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
            item.style.backgroundColor = "#ffffff";
         });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                item.style.backgroundColor = "#ffffff";
            }
        });
    }
});



// for Clear All button
clear.addEventListener('click' , (e) =>{
    for(const item of items){
        item.style.backgroundColor = '#ffffff';
    }
});



//for size 16x16
size16.addEventListener('click', (e) =>{
    gContainer.innerHTML='';
    row=16;
    column=16;
    gContainer.setAttribute("style", "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr)")
    for(i=0; i<row*column; i++){
        let gridItem = document.createElement('div');
        gridItem.setAttribute( 'class', 'grid-item');
        gContainer.appendChild(gridItem);
    }

    let gridItemAll = document.querySelectorAll('.grid-item'); //querySelectorAll returns arraylike nodelist so that you can loop through the div items
    let items = Array.from(gridItemAll);

// Checks if the mouse is clicked or not
let isMouseDown=false;

gContainer.addEventListener('mousedown', (e) =>{
    return isMouseDown = true;
}); //if mouse is clicked inside the grid container, isMouseDown returns true, 
//else false
gContainer.addEventListener('mouseup', (e) =>{
    return isMouseDown = false;
});

for(const item of items){
    //if mousedown is triggered, change color
    item.addEventListener('mousedown', (e)=> {
                color = input.value;
                item.style.backgroundColor = color;
            });
    //trigger mouse over only if isMouseDown is true
    //added mouseover so that if the mouse is clicked and being held, the color will still change
    item.addEventListener('mouseover', (e) =>{
        if(isMouseDown){
            color = input.value;
            item.style.backgroundColor=color;
        }
    });
}



// for the Color Button
colorBtn.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='white';
    rainbow.style.backgroundColor='#efff75';
    eraser.style.backgroundColor='#efff75';

    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
                    color = input.value;
                    item.style.backgroundColor = color;
                });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                color = input.value;
                item.style.backgroundColor=color;
            }
        });
    }
});


// for the Rainbow button
rainbow.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='#efff75';
    rainbow.style.backgroundColor='white';
    eraser.style.backgroundColor='#efff75';
    
    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
                    item.style.backgroundColor = randomColorGenerator();
                });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                item.style.backgroundColor=randomColorGenerator();
            }
        });
    }
});

// for the Eraser button
eraser.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='#efff75';
    rainbow.style.backgroundColor='#efff75';
    eraser.style.backgroundColor='white';
    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
            item.style.backgroundColor = "#ffffff";
         });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                item.style.backgroundColor = "#ffffff";
            }
        });
    }
});



// for Clear All button
clear.addEventListener('click' , (e) =>{
    for(const item of items){
        item.style.backgroundColor = '#ffffff';
    }
});

});


//for size 48x48
size48.addEventListener('click', (e) =>{
    gContainer.innerHTML='';
    row=48;
    column=48;
    gContainer.setAttribute("style", "grid-template-columns: repeat(48, 1fr); grid-template-rows: repeat(48, 1fr)")
    for(i=0; i<row*column; i++){
        let gridItem = document.createElement('div');
        gridItem.setAttribute( 'class', 'grid-item');
        gContainer.appendChild(gridItem);
    }

    let gridItemAll = document.querySelectorAll('.grid-item'); //querySelectorAll returns arraylike nodelist so that you can loop through the div items
    let items = Array.from(gridItemAll);


// Checks if the mouse is clicked or not
let isMouseDown=false;

gContainer.addEventListener('mousedown', (e) =>{
    return isMouseDown = true;
}); //if mouse is clicked inside the grid container, isMouseDown returns true, 
//else false
gContainer.addEventListener('mouseup', (e) =>{
    return isMouseDown = false;
});

for(const item of items){
    //if mousedown is triggered, change color
    item.addEventListener('mousedown', (e)=> {
                color = input.value;
                item.style.backgroundColor = color;
            });
    //trigger mouse over only if isMouseDown is true
    //added mouseover so that if the mouse is clicked and being held, the color will still change
    item.addEventListener('mouseover', (e) =>{
        if(isMouseDown){
            color = input.value;
            item.style.backgroundColor=color;
        }
    });
}



// for the Color Button
colorBtn.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='white';
    rainbow.style.backgroundColor='#efff75';
    eraser.style.backgroundColor='#efff75';

    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
                    color = input.value;
                    item.style.backgroundColor = color;
                });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                color = input.value;
                item.style.backgroundColor=color;
            }
        });
    }
});


// for the Rainbow button
rainbow.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='#efff75';
    rainbow.style.backgroundColor='white';
    eraser.style.backgroundColor='#efff75';
    
    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
                    item.style.backgroundColor = randomColorGenerator();
                });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                item.style.backgroundColor=randomColorGenerator();
            }
        });
    }
});

// for the Eraser button
eraser.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='#efff75';
    rainbow.style.backgroundColor='#efff75';
    eraser.style.backgroundColor='white';
    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
            item.style.backgroundColor = "#ffffff";
         });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                item.style.backgroundColor = "#ffffff";
            }
        });
    }
});



// for Clear All button
clear.addEventListener('click' , (e) =>{
    for(const item of items){
        item.style.backgroundColor = '#ffffff';
    }
});
    

});


//for size 64x64
size64.addEventListener('click', (e) =>{
    gContainer.innerHTML='';
    row=64;
    column=64;
    gContainer.setAttribute("style", "grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64, 1fr)")
    for(i=0; i<row*column; i++){
        let gridItem = document.createElement('div');
        gridItem.setAttribute( 'class', 'grid-item');
        gContainer.appendChild(gridItem);
    }

    let gridItemAll = document.querySelectorAll('.grid-item'); //querySelectorAll returns arraylike nodelist so that you can loop through the div items
    let items = Array.from(gridItemAll);


// Checks if the mouse is clicked or not
let isMouseDown=false;

gContainer.addEventListener('mousedown', (e) =>{
    return isMouseDown = true;
}); //if mouse is clicked inside the grid container, isMouseDown returns true, 
//else false
gContainer.addEventListener('mouseup', (e) =>{
    return isMouseDown = false;
});

for(const item of items){
    //if mousedown is triggered, change color
    item.addEventListener('mousedown', (e)=> {
                color = input.value;
                item.style.backgroundColor = color;
            });
    //trigger mouse over only if isMouseDown is true
    //added mouseover so that if the mouse is clicked and being held, the color will still change
    item.addEventListener('mouseover', (e) =>{
        if(isMouseDown){
            color = input.value;
            item.style.backgroundColor=color;
        }
    });
}



// for the Color Button
colorBtn.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='white';
    rainbow.style.backgroundColor='#efff75';
    eraser.style.backgroundColor='#efff75';

    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
                    color = input.value;
                    item.style.backgroundColor = color;
                });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                color = input.value;
                item.style.backgroundColor=color;
            }
        });
    }
});


// for the Rainbow button
rainbow.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='#efff75';
    rainbow.style.backgroundColor='white';
    eraser.style.backgroundColor='#efff75';
    
    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
                    item.style.backgroundColor = randomColorGenerator();
                });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                item.style.backgroundColor=randomColorGenerator();
            }
        });
    }
});

// for the Eraser button
eraser.addEventListener('click', (e) =>{
    colorBtn.style.backgroundColor='#efff75';
    rainbow.style.backgroundColor='#efff75';
    eraser.style.backgroundColor='white';
    for(const item of items){
        item.addEventListener('mousedown', (e)=> {
            item.style.backgroundColor = "#ffffff";
         });
        item.addEventListener('mouseover', (e) =>{
            if(isMouseDown){
                item.style.backgroundColor = "#ffffff";
            }
        });
    }
});



// for Clear All button
clear.addEventListener('click' , (e) =>{
    for(const item of items){
        item.style.backgroundColor = '#ffffff';
    }
});
});

let randomColorGenerator = () => {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for(let i=0; i<6; i++){
        randomColor += letters[Math.floor(Math.random() *16)]
    }
    return randomColor;
}


// Inputs from user:
//  -color
//  -clicking the grid to color
//  -grid size(row x column)
//  -clear button 
