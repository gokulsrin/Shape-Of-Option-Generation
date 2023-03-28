
function parseData(responses, answers){
    // console.log(responses, answers);
    /**
     * information and responses are two strings for the two tables on sql 
     */
    var information_message= "";

    var age = responses["age"];
    var handedness = responses["handedness"];
    var language = responses["language"];
    var nationality = responses["nationality"];
    var residence = responses["residence"];
    var gender = responses["gender"];
    var education = responses["education"];
    var id = responses["id"];
 
     // for information table
    var information_message = `INSERT INTO information_table (id, handedness, nationality, residence, language, gender, education, age) VALUES\
    ('${id}', '${handedness}', '${nationality}', '${residence}', '${language}', '${gender}', '${education}', '${age}');`

    // for the responses table 
    var responses = [];
    for (var vign in answers){
        for (var number in answers[vign]){
            console.log(answers[vign][number]);
            var generation = answers[vign][number][0];
            // need to parse out any weird characters that could potentially disrupt the message 
            //lower case
            generation = generation.toLowerCase();
            //strip apostrophe 
            generation = generation.replace(/'/g, '');
            //strip non-alpha numeric and keep space - a problem with the previous pilot
            generation = generation.replace(/[^\w\s]/gi, '')
            var rt = answers[vign][number][1];
            var reflection_score =  answers[vign][number][2];
            var response = `INSERT INTO generations_table (id, vignette_name, generation_number, generation_time, response, reflection_score) VALUES ('${id}', '${vign}', '${number}', '${rt}', '${generation}', '${reflection_score}');`; 
            responses.push(response);
        }
    }
return [information_message, responses];
}

export {parseData}