(function () {
    describe("fromNoteToTab", function () {
        it("should return null for invalid note", function () {
            let invalidNote = "X";
            let tab = harptab.fromNoteToTab(invalidNote, 0, "C");

            expect(tab).toBe(null);
        });

        it("should return null for unplayable note", function () {
            // B harmonica has no A in the lowest octave
            let tab = harptab.fromNoteToTab("A", 0, "B");

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
        ].forEach(function ([note, octave, key, expected]) {
            it("should return " + expected + " for parameters (" + note + ", " + octave + ", " + key + ") with default formatting", function () {
                let tab = harptab.fromNoteToTab(note, octave, key);
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
            let octave = 3;
            let key = "F#";

            let tab = harptab.fromNoteToTab(note, octave, key, customFormatting);

            expect(tab).toBe("[-10]");
        });
    });

    describe("fromOctavelessNotesToTabs", function () {
        it("should return an empty string for an empty string", function () {
            const key = "C";
            const notes = "";
            const expectedTabs = "";

            let tabs = harptab.fromOctavelessNotesToTabs(notes, key);

            expect(tabs).toEqual(expectedTabs);
        });

        it("should properly convert whole scale with sharps", function () {
            const key = "C";
            const notes = "C c# D d# e F f# G G# a A# B"
            const expectedTabs = "4+ 4-' 4- (4+) 5+ 5- (5+) 6+ 6-' 6- (6+) 7-"

            let tabs = harptab.fromOctavelessNotesToTabs(notes, key);

            expect(tabs).toEqual(expectedTabs);
        });
    });
}());
