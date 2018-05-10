function generateHarmonicaKey(key) {
    const BlowType = {
        BLOW: 1,
        DRAW: 2
    };

    const BlowModifier = {
        HALF_STEP_BEND: 1,
        FULL_STEP_BEND: 2,
        ONE_AND_HALF_BEND: 3,
        OVERBLOW: 4,
        OVERDRAW: 5,
        NONE: 6
    };

    const fullOctave = [
        ["C"],
        ["C#", "Db"],
        ["D"],
        ["D#", "Eb"],
        ["E"],
        ["F"],
        ["F#", "Gb"],
        ["G"],
        ["G#", "Ab"],
        ["A"],
        ["A#", "Bb"],
        ["B"]
    ];

    // Creates rows for all aliases of the note
    function createNoteRows(note, hole, blow, modifier) {
        let octave = Math.floor(note / fullOctave.length);
        let noteWithoutOctave = note % fullOctave.length;
        let ret = '';

        fullOctave[noteWithoutOctave].forEach((noteAlias) => {
            ret += '"' + noteAlias.toLowerCase() + octave + '":{'
            ret += 'hole:' + hole + ',';
            ret += 'blow:' + blow + ',';
            ret += 'modifier:' + modifier + '},<br/>';
        });
        return ret;
    }

    // Determine the index of the first note in key
    let firstNote = -1;
    for (let i = 0; i < fullOctave.length; i++) {
        if(fullOctave[i].includes(key)) {
            firstNote = i;
            break;
        }
    }

    // Return null if there is no such key
    if(firstNote === -1) {
        return null;
    }


    // Generate the object attribute with note layout
    let ret = '"' + key + '":{<br/>';
    let currentNote = 0;

    ret += createNoteRows(firstNote + (currentNote++), 1, BlowType.BLOW, BlowModifier.NONE);             // note 0
    ret += createNoteRows(firstNote + (currentNote++), 1, BlowType.DRAW, BlowModifier.HALF_STEP_BEND);   // note 1
    ret += createNoteRows(firstNote + (currentNote++), 1, BlowType.DRAW, BlowModifier.NONE);             // note 2
    ret += createNoteRows(firstNote + (currentNote++), 1, BlowType.BLOW, BlowModifier.OVERBLOW);         // note 3
    ret += createNoteRows(firstNote + (currentNote++), 2, BlowType.BLOW, BlowModifier.NONE);             // note 4
    ret += createNoteRows(firstNote + (currentNote++), 2, BlowType.DRAW, BlowModifier.FULL_STEP_BEND);   // note 5
    ret += createNoteRows(firstNote + (currentNote++), 2, BlowType.DRAW, BlowModifier.HALF_STEP_BEND);   // note 6
    // although 3+ and 2- are the same sound I chose 3+ because I like it more
    ret += createNoteRows(firstNote + (currentNote++), 3, BlowType.BLOW, BlowModifier.NONE);             // note 7
    ret += createNoteRows(firstNote + (currentNote++), 3, BlowType.DRAW, BlowModifier.ONE_AND_HALF_BEND);// note 8
    ret += createNoteRows(firstNote + (currentNote++), 3, BlowType.DRAW, BlowModifier.FULL_STEP_BEND);   // note 9
    ret += createNoteRows(firstNote + (currentNote++), 3, BlowType.DRAW, BlowModifier.HALF_STEP_BEND);   // note 10
    ret += createNoteRows(firstNote + (currentNote++), 3, BlowType.DRAW, BlowModifier.NONE);             // note 11
    ret += createNoteRows(firstNote + (currentNote++), 4, BlowType.BLOW, BlowModifier.NONE);             // note 12
    ret += createNoteRows(firstNote + (currentNote++), 4, BlowType.DRAW, BlowModifier.HALF_STEP_BEND);   // note 13
    ret += createNoteRows(firstNote + (currentNote++), 4, BlowType.DRAW, BlowModifier.NONE);             // note 14
    ret += createNoteRows(firstNote + (currentNote++), 4, BlowType.BLOW, BlowModifier.OVERBLOW);         // note 15
    ret += createNoteRows(firstNote + (currentNote++), 5, BlowType.BLOW, BlowModifier.NONE);             // note 16
    ret += createNoteRows(firstNote + (currentNote++), 5, BlowType.DRAW, BlowModifier.NONE);             // note 17
    ret += createNoteRows(firstNote + (currentNote++), 5, BlowType.BLOW, BlowModifier.OVERBLOW);         // note 18
    ret += createNoteRows(firstNote + (currentNote++), 6, BlowType.BLOW, BlowModifier.NONE);             // note 19
    ret += createNoteRows(firstNote + (currentNote++), 6, BlowType.DRAW, BlowModifier.HALF_STEP_BEND);   // note 20
    ret += createNoteRows(firstNote + (currentNote++), 6, BlowType.DRAW, BlowModifier.NONE);             // note 21
    ret += createNoteRows(firstNote + (currentNote++), 6, BlowType.BLOW, BlowModifier.OVERBLOW);         // note 22
    ret += createNoteRows(firstNote + (currentNote++), 7, BlowType.DRAW, BlowModifier.NONE);             // note 23
    ret += createNoteRows(firstNote + (currentNote++), 7, BlowType.BLOW, BlowModifier.NONE);             // note 24
    ret += createNoteRows(firstNote + (currentNote++), 7, BlowType.DRAW, BlowModifier.OVERDRAW);         // note 25
    ret += createNoteRows(firstNote + (currentNote++), 8, BlowType.DRAW, BlowModifier.NONE);             // note 26
    ret += createNoteRows(firstNote + (currentNote++), 8, BlowType.BLOW, BlowModifier.HALF_STEP_BEND);   // note 27
    ret += createNoteRows(firstNote + (currentNote++), 8, BlowType.BLOW, BlowModifier.NONE);             // note 28
    ret += createNoteRows(firstNote + (currentNote++), 9, BlowType.DRAW, BlowModifier.NONE);             // note 29
    ret += createNoteRows(firstNote + (currentNote++), 9, BlowType.BLOW, BlowModifier.HALF_STEP_BEND);   // note 30
    ret += createNoteRows(firstNote + (currentNote++), 9, BlowType.BLOW, BlowModifier.NONE);             // note 31
    ret += createNoteRows(firstNote + (currentNote++), 9, BlowType.DRAW, BlowModifier.OVERDRAW);         // note 32
    ret += createNoteRows(firstNote + (currentNote++), 10,BlowType.DRAW, BlowModifier.NONE);             // note 33
    ret += createNoteRows(firstNote + (currentNote++), 10,BlowType.BLOW, BlowModifier.FULL_STEP_BEND);   // note 34
    ret += createNoteRows(firstNote + (currentNote++), 10,BlowType.BLOW, BlowModifier.HALF_STEP_BEND);   // note 35
    ret += createNoteRows(firstNote + (currentNote++), 10,BlowType.BLOW, BlowModifier.NONE);             // note 36
    ret += createNoteRows(firstNote + (currentNote++), 10,BlowType.DRAW, BlowModifier.OVERDRAW);         // note 37

    ret += "},<br/>"

    return ret;
}

function printKeys() {
    let keys = ""; 

    keys += generateHarmonicaKey("C");
    keys += generateHarmonicaKey("Db");
    keys += generateHarmonicaKey("D");
    keys += generateHarmonicaKey("Eb");
    keys += generateHarmonicaKey("F");
    keys += generateHarmonicaKey("F#");
    keys += generateHarmonicaKey("G");
    keys += generateHarmonicaKey("Ab");
    keys += generateHarmonicaKey("A");
    keys += generateHarmonicaKey("Bb");
    keys += generateHarmonicaKey("B");

    document.write(keys);
}