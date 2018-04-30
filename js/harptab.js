const harptab = (function () {
    const harptabInner = {
        fromNoteToTab: function (note, scale, key, formatting) {
            return null;
        },
        isValidNote: function (note) {
            return null;
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