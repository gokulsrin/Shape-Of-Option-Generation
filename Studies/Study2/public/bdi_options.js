bdi_options = {
    "Sadness": ["I do not feel sad.", "I feel sad much of the time.", "I am sad all the time.", "I am so sad or unhappy I can't stand it."],

    "Pessimism": ["I am not discouraged about my future.", "I feel more discouraged about my future than I used to be.",
        "I do not expect things to work out for me.", "I feel my future is hopeless and will only get worse."],

    "PastFailure": ["I do not feel like a failure.", "I feel more discouraged about my future than I used to",
        "As I look back I see a lot of failures.", "I feel I am a total failure as a person"],

    "LossofPleasure": ["I get as much pleasure as I ever did from the things I enjoy.", "I don't enjoy things as much as I used to.",
        "I get very little pleasure from the things I used to enjoy.", "I can't get any pleasure from the things I used to enjoy."],

    "GuiltyFeelings": ["I don't feel particularly guilty.", "I feel guilty over many things I have done or should have done.",
        "I feel quite guilty most of the time.", "I feel guilty all of the time."],

    "PunishmentFeelings": ["I don't feel I am being punished.", "I feel I may be punished.",
        "I expect to be punished.", " I feel I am being punished."],

    "SelfDislike": ["I feel the same about myself as ever.", "I have lost confidence in myself.",
        "I am disappointed in myself.", "I dislike myself. "],

    "SelfCriticalness": ["I don't criticize or blame myself more than usual.", "I am more critical of myself than I used to be.",
    "I criticize myself for all of my faults.", "I blame myself for everything bad that happens."],

    // as of rn not using this jawn
    //"SuicidalThoughtsorWishes": ["0 -- I don't have any thoughts of killing myself.", "1 -- I have thoughts of killing myself, but I would not carry them out.",
    //    "2 -- I would like to kill myself.", "3 -- I would kill myself if I had the chance. "],

    "Crying": ["I don't cry anymore than I used to.", "I cry more than I used to.",
        "I cry over every little thing.", "I feel like crying but I can't."],

    "Agitation": ["I am no more restless or wound up than usual.", "I feel more restless or wound up than usual.",
        "I am so restless or agitated that it's hard to stay still.", "I am so restless or agitated that I have to keep moving or doing something."],

    "LossofInterest": ["I have not lost interest in other people or activities.", "I am less interested in other people or things than before.",
        "I have lost most of my interest in other people or things.", "It's hard to get interested in anything. "],

    "Indecisiveness": ["I make decisions about as well as ever.", "I find it more difficult to make decisions than usual.",
        "I have much greater difficulty in making decisions than I used to.", "I have trouble making any decisions."],

    "Worthlessness": ["I do not feel I am worthless.", "I don't consider myself as worthwhile and useful as I used to.", 
        "I feel more worthless as compared to other people.", "I feel utterly worthless."],

    "LossofEnergy": ["I have as much energy as ever.", "I have less energy than I used to have.",
        "I don't have enough energy to do very much.", "I don't have enough energy to do anything. "],

    "ChangesinSleepingPattern": ["I have not experienced any change in my sleeping pattern.", "I sleep somewhat more than usual.",
        "I sleep somewhat less than usual.", "I sleep a lot more than usual.", "I sleep a lot less than usual.",
        "I sleep most of the day.", "I wake up 1-2 hours early and can't get back to sleep."],

    "Irratability": ["I am no more irritable than usual.", "I am more irritable than usual.",
        "I am much more irritable than usual.", "I am irritable all the time."],

    "ChangesinAppetite": ["I have not experienced any change in my appetite.", "My appetite is somewhat less than usual.",
        "My appetite is somewhat greater than usual.", "My appetite is much less than before.",
        "My appetite is much greater than usual.", "I have no appetite at all.", "I crave food all the time."],

    "ConcentrationDifficulty": ["I can concentrate as well as ever.", "I can't concentrate as well as usual.",
        "It's hard to keep my mind on anything for very long.", "I find I can't concentrate on anything."],

    "TirednessorFatigue": ["I am no more tired or fatigued than usual.", "I get more tired or fatigued more easily than usual.",
        "I am too tired or fatigued to do a lot of the things I used to do.", "I am too tired or fatigued to do most of the things I used to do."],

    "LossofInterestinSex": [" I have not noticed any recent change in my interest in sex.", "I am less interested in sex than I used to be.",
        "I am much less interested in sex now.", "I have lost interest in sex completely."]
}


bdi_scores = {'I do not feel sad.': '0', 'I feel sad much of the time.': '1', 'I am sad all the time.': '2', "I am so sad or unhappy I can't stand it.": '3', 'I am not discouraged about my future.': '0', 'I feel more discouraged about my future than I used to be.': '1', 'I do not expect things to work out for me.': '2', 'I feel my future is hopeless and will only get worse.': '3', 'I do not feel like a failure.': '0', 'I feel more discouraged about my future than I used to': '1', 'As I look back I see a lot of failures.': '2', 'I feel I am a total failure as a person': '3', 'I get as much pleasure as I ever did from the things I enjoy.': '0', "I don't enjoy things as much as I used to.": '1', 'I get very little pleasure from the things I used to enjoy.': '2', "I can't get any pleasure from the things I used to enjoy.": '3', "I don't feel particularly guilty.": '0', 'I feel guilty over many things I have done or should have done.': '1', 'I feel quite guilty most of the time.': '2', 'I feel guilty all of the time.': '3', "I don't feel I am being punished.": '0', 'I feel I may be punished.': '1', 'I expect to be punished.': '2', 'I feel I am being punished.': '3', 'I feel the same about myself as ever.': '0', 'I have lost confidence in myself.': '1', 'I am disappointed in myself.': '2', 'I dislike myself.': '3', "I don't criticize or blame myself more than usual.": '0', 'I am more critical of myself than I used to be.': '1', 'I criticize myself for all of my faults.': '2', 'I blame myself for everything bad that happens.': '3', "I don't cry anymore than I used to.": '0', 'I cry more than I used to.': '1', 'I cry over every little thing.': '2', "I feel like crying but I can't.": '3', 'I am no more restless or wound up than usual.': '0', 'I feel more restless or wound up than usual.': '1', "I am so restless or agitated that it's hard to stay still.": '2', 'I am so restless or agitated that I have to keep moving or doing something.': '3', 'I have not lost interest in other people or activities.': '0', 'I am less interested in other people or things than before.': '1', 'I have lost most of my interest in other people or things.': '2', "It's hard to get interested in anything.": '3', 'I make decisions about as well as ever.': '0', 'I find it more difficult to make decisions than usual.': '1', 'have much greater difficulty in making decisions than I used to.': '2', 'I have trouble making any decisions.': '3', 'I do not feel I am worthless.': '0', "I don't consider myself as worthwhile and useful as I used to.": '1', 'I feel more worthless as compared to other people.': '2', 'I feel utterly worthless.': '3', 'I have as much energy as ever.': '0', 'I have less energy than I used to have.': '1', "I don't have enough energy to do very much.": '2', "I don't have enough energy to do anything.": '3', 'I have not experienced any change in my sleeping pattern.': '0', 'I sleep somewhat more than usual.': '1', 'I sleep somewhat less than usual.': '1', 'I sleep a lot more than usual.': '2', 'I sleep a lot less than usual.': '2', 'I sleep most of the day.': '3', "I wake up 1-2 hours early and can't get back to sleep.": '3', 'I am no more irritable than usual.': '0', 'I am more irritable than usual.': '1', 'I am much more irritable than usual.': '2', 'I am irritable all the time.': '3', 'I have not experienced any change in my appetite.': '0', 'My appetite is somewhat less than usual.': '1', 'My appetite is somewhat greater than usual.': '1', 'My appetite is much less than before.': '2', 'My appetite is much greater than usual.': '2', 'I have no appetite at all.': '3', 'I crave food all the time.': '3', 'I can concentrate as well as ever.': '0', "I can't concentrate as well as usual.": '1', "It's hard to keep my mind on anything for very long.": '2', "I find I can't concentrate on anything.": '3', 'I am no more tired or fatigued than usual.': '0', 'I get more tired or fatigued more easily than usual.': '1', 'I am too tired or fatigued to do a lot of the things I used to do.': '2', 'I am too tired or fatigued to do most of the things I used to do.': '3', 'I have not noticed any recent change in my interest in sex.': '0', 'I am less interested in sex than I used to be.': '1', 'I am much less interested in sex now.': '2', 'I have lost interest in sex completely.': '3'}

// bdi_options = {
//     "Sadness": ["I do not feel sad.", "I feel sad much of the time.", "I am sad all the time.", "I am so sad or unhappy I can't stand it."],

//     "Pessimism": ["I am not discouraged about my future.", "I feel more discouraged about my future than I used to be.",
//         "I do not expect things to work out for me.", "I feel my future is hopeless and will only get worse."],

//     "PastFailure": ["I do not feel like a failure.", "I feel more discouraged about my future than I used to",
//         "As I look back I see a lot of failures.", "I feel I am a total failure as a person"],

//     "LossofPleasure": ["I get as much pleasure as I ever did from the things I enjoy.", "I don't enjoy things as much as I used to.",
//         "I get very little pleasure from the things I used to enjoy.", "I can't get any pleasure from the things I used to enjoy."],

//     "GuiltyFeelings": ["I don't feel particularly guilty.", "I feel guilty over many things I have done or should have done.",
//         "I feel quite guilty most of the time.", "I feel guilty all of the time."],

//     "PunishmentFeelings": ["I don't feel I am being punished.", "I feel I may be punished.",
//         "I expect to be punished.", " I feel I am being punished."],

//     "SelfDislike": ["I feel the same about myself as ever.", "I have lost confidence in myself.",
//         "I am disappointed in myself.", "I dislike myself. "],

//     "SelfCriticalness": ["I don't criticize or blame myself more than usual.", "I am more critical of myself than I used to be.",
//     "I criticize myself for all of my faults.", "I blame myself for everything bad that happens."],

//     // as of rn not using this jawn
//     //"SuicidalThoughtsorWishes": ["0 -- I don't have any thoughts of killing myself.", "1 -- I have thoughts of killing myself, but I would not carry them out.",
//     //    "2 -- I would like to kill myself.", "3 -- I would kill myself if I had the chance. "],

//     "Crying": ["I don't cry anymore than I used to.", "I cry more than I used to.",
//         "I cry over every little thing.", "I feel like crying but I can't."],

//     "Agitation": ["I am no more restless or wound up than usual.", "I feel more restless or wound up than usual.",
//         "I am so restless or agitated that it's hard to stay still.", "I am so restless or agitated that I have to keep moving or doing something."],

//     "LossofInterest": ["I have not lost interest in other people or activities.", "I am less interested in other people or things than before.",
//         "I have lost most of my interest in other people or things.", "It's hard to get interested in anything. "],

//     "Indecisiveness": ["I make decisions about as well as ever.", "I find it more difficult to make decisions than usual.",
//         " have much greater difficulty in making decisions than I used to.", "I have trouble making any decisions."],

//     "Worthlessness": ["I do not feel I am worthless.", "I don't consider myself as worthwhile and useful as I used to.", 
//         "I feel more worthless as compared to other people.", "I feel utterly worthless."],

//     "LossofEnergy": ["I have as much energy as ever.", "I have less energy than I used to have.",
//         "I don't have enough energy to do very much.", "I don't have enough energy to do anything. "],

//     "ChangesinSleepingPattern": ["I have not experienced any change in my sleeping pattern.", "I sleep somewhat more than usual.",
//         "I sleep somewhat less than usual.", "I sleep a lot more than usual.", "I sleep a lot less than usual.",
//         "I sleep most of the day.", "I wake up 1-2 hours early and can't get back to sleep."],

//     "Irratability": ["I am no more irritable than usual.", "I am more irritable than usual.",
//         "I am much more irritable than usual.", "I am irritable all the time."],

//     "ChangesinAppetite": ["I have not experienced any change in my appetite.", "My appetite is somewhat less than usual.",
//         "My appetite is somewhat greater than usual.", "My appetite is much less than before.",
//         "My appetite is much greater than usual.", "I have no appetite at all.", "I crave food all the time."],

//     "ConcentrationDifficulty": ["I can concentrate as well as ever.", "I can't concentrate as well as usual.",
//         "It's hard to keep my mind on anything for very long.", "I find I can't concentrate on anything."],

//     "TirednessorFatigue": ["I am no more tired or fatigued than usual.", "I get more tired or fatigued more easily than usual.",
//         "I am too tired or fatigued to do a lot of the things I used to do.", "I am too tired or fatigued to do most of the things I used to do."],

//     "LossofInterestinSex": [" I have not noticed any recent change in my interest in sex.", "I am less interested in sex than I used to be.",
//         "I am much less interested in sex now.", "I have lost interest in sex completely."]
// }
