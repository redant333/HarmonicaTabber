const harptab = (function () {
    const defaultFormatting = {
        blow: "#+",
        draw: "#-",
        halfStepBend: "#'",
        fullStepBend: "#\"",
        oneAndHalfStepBend: "#\"'",
        overblow: "(#)",
        overdraw: "(#)"
    };

    function fromNoteToTab(note, scale, key, formatting) {
        return null;
    };

    function isValidNote(note) {
        let len = note.length;

        if (len != 1 && len != 2) {
            return false;
        }

        let lowercaseNote = note.toLowerCase();
        let notes = "abcdefg";
        let modifications = "#b";
        if (!notes.includes(lowercaseNote[0])) {
            return false;
        }

        if (len == 2) {
            if (!modifications.includes(note[1])) {
                return false;
            }
        }

        return true;
    }
    
    return {
        fromNoteToTab: fromNoteToTab,
        isValidNote: isValidNote,
        defaultFormatting: defaultFormatting
    };
}());