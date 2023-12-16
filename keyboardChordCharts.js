function isBlackKey(key) {
    const blackKeys = [1, 3, 6, 8, 10];
    return blackKeys.includes(key % 12);
}

function getStartPositionOnCorG(firstKey) {
    const awayFromC = firstKey % 12
    if (awayFromC > 4) {
        return firstKey - (awayFromC - 5)
    } else {
        return firstKey - awayFromC
    }
}

function getEndPositionOnWhiteKey(lastKey) {
    return isBlackKey(lastKey) ? lastKey + 1 : lastKey;
}

function getChordChart(notes) {
    var pianoKeys = [
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w"
    ];

    for (let i = 0; i < notes.length; i++) {
        const selection = parseInt(notes[i]);
        if ((pianoKeys[selection]) == "w") { (pianoKeys[selection]) = "W" };
        if ((pianoKeys[selection]) == "|w") { (pianoKeys[selection]) = "|W" };
        if ((pianoKeys[selection]) == "<b>|</b>w") { (pianoKeys[selection]) = "<b>|</b>W" };
        if ((pianoKeys[selection]) == "b") { (pianoKeys[selection]) = "B" };
    }

    const firstKey = getStartPositionOnCorG(parseInt(notes[0]));
    const lastKey = getEndPositionOnWhiteKey(parseInt(notes[notes.length - 1]));

    let chart = "";
    for (let j = firstKey; j < lastKey + 1; j++) {
        chart = chart + pianoKeys[j];
    }
    return "|" + chart + "|";
}
