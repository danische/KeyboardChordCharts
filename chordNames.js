function generateChordName(notes, interval, key) {
    if (interval.toString() == [1, 3, 4.5].toString()) {
        return getNoteName(notes[0], key) + "M"
    } else if (interval.toString() == [1, 2.5, 4.5].toString()) {
        return getNoteName(notes[0], key) + "m"
    } else if (interval.toString() == [1, 2.5, 4].toString()) {
        return getNoteName(notes[0], key) + "dim"
        // 1st Major inversion
    } else if (interval.toString() == [1, 2.5, 5].toString()) {
        return getNoteName(notes[2], key) + "M/" + getNoteName(notes[0], key)
        // 2nd Major inversion
    } else if (interval.toString() == [1, 3.5, 5.5].toString()) {
        return getNoteName(notes[1], key) + "M/" + getNoteName(notes[0], key)
        // 1st Minor inversion
    } else if (interval.toString() == [1, 3, 5.5].toString()) {
        return getNoteName(notes[2], key) + "m/" + getNoteName(notes[0], key)
        // 2nd Minor inversion
    } else if (interval.toString() == [1, 3.5, 5].toString()) {
        return getNoteName(notes[1], key) + "m/" + getNoteName(notes[0], key)

    } else if (interval.toString() == [1, 3, 4.5, 6.5].toString()) {
        return getNoteName(notes[0], key) + "M7"
    } else if (interval.toString() == [1, 2.5, 4.5, 6].toString()) {
        return getNoteName(notes[0], key) + "m7"
    } else if (interval.toString() == [1, 3, 4.5, 6].toString()) {
        return getNoteName(notes[0], key) + "7"
    } else if (interval.toString() == [1, 2.5, 4, 6].toString()) {
        return getNoteName(notes[0], key) + "m7b5"
    } else {
        return "?"
    }
}

function getInterval(notes) {
    const start = notes[0]
    const end = notes[notes.length - 1]

    let position = start;
    let intervalValue = 1;
    let interval = [];
    interval.push(intervalValue);

    while (position != end) {
        position += 1;
        intervalValue += 0.5;
        if (notes.includes(position)) {
            interval.push(intervalValue);
        }
    }

    return interval;
}

function getNoteName(note, key) {
    const keyName = keyNames[key.toString()][note % 12];
    return keyName[0].toUpperCase()+ keyName.substring(1);
}

const keys = {
    'C/Am':    0,
    'G/Em':    1,
    'D/Bm':    2,
    'A/F#m':   3,
    'E/C#m':   4,
    'B/G#m':   5,
    'F#/D#m':  6,
    'C#/A#m':  7,
    'Cb/Abm': -7,
    'Gb/Ebm': -6,
    'Db/Bbm': -5,
    'Ab/Fm':  -4,
    'Eb/Cm':  -3,
    'Bb/Gm':  -2,
    'F/Dm':   -1,
};

const keyNames = {
    '0': ['C', 'c#', 'D', 'd#', 'E', 'F', 'f#', 'G', 'g#', 'A', 'a#', 'B'],     // C/Am
    '1': ['C', 'c#', 'D', 'd#', 'E', 'f', 'F#', 'G', 'g#', 'A', 'a#', 'B'],     // G/Em
    '2': ['c', 'C#', 'D', 'd#', 'E', 'f', 'F#', 'G', 'g#', 'A', 'a#', 'B'],     // D/Bm
    '3': ['c', 'C#', 'D', 'd#', 'E', 'f', 'F#', 'g', 'G#', 'A', 'a#', 'B'],     // A/F#m
    '4': ['c', 'C#', 'd', 'D#', 'E', 'f', 'F#', 'g', 'G#', 'A', 'a#', 'B'],     // E/C#m
    '5': ['c', 'C#', 'd', 'D#', 'E', 'f', 'F#', 'g', 'G#', 'a', 'A#', 'B'],     // B/G#m
    '6': ['c', 'C#', 'd', 'D#', 'e', 'E#', 'F#', 'g', 'G#', 'a', 'A#', 'B'],    // F#/D#m
    '7': ['B#', 'C#', 'd', 'D#', 'e', 'E#', 'F#', 'g', 'G#', 'a', 'A#', 'b'],   // C#/A#m

    '-7': ['c', 'Db', 'd', 'Eb', 'Fb', 'f', 'Gb', 'G', 'Ab', 'a', 'Bb', 'Cb'],  // Cb/Abm
    '-6': ['c', 'Db', 'd', 'Eb', 'e', 'F', 'Gb', 'g', 'Ab', 'a', 'Bb', 'Cb'],   // Gb/Ebm
    '-5': ['C', 'Db', 'd', 'Eb', 'e', 'F', 'Gb', 'g', 'Ab', 'a', 'Bb', 'b'],    // Db/Bbm
    '-4': ['C', 'Db', 'd', 'Eb', 'e', 'F', 'gb', 'G', 'Ab', 'a', 'Bb', 'b'],    // Ab/Fm
    '-3': ['C', 'db', 'D', 'Eb', 'e', 'F', 'gb', 'G', 'Ab', 'a', 'Bb', 'b'],    // Eb/Cm
    '-2': ['C', 'db', 'D', 'Eb', 'e', 'F', 'gb', 'G', 'ab', 'A', 'Bb', 'b'],    // Bb/Gm
    '-1': ['C', 'db', 'D', 'eb', 'E', 'F', 'gb', 'G', 'ab', 'A', 'Bb', 'b'],    // F/Dm

};

function getChordName(notes, key = keys['C/Am']) {
    console.log("notes = " + notes);
    const interval = getInterval(notes);
    console.log("interval = " + interval);
    const intervalName = generateChordName(notes, interval, key);
    console.log("interval name = " + intervalName);
    return intervalName;
}

module.exports = {
    getChordName,
    keys,
};
