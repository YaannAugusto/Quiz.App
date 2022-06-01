const quizData = [
    {
        question: 'Somados, quantas copinhas e mundiais o Palmeiras possui?',
        a: '2',
        b: '5',
        c: '0',
        d: '3',
        correct: 'c',
    },

    {
        question: 'Quem é o maior jogador da historia do futebol?',
        a: 'Messi',
        b: 'Maradona',
        c: 'Cr7',
        d: 'Pele',
        correct: 'd',
    },

    {
        question: 'Quanto é 1 + 1?',
        a: '2',
        b: '5',
        c: '1',
        d: '8',
        correct: 'a',
    },

    {
        question: 'Ficou bom esse programa?',
        a: 'Nop',
        b: 'Sim',
        c: 'No',
        d: 'Nao',
        correct: 'b',
    }
]

const answers = document.querySelectorAll(".answer");
const questionH = document.getElementById('question');
const text_a = document.getElementById('text_a')
const text_b = document.getElementById('text_b')
const text_c = document.getElementById('text_c')
const text_d = document.getElementById('text_d')
const subBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;
loadQuiz();


function loadQuiz() {
    deselected();
    let quiz;
    
    quiz = quizData[currentQuiz];
      
    questionH.innerText = quiz.question; 
    text_a.innerText = quiz.a;
    text_b.innerText = quiz.b;
    text_c.innerText = quiz.c;
    text_d.innerText = quiz.d;
}

function getSelected() {
    
    const answers = document.querySelectorAll(".answer");
    let answer = undefined;
    answers.forEach((answerEl) => {
       
        if(answerEl.checked) {
            answer = answerEl;
        }
    });

    return answer;
}

function deselected() {
    answers.forEach((answerEl) => {
       answerEl.checked = false;  
    });
}

subBtn.addEventListener('click', () => {
    

    let answer = getSelected();
    console.log(answer);
    if(answer){

        if(answer.id==quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz<quizData.length) {
            loadQuiz();
        } else {
            alert("ACABOU! sua pontuacao foi:  "+ score+"/4");
        }
    }

    /*if(currentQuiz<quizData.length) {
        loadQuiz();
    } else {
        alert('you finished!');
    }
   */ 

});

