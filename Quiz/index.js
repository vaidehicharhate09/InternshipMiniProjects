var quizdata = [
    {   //created a array to store question, its option, and correct answer
        question: "Which Framework is related to JavaScript?",
        a: ".net",
        b: "Flask",
        c: "React",
        d: "django",
        correct: "c"
    },
    {
        question: "Which is not a programming language?",
        a: "HTML",
        b: "Python",
        c: "Java",
        d: "JavaScript",
        correct: "a"
    },
    {
        question: "Which is not a framework?",
        a: "React",
        b: "JavaScript",
        c: "Angular",
        d: "django",
        correct: "b"
    },
    {
        question: "CSS stands for: ",
        a: "Cascading Styling State",
        b: "Cascading Styling Sheet",
        c: "Cascading Sheet of Style",
        d: "None of the above",
        correct: "b"
    }
]

var quiz = document.getElementById('quizdiv')           //has access to entire quizdiv element
var answer = document.querySelectorAll('.answer');      //.answer to select new answer each time the question is loaded or else the last selected answer(of previous question) will be selected by default for current question
var question = document.getElementById('question');
var option_a = document.getElementById('a_value');
var option_b = document.getElementById('b_value');
var option_c = document.getElementById('c_value');
var option_d = document.getElementById('d_value');
var submitbtn = document.getElementById('submit');

var currentQuestion = 0;                                 //array indexing starts with 0 
var quizScore = 0;

loadQuiz()

function loadQuiz(){
    deselect()                                          //to clear all selected radio button(either from previous question or by mistake)

    question.innerHTML = quizdata[currentQuestion].question     //to display questions and its option
    option_a.innerHTML = quizdata[currentQuestion].a
    option_b.innerHTML = quizdata[currentQuestion].b
    option_c.innerHTML = quizdata[currentQuestion].c
    option_d.innerHTML = quizdata[currentQuestion].d

}

function deselect(){
    answer.forEach(answer=>answer.checked=false);
}

submitbtn.addEventListener('click',()=>{
    var selectedoption;                                 //every time the button is clicked the selected option is fetched into selectedoption variable
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id;
        }
    })

    if(selectedoption==quizdata[currentQuestion].correct){    //and if it matches with coorect ans stored in array above score is incremented
        quizScore=quizScore+1;
    }
    currentQuestion=currentQuestion+1;                         //if it is the last question then calculate score and end the quiz
    if(currentQuestion==quizdata.length){
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizScore} correctly out of total ${quizdata.length}🎉</h1>`;  //here, if above condition is true then quizdata la innerhtml apply honar ani to eka h1 madhe convert honar where ''(single inverted comma) is not used, it is (``)s and will display the score
    }
    else{
    loadQuiz();
    }
})