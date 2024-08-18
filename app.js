let button = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let new_game = document.querySelector("#new");
let win_container = document.querySelector(".msg");
let message = document.querySelector("#message");
let turnO = true; //PlayerX,PlayerO; 
const win = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [2,4,6],
    [1,4,7],
];
const reset_game = () =>
    {
        turnO = true;
        enable_button();
        win_container.classList.add('hide');
    
    };
button.forEach((btn) => {
    btn.addEventListener("click",() =>
    {
        if(turnO)
        {
            btn.innerText = "O";
            turnO = false;
        }
        else{
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;

        findWinner();
    });
});
const disable_buttons = () =>
{
    for(let btn of button)
    {
        btn.disabled = true;
    }
};
const enable_button = () =>
{
    for(let btn of button)
    {
        btn.disabled = false;
        btn.innerText = "";
    }
};
const showWinner = (winner) =>
{
    message.innerText = `Congratulations , Winner is ${winner} `;
    win_container.classList.remove('hide');

};
const findWinner = () =>
{
    for(let patterns of win)
    {
        let posval1 = button[patterns[0]].innerText;
        let posval2 = button[patterns[1]].innerText;
        let posval3 = button[patterns[2]].innerText;
        if(posval1 !=""  && posval2 !="")
        {
            if(posval1 === posval2 && posval2 === posval3)
            {
                console.log("Winner",posval1);
                showWinner(posval1);
                disable_buttons();
            }
        }
    }
};
new_game.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);

