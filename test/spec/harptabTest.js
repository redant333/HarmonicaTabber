(function () {
    describe("isValidNote", function () {
        [
            "C0",
            "c5",
            "D#6",
            "Db7",
            "e#8",
            "eb8"
        ].forEach(function (validNote) {
            it("should return true for valid note " + validNote, function () {
                let valid = harptab.isValidNote(validNote);

                expect(valid).toBe(true);
            });
        });

        [
            "C9",
            "cB",
            "H",
            "C#0C"
        ].forEach(function (invalidNote) {
            it("should return false for invalid note " + invalidNote, function () {
                let valid = harptab.isValidNote(invalidNote);

                expect(valid).toBe(false);
            });
        });
        
    });

    describe("fromNoteToTab", function () {
        it("should return null for invalid note", function () {
            let invalidNote = "X";
            let tab = harptab.fromNoteToTab(invalidNote, 0, "C");

            expect(tab).toBe(null);
        });

        it("should return null for unplayable note", function() {
            // B harmonica has no A in the lowest scale
            let tab = harptab.fromNoteToTab("A",0,"B");

            expect(tab).toBe(null);
        });

        [
            ["C", 0, "C", "1+"],
            ["E", 2, "B", "5-"],
            ["G", 2, "Db", "9+'"],
            ["E", 1, "G", "3-\""],
            ["D#", 1, "G", "3-\"'"],
            ["Db", 3, "C", "(10-)"],
            ["A", 0, "F#", "(1+)"]
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
