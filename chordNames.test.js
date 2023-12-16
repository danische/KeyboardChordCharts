const { getChordName, keys } = require('./chordNames');

// pitch values from https://musescore.github.io/MuseScore_PluginAPI_Docs/plugins/html/pitch.html
const pitches = {
    'B#0': 12,
    'C0':  12,
    'C#0': 13,
    'Db0': 13,
    'D0':  14,
    'D#0': 15,
    'Eb0': 15,
    'E0':  16,
    'Fb0': 16,
    'E#0': 17,
    'F0':  17,
    'F#0': 18,
    'Gb0': 18,
    'G0':  19,
    'G#0': 20,
    'Ab1': 20,
    'A1':  21,
    'A#1': 22,
    'Bb1': 22,
    'B1':  23,
    'Cb1': 23,
    'B#1': 24,
    'C1':  24,
    'C#1': 25,
    'Db1': 25,
    'D1':  26,
    'D#1': 27,
    'Eb1': 27,
    'E1':  28,
    'Fb1': 28,
    'E#1': 29,
    'F1':  29,
    'F#1': 30,
    'Gb1': 30,
    'G1':  31,
    'G#1': 32,
    'Ab2': 32,
    'A2':  33,
    'A#2': 34,
    'Bb2': 34,
    'B2':  35,
    'Cb2': 35,
};

// chords from https://www.piano-keyboard-guide.com/key-of-c.html
describe("Chords in C/Am key", () => {
    const key = keys['C/Am'];
    test('test CM', () => {
        expect(getChordName([pitches['C0'], pitches['E0'], pitches['G0']], key)).toBe('CM');
    });
    test('test Dm', () => {
        expect(getChordName([pitches['D0'], pitches['F0'], pitches['A1']], key)).toBe('Dm');
    });
    test('test Em', () => {
        expect(getChordName([pitches['E0'], pitches['G0'], pitches['B1']], key)).toBe('Em');
    });
    test('test FM', () => {
        expect(getChordName([pitches['F0'], pitches['A1'], pitches['C1']], key)).toBe('FM');
    });
    test('test GM', () => {
        expect(getChordName([pitches['G0'], pitches['B1'], pitches['D1']], key)).toBe('GM');
    });
    test('test Bdim', () => {
        expect(getChordName([pitches['B1'], pitches['D1'], pitches['F1']], key)).toBe('Bdim');
    });
    test('test CM7', () => {
        expect(getChordName([pitches['C0'], pitches['E0'], pitches['G0'], pitches['B1']], key)).toBe('CM7');
    });
    test('test Dm7', () => {
        expect(getChordName([pitches['D0'], pitches['F0'], pitches['A1'], pitches['C1']], key)).toBe('Dm7');
    });
    test('test Em7', () => {
        expect(getChordName([pitches['E0'], pitches['G0'], pitches['B1'], pitches['D1']], key)).toBe('Em7');
    });
    test('test FM7', () => {
        expect(getChordName([pitches['F0'], pitches['A1'], pitches['C1'], pitches['E1']], key)).toBe('FM7');
    });
    test('test G7', () => {
        expect(getChordName([pitches['G0'], pitches['B1'], pitches['D1'], pitches['F1']], key)).toBe('G7');
    });
    test('test Am7', () => {
        expect(getChordName([pitches['A1'], pitches['C1'], pitches['E1'], pitches['G1']], key)).toBe('Am7');
    });
    test('test Bm7b5', () => {
        expect(getChordName([pitches['B1'], pitches['D1'], pitches['F1'], pitches['A2']], key)).toBe('Bm7b5');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-g.html
describe("Chords in G/Em key", () => {
    const key = keys['G/Em'];
    test('test GM', () => {
        expect(getChordName([pitches['G0'], pitches['B1'], pitches['D1']], key)).toBe('GM');
    });
    test('test Am', () => {
        expect(getChordName([pitches['A1'], pitches['C1'], pitches['E1']], key)).toBe('Am');
    });
    test('test Bm', () => {
        expect(getChordName([pitches['B1'], pitches['D1'], pitches['F#1']], key)).toBe('Bm');
    });
    test('test CM', () => {
        expect(getChordName([pitches['C0'], pitches['E0'], pitches['G0']], key)).toBe('CM');
    });
    test('test DM', () => {
        expect(getChordName([pitches['D0'], pitches['F#0'], pitches['A1']], key)).toBe('DM');
    });
    test('test Em', () => {
        expect(getChordName([pitches['E0'], pitches['G0'], pitches['B1']], key)).toBe('Em');
    });
    test('test F#dim', () => {
        expect(getChordName([pitches['F#0'], pitches['A1'], pitches['C1']], key)).toBe('F#dim');
    });
    test('test GM7', () => {
        expect(getChordName([pitches['G0'], pitches['B1'], pitches['D1'], pitches['F#1']], key)).toBe('GM7');
    });
    test('test Am7', () => {
        expect(getChordName([pitches['A1'], pitches['C1'], pitches['E1'], pitches['G1']], key)).toBe('Am7');
    });
    test('test Bm7', () => {
        expect(getChordName([pitches['B1'], pitches['D1'], pitches['F#1'], pitches['A2']], key)).toBe('Bm7');
    });
    test('test CM7', () => {
        expect(getChordName([pitches['C0'], pitches['E0'], pitches['G0'], pitches['B1']], key)).toBe('CM7');
    });
    test('test D7', () => {
        expect(getChordName([pitches['D0'], pitches['F#0'], pitches['A1'], pitches['C1']], key)).toBe('D7');
    });
    test('test Em7', () => {
        expect(getChordName([pitches['E0'], pitches['G0'], pitches['B1'], pitches['D1']], key)).toBe('Em7');
    });
    test('test F#m7b5', () => {
        expect(getChordName([pitches['F#0'], pitches['A1'], pitches['C1'], pitches['E1']], key)).toBe('F#m7b5');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-d.html
describe("Chords in D/Bm key", () => {
    const key = keys['D/Bm'];
    test('test DM', () => {
        expect(getChordName([pitches['D0'], pitches['F#0'], pitches['A1']], key)).toBe('DM');
    });
    test('test Em', () => {
        expect(getChordName([pitches['E0'], pitches['G0'], pitches['B1']], key)).toBe('Em');
    });
    test('test F#m', () => {
        expect(getChordName([pitches['F#0'], pitches['A1'], pitches['C#1']], key)).toBe('F#m');
    });
    test('test GM', () => {
        expect(getChordName([pitches['G0'], pitches['B1'], pitches['D1']], key)).toBe('GM');
    });
    test('test AM', () => {
        expect(getChordName([pitches['A1'], pitches['C#1'], pitches['E1']], key)).toBe('AM');
    });
    test('test Bm', () => {
        expect(getChordName([pitches['B1'], pitches['D1'], pitches['F#1']], key)).toBe('Bm');
    });
    test('test DM7', () => {
        expect(getChordName([pitches['D0'], pitches['F#0'], pitches['A1'], pitches['C#1']], key)).toBe('DM7');
    });
    test('test Em7', () => {
        expect(getChordName([pitches['E0'], pitches['G0'], pitches['B1'], pitches['D1']], key)).toBe('Em7');
    });
    test('test F#m7', () => {
        expect(getChordName([pitches['F#0'], pitches['A1'], pitches['C#1'], pitches['E1']], key)).toBe('F#m7');
    });
    test('test GM7', () => {
        expect(getChordName([pitches['G0'], pitches['B1'], pitches['D1'], pitches['F#1']], key)).toBe('GM7');
    });
    test('test A7', () => {
        expect(getChordName([pitches['A1'], pitches['C#1'], pitches['E1'], pitches['G1']], key)).toBe('A7');
    });
    test('test Bm7', () => {
        expect(getChordName([pitches['B1'], pitches['D1'], pitches['F#1'], pitches['A2']], key)).toBe('Bm7');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-a.html
describe("Chords in A/F#m key", () => {
    const key = keys['A/F#m'];
    test('test AM', () => {
        expect(getChordName([pitches['A1'], pitches['C#1'], pitches['E1']], key)).toBe('AM');
    });
    test('test Bm', () => {
        expect(getChordName([pitches['B1'], pitches['D1'], pitches['F#1']], key)).toBe('Bm');
    });
    test('test C#m', () => {
        expect(getChordName([pitches['C#0'], pitches['E0'], pitches['G#0']], key)).toBe('C#m');
    });
    test('test DM', () => {
        expect(getChordName([pitches['D0'], pitches['F#0'], pitches['A1']], key)).toBe('DM');
    });
    test('test EM', () => {
        expect(getChordName([pitches['E0'], pitches['G#0'], pitches['B1']], key)).toBe('EM');
    });
    test('test F#m', () => {
        expect(getChordName([pitches['F#0'], pitches['A1'], pitches['C#1']], key)).toBe('F#m');
    });
    test('test G#dim', () => {
        expect(getChordName([pitches['G#0'], pitches['B1'], pitches['D1']], key)).toBe('G#dim');
    });
    test('test AM7', () => {
        expect(getChordName([pitches['A1'], pitches['C#1'], pitches['E1'], pitches['G#1']], key)).toBe('AM7');
    });
    test('test Bm7', () => {
        expect(getChordName([pitches['B1'], pitches['D1'], pitches['F#1'], pitches['A2']], key)).toBe('Bm7');
    });
    test('test C#m7', () => {
        expect(getChordName([pitches['C#0'], pitches['E0'], pitches['G#0'], pitches['B1']], key)).toBe('C#m7');
    });
    test('test DM7', () => {
        expect(getChordName([pitches['D0'], pitches['F#0'], pitches['A1'], pitches['C#1']], key)).toBe('DM7');
    });
    test('test E7', () => {
        expect(getChordName([pitches['E0'], pitches['G#0'], pitches['B1'], pitches['D1']], key)).toBe('E7');
    });
    test('test F#m7', () => {
        expect(getChordName([pitches['F#0'], pitches['A1'], pitches['C#1'], pitches['E1']], key)).toBe('F#m7');
    });
    test('test G#m7b5', () => {
        expect(getChordName([pitches['G#0'], pitches['B1'], pitches['D1'], pitches['F#1']], key)).toBe('G#m7b5');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-e.html
describe("Chords in E/C#m key", () => {
    const key = keys['E/C#m'];
    test('test EM', () => {
        expect(getChordName([pitches['E0'], pitches['G#0'], pitches['B1']], key)).toBe('EM');
    });
    test('test F#m', () => {
        expect(getChordName([pitches['F#0'], pitches['A1'], pitches['C#1']], key)).toBe('F#m');
    });
    test('test G#m', () => {
        expect(getChordName([pitches['G#0'], pitches['B1'], pitches['D#1']], key)).toBe('G#m');
    });
    test('test AM', () => {
        expect(getChordName([pitches['A1'], pitches['C#1'], pitches['E1']], key)).toBe('AM');
    });
    test('test BM', () => {
        expect(getChordName([pitches['B1'], pitches['D#1'], pitches['F#1']], key)).toBe('BM');
    });
    test('test C#m', () => {
        expect(getChordName([pitches['C#0'], pitches['E0'], pitches['G#0']], key)).toBe('C#m');
    });
    test('test D#dim', () => {
        expect(getChordName([pitches['D#0'], pitches['F#0'], pitches['A1']], key)).toBe('D#dim');
    });
    test('test EM7', () => {
        expect(getChordName([pitches['E0'], pitches['G#0'], pitches['B1'], pitches['D#1']], key)).toBe('EM7');
    });
    test('test F#m7', () => {
        expect(getChordName([pitches['F#0'], pitches['A1'], pitches['C#1'], pitches['E1']], key)).toBe('F#m7');
    });
    test('test G#m7', () => {
        expect(getChordName([pitches['G#0'], pitches['B1'], pitches['D#1'], pitches['F#1']], key)).toBe('G#m7');
    });
    test('test AM7', () => {
        expect(getChordName([pitches['A1'], pitches['C#1'], pitches['E1'], pitches['G#1']], key)).toBe('AM7');
    });
    test('test B7', () => {
        expect(getChordName([pitches['B1'], pitches['D#1'], pitches['F#1'], pitches['A2']], key)).toBe('B7');
    });
    test('test C#m7', () => {
        expect(getChordName([pitches['C#0'], pitches['E0'], pitches['G#0'], pitches['B1']], key)).toBe('C#m7');
    });
    test('test D#m7b5', () => {
        expect(getChordName([pitches['D#0'], pitches['F#0'], pitches['A1'], pitches['C#1']], key)).toBe('D#m7b5');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-b.html
describe("Chords in B/G#m key", () => {
    const key = keys['B/G#m'];
    test('test BM', () => {
        expect(getChordName([pitches['B1'], pitches['D#1'], pitches['F#1']], key)).toBe('BM');
    });
    test('test C#m', () => {
        expect(getChordName([pitches['C#0'], pitches['E0'], pitches['G#0']], key)).toBe('C#m');
    });
    test('test D#m', () => {
        expect(getChordName([pitches['D#0'], pitches['F#0'], pitches['A#1']], key)).toBe('D#m');
    });
    test('test EM', () => {
        expect(getChordName([pitches['E0'], pitches['G#0'], pitches['B1']], key)).toBe('EM');
    });
    test('test F#M', () => {
        expect(getChordName([pitches['F#0'], pitches['A#1'], pitches['C#1']], key)).toBe('F#M');
    });
    test('test G#m', () => {
        expect(getChordName([pitches['G#0'], pitches['B1'], pitches['D#1']], key)).toBe('G#m');
    });
    test('test A#dim', () => {
        expect(getChordName([pitches['A#1'], pitches['C#1'], pitches['E1']], key)).toBe('A#dim');
    });
    test('test BM7', () => {
        expect(getChordName([pitches['B1'], pitches['D#1'], pitches['F#1'], pitches['A#2']], key)).toBe('BM7');
    });
    test('test C#m7', () => {
        expect(getChordName([pitches['C#0'], pitches['E0'], pitches['G#0'], pitches['B1']], key)).toBe('C#m7');
    });
    test('test D#m7', () => {
        expect(getChordName([pitches['D#0'], pitches['F#0'], pitches['A#1'], pitches['C#1']], key)).toBe('D#m7');
    });
    test('test EM7', () => {
        expect(getChordName([pitches['E0'], pitches['G#0'], pitches['B1'], pitches['D#1']], key)).toBe('EM7');
    });
    test('test F#7', () => {
        expect(getChordName([pitches['F#0'], pitches['A#1'], pitches['C#1'], pitches['E1']], key)).toBe('F#7');
    });
    test('test G#m7', () => {
        expect(getChordName([pitches['G#0'], pitches['B1'], pitches['D#1'], pitches['F#1']], key)).toBe('G#m7');
    });
    test('test A#m7b5', () => {
        expect(getChordName([pitches['A#1'], pitches['C#1'], pitches['E1'], pitches['G#1']], key)).toBe('A#m7b5');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-f-sharp.html
describe("Chords in F#/D#m key", () => {
    const key = keys['F#/D#m'];
    test('test F#M', () => {
        expect(getChordName([pitches['F#0'], pitches['A#1'], pitches['C#1']], key)).toBe('F#M');
    });
    test('test G#m', () => {
        expect(getChordName([pitches['G#0'], pitches['B1'], pitches['D#1']], key)).toBe('G#m');
    });
    test('test A#m', () => {
        expect(getChordName([pitches['A#1'], pitches['C#1'], pitches['E#1']], key)).toBe('A#m');
    });
    test('test BM', () => {
        expect(getChordName([pitches['B1'], pitches['D#1'], pitches['F#1']], key)).toBe('BM');
    });
    test('test C#M', () => {
        expect(getChordName([pitches['C#0'], pitches['E#0'], pitches['G#0']], key)).toBe('C#M');
    });
    test('test D#m', () => {
        expect(getChordName([pitches['D#0'], pitches['F#0'], pitches['A#1']], key)).toBe('D#m');
    });
    test('test E#dim', () => {
        expect(getChordName([pitches['E#0'], pitches['G#0'], pitches['B1']], key)).toBe('E#dim');
    });
    test('test F#M7', () => {
        expect(getChordName([pitches['F#0'], pitches['A#1'], pitches['C#1'], pitches['E#1']], key)).toBe('F#M7');
    });
    test('test G#m7', () => {
        expect(getChordName([pitches['G#0'], pitches['B1'], pitches['D#1'], pitches['F#1']], key)).toBe('G#m7');
    });
    test('test A#m7', () => {
        expect(getChordName([pitches['A#1'], pitches['C#1'], pitches['E#1'], pitches['G#1']], key)).toBe('A#m7');
    });
    test('test BM7', () => {
        expect(getChordName([pitches['B1'], pitches['D#1'], pitches['F#1'], pitches['A#2']], key)).toBe('BM7');
    });
    test('test C#7', () => {
        expect(getChordName([pitches['C#0'], pitches['E#0'], pitches['G#0'], pitches['B1']], key)).toBe('C#7');
    });
    test('test D#m7', () => {
        expect(getChordName([pitches['D#0'], pitches['F#0'], pitches['A#1'], pitches['C#1']], key)).toBe('D#m7');
    });
    test('test E#m7b5', () => {
        expect(getChordName([pitches['E#0'], pitches['G#0'], pitches['B1'], pitches['D#1']], key)).toBe('E#m7b5');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-c-sharp.html
describe("Chords in C#/A#m key", () => {
    const key = keys['C#/A#m'];
    test('test C#M', () => {
        expect(getChordName([pitches['C#0'], pitches['E#0'], pitches['G#0']], key)).toBe('C#M');
    });
    test('test D#m', () => {
        expect(getChordName([pitches['D#0'], pitches['F#0'], pitches['A#1']], key)).toBe('D#m');
    });
    test('test E#m', () => {
        expect(getChordName([pitches['E#0'], pitches['G#0'], pitches['B#1']], key)).toBe('E#m');
    });
    test('test F#M', () => {
        expect(getChordName([pitches['F#0'], pitches['A#1'], pitches['C#1']], key)).toBe('F#M');
    });
    test('test G#M', () => {
        expect(getChordName([pitches['G#0'], pitches['B#1'], pitches['D#1']], key)).toBe('G#M');
    });
    test('test A#m', () => {
        expect(getChordName([pitches['A#1'], pitches['C#1'], pitches['E#1']], key)).toBe('A#m');
    });
    test('test B#dim', () => {
        expect(getChordName([pitches['B#0'], pitches['D#0'], pitches['F#0']], key)).toBe('B#dim');
    });
});

// chords from https://darkworld.com/mythos/school/Chords-in-Major-Key-of-C-flat.html
describe("Chords in Cb/Abm key", () => {
    const key = keys['Cb/Abm'];
    test('test CbM', () => {
        expect(getChordName([pitches['Cb1'], pitches['Eb1'], pitches['Gb1']], key)).toBe('CbM');
    });
    test('test Dbm', () => {
        expect(getChordName([pitches['Db0'], pitches['Fb0'], pitches['Ab1']], key)).toBe('Dbm');
    });
    test('test Ebm', () => {
        expect(getChordName([pitches['Eb0'], pitches['Gb0'], pitches['Bb1']], key)).toBe('Ebm');
    });
    test('test FbM', () => {
        expect(getChordName([pitches['Fb0'], pitches['Ab1'], pitches['Cb1']], key)).toBe('FbM');
    });
    test('test GbM', () => {
        expect(getChordName([pitches['Gb0'], pitches['Bb1'], pitches['Db1']], key)).toBe('GbM');
    });
    test('test Abm', () => {
        expect(getChordName([pitches['Ab1'], pitches['Cb1'], pitches['Eb1']], key)).toBe('Abm');
    });
    test('test Bbdim', () => {
        expect(getChordName([pitches['Bb1'], pitches['Db1'], pitches['Fb1']], key)).toBe('Bbdim');
    });
});

// chords from https://jadebultitude.com/chords-in-g-flat-major/
describe("Chords in Gb/Ebm key", () => {
    const key = keys['Gb/Ebm'];
    test('test GbM', () => {
        expect(getChordName([pitches['Gb0'], pitches['Bb1'], pitches['Db1']], key)).toBe('GbM');
    });
    test('test Abm', () => {
        expect(getChordName([pitches['Ab1'], pitches['Cb1'], pitches['Eb1']], key)).toBe('Abm');
    });
    test('test Bbm', () => {
        expect(getChordName([pitches['Bb1'], pitches['Db1'], pitches['F1']], key)).toBe('Bbm');
    });
    test('test CbM', () => {
        expect(getChordName([pitches['Cb1'], pitches['Eb1'], pitches['Gb1']], key)).toBe('CbM');
    });
    test('test DbM', () => {
        expect(getChordName([pitches['Db0'], pitches['F0'], pitches['Ab1']], key)).toBe('DbM');
    });
    test('test Ebm', () => {
        expect(getChordName([pitches['Eb0'], pitches['Gb0'], pitches['Bb1']], key)).toBe('Ebm');
    });
    test('test Fdim', () => {
        expect(getChordName([pitches['F0'], pitches['Ab1'], pitches['Cb1']], key)).toBe('Fdim');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-d-flat.html
describe("Chords in Db/Bbm key", () => {
    const key = keys['Db/Bbm'];
    test('test DbM', () => {
        expect(getChordName([pitches['Db0'], pitches['F0'], pitches['Ab1']], key)).toBe('DbM');
    });
    test('test Ebm', () => {
        expect(getChordName([pitches['Eb0'], pitches['Gb0'], pitches['Bb1']], key)).toBe('Ebm');
    });
    test('test Fm', () => {
        expect(getChordName([pitches['F0'], pitches['Ab1'], pitches['C1']], key)).toBe('Fm');
    });
    test('test GbM', () => {
        expect(getChordName([pitches['Gb0'], pitches['Bb1'], pitches['Db1']], key)).toBe('GbM');
    });
    test('test AbM', () => {
        expect(getChordName([pitches['Ab1'], pitches['C1'], pitches['Eb1']], key)).toBe('AbM');
    });
    test('test Bbm', () => {
        expect(getChordName([pitches['Bb1'], pitches['Db1'], pitches['F1']], key)).toBe('Bbm');
    });
    test('test Cdim', () => {
        expect(getChordName([pitches['C0'], pitches['Eb0'], pitches['Gb0']], key)).toBe('Cdim');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-a-flat.html
describe("Chords in Ab/Fm key", () => {
    const key = keys['Ab/Fm'];
    test('test AbM', () => {
        expect(getChordName([pitches['Ab1'], pitches['C1'], pitches['Eb1']], key)).toBe('AbM');
    });
    test('test Bbm', () => {
        expect(getChordName([pitches['Bb1'], pitches['Db1'], pitches['F1']], key)).toBe('Bbm');
    });
    test('test Cm', () => {
        expect(getChordName([pitches['C0'], pitches['Eb0'], pitches['G0']], key)).toBe('Cm');
    });
    test('test DbM', () => {
        expect(getChordName([pitches['Db0'], pitches['F0'], pitches['Ab1']], key)).toBe('DbM');
    });
    test('test EbM', () => {
        expect(getChordName([pitches['Eb0'], pitches['G0'], pitches['Bb1']], key)).toBe('EbM');
    });
    test('test Fm', () => {
        expect(getChordName([pitches['F0'], pitches['Ab1'], pitches['C1']], key)).toBe('Fm');
    });
    test('test Gdim', () => {
        expect(getChordName([pitches['G0'], pitches['Bb1'], pitches['Db1']], key)).toBe('Gdim');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-e-flat.html
describe("Chords in Eb/Cm key", () => {
    const key = keys['Eb/Cm'];
    test('test EbM', () => {
        expect(getChordName([pitches['Eb0'], pitches['G0'], pitches['Bb1']], key)).toBe('EbM');
    });
    test('test Fm', () => {
        expect(getChordName([pitches['F0'], pitches['Ab1'], pitches['C1']], key)).toBe('Fm');
    });
    test('test Gm', () => {
        expect(getChordName([pitches['G0'], pitches['Bb1'], pitches['D1']], key)).toBe('Gm');
    });
    test('test AbM', () => {
        expect(getChordName([pitches['Ab1'], pitches['C1'], pitches['Eb1']], key)).toBe('AbM');
    });
    test('test BbM', () => {
        expect(getChordName([pitches['Bb1'], pitches['D1'], pitches['F1']], key)).toBe('BbM');
    });
    test('test Cm', () => {
        expect(getChordName([pitches['C0'], pitches['Eb0'], pitches['G0']], key)).toBe('Cm');
    });
    test('test Ddim', () => {
        expect(getChordName([pitches['D0'], pitches['F0'], pitches['Ab1']], key)).toBe('Ddim');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-b-flat.html
describe("Chords in Bb/Gm key", () => {
    const key = keys['Bb/Gm'];
    test('test BbM', () => {
        expect(getChordName([pitches['Bb1'], pitches['D1'], pitches['F1']], key)).toBe('BbM');
    });
    test('test Cm', () => {
        expect(getChordName([pitches['C0'], pitches['Eb0'], pitches['G0']], key)).toBe('Cm');
    });
    test('test Dm', () => {
        expect(getChordName([pitches['D0'], pitches['F0'], pitches['A1']], key)).toBe('Dm');
    });
    test('test EbM', () => {
        expect(getChordName([pitches['Eb0'], pitches['G0'], pitches['Bb1']], key)).toBe('EbM');
    });
    test('test FM', () => {
        expect(getChordName([pitches['F0'], pitches['A1'], pitches['C1']], key)).toBe('FM');
    });
    test('test Gm', () => {
        expect(getChordName([pitches['G0'], pitches['Bb1'], pitches['D1']], key)).toBe('Gm');
    });
    test('test Adim', () => {
        expect(getChordName([pitches['A1'], pitches['C1'], pitches['Eb1']], key)).toBe('Adim');
    });
});

// chords from https://www.piano-keyboard-guide.com/key-of-f.html
describe("Chords in F/Dm key", () => {
    const key = keys['F/Dm'];
    test('test FM', () => {
        expect(getChordName([pitches['F0'], pitches['A1'], pitches['C1']], key)).toBe('FM');
    });
    test('test Gm', () => {
        expect(getChordName([pitches['G0'], pitches['Bb1'], pitches['D1']], key)).toBe('Gm');
    });
    test('test Am', () => {
        expect(getChordName([pitches['A1'], pitches['C1'], pitches['E1']], key)).toBe('Am');
    });
    test('test BbM', () => {
        expect(getChordName([pitches['Bb1'], pitches['D1'], pitches['F1']], key)).toBe('BbM');
    });
    test('test CM', () => {
        expect(getChordName([pitches['C0'], pitches['E0'], pitches['G0']], key)).toBe('CM');
    });
    test('test Dm', () => {
        expect(getChordName([pitches['D0'], pitches['F0'], pitches['A1']], key)).toBe('Dm');
    });
    test('test Edim', () => {
        expect(getChordName([pitches['E0'], pitches['G0'], pitches['Bb1']], key)).toBe('Edim');
    });
});

// chords from https://www.scales-chords.com/chord/piano/C%5CE
describe("Inverted Chords in C/Am key", () => {
    const key = keys['C/Am'];
    test('test CM/E', () => {
        expect(getChordName([pitches['E0'], pitches['G0'], pitches['C1']], key)).toBe('CM/E');
    });
    test('test CM/G', () => {
        expect(getChordName([pitches['G0'], pitches['C1'], pitches['E1']], key)).toBe('CM/G');
    });
    test('test Dm/F', () => {
        expect(getChordName([pitches['F0'], pitches['A1'], pitches['D1']], key)).toBe('Dm/F');
    });
    test('test Dm/A', () => {
        expect(getChordName([pitches['A1'], pitches['D1'], pitches['F1']], key)).toBe('Dm/A');
    });
});
