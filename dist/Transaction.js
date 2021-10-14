class Transaction {
  constructor (tx) {
    this.tx = tx;
  }

  set(ref, data) {
    return this.tx.set(ref, data);
  }

  create(ref, data) {
    return this.tx.create(ref, data);
  }

  update(ref, data) {
    return this.tx.update(ref, data);
  }

  async one(ref) {
    const result = await this.tx.get(ref);
    return result.exists ? result.doc.data() : null;
  }
}

module.exports = Transaction;
