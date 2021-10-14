const getStatusObject = require("./getStatusObject");
const {DocumentAccessor} = require("./index");

class StatusManager {
  constructor(field, statuses) {
    ['DONE', 'ERROR', 'PENDING'].forEach((statusName) => {
      if (!statuses[statusName]) {
        throw new Error(`Status '${statusName}' was not passed`);
      }
    });

    this.STATUSES = statuses;
    this.field = field
  }

  markAsDone (documentRef, additionalData = {}) {
    const updateData = {
      [this.field]: getStatusObject(this.STATUSES.DONE),
      ...additionalData,
    };

    return documentRef
      .set(updateData, { merge: true });
  }

  markAsFailed (documentRef, error, additionalData = {}) {
    const updateData = {
      [this.field]: getStatusObject(this.STATUSES.ERROR, error),
      ...additionalData,
    };

    return documentRef
      .set(updateData, { merge: true });
  }

  async findUnprocessed (collectionRef) {
    const result = await collectionRef
      .where(`${this.field}.status`, '==', this.STATUSES.PENDING)
      .orderBy(`${this.field}.timestamp`, 'asc')
      .get();
    return DocumentAccessor.list(result);
  };
}

module.exports = StatusManager;
