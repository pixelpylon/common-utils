const ValidationError = require("./ValidationError");

function every(...validators) {
    return (path, value) => {
        for (const validator of validators) {
            validator(path, value)
        }
    }
}

function some(...validators) {
    return (path, value) => {
        for (const validator of validators) {
            try {
                validator(path, value)
                return
            } catch (error) {}
        }
        throw ValidationError(path, value, 'is failed all validators')
    }
}

function valid() {
}

function isString(path, value) {
    if (typeof value !== 'string') {
        throw new ValidationError(path, value, 'is not a string')
    }
}

function isFormat(format) {
    return (path, value) => {
        isString(path, value)
        if (!value.match(format)) {
            throw new ValidationError(path, value, `doesn't match the format '${format}'`)
        }
    }
}

function isIntString(path, value) {
    isString(path, value)
    if (!value.match(/\d+/)) {
        throw new ValidationError(path, value, 'is not an integer')
    }
}

function isInt(path, value) {
    if (typeof value !== 'number') {
        throw new ValidationError(path, value, 'is not an integer')
    }
}

function isUuid(path, value) {
    isString(path, value)
    if (!value.match(/^.{8}-.{4}-.{4}-.{4}-.{12}$/)) {
        throw new ValidationError(path, value, 'is not an uuid')
    }
}

function isDefined(path, value) {
    if (value === null || value === undefined) {
        throw new ValidationError(path, value, 'is not defined')
    }
}

function isUndefined(path, value) {
    if (value !== undefined) {
        throw new ValidationError(path, value, 'is not undefined')
    }
}

function isFilled(path, value) {
    isString(path, value)
    if (value.length === 0) {
        throw new ValidationError(path, value, 'is not filled')
    }
}

function isBlank(path, value) {
    isString(path, value)
    if (value.length !== 0) {
        throw new ValidationError(path, value, 'is not blank')
    }
}

function isObject(path, value) {
    if (typeof value !== "object" || value.constructor.name !== "Object") {
        throw new ValidationError(path, value, 'is not an object')
    }
}

function isArray(path, value) {
    if (!Array.isArray(value)) {
        throw new ValidationError(path, value, 'is not an array')
    }
}

function isEmail(path, value) {
    isString(path, value)
    if (!value.match(/^[^@]+@([^@.].)+[^@.]$/)) {
        throw new ValidationError(path, value, 'is not an email')
    }
}

function isUrl(path, value) {
    isString(path, value)
    try {
        new URL(value)
    } catch (error) {
        throw new ValidationError(path, value, 'is not an url')
    }
}

function isIn(list) {
    if (!Array.isArray(list)) {
        throw new Error(`Incorrect list '${JSON.stringify(list)}'`)
    }
    return (path, value) => {
        if (!list.includes(value)) {
            throw new ValidationError(path, value, 'list does not contain value')
        }
    }
}

function items(validator) {
    if (typeof validator !== 'function') {
        throw new Error(`Incorrect validator '${validator}'`)
    }

    return (path, value) => {
        isArray(path, value)
        for (const i in value) {
            const item = value[i]
            validator(`${path}[${i}]`, item)
        }
    }
}

function props(descriptor) {
    if (typeof descriptor !== 'object') {
        throw new Error(`Incorrect descriptor '${descriptor}'`)
    }

    return (path, value) => {
        isObject(path, value)

        for (const key of Object.keys(descriptor)) {
            const validator = descriptor[key]
            validator(`${path}.${key}`, value[key])
        }
    }
}

function keys(validator) {
    if (typeof validator !== 'function') {
        throw new Error(`Incorrect validator '${validator}'`)
    }

    return (path, value) => {
        isObject(path, value)

        for (const key of Object.keys(value)) {
            validator(`${path}.${key}`, key)
        }
    }
}

function values(validator) {
    if (typeof validator !== 'function') {
        throw new Error(`Incorrect validator '${validator}'`)
    }

    return (path, value) => {
        isObject(path, value)

        for (const key of Object.keys(value)) {
            const item = value[key]
            validator(`${path}.${key}`, item)
        }
    }
}

module.exports = {
    every,
    some,
    props,
    values,
    keys,
    items,
    isFormat,
    valid,
    isString,
    isIntString,
    isInt,
    isArray,
    isObject,
    isDefined,
    isUndefined,
    isFilled,
    isBlank,
    isUuid,
    isEmail,
    isUrl,
    isIn,
}
