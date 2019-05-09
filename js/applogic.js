/**
 * Translate notes in textarea notesId and put the tabs in tabsId.
 * 
 * @param {string} notesId ID of the textarea containing notes that should be translated
 * @param {string} tabsId ID of the textarea where translated tabs should be placed
 */
function translateNotes(notesId, tabsId) {
    notesString = document.getElementById(notesId).value;
    tabsField = document.getElementById(tabsId);

    tabsField.value = harptab.fromOctavelessNotesToTabs(notesString, "C");
}