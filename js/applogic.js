/**
 * Translate notes in textarea notesId and put the tabs in tabsId.
 * 
 * @param {string} notesId ID of the textarea containing notes that should be translated
 * @param {string} tabsId ID of the textarea where translated tabs should be placed
 * @param {string} keyId ID of the combobox with harmonica key
 */
function translateNotes(notesId, tabsId, keyId) {
    notesString = document.getElementById(notesId).value;
    tabsField = document.getElementById(tabsId);
    key = document.getElementById(keyId).value;

    tabsField.value = harptab.fromOctavelessNotesToTabs(notesString, key);
}