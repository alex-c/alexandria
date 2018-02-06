function createRecord(document, author) {

    let record = {};
    let now = new Date();

    record.document = document;
    record.author = author;
    record.created = now;
    record.lastModified = now;

    return record;

}

module.exports = createRecord;
