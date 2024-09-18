let userChoise;
let computerChoise;
let isWinner = false;
let count = 0; //счетчик ходов 
let isWinnerUser = 0; //счетчик наших побед
let isWinnerComputer = 0; //счетчик побед компьютера 


while (count < 10) {
    let isWinner = false;
    count++;
    console.log(count);



    while (!isWinner) {

        randomNumber = Math.floor(Math.random() * 3); //выбор компьтера 
        switch (randomNumber) {
            case 0:
                computerChoise = 'камень';
                break;
            case 1:
                computerChoise = 'ножницы';
                break;
            case 2:
                computerChoise = 'бумага';
                break;
        }

        userChoise = prompt("Введите: 'камень' 'ножницы' 'бумага' "); //выбор пользователя
        userChoise = userChoise.toLocaleLowerCase();
        console.log(userChoise, computerChoise);

        if (userChoise === 'камень' || userChoise === 'ножницы' || userChoise === 'бумага') { //проверка и начала игры

            if (userChoise === computerChoise) {
                alert("Ничья");

            } else {
                const isUserWinner = (
                    (userChoise === 'камень' && computerChoise === 'ножницы') ||
                    (userChoise === 'ножницы' && computerChoise === 'бумага') ||
                    (userChoise === 'бумага' && computerChoise === 'камень')
                );

                const message = isUserWinner ? 'Мы победили!' : 'Компьютер победил!';
                alert(message);

                if (isUserWinner) {
                    isWinnerUser++;
                } else {
                    isWinnerComputer++;
                };

                isWinner = true;
                console.log(`"Колличество наших побед: ${isWinnerUser} ",  "Колличество побед компьютера: ${isWinnerComputer}`);
            }

        } else {
            alert("Введите правильное значение!");
        }

    }
}

