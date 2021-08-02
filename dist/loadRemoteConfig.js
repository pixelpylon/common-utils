const CONFIG_PROPERTY_TYPES = {
    STRING: 'string',
    INT: 'int',
    JSON: 'json',
};

function adaptValue (value, type) {
    switch (type) {
        case CONFIG_PROPERTY_TYPES.INT:
            return parseInt(value, 10);
        case CONFIG_PROPERTY_TYPES.STRING:
            return value;
        case CONFIG_PROPERTY_TYPES.JSON:
            return JSON.parse(value);
        default:
            throw new Error(`Unknown config property type '${type}'`);
    }
}

async function loadRemoteConfig(config, descriptor) {
    const template = await config.getTemplate();
    if (!template) throw new Error("Error fetching remote config template");

    const result = {};

    try {
        for (const key of Object.keys(descriptor)) {
            const type = descriptor[key];
            result[key] = adaptValue(template.parameters[key].defaultValue.value, type);
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
