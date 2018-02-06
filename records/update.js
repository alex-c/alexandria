function updateRecord(record, document) {

    let now = new Date();

    record.document = document;
    record.lastModified = now;

    return record;

}

module.exports = updateRecord;
