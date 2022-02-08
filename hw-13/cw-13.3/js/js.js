// Задание:
// Реазизовать игру, правилом которой является перенести все шарики
// на доске внутрь квадрата.
// - при старте игры шарики должны создаваться случайного
//   размера (80 - 120 px) и в случайном месте
// - шарики перемещаются с помощью мыши
// - шарик изчезает, если его границы оказываются внутри квадрата

// - получить ссылки на все необходимые елементы в переменные
// - сгенерировать игровое поле
// - при создании каждого шарика - вешать на него
//   обработчик mousedown
// - при нажатии клавиши мыши на шарике:
//   - сместить координаты шарика, что бы центр шарика совместился с
//     курсором
//   - повесить обработчик mousemove, что бы шарик перемещался
//     за мышью
// - при отпускании мыши:
//   - удалить ненужные обработчики
//   - проверить, находится ли шарик внутри квадрата, если да,
//     удалить шарик

const container = document.getElementById("container");
const hole = document.getElementById("hole");

const moveAt = (event, x, y) => {
  const currentBall = event.target;

  currentBall.style.left = `${event.clientX - x}px`;
  currentBall.style.top = `${event.clientY - y}px`;
};

const isMatchingWithBallCoords = (ball) => {
  const ballCoords = ball.getBoundingClientRect();
  const holeCoords = hole.getBoundingClientRect();

  return (
    ballCoords.top > holeCoords.top &&
    ballCoords.bottom < holeCoords.bottom &&
    ballCoords.left > holeCoords.left &&
    ballCoords.right < holeCoords.right
  );
};

const onDragMove = (event) => {
  const currentBall = event.target;

  const shiftY = currentBall.offsetHeight / 2;
  const shiftX = currentBall.offsetWidth / 2;

  moveAt(event, shiftX, shiftY);
};

const onDragEnd = (event) => {
  const currentBall = event.target;

  currentBall.removeEventListener("mousemove", onDragMove);
  currentBall.onmouseup = null;

  if (isMatchingWithBallCoords(currentBall)) {
    currentBall.remove()
  }
};

const onDragStart = (event) => {
  const currentBall = event.target;

  const shiftY = currentBall.offsetHeight / 2;
  const shiftX = currentBall.offsetWidth / 2;

  moveAt(event, shiftX, shiftY);
  currentBall.addEventListener("mousemove", onDragMove);
  currentBall.onmouseup = onDragEnd;
};

const getRandomBallProperties = () => {
  const size = Math.ceil(Math.random() * 40) + 80;
  return {
    size,
    top: (container.offsetHeight - size) * Math.random(),
    left: (container.offsetWidth - size) * Math.random(),
  };
};

const createBalls = () => {
  for (let i = 0; i < 10; i++) {
    const ball = document.createElement("div");
    const ballProps = getRandomBallProperties();

    ball.classList.add("ball");
    ball.style.top = `${ballProps.top}px`;
    ball.style.left = `${ballProps.left}px`;
    ball.style.width = `${ballProps.size}px`;
    ball.style.height = `${ballProps.size}px`;

    ball.addEventListener("mousedown", onDragStart);
    container.append(ball);
  }
};

createBalls();