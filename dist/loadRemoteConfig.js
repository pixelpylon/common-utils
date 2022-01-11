const CONFIG_PROPERTY_TYPES = {
    STRING: 'string',
    INT: 'int',
    JSON: 'json',
    BOOL: 'bool',
};

function adaptValue (value, type) {
    switch (type) {
        case CONFIG_PROPERTY_TYPES.INT:
            return parseInt(value, 10);
        case CONFIG_PROPERTY_TYPES.STRING:
            return value;
        case CONFIG_PROPERTY_TYPES.JSON:
            return JSON.parse(value);
        case CONFIG_PROPERTY_TYPES.BOOL:
            return Boolean(value);
        default:
            throw new Error(`Unknown config property type '${type}'`);
    }
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
        const type = descriptor[key];
        const value = getValue(template, key);
        return adaptValue(value, type);
    } catch (error) {
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
