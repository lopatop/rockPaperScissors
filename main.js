
let userChoice;
let computerChoice;
let isWinner = false;
let count = 3;
let countUserWin = 0;
let countComputerWin = 0;

const keyWords = ['камень', 'ножницы', 'бумага'];

while (count > 0) {

    while (isWinner === false) {
        userChoice = prompt(` Напиши: ${keyWords[0]}, ${keyWords[1]} или ${keyWords[2]} `);
        userChoice = userChoice.toLowerCase();
        if (userChoice === keyWords[0] || userChoice === keyWords[1] || userChoice === keyWords[2]) {
            //начинаем игру

            const randomNumber = Math.floor(Math.random() * 3);
            computerChoice = (keyWords[randomNumber]);
            alert(`Компьютер выбрал:  ${computerChoice}`);

            if (userChoice === computerChoice) {
                alert('Ничья, давай еще раз!');
            } else if (
                (userChoice === keyWords[0] && computerChoice === keyWords[2]) ||
                (userChoice === keyWords[1] && computerChoice === keyWords[0]) ||
                (userChoice === keyWords[2] && computerChoice === keyWords[1])

            ) {
                alert('Компьютер выйграл!!!');
                isWinner = true;
                countUserWin++
            } else {
                alert('Мы победили!!!');
                isWinner = true;
                countUserWin++
            }

        } else {
            alert("Введите правильное значение");
        }
    }
    count--;
    isWinner = false;
}
alert(`Игра закончилась со счетом ${countUserWin} : ${countComputerWin}`);