const harptab = (function () {
    const harptabInner = {
        fromNoteToTab: function (note, scale, key, formatting) {
            return null;
        },
        isValidNote: function (note) {
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
        },
        isValidTab: function (string, formatting) {
            return null;
        },
        defaultFormatting: {
            blow: "#+",
            draw: "#-",
            halfStepBend: "#'",
            fullStepBend: "#\"",
            oneAndHalfStepBend: "#\"'",
            overblow: "(#)",
            overdraw: "(#)"
        }
    };

    return harptabInner;
}());