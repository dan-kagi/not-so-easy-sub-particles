const questions = [
  {
    id: 1,
    answerPerLine: 4,
    answers: [
      { line: 'A', answer: [83, 209, 'Bi', 0] },
      { line: 'D', answer: [55, 78, 'Cs', +1] },
      { line: 'E', answer: [16, 32, 'S', -2] },
      { line: 'G', answer: [56, 82, 'Ba', +2] },
      { line: 'H', answer: [55, 137, 'Cs', 0] },
    ],
  },
  {
    id: 2,
    answers: [85, 'Rb', +1, 40, 'Ar', 0, 53, 74, 54, 36, 18, -1],
  },
  {
    id: 3,
    answers: [32, 'S', -2, 16, 31, 38, 28, +3],
  },
  {
    id: 4,
    answers: [13, 28, +3],
  },
  {
    id: 5,
    answers: [38],
  },
  {
    id: 6,
    answers: [17],
  },
  {
    id: 7,
    answers: [55],
  },
  {
    id: 8,
    answers: [32],
  },
];

const table1 = document.getElementById('table1');
const rows = table1.querySelectorAll('tr');
for (let i = 0; i < rows.length; i++) {
  if (i !== 0) {
    const button = rows[i].querySelector('button');
    button.addEventListener('click', () => {
      const inputs = rows[i].querySelectorAll('input');
      for (let j = 0; j < inputs.length; j++) {
        if (!isNaN(inputs[j].value.trim())) {
          if (
            Number(inputs[j].value.trim()) !==
            questions[0].answers[i - 1].answer[j]
          ) {
            const msg = table1.querySelector('.response');
            if (msg.classList.contains('correct')) {
              msg.classList.remove('correct');
            }
            msg.classList.add('wrong');
            msg.innerHTML = `Linha ${
              questions[0].answers[i - 1].line
            } está ERRADA!!!`;
            return;
          }
        } else {
          if (
            inputs[j].value.trim() !== questions[0].answers[i - 1].answer[j]
          ) {
            const msg = table1.querySelector('.response');
            if (msg.classList.contains('correct')) {
              msg.classList.remove('correct');
            }
            msg.classList.add('wrong');
            msg.innerHTML = `Linha ${
              questions[0].answers[i - 1].line
            } está ERRADA!!!`;
            return;
          }
        }
      }
      const msg = table1.querySelector('.response');
      if (msg.classList.contains('wrong')) {
        msg.classList.remove('wrong');
      }
      msg.classList.add('correct');
      msg.innerHTML = `Parabéns!!!! Linha ${
        questions[0].answers[i - 1].line
      } está CORRETA!!!`;
      return;
    });
  }
}

function checkExercises2_3_4_5_6_7_8(id, qNumber) {
  const exercise = document.getElementById(id);
  const button = exercise.querySelector('button');
  button.addEventListener('click', () => {
    const inputs = exercise.querySelectorAll('input');
    for (let j = 0; j < inputs.length; j++) {
      if (!isNaN(inputs[j].value.trim())) {
        if (Number(inputs[j].value.trim()) !== questions[qNumber].answers[j]) {
          const msg = exercise.querySelector('.response');
          if (msg.classList.contains('correct')) {
            msg.classList.remove('correct');
          }
          msg.classList.add('wrong');
          msg.innerHTML = 'ERRADO!!! Tente Novamente!!!';
          return;
        }
      } else {
        if (inputs[j].value.trim() !== questions[qNumber].answers[j]) {
          const msg = exercise.querySelector('.response');
          if (msg.classList.contains('correct')) {
            msg.classList.remove('correct');
          }
          msg.classList.add('wrong');
          msg.innerHTML = 'ERRADO!!! Tente Novamente!!!';
          return;
        }
      }
    }
    const msg = exercise.querySelector('.response');
    if (msg.classList.contains('wrong')) {
      msg.classList.remove('wrong');
    }
    msg.classList.add('correct');
    msg.innerHTML = 'Parabéns!!! Resposta CORRETA!!!';
    return;
  });
}

checkExercises2_3_4_5_6_7_8('table2', 1);
checkExercises2_3_4_5_6_7_8('table3', 2);
checkExercises2_3_4_5_6_7_8('ex4', 3);
checkExercises2_3_4_5_6_7_8('ex5', 4);
checkExercises2_3_4_5_6_7_8('ex6', 5);
checkExercises2_3_4_5_6_7_8('ex7', 6);
checkExercises2_3_4_5_6_7_8('ex8', 7);
// const table2 = document.getElementById('table2');
// const button2 = table2.querySelector('button');
// button2.addEventListener('click', () => {
//   const inputs = table2.querySelectorAll('input');
//   for (let j = 0; j < inputs.length; j++) {
//     if (!isNaN(inputs[j].value.trim())) {
//       if (Number(inputs[j].value.strip()) !== questions[1].answers[j]) {
//         const msg = table2.querySelector('.response');
//         if (msg.classList.contains('correct')) {
//           msg.classList.remove('correct');
//         }
//         msg.classList.add('wrong');
//         msg.innerHTML = 'ERRADO!!! Tente Novamente!!!';
//         return;
//       }
//     } else {
//       if (inputs[j].value.trim() !== questions[1].answers[j]) {
//         const msg = table2.querySelector('.response');
//         if (msg.classList.contains('correct')) {
//           msg.classList.remove('correct');
//         }
//         msg.classList.add('wrong');
//         msg.innerHTML = 'ERRADO!!! Tente Novamente!!!';
//         return;
//       }
//     }
//   }
//   const msg = table2.querySelector('.response');
//   if (msg.classList.contains('wrong')) {
//     msg.classList.remove('wrong');
//   }
//   msg.classList.add('correct');
//   msg.innerHTML = 'Parabéns!!! Resposta CORRETA!!!';
//   return;
// });

// const table3 = document.getElementById('table3');
// const button3 = table3.querySelector('button');
// button3.addEventListener('click', () => {
//   const inputs = table3.querySelectorAll('input');
//   for (let j = 0; j < inputs.length; j++) {
//     if (!isNaN(inputs[j].value.trim())) {
//       if (Number(inputs[j].value) !== questions[2].answers[j]) {
//         const msg = table3.querySelector('.response');
//         if (msg.classList.contains('correct')) {
//           msg.classList.remove('correct');
//         }
//         msg.classList.add('wrong');
//         msg.innerHTML = 'ERRADO!!! Tente Novamente!!!';
//         return;
//       }
//     } else {
//       if (inputs[j].value.trim() !== questions[2].answers[j]) {
//         const msg = table3.querySelector('.response');
//         if (msg.classList.contains('correct')) {
//           msg.classList.remove('correct');
//         }
//         msg.classList.add('wrong');
//         msg.innerHTML = 'ERRADO!!! Tente Novamente!!!';
//         return;
//       }
//     }
//   }
//   const msg = table3.querySelector('.response');
//   if (msg.classList.contains('wrong')) {
//     msg.classList.remove('wrong');
//   }
//   msg.classList.add('correct');
//   msg.innerHTML = 'Parabéns!!! Resposta CORRETA!!!';
//   return;
// });
document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
