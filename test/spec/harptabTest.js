(function () {
    describe("isValidNote", function () {
        [
            "C",
            "c",
            "D#",
            "Db",
            "e#",
            "eb"
        ].forEach(function (validNote) {
            it("should return true for valid uppercase note " + validNote, function () {
                let validUppercaseNote = "C";
                let valid = harptab.isValidNote(validUppercaseNote);

                expect(valid).toBe(true);
            });
        });

        it("should return false for invalid note", function () {
            let invalidNote = "X";
            let valid = harptab.isValidNote(invalidNote);

            expect(valid).toBe(false);
        });
    });

    describe("fromNoteToTab", function () {
        it("should return null for invalid note", function () {
            let invalidNote = "X";
            let tab = harptab.fromNoteToTab(invalidNote, 0, "C");

            expect(tab).toBe(null);
        });

        [
            ["C", 0, "C", "1+"],
            ["d", 1, "C", "1-"],
            ["A", 2, "F#", "(8+)"],
            ["Bb", 0, "C", "3-'"],
            ["a", 0, "C", "3-\""],
            ["ab", 0, "C", "3-\"'"]
        ].forEach(function ([note, scale, key, expected]) {
            it("should return " + expected + " for parameters (" + note + ", " + scale + ", " + key + ") with default formatting", function () {
                let tab = harptab.fromNoteToTab(note, scale, key);
                expect(tab).toBe(expected);
            });
        });

        it("should return valid tab for valid note with custom formatting", function () {
            let customFormatting = {
                blow: harptab.defaultFormatting,
                draw: "-#",
                halfStepBend: harptab.defaultFormatting,
                fullStepBend: harptab.defaultFormatting,
                oneAndHalfStepBend: harptab.defaultFormatting,
                overblow: harptab.defaultFormatting,
                overdraw: "[#]"
            };

            let note = "G";
            let scale = 3;
            let key = "F#";

            let tab = harptab.fromNoteToTab(note, scale, key, customFormatting);

            expect(tab).toBe("[-10]");
        });
    });
}());
