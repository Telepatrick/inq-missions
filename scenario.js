var diceRoller  = new DiceRoller();

function roll(){
    //var value = document.getElementById('input').value;

    //Generate scenario
    var scenario = diceRoller.roll('d1').getTotal();
    var scenario_text = '';

    switch (scenario) {
        case (1): scenario_text = getFightScenarioText();
            break;
        case (2): scenario_text = getScavengersScenarioText();
            break;
        case (3): scenario_text = getCrossingScenarioText();
            break;
        case (4): scenario_text = getBreakoutScenarioText();
            break;
        case (5): scenario_text = getRaidScenarioText();
            break;
    }

    document.getElementById('output').outerHTML = scenario_text;

    // stop event propagation
    return false;
}

function clearLog(){
    diceRoller.clearLog();

    document.getElementById('output').value = diceRoller.getNotation();

    // stop event propagation
    return false;
}

/**
 * Objective table
 */
function objectiveTable() {
    var objectiveNumber = diceRoller.roll('d19').getTotal();
    var objectiveText = '';

    switch (objectiveNumber) {
        case (1): objectiveText = 'a Member of the other warband';
            break;
        case (2): objectiveText = 'the Leader of the other warband';
            break;
        case (3): objectiveText = 'a Member of your own warband';
            break;
        case (4): objectiveText = 'an NPC';
            break;
        case (5): objectiveText = 'a Book';
            break;
        case (6): objectiveText = 'a Map';
            break;
        case (7): objectiveText = 'an STC Print-out';
            break;
        case (8): objectiveText = 'an Alien Artefact';
            break;
        case (9): objectiveText = 'a Daemonic Artefact';
            break;
        case (10): objectiveText = 'a Vehicle';
            break;
        case (11): objectiveText = 'a Piece of Archeotech';
            break;
        case (12): objectiveText = 'an Experimental Weapon';
            break;
        case (13): objectiveText = 'a Weapons Cache';
            break;
        case (14): objectiveText = 'a Fuel Dump';
            break;
        case (15): objectiveText = 'the Door';
            break;
        case (16): objectiveText = 'the Power Supply';
            break;
        case (17): objectiveText = 'a Control Panel';
            break;
        case (18): objectiveText = 'a Communications System';
            break;
        case (19): objectiveText = 'a Computer Console';
            break;
    }

    return objectiveText;
}

/**
 * Action table
 */
function actionTable() {
    var actionNumber = diceRoller.roll('d6').getTotal();
    var actionText = '';

    switch (actionNumber) {
        case (1): actionText = 'use';
            break;
        case (2): actionText = 'capture';
            break;
        case (3): actionText = 'guard';
            break;
        case (4): actionText = 'find';
            break;
        case (5): actionText = 'fix';
            break;
        case (6): actionText = 'destroy';
            break;
    }

    return actionText;
}

/**
 * Characters Present table
 */
function charactersPresent() {
    var characterNumber = diceRoller.roll('d9').getTotal();
    var characterText = '';

    switch (characterNumber) {
        case (1): characterText = 'All the Warband';
            break;
        case (2): characterText = 'All the Henchmen';
            break;
        case (3): characterText = 'D3 Henchmen';
            break;
        case (4): characterText = 'Leader and D2 Henchmen';
            break;
        case (5): characterText = 'Leader and D3 Henchmen';
            break;
        case (6): characterText = 'Leader';
            break;
        case (7): characterText = 'Henchman 1';
            break;
        case (8): characterText = 'Henchman 2';
            break;
        case (9): characterText = 'Henchman 3';
            break;
    }

    return characterText;
}

/**
 * Scenario A - Fight! Text
 */
function getFightScenarioText() {
    var text = '<div><b>Fight!</b><br>';
    text += 'Twist on the theme of <b>Fight!</b> is Showdown. The two <br>';
    text += 'warbands start about <b>25 yards</b> apart and walk towards each<br>';
    text += 'other taking a <b>Nerve test</b> each turn untill someone`s nerve<br>';
    text += 'breaks and the fighting begins.<br><br></div>';
    text += '<div><i>The objective is <b>'+objectiveTable()+'</b> which<br>';
    text += '<b>Warband One</b> want to <b>'+actionTable()+'</b> whilst<br>';
    text += '<b>Warband Two</b> want to <b>'+actionTable()+'</b> it.<br></i></div>';

    return text;
}

/**
 * Scenario B - Scavengers Text
 */
function getScavengersScenarioText() {
    var text = '';

    return text;
}

/**
 * Scenario C - Crossing Text
 */
function getCrossingScenarioText() {
    var text = '';

    return text;
}

/**
 * Scenario D - Breakout Text
 */
function getBreakoutScenarioText() {
    var text = '';

    return text;
}

/**
 * Scenario E - Raid Text
 */
function getRaidScenarioText() {
    var text = '';

    return text;
}
