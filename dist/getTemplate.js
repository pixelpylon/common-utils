const {TEMPLATE_PARAMETERS} = require("./consts");

const getTemplate = async (config) => {
  const template = await config.getTemplate();
  if (!template) throw new Error("Error fetching remote config template");

  try {
    return {
      [TEMPLATE_PARAMETERS.LOCATIONS]: JSON.parse(template.parameters[TEMPLATE_PARAMETERS.LOCATIONS].defaultValue.value),
      [TEMPLATE_PARAMETERS.TOURS]: JSON.parse(template.parameters[TEMPLATE_PARAMETERS.TOURS].defaultValue.value),
      [TEMPLATE_PARAMETERS.SLING_API_KEY]: template.parameters[TEMPLATE_PARAMETERS.SLING_API_KEY].defaultValue.value,
      [TEMPLATE_PARAMETERS.SENDGRID_API_KEY]: template.parameters[TEMPLATE_PARAMETERS.SENDGRID_API_KEY].defaultValue.value,
      [TEMPLATE_PARAMETERS.SENDINBLUE_API_KEY]: template.parameters[TEMPLATE_PARAMETERS.SENDINBLUE_API_KEY].defaultValue.value,
      [TEMPLATE_PARAMETERS.MAILER]: JSON.parse(template.parameters[TEMPLATE_PARAMETERS.MAILER].defaultValue.value),
      [TEMPLATE_PARAMETERS.WO_PREPAYMENT_RESELLERS]: JSON.parse(template.parameters[TEMPLATE_PARAMETERS.WO_PREPAYMENT_RESELLERS].defaultValue.value),
      [TEMPLATE_PARAMETERS.SENDINBLUE_DOMAIN_BLACKLIST]: JSON.parse(template.parameters[TEMPLATE_PARAMETERS.SENDINBLUE_DOMAIN_BLACKLIST].defaultValue.value),
      [TEMPLATE_PARAMETERS.SENDINBLUE_CONTACT_LIST_ID]: parseInt(template.parameters[TEMPLATE_PARAMETERS.SENDINBLUE_CONTACT_LIST_ID].defaultValue.value, 10),
      [TEMPLATE_PARAMETERS.PUBLISHING_DELAY_MS]: parseInt(template.parameters[TEMPLATE_PARAMETERS.PUBLISHING_DELAY_MS].defaultValue.value, 10),
      [TEMPLATE_PARAMETERS.WAIT_BOOKING_TIMEOUT_MS]: parseInt(template.parameters[TEMPLATE_PARAMETERS.WAIT_BOOKING_TIMEOUT_MS].defaultValue.value, 10),
      [TEMPLATE_PARAMETERS.SES_ACCESS_KEY_ID]: template.parameters[TEMPLATE_PARAMETERS.SES_ACCESS_KEY_ID].defaultValue.value,
      [TEMPLATE_PARAMETERS.SES_SECRET_ACCESS_KEY]: template.parameters[TEMPLATE_PARAMETERS.SES_SECRET_ACCESS_KEY].defaultValue.value,
      [TEMPLATE_PARAMETERS.IGNORED_PRODUCT_IDS]: JSON.parse(template.parameters[TEMPLATE_PARAMETERS.IGNORED_PRODUCT_IDS].defaultValue.value),
    };
  } catch (error) {
    console.error(error);
    throw new Error(`Template parsing error: ${error.message}`);
  }
};

module.exports = getTemplate;
