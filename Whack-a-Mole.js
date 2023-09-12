<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whack-a-Mole Game</title>
    <style>
        .container {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            gap: 10px;
        }

        .hole {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            background-color: #6f6f6f;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .mole {
            width: 80px;
            height: 80px;
            background-color: #000;
            border-radius: 50%;
            display: none;
        }
    </style>
</head>
<body>
    <h1>Whack-a-Mole Game</h1>
    <div class="container" id="game-board">
        <div class="hole" onclick="whackMole(this)">
            <div class="mole"></div>
        </div>
        <!-- Repeat the hole and mole divs for each cell -->
    </div>
    <script>
        const holes = document.querySelectorAll('.hole');
        const moles = document.querySelectorAll('.mole');
        let score = 0;

        function randomTime(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function randomHole(holes) {
            const index = Math.floor(Math.random() * holes.length);
            const hole = holes[index];
            return hole;
        }

        function peep() {
            const time = randomTime(200, 1000);
            const hole = randomHole(holes);

            hole.classList.add('up');

            setTimeout(() => {
                hole.classList.remove('up');
                if (!hole.classList.contains('whacked')) {
                    peep();
                }
            }, time);
        }

        function whackMole(hole) {
            if (!hole.classList.contains('up')) return;

            hole.classList.remove('up');
            hole.classList.add('whacked');
            score++;
            updateScore();

            setTimeout(() => {
                hole.classList.remove('whacked');
            }, 300);
        }

        function updateScore() {
            const scoreElement = document.getElementById('score');
            scoreElement.textContent = `Score: ${score}`;
        }

        peep();
    </script>
</body>
</html>
