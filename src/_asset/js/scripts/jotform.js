import {imposter_fear_response,
    imposter_fear_intro,
    imposter_questions,
    imposter_coaching_link} from './imposter.js'
const app = document.getElementById('app');
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
                    var id = data[i].id;
                    var email = data[i].answers[45].answer,
                    fear_response,fear_intro,questions,coaching_link;
                    console.log(email)

                    var SP_slug = location.search.substring(1);
                    let comparingSlug = email;
                    if (SP_slug.includes('?')) {
                        comparingSlug = '?' + comparingSlug;
                    }
                    if (comparingSlug == SP_slug) {
                        var archetypeType = data[i].answers[50].answer;




                        if (archetypeType.includes('imposter')) {


                            fear_response = imposter_fear_response;
                            fear_intro = imposter_fear_intro;
                            questions = imposter_questions;
                            coaching_link = imposter_coaching_link;
                        }


                        const fearRespose = app.appendChild(
                          document.createElement("h3")
                        );
                        fearRespose.innerHTML = fear_response;

                        const fearIntro = app.appendChild(
                          document.createElement("p")
                        );
                        fearIntro.innerHTML = fear_intro;
                        console.log(questions);
                    }



                }
            }

        })

    }