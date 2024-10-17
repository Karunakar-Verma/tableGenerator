let colEle = document.getElementById('col')
let rowEle = document.getElementById('row')
let btnMade = document.getElementById('btn')

let colVal = 0;
let rowVal = 0;

btnMade.addEventListener('click', (event)=>{
    event.preventDefault();
    colVal = colEle.value;
    rowVal = rowEle.value;
    creatTable(rowVal,colVal);
})

let mainTable = document.createElement('table');
mainTable.style.border = "2px solid green"

function creatTable(rowVal, colVal){
     for(let a = 0 ; a < rowVal ; a++)
     {
        const ro  = document.createElement('tr')
        for(let b = 0; b<colVal; b++)
        {
            const co = document.createElement('td') ;
            co.textContent = "explorin"
            co.style.height = "30px";
            co.style.width = "30px";
            co.style.border = "2px solid red";
            ro.appendChild(co);
        }
        mainTable.appendChild(ro);       
     }
     document.getElementById("final").appendChild(mainTable);
}