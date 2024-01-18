const peoplePleaser_fear_response = 'FREEZE',

    peoplePleaser_fear_intro = "The PEOPLE PLEASER archetype has a core fear of not being liked or accepted. Therefore they ﬁnd it diﬃcult to deliver bad news, and likely avoid diﬃcult conversations to the point of ‘ﬂight’ away from situations.<br><br>This Archetype spends a great deal of time making sure everyone on a team gets a voice, and hoping for consensus. Eventually the avoidance of decisions may cause turmoil within a team. While the PEOPLE PLEASER is a great listener, and very loyal, the over focus on keeping the team happy could lead to an inability to give and receive feedback, increased politics within the team, and a loss of credibility and confidence in leadership. ",

    peoplePleaser_coaching_link = '#',
    question_set1 = ["<strong>Get Honest:</strong> How does the FLIGHT reaction drive you to avoid conflict, sharing bad news, and holding others accountable? Where have you seen that behavior in yourself in recent months?","<strong>Get Feedback:</strong> Ask a team member you can trust, in what ways have you avoided difficult conversations or let hard decisions linger because you couldn’t find a solution that made everyone happy? "],

    question_set2 = ["<strong>Find Your Superpower:</strong> Ironically, your compassion and care for others would likely make you the ideal person to share hard feedback or bad news. How can you talk to your team about leveraging that superpower of yours and spend more time getting real with others? "],

    question_set3 = ["<strong>Look in the Mirror:</strong> Who on your team can hold up a mirror for you when you take your superpower too far and start putting peoples’ feelings or your relationship with them above what’s best for the business?", "<strong>Confront the Fear:</strong> How can you identify what is causing you to feel fear in that moment? How true is that fear? How can you use that energy to feel motivated rather than fearful?"];


var peoplePleaser_questions = {
    type: "FeatureCollection",
    features: []
};
peoplePleaser_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 1: Determine how fear affects the way you show up at work",
        list: question_set1
    }
});
peoplePleaser_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 2: Make your fear your ally",
        list: question_set2
    }
});
peoplePleaser_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 3: Ask someone to hold you accountable",
        list: question_set3
    }
});

export {
    peoplePleaser_fear_response,
    peoplePleaser_fear_intro,
    peoplePleaser_coaching_link,
    peoplePleaser_questions
}