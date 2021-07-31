const findRecord = (template, parameter, key, value) => {
  if (template[parameter] === undefined) {
    throw new Error(`Unknown parameter '${parameter}'`);
  }
  const stringValue = String(value);
  return template[parameter].find((record) => record[key] === stringValue);
}

module.exports = findRecord;
