function createRecordFromDocument(document, author) {

    let record = {};
    let now = new Date();

    record.document = document;
    record.author = author;
    record.created = now;
    record.lastModified = now;

    return record;

}

function updateRecordFromDocument(record, document) {

    let now = new Date();

    record.document = document;
    record.lastModified = now;

    return record;

}

module.exports = {
    createRecordFromDocument,
    updateRecordFromDocument
}
