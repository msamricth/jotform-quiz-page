const perfectionist_fear_response = 'FREEZE',

    perfectionist_fear_intro = "The <strong>PERFECTIONIST</strong> archetype has a core fear of being wrong or not accepted. This often results in diﬃculty making decisions, to the point of ‘freezing’. At times this leader will over focus on scrutinizing the work of the team, utilizing expert detail orientation, rather than making the hard calls. Process is important to perfectionists, but this may slow things down too much, creating conditions in a team that lead to turmoil. Perfectionists ﬁnd that over time their teams step back from making decisions or taking responsibility, because their leader does not allow enough autonomy. Ultimately, the PERFECTIONIST may ﬁnd themselves in rather extreme levels of stress as responsibility grows and knowing every detail, or making every decision, is just not realistic. ",
    
    perfectionist_coaching_link = '#',
    question_set1 = ["Now that we’ve named your fear, what may be behind it? (understanding the origin can make the fear your ally!)",
    "Who can you involve to have a conversation around this?",
    "How can you make this fear your ally - having a tendency to be a perfectionist means you are very careful and thoughtful - how might you use this without letting it take you to the FREEZE extreme?",
    "What would it look like to make an informed decision with some amount of ambiguity? Who could hold you accountable?"],

    question_set2 = ["How might you share your fear with your team, and ask how it’s affecting them?",
        "How does People Pleasing drive you to avoid giving feedback, or hold people accountable? How might you change this?",
        "Are you over using consensus, rather than sharing bad news or making the call yourself? How might you change this?"],

    question_set3 = ["How might you share your fear with your team, and ask how it’s affecting them?", "What do you want to do next time you see fear raising its ugly head?", "How does Perfectionism drive you to delay decisions, or overuse process? What would be different if you tried something besides freezing?", "The next time you are receiving feedback for not knowing something in your team, what would happen if you stayed open and curious?"];



var perfectionist_questions = {
    type: "FeatureCollection",
    features: []
};
perfectionist_questions.features.push({
    type: "Feature",
    properties: {
        question: "How does this Fear Archetype affect you?",
        list: question_set1
    }
});
perfectionist_questions.features.push({
    type: "Feature",
    properties: {
        question: "How does this Fear Archetype affect the way you show up for your team?",
        list: question_set2
    }
});
perfectionist_questions.features.push({
    type: "Feature",
    properties: {
        question: "How do you see this fear in your team?",
        list: question_set3
    }
});

export {
    perfectionist_fear_response,
    perfectionist_fear_intro,
    perfectionist_coaching_link,
    perfectionist_questions
}