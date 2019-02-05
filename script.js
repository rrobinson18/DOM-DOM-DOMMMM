document.addEventListener('DOMContentLoaded', function () {
    let divEle = document.createElement('div');
    divEle.setAttribute('class', 'container');

    let btn = document.createElement('button');
    btn.innerText = ('Add Square');
    btn.className = ('btn');

    divEle.appendChild(btn);

    document.body.appendChild(btn);

    let container = document.createElement('div');
    container.className = ('square-container');
    document.body.appendChild(container);

    let button = document.getElementsByClassName('btn')[0];

    let number = 0; 
    let id = document.getElementById('id');

    button.addEventListener('click', function () {
        let div = document.createElement('div');
        div.classList = 'square';
        div.id = number;
        let divText = document.createTextNode(number);
        div.appendChild(divText);
        document.getElementsByClassName('square-container')[0].appendChild(div);
        number++;

    let square = document.getElementsByClassName('square');
    
        div.addEventListener('dblclick', function (e) {

            if (event.target.id % 2 === 0) {
                if(e.target.nextSibling === null) {
                    alert('Bummer, there is no next square!');
            } else {
                container.removeChild(e.target.nextSibling);
           } 
         } else {
            if(e.target.previousSibling === null) {
                alert('Darnit, there is no previous square!');
        } else {
            container.removeChild(e.target.previousSibling);
            }
            square.addEventListener('click', randomColor);
        
        function randomColor() {
            //array of colors
            let colorArr = ['red', 'blue', 'purple', 'yellow', 'pink', 'green', 'aqua', 'orange'];
            //index of random color
            let i = Math.floor(Math.random() * colorArr.length);
          
            event.target.style.color = colorArr[i];
   
        };

        };

        
        


        /*

        
        let colorArr = ['green', 'blue', 'yellow', 'orange', 'brown', 'grey', 'red', 'white'];

        div.addEventListener("click", chgColor(div));


        function chgColor() {
            let i = Math.floor(Math.random() * colorArr.length);

            let randomColor = colorArr[i];

           div.style.backgroundcolor = randomColor;

           //console.log(randomColor);
            return randomColor;
        }
   */
    
    });
    });
    
});



