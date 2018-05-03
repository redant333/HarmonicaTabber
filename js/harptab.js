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

    const BlowType = {
        BLOW: 1,
        DRAW: 2
    };

    const BlowModifier = {
        HALF_BEND: 1,
        FULL_BEND: 2,
        ONE_AND_HALF_BEND: 3,
        OVERBLOW: 4,
        OVERDRAW: 5,
        NONE: 6
    };

    const noteTabDict = {
        "C": {
            "c0": { hole: 1, blow: 1, modifier: 6 },
            "c#0": { hole: 1, blow: 2, modifier: 1 },
            "db0": { hole: 1, blow: 2, modifier: 1 },
            "d0": { hole: 1, blow: 2, modifier: 6 },
            "d#0": { hole: 1, blow: 1, modifier: 4 },
            "eb0": { hole: 1, blow: 1, modifier: 4 },
            "e0": { hole: 2, blow: 1, modifier: 6 },
            "f0": { hole: 2, blow: 2, modifier: 2 },
            "f#0": { hole: 2, blow: 2, modifier: 1 },
            "gb0": { hole: 2, blow: 2, modifier: 1 },
            "g0": { hole: 3, blow: 1, modifier: 6 },
            "g#0": { hole: 3, blow: 2, modifier: 3 },
            "ab0": { hole: 3, blow: 2, modifier: 3 },
            "a0": { hole: 3, blow: 2, modifier: 2 },
            "a#0": { hole: 3, blow: 2, modifier: 1 },
            "bb0": { hole: 3, blow: 2, modifier: 1 },
            "b0": { hole: 3, blow: 2, modifier: 6 },
            "c1": { hole: 4, blow: 1, modifier: 6 },
            "c#1": { hole: 4, blow: 2, modifier: 1 },
            "db1": { hole: 4, blow: 2, modifier: 1 },
            "d1": { hole: 4, blow: 2, modifier: 6 },
            "d#1": { hole: 4, blow: 1, modifier: 4 },
            "eb1": { hole: 4, blow: 1, modifier: 4 },
            "e1": { hole: 5, blow: 1, modifier: 6 },
            "f1": { hole: 5, blow: 2, modifier: 6 },
            "f#1": { hole: 5, blow: 1, modifier: 4 },
            "gb1": { hole: 5, blow: 1, modifier: 4 },
            "g1": { hole: 6, blow: 1, modifier: 6 },
            "g#1": { hole: 6, blow: 2, modifier: 1 },
            "ab1": { hole: 6, blow: 2, modifier: 1 },
            "a1": { hole: 6, blow: 2, modifier: 6 },
            "a#1": { hole: 6, blow: 1, modifier: 4 },
            "bb1": { hole: 6, blow: 1, modifier: 4 },
            "b1": { hole: 7, blow: 2, modifier: 6 },
            "c2": { hole: 7, blow: 1, modifier: 6 },
            "c#2": { hole: 7, blow: 2, modifier: 5 },
            "db2": { hole: 7, blow: 2, modifier: 5 },
            "d2": { hole: 8, blow: 2, modifier: 6 },
            "d#2": { hole: 8, blow: 1, modifier: 1 },
            "eb2": { hole: 8, blow: 1, modifier: 1 },
            "e2": { hole: 8, blow: 1, modifier: 6 },
            "f2": { hole: 9, blow: 2, modifier: 6 },
            "f#2": { hole: 9, blow: 1, modifier: 1 },
            "gb2": { hole: 9, blow: 1, modifier: 1 },
            "g2": { hole: 9, blow: 1, modifier: 6 },
            "g#2": { hole: 9, blow: 2, modifier: 5 },
            "ab2": { hole: 9, blow: 2, modifier: 5 },
            "a2": { hole: 10, blow: 2, modifier: 6 },
            "a#2": { hole: 10, blow: 1, modifier: 2 },
            "bb2": { hole: 10, blow: 1, modifier: 2 },
            "b2": { hole: 10, blow: 1, modifier: 1 },
            "c3": { hole: 10, blow: 1, modifier: 6 },
            "c#3": { hole: 10, blow: 2, modifier: 5 },
            "db3": { hole: 10, blow: 2, modifier: 5 },
        },
        "Db": {
            "c#0": { hole: 1, blow: 1, modifier: 6 },
            "db0": { hole: 1, blow: 1, modifier: 6 },
            "d0": { hole: 1, blow: 2, modifier: 1 },
            "d#0": { hole: 1, blow: 2, modifier: 6 },
            "eb0": { hole: 1, blow: 2, modifier: 6 },
            "e0": { hole: 1, blow: 1, modifier: 4 },
            "f0": { hole: 2, blow: 1, modifier: 6 },
            "f#0": { hole: 2, blow: 2, modifier: 2 },
            "gb0": { hole: 2, blow: 2, modifier: 2 },
            "g0": { hole: 2, blow: 2, modifier: 1 },
            "g#0": { hole: 3, blow: 1, modifier: 6 },
            "ab0": { hole: 3, blow: 1, modifier: 6 },
            "a0": { hole: 3, blow: 2, modifier: 3 },
            "a#0": { hole: 3, blow: 2, modifier: 2 },
            "bb0": { hole: 3, blow: 2, modifier: 2 },
            "b0": { hole: 3, blow: 2, modifier: 1 },
            "c1": { hole: 3, blow: 2, modifier: 6 },
            "c#1": { hole: 4, blow: 1, modifier: 6 },
            "db1": { hole: 4, blow: 1, modifier: 6 },
            "d1": { hole: 4, blow: 2, modifier: 1 },
            "d#1": { hole: 4, blow: 2, modifier: 6 },
            "eb1": { hole: 4, blow: 2, modifier: 6 },
            "e1": { hole: 4, blow: 1, modifier: 4 },
            "f1": { hole: 5, blow: 1, modifier: 6 },
            "f#1": { hole: 5, blow: 2, modifier: 6 },
            "gb1": { hole: 5, blow: 2, modifier: 6 },
            "g1": { hole: 5, blow: 1, modifier: 4 },
            "g#1": { hole: 6, blow: 1, modifier: 6 },
            "ab1": { hole: 6, blow: 1, modifier: 6 },
            "a1": { hole: 6, blow: 2, modifier: 1 },
            "a#1": { hole: 6, blow: 2, modifier: 6 },
            "bb1": { hole: 6, blow: 2, modifier: 6 },
            "b1": { hole: 6, blow: 1, modifier: 4 },
            "c2": { hole: 7, blow: 2, modifier: 6 },
            "c#2": { hole: 7, blow: 1, modifier: 6 },
            "db2": { hole: 7, blow: 1, modifier: 6 },
            "d2": { hole: 7, blow: 2, modifier: 5 },
            "d#2": { hole: 8, blow: 2, modifier: 6 },
            "eb2": { hole: 8, blow: 2, modifier: 6 },
            "e2": { hole: 8, blow: 1, modifier: 1 },
            "f2": { hole: 8, blow: 1, modifier: 6 },
            "f#2": { hole: 9, blow: 2, modifier: 6 },
            "gb2": { hole: 9, blow: 2, modifier: 6 },
            "g2": { hole: 9, blow: 1, modifier: 1 },
            "g#2": { hole: 9, blow: 1, modifier: 6 },
            "ab2": { hole: 9, blow: 1, modifier: 6 },
            "a2": { hole: 9, blow: 2, modifier: 5 },
            "a#2": { hole: 10, blow: 2, modifier: 6 },
            "bb2": { hole: 10, blow: 2, modifier: 6 },
            "b2": { hole: 10, blow: 1, modifier: 2 },
            "c3": { hole: 10, blow: 1, modifier: 1 },
            "c#3": { hole: 10, blow: 1, modifier: 6 },
            "db3": { hole: 10, blow: 1, modifier: 6 },
            "d3": { hole: 10, blow: 2, modifier: 5 },
        },
        "D": {
            "d0": { hole: 1, blow: 1, modifier: 6 },
            "d#0": { hole: 1, blow: 2, modifier: 1 },
            "eb0": { hole: 1, blow: 2, modifier: 1 },
            "e0": { hole: 1, blow: 2, modifier: 6 },
            "f0": { hole: 1, blow: 1, modifier: 4 },
            "f#0": { hole: 2, blow: 1, modifier: 6 },
            "gb0": { hole: 2, blow: 1, modifier: 6 },
            "g0": { hole: 2, blow: 2, modifier: 2 },
            "g#0": { hole: 2, blow: 2, modifier: 1 },
            "ab0": { hole: 2, blow: 2, modifier: 1 },
            "a0": { hole: 3, blow: 1, modifier: 6 },
            "a#0": { hole: 3, blow: 2, modifier: 3 },
            "bb0": { hole: 3, blow: 2, modifier: 3 },
            "b0": { hole: 3, blow: 2, modifier: 2 },
            "c1": { hole: 3, blow: 2, modifier: 1 },
            "c#1": { hole: 3, blow: 2, modifier: 6 },
            "db1": { hole: 3, blow: 2, modifier: 6 },
            "d1": { hole: 4, blow: 1, modifier: 6 },
            "d#1": { hole: 4, blow: 2, modifier: 1 },
            "eb1": { hole: 4, blow: 2, modifier: 1 },
            "e1": { hole: 4, blow: 2, modifier: 6 },
            "f1": { hole: 4, blow: 1, modifier: 4 },
            "f#1": { hole: 5, blow: 1, modifier: 6 },
            "gb1": { hole: 5, blow: 1, modifier: 6 },
            "g1": { hole: 5, blow: 2, modifier: 6 },
            "g#1": { hole: 5, blow: 1, modifier: 4 },
            "ab1": { hole: 5, blow: 1, modifier: 4 },
            "a1": { hole: 6, blow: 1, modifier: 6 },
            "a#1": { hole: 6, blow: 2, modifier: 1 },
            "bb1": { hole: 6, blow: 2, modifier: 1 },
            "b1": { hole: 6, blow: 2, modifier: 6 },
            "c2": { hole: 6, blow: 1, modifier: 4 },
            "c#2": { hole: 7, blow: 2, modifier: 6 },
            "db2": { hole: 7, blow: 2, modifier: 6 },
            "d2": { hole: 7, blow: 1, modifier: 6 },
            "d#2": { hole: 7, blow: 2, modifier: 5 },
            "eb2": { hole: 7, blow: 2, modifier: 5 },
            "e2": { hole: 8, blow: 2, modifier: 6 },
            "f2": { hole: 8, blow: 1, modifier: 1 },
            "f#2": { hole: 8, blow: 1, modifier: 6 },
            "gb2": { hole: 8, blow: 1, modifier: 6 },
            "g2": { hole: 9, blow: 2, modifier: 6 },
            "g#2": { hole: 9, blow: 1, modifier: 1 },
            "ab2": { hole: 9, blow: 1, modifier: 1 },
            "a2": { hole: 9, blow: 1, modifier: 6 },
            "a#2": { hole: 9, blow: 2, modifier: 5 },
            "bb2": { hole: 9, blow: 2, modifier: 5 },
            "b2": { hole: 10, blow: 2, modifier: 6 },
            "c3": { hole: 10, blow: 1, modifier: 2 },
            "c#3": { hole: 10, blow: 1, modifier: 1 },
            "db3": { hole: 10, blow: 1, modifier: 1 },
            "d3": { hole: 10, blow: 1, modifier: 6 },
            "d#3": { hole: 10, blow: 2, modifier: 5 },
            "eb3": { hole: 10, blow: 2, modifier: 5 },
        },
        "Eb": {
            "d#0": { hole: 1, blow: 1, modifier: 6 },
            "eb0": { hole: 1, blow: 1, modifier: 6 },
            "e0": { hole: 1, blow: 2, modifier: 1 },
            "f0": { hole: 1, blow: 2, modifier: 6 },
            "f#0": { hole: 1, blow: 1, modifier: 4 },
            "gb0": { hole: 1, blow: 1, modifier: 4 },
            "g0": { hole: 2, blow: 1, modifier: 6 },
            "g#0": { hole: 2, blow: 2, modifier: 2 },
            "ab0": { hole: 2, blow: 2, modifier: 2 },
            "a0": { hole: 2, blow: 2, modifier: 1 },
            "a#0": { hole: 3, blow: 1, modifier: 6 },
            "bb0": { hole: 3, blow: 1, modifier: 6 },
            "b0": { hole: 3, blow: 2, modifier: 3 },
            "c1": { hole: 3, blow: 2, modifier: 2 },
            "c#1": { hole: 3, blow: 2, modifier: 1 },
            "db1": { hole: 3, blow: 2, modifier: 1 },
            "d1": { hole: 3, blow: 2, modifier: 6 },
            "d#1": { hole: 4, blow: 1, modifier: 6 },
            "eb1": { hole: 4, blow: 1, modifier: 6 },
            "e1": { hole: 4, blow: 2, modifier: 1 },
            "f1": { hole: 4, blow: 2, modifier: 6 },
            "f#1": { hole: 4, blow: 1, modifier: 4 },
            "gb1": { hole: 4, blow: 1, modifier: 4 },
            "g1": { hole: 5, blow: 1, modifier: 6 },
            "g#1": { hole: 5, blow: 2, modifier: 6 },
            "ab1": { hole: 5, blow: 2, modifier: 6 },
            "a1": { hole: 5, blow: 1, modifier: 4 },
            "a#1": { hole: 6, blow: 1, modifier: 6 },
            "bb1": { hole: 6, blow: 1, modifier: 6 },
            "b1": { hole: 6, blow: 2, modifier: 1 },
            "c2": { hole: 6, blow: 2, modifier: 6 },
            "c#2": { hole: 6, blow: 1, modifier: 4 },
            "db2": { hole: 6, blow: 1, modifier: 4 },
            "d2": { hole: 7, blow: 2, modifier: 6 },
            "d#2": { hole: 7, blow: 1, modifier: 6 },
            "eb2": { hole: 7, blow: 1, modifier: 6 },
            "e2": { hole: 7, blow: 2, modifier: 5 },
            "f2": { hole: 8, blow: 2, modifier: 6 },
            "f#2": { hole: 8, blow: 1, modifier: 1 },
            "gb2": { hole: 8, blow: 1, modifier: 1 },
            "g2": { hole: 8, blow: 1, modifier: 6 },
            "g#2": { hole: 9, blow: 2, modifier: 6 },
            "ab2": { hole: 9, blow: 2, modifier: 6 },
            "a2": { hole: 9, blow: 1, modifier: 1 },
            "a#2": { hole: 9, blow: 1, modifier: 6 },
            "bb2": { hole: 9, blow: 1, modifier: 6 },
            "b2": { hole: 9, blow: 2, modifier: 5 },
            "c3": { hole: 10, blow: 2, modifier: 6 },
            "c#3": { hole: 10, blow: 1, modifier: 2 },
            "db3": { hole: 10, blow: 1, modifier: 2 },
            "d3": { hole: 10, blow: 1, modifier: 1 },
            "d#3": { hole: 10, blow: 1, modifier: 6 },
            "eb3": { hole: 10, blow: 1, modifier: 6 },
            "e3": { hole: 10, blow: 2, modifier: 5 },
        },
        "F": {
            "f0": { hole: 1, blow: 1, modifier: 6 },
            "f#0": { hole: 1, blow: 2, modifier: 1 },
            "gb0": { hole: 1, blow: 2, modifier: 1 },
            "g0": { hole: 1, blow: 2, modifier: 6 },
            "g#0": { hole: 1, blow: 1, modifier: 4 },
            "ab0": { hole: 1, blow: 1, modifier: 4 },
            "a0": { hole: 2, blow: 1, modifier: 6 },
            "a#0": { hole: 2, blow: 2, modifier: 2 },
            "bb0": { hole: 2, blow: 2, modifier: 2 },
            "b0": { hole: 2, blow: 2, modifier: 1 },
            "c1": { hole: 3, blow: 1, modifier: 6 },
            "c#1": { hole: 3, blow: 2, modifier: 3 },
            "db1": { hole: 3, blow: 2, modifier: 3 },
            "d1": { hole: 3, blow: 2, modifier: 2 },
            "d#1": { hole: 3, blow: 2, modifier: 1 },
            "eb1": { hole: 3, blow: 2, modifier: 1 },
            "e1": { hole: 3, blow: 2, modifier: 6 },
            "f1": { hole: 4, blow: 1, modifier: 6 },
            "f#1": { hole: 4, blow: 2, modifier: 1 },
            "gb1": { hole: 4, blow: 2, modifier: 1 },
            "g1": { hole: 4, blow: 2, modifier: 6 },
            "g#1": { hole: 4, blow: 1, modifier: 4 },
            "ab1": { hole: 4, blow: 1, modifier: 4 },
            "a1": { hole: 5, blow: 1, modifier: 6 },
            "a#1": { hole: 5, blow: 2, modifier: 6 },
            "bb1": { hole: 5, blow: 2, modifier: 6 },
            "b1": { hole: 5, blow: 1, modifier: 4 },
            "c2": { hole: 6, blow: 1, modifier: 6 },
            "c#2": { hole: 6, blow: 2, modifier: 1 },
            "db2": { hole: 6, blow: 2, modifier: 1 },
            "d2": { hole: 6, blow: 2, modifier: 6 },
            "d#2": { hole: 6, blow: 1, modifier: 4 },
            "eb2": { hole: 6, blow: 1, modifier: 4 },
            "e2": { hole: 7, blow: 2, modifier: 6 },
            "f2": { hole: 7, blow: 1, modifier: 6 },
            "f#2": { hole: 7, blow: 2, modifier: 5 },
            "gb2": { hole: 7, blow: 2, modifier: 5 },
            "g2": { hole: 8, blow: 2, modifier: 6 },
            "g#2": { hole: 8, blow: 1, modifier: 1 },
            "ab2": { hole: 8, blow: 1, modifier: 1 },
            "a2": { hole: 8, blow: 1, modifier: 6 },
            "a#2": { hole: 9, blow: 2, modifier: 6 },
            "bb2": { hole: 9, blow: 2, modifier: 6 },
            "b2": { hole: 9, blow: 1, modifier: 1 },
            "c3": { hole: 9, blow: 1, modifier: 6 },
            "c#3": { hole: 9, blow: 2, modifier: 5 },
            "db3": { hole: 9, blow: 2, modifier: 5 },
            "d3": { hole: 10, blow: 2, modifier: 6 },
            "d#3": { hole: 10, blow: 1, modifier: 2 },
            "eb3": { hole: 10, blow: 1, modifier: 2 },
            "e3": { hole: 10, blow: 1, modifier: 1 },
            "f3": { hole: 10, blow: 1, modifier: 6 },
            "f#3": { hole: 10, blow: 2, modifier: 5 },
            "gb3": { hole: 10, blow: 2, modifier: 5 },
        },
        "F#": {
            "f#0": { hole: 1, blow: 1, modifier: 6 },
            "gb0": { hole: 1, blow: 1, modifier: 6 },
            "g0": { hole: 1, blow: 2, modifier: 1 },
            "g#0": { hole: 1, blow: 2, modifier: 6 },
            "ab0": { hole: 1, blow: 2, modifier: 6 },
            "a0": { hole: 1, blow: 1, modifier: 4 },
            "a#0": { hole: 2, blow: 1, modifier: 6 },
            "bb0": { hole: 2, blow: 1, modifier: 6 },
            "b0": { hole: 2, blow: 2, modifier: 2 },
            "c1": { hole: 2, blow: 2, modifier: 1 },
            "c#1": { hole: 3, blow: 1, modifier: 6 },
            "db1": { hole: 3, blow: 1, modifier: 6 },
            "d1": { hole: 3, blow: 2, modifier: 3 },
            "d#1": { hole: 3, blow: 2, modifier: 2 },
            "eb1": { hole: 3, blow: 2, modifier: 2 },
            "e1": { hole: 3, blow: 2, modifier: 1 },
            "f1": { hole: 3, blow: 2, modifier: 6 },
            "f#1": { hole: 4, blow: 1, modifier: 6 },
            "gb1": { hole: 4, blow: 1, modifier: 6 },
            "g1": { hole: 4, blow: 2, modifier: 1 },
            "g#1": { hole: 4, blow: 2, modifier: 6 },
            "ab1": { hole: 4, blow: 2, modifier: 6 },
            "a1": { hole: 4, blow: 1, modifier: 4 },
            "a#1": { hole: 5, blow: 1, modifier: 6 },
            "bb1": { hole: 5, blow: 1, modifier: 6 },
            "b1": { hole: 5, blow: 2, modifier: 6 },
            "c2": { hole: 5, blow: 1, modifier: 4 },
            "c#2": { hole: 6, blow: 1, modifier: 6 },
            "db2": { hole: 6, blow: 1, modifier: 6 },
            "d2": { hole: 6, blow: 2, modifier: 1 },
            "d#2": { hole: 6, blow: 2, modifier: 6 },
            "eb2": { hole: 6, blow: 2, modifier: 6 },
            "e2": { hole: 6, blow: 1, modifier: 4 },
            "f2": { hole: 7, blow: 2, modifier: 6 },
            "f#2": { hole: 7, blow: 1, modifier: 6 },
            "gb2": { hole: 7, blow: 1, modifier: 6 },
            "g2": { hole: 7, blow: 2, modifier: 5 },
            "g#2": { hole: 8, blow: 2, modifier: 6 },
            "ab2": { hole: 8, blow: 2, modifier: 6 },
            "a2": { hole: 8, blow: 1, modifier: 1 },
            "a#2": { hole: 8, blow: 1, modifier: 6 },
            "bb2": { hole: 8, blow: 1, modifier: 6 },
            "b2": { hole: 9, blow: 2, modifier: 6 },
            "c3": { hole: 9, blow: 1, modifier: 1 },
            "c#3": { hole: 9, blow: 1, modifier: 6 },
            "db3": { hole: 9, blow: 1, modifier: 6 },
            "d3": { hole: 9, blow: 2, modifier: 5 },
            "d#3": { hole: 10, blow: 2, modifier: 6 },
            "eb3": { hole: 10, blow: 2, modifier: 6 },
            "e3": { hole: 10, blow: 1, modifier: 2 },
            "f3": { hole: 10, blow: 1, modifier: 1 },
            "f#3": { hole: 10, blow: 1, modifier: 6 },
            "gb3": { hole: 10, blow: 1, modifier: 6 },
            "g3": { hole: 10, blow: 2, modifier: 5 },
        },
        "G": {
            "g0": { hole: 1, blow: 1, modifier: 6 },
            "g#0": { hole: 1, blow: 2, modifier: 1 },
            "ab0": { hole: 1, blow: 2, modifier: 1 },
            "a0": { hole: 1, blow: 2, modifier: 6 },
            "a#0": { hole: 1, blow: 1, modifier: 4 },
            "bb0": { hole: 1, blow: 1, modifier: 4 },
            "b0": { hole: 2, blow: 1, modifier: 6 },
            "c1": { hole: 2, blow: 2, modifier: 2 },
            "c#1": { hole: 2, blow: 2, modifier: 1 },
            "db1": { hole: 2, blow: 2, modifier: 1 },
            "d1": { hole: 3, blow: 1, modifier: 6 },
            "d#1": { hole: 3, blow: 2, modifier: 3 },
            "eb1": { hole: 3, blow: 2, modifier: 3 },
            "e1": { hole: 3, blow: 2, modifier: 2 },
            "f1": { hole: 3, blow: 2, modifier: 1 },
            "f#1": { hole: 3, blow: 2, modifier: 6 },
            "gb1": { hole: 3, blow: 2, modifier: 6 },
            "g1": { hole: 4, blow: 1, modifier: 6 },
            "g#1": { hole: 4, blow: 2, modifier: 1 },
            "ab1": { hole: 4, blow: 2, modifier: 1 },
            "a1": { hole: 4, blow: 2, modifier: 6 },
            "a#1": { hole: 4, blow: 1, modifier: 4 },
            "bb1": { hole: 4, blow: 1, modifier: 4 },
            "b1": { hole: 5, blow: 1, modifier: 6 },
            "c2": { hole: 5, blow: 2, modifier: 6 },
            "c#2": { hole: 5, blow: 1, modifier: 4 },
            "db2": { hole: 5, blow: 1, modifier: 4 },
            "d2": { hole: 6, blow: 1, modifier: 6 },
            "d#2": { hole: 6, blow: 2, modifier: 1 },
            "eb2": { hole: 6, blow: 2, modifier: 1 },
            "e2": { hole: 6, blow: 2, modifier: 6 },
            "f2": { hole: 6, blow: 1, modifier: 4 },
            "f#2": { hole: 7, blow: 2, modifier: 6 },
            "gb2": { hole: 7, blow: 2, modifier: 6 },
            "g2": { hole: 7, blow: 1, modifier: 6 },
            "g#2": { hole: 7, blow: 2, modifier: 5 },
            "ab2": { hole: 7, blow: 2, modifier: 5 },
            "a2": { hole: 8, blow: 2, modifier: 6 },
            "a#2": { hole: 8, blow: 1, modifier: 1 },
            "bb2": { hole: 8, blow: 1, modifier: 1 },
            "b2": { hole: 8, blow: 1, modifier: 6 },
            "c3": { hole: 9, blow: 2, modifier: 6 },
            "c#3": { hole: 9, blow: 1, modifier: 1 },
            "db3": { hole: 9, blow: 1, modifier: 1 },
            "d3": { hole: 9, blow: 1, modifier: 6 },
            "d#3": { hole: 9, blow: 2, modifier: 5 },
            "eb3": { hole: 9, blow: 2, modifier: 5 },
            "e3": { hole: 10, blow: 2, modifier: 6 },
            "f3": { hole: 10, blow: 1, modifier: 2 },
            "f#3": { hole: 10, blow: 1, modifier: 1 },
            "gb3": { hole: 10, blow: 1, modifier: 1 },
            "g3": { hole: 10, blow: 1, modifier: 6 },
            "g#3": { hole: 10, blow: 2, modifier: 5 },
            "ab3": { hole: 10, blow: 2, modifier: 5 },
        },
        "Ab": {
            "g#0": { hole: 1, blow: 1, modifier: 6 },
            "ab0": { hole: 1, blow: 1, modifier: 6 },
            "a0": { hole: 1, blow: 2, modifier: 1 },
            "a#0": { hole: 1, blow: 2, modifier: 6 },
            "bb0": { hole: 1, blow: 2, modifier: 6 },
            "b0": { hole: 1, blow: 1, modifier: 4 },
            "c1": { hole: 2, blow: 1, modifier: 6 },
            "c#1": { hole: 2, blow: 2, modifier: 2 },
            "db1": { hole: 2, blow: 2, modifier: 2 },
            "d1": { hole: 2, blow: 2, modifier: 1 },
            "d#1": { hole: 3, blow: 1, modifier: 6 },
            "eb1": { hole: 3, blow: 1, modifier: 6 },
            "e1": { hole: 3, blow: 2, modifier: 3 },
            "f1": { hole: 3, blow: 2, modifier: 2 },
            "f#1": { hole: 3, blow: 2, modifier: 1 },
            "gb1": { hole: 3, blow: 2, modifier: 1 },
            "g1": { hole: 3, blow: 2, modifier: 6 },
            "g#1": { hole: 4, blow: 1, modifier: 6 },
            "ab1": { hole: 4, blow: 1, modifier: 6 },
            "a1": { hole: 4, blow: 2, modifier: 1 },
            "a#1": { hole: 4, blow: 2, modifier: 6 },
            "bb1": { hole: 4, blow: 2, modifier: 6 },
            "b1": { hole: 4, blow: 1, modifier: 4 },
            "c2": { hole: 5, blow: 1, modifier: 6 },
            "c#2": { hole: 5, blow: 2, modifier: 6 },
            "db2": { hole: 5, blow: 2, modifier: 6 },
            "d2": { hole: 5, blow: 1, modifier: 4 },
            "d#2": { hole: 6, blow: 1, modifier: 6 },
            "eb2": { hole: 6, blow: 1, modifier: 6 },
            "e2": { hole: 6, blow: 2, modifier: 1 },
            "f2": { hole: 6, blow: 2, modifier: 6 },
            "f#2": { hole: 6, blow: 1, modifier: 4 },
            "gb2": { hole: 6, blow: 1, modifier: 4 },
            "g2": { hole: 7, blow: 2, modifier: 6 },
            "g#2": { hole: 7, blow: 1, modifier: 6 },
            "ab2": { hole: 7, blow: 1, modifier: 6 },
            "a2": { hole: 7, blow: 2, modifier: 5 },
            "a#2": { hole: 8, blow: 2, modifier: 6 },
            "bb2": { hole: 8, blow: 2, modifier: 6 },
            "b2": { hole: 8, blow: 1, modifier: 1 },
            "c3": { hole: 8, blow: 1, modifier: 6 },
            "c#3": { hole: 9, blow: 2, modifier: 6 },
            "db3": { hole: 9, blow: 2, modifier: 6 },
            "d3": { hole: 9, blow: 1, modifier: 1 },
            "d#3": { hole: 9, blow: 1, modifier: 6 },
            "eb3": { hole: 9, blow: 1, modifier: 6 },
            "e3": { hole: 9, blow: 2, modifier: 5 },
            "f3": { hole: 10, blow: 2, modifier: 6 },
            "f#3": { hole: 10, blow: 1, modifier: 2 },
            "gb3": { hole: 10, blow: 1, modifier: 2 },
            "g3": { hole: 10, blow: 1, modifier: 1 },
            "g#3": { hole: 10, blow: 1, modifier: 6 },
            "ab3": { hole: 10, blow: 1, modifier: 6 },
            "a3": { hole: 10, blow: 2, modifier: 5 },
        },
        "A": {
            "a0": { hole: 1, blow: 1, modifier: 6 },
            "a#0": { hole: 1, blow: 2, modifier: 1 },
            "bb0": { hole: 1, blow: 2, modifier: 1 },
            "b0": { hole: 1, blow: 2, modifier: 6 },
            "c1": { hole: 1, blow: 1, modifier: 4 },
            "c#1": { hole: 2, blow: 1, modifier: 6 },
            "db1": { hole: 2, blow: 1, modifier: 6 },
            "d1": { hole: 2, blow: 2, modifier: 2 },
            "d#1": { hole: 2, blow: 2, modifier: 1 },
            "eb1": { hole: 2, blow: 2, modifier: 1 },
            "e1": { hole: 3, blow: 1, modifier: 6 },
            "f1": { hole: 3, blow: 2, modifier: 3 },
            "f#1": { hole: 3, blow: 2, modifier: 2 },
            "gb1": { hole: 3, blow: 2, modifier: 2 },
            "g1": { hole: 3, blow: 2, modifier: 1 },
            "g#1": { hole: 3, blow: 2, modifier: 6 },
            "ab1": { hole: 3, blow: 2, modifier: 6 },
            "a1": { hole: 4, blow: 1, modifier: 6 },
            "a#1": { hole: 4, blow: 2, modifier: 1 },
            "bb1": { hole: 4, blow: 2, modifier: 1 },
            "b1": { hole: 4, blow: 2, modifier: 6 },
            "c2": { hole: 4, blow: 1, modifier: 4 },
            "c#2": { hole: 5, blow: 1, modifier: 6 },
            "db2": { hole: 5, blow: 1, modifier: 6 },
            "d2": { hole: 5, blow: 2, modifier: 6 },
            "d#2": { hole: 5, blow: 1, modifier: 4 },
            "eb2": { hole: 5, blow: 1, modifier: 4 },
            "e2": { hole: 6, blow: 1, modifier: 6 },
            "f2": { hole: 6, blow: 2, modifier: 1 },
            "f#2": { hole: 6, blow: 2, modifier: 6 },
            "gb2": { hole: 6, blow: 2, modifier: 6 },
            "g2": { hole: 6, blow: 1, modifier: 4 },
            "g#2": { hole: 7, blow: 2, modifier: 6 },
            "ab2": { hole: 7, blow: 2, modifier: 6 },
            "a2": { hole: 7, blow: 1, modifier: 6 },
            "a#2": { hole: 7, blow: 2, modifier: 5 },
            "bb2": { hole: 7, blow: 2, modifier: 5 },
            "b2": { hole: 8, blow: 2, modifier: 6 },
            "c3": { hole: 8, blow: 1, modifier: 1 },
            "c#3": { hole: 8, blow: 1, modifier: 6 },
            "db3": { hole: 8, blow: 1, modifier: 6 },
            "d3": { hole: 9, blow: 2, modifier: 6 },
            "d#3": { hole: 9, blow: 1, modifier: 1 },
            "eb3": { hole: 9, blow: 1, modifier: 1 },
            "e3": { hole: 9, blow: 1, modifier: 6 },
            "f3": { hole: 9, blow: 2, modifier: 5 },
            "f#3": { hole: 10, blow: 2, modifier: 6 },
            "gb3": { hole: 10, blow: 2, modifier: 6 },
            "g3": { hole: 10, blow: 1, modifier: 2 },
            "g#3": { hole: 10, blow: 1, modifier: 1 },
            "ab3": { hole: 10, blow: 1, modifier: 1 },
            "a3": { hole: 10, blow: 1, modifier: 6 },
            "a#3": { hole: 10, blow: 2, modifier: 5 },
            "bb3": { hole: 10, blow: 2, modifier: 5 },
        },
        "Bb": {
            "a#0": { hole: 1, blow: 1, modifier: 6 },
            "bb0": { hole: 1, blow: 1, modifier: 6 },
            "b0": { hole: 1, blow: 2, modifier: 1 },
            "c1": { hole: 1, blow: 2, modifier: 6 },
            "c#1": { hole: 1, blow: 1, modifier: 4 },
            "db1": { hole: 1, blow: 1, modifier: 4 },
            "d1": { hole: 2, blow: 1, modifier: 6 },
            "d#1": { hole: 2, blow: 2, modifier: 2 },
            "eb1": { hole: 2, blow: 2, modifier: 2 },
            "e1": { hole: 2, blow: 2, modifier: 1 },
            "f1": { hole: 3, blow: 1, modifier: 6 },
            "f#1": { hole: 3, blow: 2, modifier: 3 },
            "gb1": { hole: 3, blow: 2, modifier: 3 },
            "g1": { hole: 3, blow: 2, modifier: 2 },
            "g#1": { hole: 3, blow: 2, modifier: 1 },
            "ab1": { hole: 3, blow: 2, modifier: 1 },
            "a1": { hole: 3, blow: 2, modifier: 6 },
            "a#1": { hole: 4, blow: 1, modifier: 6 },
            "bb1": { hole: 4, blow: 1, modifier: 6 },
            "b1": { hole: 4, blow: 2, modifier: 1 },
            "c2": { hole: 4, blow: 2, modifier: 6 },
            "c#2": { hole: 4, blow: 1, modifier: 4 },
            "db2": { hole: 4, blow: 1, modifier: 4 },
            "d2": { hole: 5, blow: 1, modifier: 6 },
            "d#2": { hole: 5, blow: 2, modifier: 6 },
            "eb2": { hole: 5, blow: 2, modifier: 6 },
            "e2": { hole: 5, blow: 1, modifier: 4 },
            "f2": { hole: 6, blow: 1, modifier: 6 },
            "f#2": { hole: 6, blow: 2, modifier: 1 },
            "gb2": { hole: 6, blow: 2, modifier: 1 },
            "g2": { hole: 6, blow: 2, modifier: 6 },
            "g#2": { hole: 6, blow: 1, modifier: 4 },
            "ab2": { hole: 6, blow: 1, modifier: 4 },
            "a2": { hole: 7, blow: 2, modifier: 6 },
            "a#2": { hole: 7, blow: 1, modifier: 6 },
            "bb2": { hole: 7, blow: 1, modifier: 6 },
            "b2": { hole: 7, blow: 2, modifier: 5 },
            "c3": { hole: 8, blow: 2, modifier: 6 },
            "c#3": { hole: 8, blow: 1, modifier: 1 },
            "db3": { hole: 8, blow: 1, modifier: 1 },
            "d3": { hole: 8, blow: 1, modifier: 6 },
            "d#3": { hole: 9, blow: 2, modifier: 6 },
            "eb3": { hole: 9, blow: 2, modifier: 6 },
            "e3": { hole: 9, blow: 1, modifier: 1 },
            "f3": { hole: 9, blow: 1, modifier: 6 },
            "f#3": { hole: 9, blow: 2, modifier: 5 },
            "gb3": { hole: 9, blow: 2, modifier: 5 },
            "g3": { hole: 10, blow: 2, modifier: 6 },
            "g#3": { hole: 10, blow: 1, modifier: 2 },
            "ab3": { hole: 10, blow: 1, modifier: 2 },
            "a3": { hole: 10, blow: 1, modifier: 1 },
            "a#3": { hole: 10, blow: 1, modifier: 6 },
            "bb3": { hole: 10, blow: 1, modifier: 6 },
            "b3": { hole: 10, blow: 2, modifier: 5 },
        },
        "B": {
            "b0": { hole: 1, blow: 1, modifier: 6 },
            "c1": { hole: 1, blow: 2, modifier: 1 },
            "c#1": { hole: 1, blow: 2, modifier: 6 },
            "db1": { hole: 1, blow: 2, modifier: 6 },
            "d1": { hole: 1, blow: 1, modifier: 4 },
            "d#1": { hole: 2, blow: 1, modifier: 6 },
            "eb1": { hole: 2, blow: 1, modifier: 6 },
            "e1": { hole: 2, blow: 2, modifier: 2 },
            "f1": { hole: 2, blow: 2, modifier: 1 },
            "f#1": { hole: 3, blow: 1, modifier: 6 },
            "gb1": { hole: 3, blow: 1, modifier: 6 },
            "g1": { hole: 3, blow: 2, modifier: 3 },
            "g#1": { hole: 3, blow: 2, modifier: 2 },
            "ab1": { hole: 3, blow: 2, modifier: 2 },
            "a1": { hole: 3, blow: 2, modifier: 1 },
            "a#1": { hole: 3, blow: 2, modifier: 6 },
            "bb1": { hole: 3, blow: 2, modifier: 6 },
            "b1": { hole: 4, blow: 1, modifier: 6 },
            "c2": { hole: 4, blow: 2, modifier: 1 },
            "c#2": { hole: 4, blow: 2, modifier: 6 },
            "db2": { hole: 4, blow: 2, modifier: 6 },
            "d2": { hole: 4, blow: 1, modifier: 4 },
            "d#2": { hole: 5, blow: 1, modifier: 6 },
            "eb2": { hole: 5, blow: 1, modifier: 6 },
            "e2": { hole: 5, blow: 2, modifier: 6 },
            "f2": { hole: 5, blow: 1, modifier: 4 },
            "f#2": { hole: 6, blow: 1, modifier: 6 },
            "gb2": { hole: 6, blow: 1, modifier: 6 },
            "g2": { hole: 6, blow: 2, modifier: 1 },
            "g#2": { hole: 6, blow: 2, modifier: 6 },
            "ab2": { hole: 6, blow: 2, modifier: 6 },
            "a2": { hole: 6, blow: 1, modifier: 4 },
            "a#2": { hole: 7, blow: 2, modifier: 6 },
            "bb2": { hole: 7, blow: 2, modifier: 6 },
            "b2": { hole: 7, blow: 1, modifier: 6 },
            "c3": { hole: 7, blow: 2, modifier: 5 },
            "c#3": { hole: 8, blow: 2, modifier: 6 },
            "db3": { hole: 8, blow: 2, modifier: 6 },
            "d3": { hole: 8, blow: 1, modifier: 1 },
            "d#3": { hole: 8, blow: 1, modifier: 6 },
            "eb3": { hole: 8, blow: 1, modifier: 6 },
            "e3": { hole: 9, blow: 2, modifier: 6 },
            "f3": { hole: 9, blow: 1, modifier: 1 },
            "f#3": { hole: 9, blow: 1, modifier: 6 },
            "gb3": { hole: 9, blow: 1, modifier: 6 },
            "g3": { hole: 9, blow: 2, modifier: 5 },
            "g#3": { hole: 10, blow: 2, modifier: 6 },
            "ab3": { hole: 10, blow: 2, modifier: 6 },
            "a3": { hole: 10, blow: 1, modifier: 2 },
            "a#3": { hole: 10, blow: 1, modifier: 1 },
            "bb3": { hole: 10, blow: 1, modifier: 1 },
            "b3": { hole: 10, blow: 1, modifier: 6 },
            "c4": { hole: 10, blow: 2, modifier: 5 },
        },
    }

    function fromNoteToTab(note, scale, key, formatting) {
        let keyObj = noteTabDict[key];
        if (!keyObj) {
            return null;
        }

        let lowerCaseNote = (note + scale).toLowerCase();
        let noteObj = keyObj[lowerCaseNote];
        if (!noteObj) {
            return null;
        }

        if (!formatting) {
            formatting = defaultFormatting;
        }

        let ret = "";
        switch (noteObj.blow) {
            case BlowType.BLOW:
                ret = formatting.blow.replace("#", noteObj.hole);
                break;
            case BlowType.DRAW:
                ret = formatting.draw.replace("#", noteObj.hole);
                break;
            default:
                return null;
        }

        switch (noteObj.modifier) {
            case BlowModifier.HALF_BEND:
                ret = formatting.halfStepBend.replace("#", ret);
                break;
            case BlowModifier.FULL_BEND:
                ret = formatting.fullStepBend.replace("#", ret);
                break;
            case BlowModifier.ONE_AND_HALF_BEND:
                ret = formatting.oneAndHalfStepBend.replace("#", ret);
                break;
            case BlowModifier.OVERBLOW:
                ret = formatting.overblow.replace("#", ret);
                break;
            case BlowModifier.OVERDRAW:
                ret = formatting.overdraw.replace("#", ret);
                break;
            case BlowModifier.NONE:
                break;
            default:
                return null;
        }

        return ret;
    };

    const validNoteRegex = new RegExp("^[a-gA-G][#b]?[0-8]$");    
    function isValidNote(note) {
        if (note) {
            return validNoteRegex.test(note);
        }

        return false;
    }

    return {
        fromNoteToTab: fromNoteToTab,
        isValidNote: isValidNote,
        defaultFormatting: defaultFormatting
    };
}());