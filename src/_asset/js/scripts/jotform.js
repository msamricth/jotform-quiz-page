import {
    imposter_fear_response,
    imposter_fear_intro,
    imposter_questions,
    imposter_coaching_link
} from './imposter.js';
import {
    perfectionist_fear_response,
    perfectionist_fear_intro,
    perfectionist_coaching_link,
    perfectionist_questions
} from './perfectionist.js';
import {
    peoplePleaser_fear_response,
    peoplePleaser_fear_intro,
    peoplePleaser_coaching_link,
    peoplePleaser_questions
} from './peopepleaser.js';
import {
    titleMain,
    titlePart1,
    titlePart2,
    titlePart3,
    introduction,
    partTwo,
    partThree,
    button1,
    button2,
    button3,
    book_link,
    coaching_link
} from './globals.js';

import { btnCollapse, resizeEvent } from './functions.js';

const app = document.getElementById('app');
if (app) {
    var isAxiosLoaded;
    const observer = new MutationObserver((mutations) => {
        if (mutations[0].attributeName === 'class') {

            isAxiosLoaded = app.classList.contains('axios-loaded');

            if (isAxiosLoaded) {
                window.scrollTo(0, 0);
                startApp();
                OBSDisconnect();

            }
        }
    });
    observer.observe(app, { attributes: true });

    function OBSDisconnect() {
        observer.disconnect();
    }
}
function startApp() {
    axios
        .get(
            "https://api.jotform.com/form/233514054276049/submissions?apikey=ed80c2d7ca8fc8d680f79d2f1df5b675&orderby=id",
        )
        .then((response) => {
            var data = response.data.content;

            console.log(response)
            console.log(data)
            if (data) {

                var len = data.length;
                console.log(data)
                for (var i = 0; i < len; i++) {
                    var id = data[i].id,
                        currentQuestion;
                    var email = data[i].answers[45].answer,
                        fear_response, fear_intro, questions;

                    var SP_slug = location.search.substring(1);
                    let comparingSlug = email;
                    if (SP_slug.includes('?')) {
                        comparingSlug = '?' + comparingSlug;
                    }
                    if (comparingSlug == SP_slug) {
                        var archetypeType = data[i].answers[50].answer;
                        var imposterPercentage = data[i].answers[36].answer;
                        var perfectionistPercentage = data[i].answers[28].answer;
                        var peoplePleaserPercentage = data[i].answers[37].answer;




                        if (archetypeType.includes('imposter')) {
                            fear_response = imposter_fear_response;
                            fear_intro = imposter_fear_intro;
                            questions = imposter_questions;
                        }
                        if (archetypeType.includes('people pleaser')) {
                            fear_response = peoplePleaser_fear_response;
                            fear_intro = peoplePleaser_fear_intro;
                            questions = peoplePleaser_questions;
                        }
                        if (archetypeType.includes('perfectionist')) {
                            fear_response = perfectionist_fear_response;
                            fear_intro = perfectionist_fear_intro;
                            questions = perfectionist_questions;
                        }

                        const resultsPage = app.appendChild(
                            document.createElement("div")
                        );
                        resultsPage.className = "results-page";
                        const sectionOne = resultsPage.appendChild(
                            document.createElement("div")
                        );
                        sectionOne.classList = "results-section results-section--part-one";
                        sectionOne.id = "part-1";
                        const sectionOneSubTitle = sectionOne.appendChild(
                            document.createElement("strong")
                        );
                        const sectionOneTitle = sectionOne.appendChild(
                            document.createElement("h2")
                        );
                        sectionOneSubTitle.classList.add('quiz-sub-header');
                        sectionOneTitle.classList.add('quiz-header');
                        sectionOneSubTitle.innerHTML = titleMain;
                        sectionOneTitle.innerHTML = titlePart1;

                        const scoring = sectionOne.appendChild(
                            document.createElement("h5")
                        );
                        scoring.classList = 'score-label';
                        scoring.innerHTML = "Your fear archetype is the <strong class='text-uppercase'>" + archetypeType + "</strong>";
                        
                        const sectionOneLead = sectionOne.appendChild(
                            document.createElement("p")
                        );

                        sectionOneLead.classList = "quiz-text";
                        sectionOneLead.innerHTML = introduction;
                        const scoresContainer = sectionOne.appendChild(
                            document.createElement("div")
                        );
                        scoresContainer.classList = 'scores';
                        const scores = scoresContainer.appendChild(
                            document.createElement("h5")
                        );
                        scores.classList = 'quiz-strong';
                        scores.innerHTML = "YOUR SCORES:";
                        const scoresList = scoresContainer.appendChild(
                            document.createElement("ul")
                        );

                        const archetypeArray = [
                            {
                                name: "IMPOSTER",
                                value: imposterPercentage
                            },
                            {
                                name: "PERFECTIONIST",
                                value: perfectionistPercentage
                            },
                            {
                                name: "PEOPLE PLEASER",
                                value: perfectionistPercentage
                            }
                        ];
                        archetypeArray.sort(function (a, b) {
                            return parseFloat(b.value) - parseFloat(a.value);
                        });
                        let archetypeArrayCount = 0;

                        for (const quiz_score of archetypeArray) {
                            archetypeArrayCount++;

                            const quiz_scoreListItem = scoresList.appendChild(
                                document.createElement("li")
                            );
                            quiz_scoreListItem.classList = 'quiz-text';
                            quiz_scoreListItem.innerHTML = archetypeArrayCount + '. ' + quiz_score.name + ": " + quiz_score.value + "%";  

                        }
                        const fearIntroContainer = sectionOne.appendChild(
                            document.createElement("div")
                        );
                        fearIntroContainer.classList = 'quiz-well';
                        const fearIntro = fearIntroContainer.appendChild(
                            document.createElement("p")
                        );
                        fearIntro.classList.add = 'quiz-text';
                        fearIntro.innerHTML = fear_intro;

                        const sectionOneBtnContainer = sectionOne.appendChild(
                            document.createElement("div")
                        );
                        sectionOneBtnContainer.classList = 'results-section--btn-container secondary-button-style-solid';
                        const sectionOneBtn = sectionOneBtnContainer.appendChild(
                            document.createElement("button")
                        );
                        sectionOneBtn.dataset.target = "#part-2";
                        sectionOneBtn.classList = "results-section--btn btn-next quiz-button quiz-primary text-uppercase";
                        sectionOneBtn.innerHTML = button2;





                        // section two
                       
                        const sectionThree = resultsPage.appendChild(
                            document.createElement("div")
                        );
                        sectionThree.id = "#part-2"
                        sectionThree.classList = "results-section results-section--part-three";


                        const sectionThreeSubTitle = sectionThree.appendChild(
                            document.createElement("strong")
                        );
                        const sectionThreeTitle = sectionThree.appendChild(
                            document.createElement("h2")
                        );
                        sectionThreeSubTitle.classList.add('quiz-sub-header');
                        sectionThreeTitle.classList.add('quiz-header');
                        sectionThreeSubTitle.innerHTML = titleMain;
                        sectionThreeTitle.innerHTML = titlePart1;

                        const sectionThreeLead = sectionThree.appendChild(
                            document.createElement("h5")
                        );
                        sectionThreeLead.classList = 'score-label';
                        sectionThreeLead.innerHTML = "How to keep the " + archetypeType + " ARCHETYPE from holding you back:";
                        questions.features.forEach((question, i) => {
                            currentQuestion = question.properties.question;
                            const questionContainer = sectionThree.appendChild(
                                document.createElement("div")
                            );
                            const questionh3 = questionContainer.appendChild(
                                document.createElement("strong")
                            );
                            questionh3.classList ='quiz-strong'; 
                            questionh3.innerHTML = currentQuestion;

                            const listContainer = questionContainer.appendChild(
                                document.createElement("ul")
                            );
                            listContainer.classList = "quiz-list";
                            question.properties.list.forEach((listItem, i) => {
                                const listItemContainer = listContainer.appendChild(
                                    document.createElement("li")
                                );
                                listItemContainer.classList = 'quiz-text';
                                listItemContainer.innerHTML = listItem;
                            })

                        });

                        const finalsteps = sectionThree.appendChild(
                            document.createElement("strong")
                        );
                        finalsteps.classList ='quiz-strong'; 
                        finalsteps.innerHTML = 'NEXT STEPS: Interested in Learning More?';
                        const partThreeContainer = sectionThree.appendChild(
                            document.createElement("ul")
                        );
                        
                        partThreeContainer.classList = "quiz-list";
                        partThreeContainer.innerHTML = partThree;
                        const sectionThreeBtnContainer = sectionThree.appendChild(
                            document.createElement("div")
                        );
                        sectionThreeBtnContainer.classList = 'results-section--btn-container secondary-button-style-solid';
                        const sectionThreeBtn = sectionThreeBtnContainer.appendChild(
                            document.createElement("button")
                        );
                        sectionThreeBtn.dataset.target = "#part-1";
                        sectionThreeBtn.classList = "quiz-button";
                        sectionThreeBtn.innerHTML = button1;

                        const sectionThreeCTAContainer = sectionThreeBtnContainer.appendChild(
                            document.createElement("div")
                        );




                        const sectionThreeBookCTA = sectionThreeCTAContainer.appendChild(
                            document.createElement("button")
                        );
                        sectionThreeBookCTA.href = book_link;

                        sectionThreeBookCTA.classList = "quiz-button";
                        sectionThreeBookCTA.innerHTML = "Read the book";



                        const sectionThreeCoachingCTA = sectionThreeCTAContainer.appendChild(
                            document.createElement("button")
                        );
                        sectionThreeCoachingCTA.href = coaching_link;

                        sectionThreeCoachingCTA.classList = "quiz-button";
                        sectionThreeCoachingCTA.innerHTML = "Find a coach";



                        sectionOne.style.maxHeight = sectionOne.scrollHeight + "px";
                        sectionOne.classList.add("active");
                        sectionThree.style.maxHeight = null;

                        sectionOneBtn.addEventListener("click", function () {
                            btnCollapse(sectionThree, sectionOne)
                        });
       
                        sectionThreeBtn.addEventListener("click", function () {
                            btnCollapse(sectionOne, sectionThree)
                        });
                        window.addEventListener("resize", function () {
                            resizeEvent();
                        })

                    }



                }
            }

        })

}