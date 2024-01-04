const peoplePleaser_fear_response = 'FREEZE',

    peoplePleaser_fear_intro = "The <strong>PEOPLE PLEASER</strong> archetype had a core fear of not being liked, or not being accepted. Therefore they ﬁnd it diﬃcult to deliver bad news, and likely avoid diﬃcult conversations to the point of ‘ﬂight’ away from situations. This Archetype spends a great deal of time making sure everyone on a team gets a voice, and hoping for consensus. Eventually the avoidance of decisions may cause turmoil within a team. While the PEOPLE PLEASER is a great listener, and very loyal, the over focus on keeping the team happy may lead to a lack of clear performance feedback and politics running rampant.  ",

    peoplePleaser_coaching_link = '#',
    question_set1 = ["Now that we’ve named your fear, what may be behind it? (understanding the origin can make the fear your ally!)", "Who can you share this fear with?", "HHow can you make this fear your ally - having a tendency to be a people pleaser means you value consensus and care a great deal about team culture - how might you use this without letting it take you to the FLIGHT extreme?", "How can you commit to giving honest feedback?"],

    question_set2 = ["How might you share your fear with your team, and ask how it’s affecting them?",
        "How does People Pleasing drive you to avoid giving feedback, or hold people accountable? How might you change this?",
        "Are you over using consensus, rather than sharing bad news or making the call yourself? How might you change this?"],

    question_set3 = ["What might your team members be most afraid of?",
        "What could you say or do to address their fear with compassion instead of with your own fear response?",
        "Do you see People Pleasing in members of your team ? If they are overly loyal to employees who are no longer effective in their roles, can you pair them with other team members to coach them to give important feedback or deliver bad news?"];


var peoplePleaser_questions = {
    type: "FeatureCollection",
    features: []
};
peoplePleaser_questions.features.push({
    type: "Feature",
    properties: {
        question: "How does this Fear Archetype affect you?",
        list: question_set1
    }
});
peoplePleaser_questions.features.push({
    type: "Feature",
    properties: {
        question: "How does this Fear Archetype affect the way you show up for your team?",
        list: question_set2
    }
});
peoplePleaser_questions.features.push({
    type: "Feature",
    properties: {
        question: "How do you see this fear in your team?",
        list: question_set3
    }
});

export {
    peoplePleaser_fear_response,
    peoplePleaser_fear_intro,
    peoplePleaser_coaching_link,
    peoplePleaser_questions
}