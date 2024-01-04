const imposter_fear_response = 'FIGHT',

    imposter_fear_intro = "The <strong>IMPOSTER</strong> archetype stems from a core fear of being seen as incompetent. At times you may over focus on being seen as smart and having all the answers yourself, using your exceptional drive to overachieve. Therefore, you may find it difficult to receive feedback that you are wrong, or you may overreact when you feel uninformed. This is when the IMPOSTER fights, rather than listening with an open mind. Strong action orientation and decisiveness mean the IMPOSTER can step in too much, rather than trusting their team. They may find it difficult to control an anger reaction, causing a team to shut down and feel their ideas are dismissed.",
    
    imposter_coaching_link = '#',
    question_set1 = ["Now that we’ve named your fear, what may be behind it? (understanding the origin can make the fear your ally!)", "Who can you involve to have a conversation around this?", "How can you make this fear your ally - feeling like an imposter means you work hard to achieve and prove yourself- how might you use this without letting it take you to the FRIGHT extreme?", "What would it look like to share that you are unsure, and want the views of others? Who could hold you accountable to try this?"],

    question_set2 = ["How might you share your fear with your team, and ask how it’s affecting them?",
        "What do you want to do next time you see fear raising its ugly head?",
        "How does the ‘fight’ reaction drive you to be impatient with your team? What would be different if you prioritized praising them and taking your time?",
        "The next time you are receiving a new point of view on an important topic, what would happen if you stayed open and curious?"],

    question_set3 = ["What might your team members be most afraid of?",
        "What could you say or do to address their fear with compassion instead of with your own fear response?",
        "Do you see IMPOSTER behavior in members of your team? If they are impatient with others, or feel they can’t ask for help, can you pair them with other team members to build trusting relationships?"];

var imposter_questions = {
    type: "FeatureCollection",
    features: []
};
imposter_questions.features.push({
    type: "Feature",
    properties: {
        question: "How does this Fear Archetype affect you?",
        list: question_set1
    }
});
imposter_questions.features.push({
    type: "Feature",
    properties: {
        question: "How does this Fear Archetype affect the way you show up for your team?",
        list: question_set2
    }
});
imposter_questions.features.push({
    type: "Feature",
    properties: {
        question: "How do you see this fear in your team?",
        list: question_set3
    }
});
export {
    imposter_fear_response,
    imposter_fear_intro,
    imposter_coaching_link,
    imposter_questions
}