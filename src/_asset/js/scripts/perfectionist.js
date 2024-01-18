const perfectionist_fear_response = 'FREEZE',

    perfectionist_fear_intro = "The PERFECTIONIST ARCHETYPE has a core fear of being wrong or not accepted. This often results in diﬃculty making decisions, to the point of ‘freezing’. At times this leader will scrutinize the work of the team and delve into every little detail instead of making hard decisions. <br> <br>Perfectionists may ﬁnd that over time their teams start to avoid making decisions or taking responsibility, because their leader does not allow enough autonomy. Ultimately, the PERFECTIONIST may ﬁnd themselves in rather extreme levels of stress as responsibility grows and exhausting every detail and making every decision is just not realistic. ",
    
    perfectionist_coaching_link = '#',
    question_set1 = ["<strong>Get Honest:</strong> How does the ‘FREEZE’ reaction drive you to be overly detailed or indecisive? Where have you seen that behavior in yourself in recent months?","<strong>Get Feedback:</strong> Ask a team member you can trust, in what ways have you let “Perfect be the enemy of Good?” How have you been slow to make hard decisions"],

    question_set2 = ["<strong>Find Your Superpower:</strong> Your eye for detail and quality is likely a strength. How can you talk to your team about leveraging that superpower of yours? In what ways is it useful?"],

    question_set3 = ["<strong>Look in the Mirror:</strong> Who on your team can hold up a mirror for you when you take your superpower too far and start to get too micro-managing or you are too slow to make decisions?","<strong>Confront the Fear:</strong> How can you identify what is causing you to feel fear in that moment? How true is that fear? How can you use that energy to feel motivated rather than fearful?"];



var perfectionist_questions = {
    type: "FeatureCollection",
    features: []
};
perfectionist_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 1: Determine how fear affects the way you show up at work",
        list: question_set1
    }
});
perfectionist_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 2: Make your fear your ally",
        list: question_set2
    }
});
perfectionist_questions.features.push({
    type: "Feature",
    properties: {
        question: "STEP 3: Ask someone to hold you accountable",
        list: question_set3
    }
});
export {
    perfectionist_fear_response,
    perfectionist_fear_intro,
    perfectionist_coaching_link,
    perfectionist_questions
}