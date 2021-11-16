const DocumentAccessor = require("./DocumentAccessor");

class Repository {
  constructor(db, collectionName) {
    this.db = db;
    this.collectionRef = db.collection(collectionName);
  }

  ref(id) {
    return this.collectionRef.doc(id);
  }

  set(id, data) {
    return this.ref(id).set(data);
  }

  update(id, data) {
    return this.ref(id).update(data);
  }

  async one(id) {
    const result = await this.ref(id).get();
    return DocumentAccessor.one(result);
  }

  async list(getQuery) {
    const query = getQuery(this.collectionRef);
    const result = await query.get();
    return DocumentAccessor.list(result);
  }

  async first(getQuery) {
    const query = getQuery(this.collectionRef);
    const result = await query.get();
    return DocumentAccessor.first(result);
  }
}

module.exports = Repository;
