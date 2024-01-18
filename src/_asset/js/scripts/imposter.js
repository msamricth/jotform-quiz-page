const imposter_fear_response = 'FIGHT',

    imposter_fear_intro = "The IMPOSTER archetype stems from a core fear of being seen as incompetent or as undeserving of the role. At times you may over focus on being seen as smart and having all the answers yourself, using your exceptional drive to overachieve. Therefore, you may find it difficult to receive feedback that you are wrong, or you may overreact when you feel uninformed. This is when the IMPOSTER fights, rather than listening with an open mind. <br><br> At the team level, rushing to action or making rash decisions can mean the IMPOSTER steps in too much, rather than trusting their team. They may find it difficult to control their anger reaction, causing a team to shut down and feel their ideas are dismissed.",
    
    imposter_coaching_link = '#',
    question_set1 = ["<strong>Get Honest:</strong> How does the FIGHT reaction drive you to need to be right or be impatient with others? Where have you seen that behavior in yourself in recent months?",
"<strong>Get Feedback:</strong> Ask a team member you can trust, in what ways have you not made room for others to contribute or been not open to feedback?"],
       question_set2 = ["<strong>Find Your Superpower:</strong> Not needing to be the smartest or most competent person in the room is a wonderful trait for a leader–it shows humility and makes room for others. How can you talk to your team about helping you convert your fear about not being good enough into a healthy humility, curiosity, and openness to others’ contributions?"],

    question_set3 = ["<strong>Look in the Mirror: </strong>Who on your team can hold up a mirror for you when you let your knowledge of your limitations spill over into overcompensation and needing to be right?",
    "<strong>Confront the Fear:</strong> How can you identify what is causing you to feel fear in that moment? How true is that fear? How can you use that energy to feel motivated rather than fearful?"];

var imposter_questions = {
    type: "FeatureCollection",
    features: []
};
imposter_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 1: Determine how fear affects the way you show up at work",
        list: question_set1
    }
});
imposter_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 2: Make your fear your ally",
        list: question_set2
    }
});
imposter_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 3: Ask someone to hold you accountable",
        list: question_set3
    }
});

export {
    imposter_fear_response,
    imposter_fear_intro,
    imposter_coaching_link,
    imposter_questions
}