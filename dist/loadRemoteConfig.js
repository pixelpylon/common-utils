const validate = require("./validate");

const CONFIG_PROPERTY_TYPES = {
    STRING: 'string',
    INT: 'int',
    JSON: 'json',
    BOOL: 'bool',
};

const CONFIG_PROPERTY_TYPES_PARSERS = {
    [CONFIG_PROPERTY_TYPES.STRING]: (value) => value,
    [CONFIG_PROPERTY_TYPES.INT]: (value) => parseInt(value, 10),
    [CONFIG_PROPERTY_TYPES.JSON]: (value) => JSON.parse(value),
    [CONFIG_PROPERTY_TYPES.BOOL]: (value) => Boolean(value),
}

function normalizePropertyDescriptor (propertyDescriptor) {
    if (typeof propertyDescriptor === 'object') {
        return propertyDescriptor
    }

    return {
        type: propertyDescriptor,
        validator: validate.valid,
    }
}

function adaptValue (key, value, propertyDescriptor) {
    const {type, validator} = normalizePropertyDescriptor(propertyDescriptor)

    const parser = CONFIG_PROPERTY_TYPES_PARSERS[type]

    if (!parser) {
        throw new Error(`Unknown config property type '${type}'`)
    }

    const parsedValue = parser(value)
    validator(key, parsedValue)
    return parsedValue
}

function getValue (template, key) {
    const parameter = template.parameters[key];
    if (parameter === undefined) {
        throw new Error(`Missing config property`);
    }
    return parameter.defaultValue.value;
}

function loadProperty (key, template, descriptor) {
    try {
        const propertyDescriptor = descriptor[key];
        const value = getValue(template, key);
        return adaptValue(key, value, propertyDescriptor);
    } catch (error) {
        console.log(error)
        throw new Error(`Property '${key}': ${error.message}`);
    }
}

async function loadRemoteConfig(config, descriptor) {
    const template = await config.getTemplate();
    if (!template) throw new Error("Error fetching remote config template");

    const result = {};

    try {
        for (const key of Object.keys(descriptor)) {
            result[key] = loadProperty(key, template, descriptor);
        }
        return result;
    } catch (error) {
        console.error(error);
        throw new Error(`Template parsing error: ${error.message}`);
    }
}

module.exports = {
    CONFIG_PROPERTY_TYPES,
    loadRemoteConfig,
};
