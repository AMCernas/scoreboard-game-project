let counterHome = document.getElementById("counterHome");
let counterGuest = document.getElementById("counterGuest");
let leader = document.getElementById("leader");

let counter1 = 0;
let counter2 = 0;

function increaseOneHome(){
    counter1 += 1;
    counterHome.textContent = counter1;
    leaderBoard()
}

function increaseTwoHome(){
    counter1 += 2;
    counterHome.textContent = counter1;
    leaderBoard()
}

function increaseThreeHome(){
    counter1 += 3;
    counterHome.textContent = counter1;
    leaderBoard()
}

function increaseOneGuest(){
    counter2 += 1;
    counterGuest.textContent = counter2;
    leaderBoard()
}

function increaseTwoGuest(){
    counter2 += 2;
    counterGuest.textContent = counter2;
    leaderBoard()
}

function increaseThreeGuest(){
    counter2 += 3;
    counterGuest.textContent = counter2;
    leaderBoard()
}

function restart(){
    counter1 = 0;
    counter2 = 0;
    counterHome.textContent = counter1;
    counterGuest.textContent = counter2;
    leader.textContent = "Leader"
    alert("Game Restarted")
}

function leaderBoard(){
    if(counter1 > counter2){
        leader.textContent = "Home is leading the game!"
    }else if (counter2 > counter1){
        leader.textContent = "Guest is leading the game!"
    }else{
        leader.textContent = "The game is tied!"
    }
}