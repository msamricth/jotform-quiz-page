const titleMain = "Leading with Heart Assessment:",
    titlePart1 = "Your Results",
    titlePart2 = "What fears are holding you back?",
    titlePart3 = "What fears are holding you back?",
    introduction = "There are three typical fear responses that leaders fall into: <strong>FIGHT, FLIGHT and FREEZE.</strong> Each of these has an unexpressed underlying fear, as well as a fear ’Archetype’:<br> a way of behaving that we can see clearly from the outside in everyday leadership behaviors.",
    partTwo = "It’s a part of being human to have fears. Fear is natural in the business world, where leaders continually worry about losing out to the competition or making a crucial mistake. The key is to have the right balance of fear in motivating yourself and others, and not to let your fears bring out the worst in you. When leaders can identify and engage in conversation about their fears, it can be a turning point in their leadership journey. We’ve learned that the best leaders share their fears with their teams, and it often begins a transformation in the team. These conversations result in high trust and transparency, and translate into TEAMS THAT GET RESULTS.",
    button1 = "part 1", button2 = "part 2", button3 = "part 3",
    question_set1 = ["Now that we’ve named your fear, what may be behind it? (understanding the origin can make the fear your ally!)", "Who can you involve to have a conversation around this?", "How can you make this fear your ally - feeling like an imposter means you work hard to achieve and prove yourself- how might you use this without letting it take you to the FRIGHT extreme?", "What would it look like to share that you are unsure, and want the views of others? Who could hold you accountable to try this?"],

    question_set2 = ["How might you share your fear with your team, and ask how it’s affecting them?",
        "What do you want to do next time you see fear raising its ugly head?",
        "How does the ‘fight’ reaction drive you to be impatient with your team? What would be different if you prioritized praising them and taking your time?",
        "The next time you are receiving a new point of view on an important topic, what would happen if you stayed open and curious?"],

    question_set3 = ["What might your team members be most afraid of?",
        "What could you say or do to address their fear with compassion instead of with your own fear response?",
        "Do you see IMPOSTER behavior in members of your team? If they are impatient with others, or feel they can’t ask for help, can you pair them with other team members to build trusting relationships?"];

var questions = {
    type: "FeatureCollection",
    features: []
};
questions.features.push({
    type: "Feature",
    properties: {
        question: "How does this Fear Archetype affect you?",
        list: question_set1
    }
});
questions.features.push({
    type: "Feature",
    properties: {
        question: "How does this Fear Archetype affect the way you show up for your team?",
        list: question_set2
    }
});
questions.features.push({
    type: "Feature",
    properties: {
        question: "How do you see this fear in your team?",
        list: question_set3
    }
});
export {
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
}