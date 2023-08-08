let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn')
let flipBook = document.getElementById('flipBook')
let paper1 = document.getElementById('p1')
let paper2 = document.getElementById('p2')
let paper3 = document.getElementById('p3')


prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation =  numOfPapers + 1;

function openBook(){
    flipBook.style.transform = 'translateX(50%)'
    prevBtn.style.transform = 'translateX(-175%)'
    nextBtn.style.transform = 'translateX(175%)'
}

function closeBook(isAtBeginning){
    if(isAtBeginning){
        flipBook.style.transform = 'translateX(0%)'
    }
    else{
        flipBook.style.transform = 'translateX(100%)'
    }
    prevBtn.style.transform = 'translateX(0px)'
    nextBtn.style.transform = 'translateX(0px)'
}

function goNext(){
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1: 
                openBook();
                paper1.classList.add('flipped');
                paper1.style.zIndex = 1;
                break;
            case 2: 
                paper2.classList.add('flipped');
                paper2.style.zIndex = 2;
                break;
            case 3: 
                closeBook(false)
                paper3.classList.add('flipped');
                paper3.style.zIndex = 3;
                break;
            default:
                throw new Error('unknown state')
        }
        currentLocation++;
    }
}

function goPrev(){
    if(currentLocation > 1){
        switch(currentLocation){
            case 2: 
                closeBook(true);
                paper1.classList.remove('flipped');
                paper1.style.zIndex = 3;
                break;
            case 3: 
                paper2.classList.remove('flipped');
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook()
                paper3.classList.remove('flipped');
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error('unknown state');
        }
        currentLocation--;
    }
}
