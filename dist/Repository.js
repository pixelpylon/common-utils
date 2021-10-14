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
    return result.exists ? result.data() : null;
  }

  async list(getQuery) {
    const query = getQuery(this.collectionRef);
    const result = await query.get();
    return result.empty ? [] : result.docs.map((doc) => doc.data());
  }

  async first(getQuery) {
    const query = getQuery(this.collectionRef);
    const result = await query.get();
    return result.empty ? null : result.docs[0].data();
  }
}

module.exports = Repository;
