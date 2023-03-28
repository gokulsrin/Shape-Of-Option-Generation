import { parse } from "dotenv";

/**
 * 
 * @param data this will be the json.body.data that is sent from the server 
 * @returns a string consisting of mysql instructions...
 */
function parseData(data){
    /**
     * information and responses are two strings for the two tables on sql 
     */
    var information_message= "";
    var responses = [];

    var age = data["age"];
    var handedness = data["handedness"];
    var language = data["language"];
    var nationality = data["nationality"];
    var residence = data["residence"];
    var gender = data["gender"];
    var education = data["education"];
    var id = data["id"];
    var bai = data["bai"];
    var bdi = data["bdi"];
    var panas_pos = data["panas_pos"];
    //we removed panas neg
    var panas_neg = 0;
    var openness = data["openness"];

    // for information table
    information_message = `INSERT INTO information_table (id, handedness, nationality, residence, language, gender, education, age, bai, bdi, panas_pos, panas_neg, openness) VALUES\
 ('${id}', '${handedness}', '${nationality}', '${residence}', '${language}', '${gender}', '${education}', '${age}', '${bai}', '${bdi}', '${panas_pos}', '${panas_neg}', '${openness}');`
   
    //for the generations table
    for (var key in data){
        //for keys that map to dictionaries (e.g., vignette data)
        if (data[key].constructor == Object){
            for (var option in data[key]){
                //msg structure '0': [ 'sss', 934, 50 ]
                var response = `INSERT INTO generations_table (id, vignette_name, generation_number, generation_time, response, reflection_score) VALUES ('${id}', '${key}', '${option}', '${data[key][option][1]}', '${data[key][option][0]}', '${data[key][option][2]}')`
                responses.push(response);
            }
        }
    }
    return [information_message, responses];
}


export {parseData}