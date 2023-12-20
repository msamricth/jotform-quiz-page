import {
    imposter_fear_response,
    imposter_fear_intro,
    imposter_questions,
    imposter_coaching_link
} from './imposter.js';
import {
    titleMain,
    titlePart1,
    titlePart2,
    titlePart3,
    introduction,
    partTwo,
    button1,
    button2,
    button3,
    questions
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
            {
                // headers: {
                //   Authorization:
                //      "Bearer DXYHHESOBVEWZOGTRZBF"
                // }
            }
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
                        fear_response, fear_intro, coaching_link;
                    console.log(email)

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
                            coaching_link = imposter_coaching_link;
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
                        const sectionOneTitle = sectionOne.appendChild(
                            document.createElement("h1")
                        );
                        const sectionOneHR = sectionOne.appendChild(
                            document.createElement("hr")
                        );
                        const sectionOneSubTitle = sectionOne.appendChild(
                            document.createElement("h3")
                        );
                        sectionOneSubTitle.classList = 'text-uppercase';
                        sectionOneSubTitle.innerHTML = button1;
                        sectionOneTitle.innerHTML = titleMain + " <strong>" + titlePart1 + "</strong>";
                        const sectionOneLead = sectionOne.appendChild(
                            document.createElement("p")
                        );
                        sectionOneLead.classList = "lead";
                        sectionOneLead.innerHTML = introduction;
                        const scoresContainer = sectionOne.appendChild(
                            document.createElement("div")
                        );
                        scoresContainer.classList = 'scores';
                        const scores = scoresContainer.appendChild(
                            document.createElement("h5")
                        );
                        scores.classList = 'score-label';
                        scores.innerHTML = "YOUR SCORES:";
                        const scoresList = scoresContainer.appendChild(
                            document.createElement("ul")
                        );

                        const perfectionistPercentageList = scoresList.appendChild(
                            document.createElement("li")
                        );
                        perfectionistPercentageList.innerHTML = "1. PERFECTIONIST: " + perfectionistPercentage + "%";

                        const peoplePleaserPercentageList = scoresList.appendChild(
                            document.createElement("li")
                        );
                        peoplePleaserPercentageList.innerHTML = "2. PEOPLE PLEASER: " + peoplePleaserPercentage + "%";
                        const imposterPercentageList = scoresList.appendChild(
                            document.createElement("li")
                        );
                        imposterPercentageList.innerHTML = "3. IMPOSTER: " + imposterPercentage + "%";

                        const scoringContainer = sectionOne.appendChild(
                            document.createElement("div")
                        );
                        scoringContainer.classList = 'scoring';
                        const scoring = scoringContainer.appendChild(
                            document.createElement("h5")
                        );
                        scoring.classList = 'score-label';
                        scoring.innerHTML = "SCORING:";
                        const archetypeTypeContainer = scoringContainer.appendChild(
                            document.createElement("span")
                        );
                        archetypeTypeContainer.classList = 'font-weight-bold';
                        archetypeTypeContainer.innerHTML = "Your fear archetype: <strong class='text-uppercase'>" + archetypeType + "</strong><br>";

                        const fearRespose = scoringContainer.appendChild(
                            document.createElement("span")
                        );
                        fearRespose.classList = 'font-weight-bold';
                        fearRespose.innerHTML = "Your fear response: <strong class='text-uppercase'>" + fear_response + "</strong>";

                        const fearIntro = sectionOne.appendChild(
                            document.createElement("p")
                        );
                        fearIntro.innerHTML = fear_intro;

                        const sectionOneBtnContainer = sectionOne.appendChild(
                            document.createElement("div")
                        );
                        sectionOneBtnContainer.classList = 'results-section--btn-container secondary-button-style-solid';
                        const sectionOneBtn = sectionOneBtnContainer.appendChild(
                            document.createElement("button")
                        );
                        sectionOneBtn.dataset.target = "#part-2";
                        sectionOneBtn.classList = "results-section--btn btn-next sqs-block-button-element--medium sqs-button-element--secondary sqs-block-button-element text-uppercase";
                        sectionOneBtn.innerHTML = button2 + ": <span class='text-uppercase'>" + archetypeType + "</span>";





                        // section two
                        const sectionTwo = resultsPage.appendChild(
                            document.createElement("div")
                        );
                        sectionTwo.classList = "results-section results-section--part-two";

                        sectionTwo.id = "part-2";
                        const sectionTwoTitle = sectionTwo.appendChild(
                            document.createElement("h1")
                        );
                        sectionTwoTitle.innerHTML = titleMain + " <strong>" + titlePart2 + "</strong>";

                        const sectionTwoHR = sectionTwo.appendChild(
                            document.createElement("hr")
                        );
                        const sectionTwoSubTitle = sectionTwo.appendChild(
                            document.createElement("h3")
                        );
                        sectionTwoSubTitle.classList = 'text-uppercase';
                        sectionTwoSubTitle.innerHTML = button2;

                        const sectionTwoLead = sectionTwo.appendChild(
                            document.createElement("p")
                        );
                        sectionTwoLead.classList = "lead";
                        sectionTwoLead.innerHTML = partTwo;

                        const sectionTwoBtnContainer = sectionTwo.appendChild(
                            document.createElement("div")
                        );
                        sectionTwoBtnContainer.classList = 'results-section--btn-container secondary-button-style-solid';
                        const sectionTwoBtn = sectionTwoBtnContainer.appendChild(
                            document.createElement("button")
                        );
                        sectionTwoBtn.dataset.target = "#part-1";
                        sectionTwoBtn.classList = "results-section--btn btn-prev sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element text-uppercase";
                        sectionTwoBtn.innerHTML = button1 + ": <span class='text-uppercase'>" + archetypeType + "</span>";

                        const sectionTwoBtnNext = sectionTwoBtnContainer.appendChild(
                            document.createElement("button")
                        );
                        sectionTwoBtnNext.dataset.target = "#part-1";
                        sectionTwoBtnNext.classList = "results-section--btn btn-next sqs-block-button-element--medium sqs-button-element--secondary sqs-block-button-element text-uppercase";
                        sectionTwoBtnNext.innerHTML = button3 + ": <span class='text-uppercase'>" + archetypeType + "</span>";



                        // Section Three
                        const sectionThree = resultsPage.appendChild(
                            document.createElement("div")
                        );
                        sectionThree.classList = "results-section results-section--part-three";

                        const sectionThreeTitle = sectionThree.appendChild(
                            document.createElement("h1")
                        );
                        sectionThreeTitle.innerHTML = titleMain + " <strong>" + titlePart3 + "</strong>";

                        const sectionThreeHR = sectionThree.appendChild(
                            document.createElement("hr")
                        );
                        const sectionThreeSubTitle = sectionThree.appendChild(
                            document.createElement("h3")
                        );
                        sectionThreeSubTitle.classList = 'text-uppercase';
                        sectionThreeSubTitle.innerHTML = button3;

                        const sectionThreeLead = sectionThree.appendChild(
                            document.createElement("h4")
                        );

                        sectionThreeLead.innerHTML = "Questions for the <strong class='text-uppercase'>" + archetypeType + ":</strong>";
                        questions.features.forEach((question, i) => {
                            currentQuestion = question.properties.question;
                            const questionContainer = sectionThree.appendChild(
                                document.createElement("div")
                            );
                            const questionh3 = questionContainer.appendChild(
                                document.createElement("h3")
                            );
                            questionh3.innerHTML = currentQuestion;

                            const listContainer = questionContainer.appendChild(
                                document.createElement("ul")
                            );
                            question.properties.list.forEach((listItem, i) => {
                                const listItemContainer = listContainer.appendChild(
                                    document.createElement("li")
                                );

                                listItemContainer.innerHTML = listItem;
                            })

                        });


                        const sectionThreeBtnContainer = sectionThree.appendChild(
                            document.createElement("div")
                        );
                        sectionThreeBtnContainer.classList = 'results-section--btn-container secondary-button-style-solid';
                        const sectionThreeBtn = sectionThreeBtnContainer.appendChild(
                            document.createElement("button")
                        );
                        sectionThreeBtn.dataset.target = "#part-2";
                        sectionThreeBtn.classList = "results-section--btn btn-prev sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element text-uppercase";
                        sectionThreeBtn.innerHTML = button2 + ": <span class='text-uppercase'>" + archetypeType + "</span>";



                        sectionOne.style.maxHeight = sectionOne.scrollHeight + "px";
                        sectionOne.classList.add("active");
                        sectionTwo.style.maxHeight = null;
                        sectionThree.style.maxHeight = null;

                        sectionOneBtn.addEventListener("click", function () {
                            btnCollapse(sectionTwo, sectionOne)
                        });
                        sectionTwoBtn.addEventListener("click", function () {
                            btnCollapse(sectionOne, sectionTwo)
                        });
                        sectionTwoBtnNext.addEventListener("click", function () {
                            btnCollapse(sectionThree, sectionTwo)
                        });
                        sectionThreeBtn.addEventListener("click", function () {
                            btnCollapse(sectionTwo, sectionThree)
                        });
                        window.addEventListener("resize", function () {
                            resizeEvent();
                        })

                    }



                }
            }

        })

}