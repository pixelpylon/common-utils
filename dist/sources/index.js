const delay = require('./delay');
const findRecord = require('./findRecord');
const verboseErrorMessage = require('./errors/verboseErrorMessage');
const isDeniedDomain = require('./isDeniedDomain');
const ServiceError = require('./errors/ServiceError');
const RestifiedError = require('./errors/RestifiedError');
const AxiosVerboseError = require('./errors/AxiosVerboseError');
const ValidationError = require('./errors/ValidationError');
const parsePhone = require('./parsePhone');
const arrayze = require('./basic/arrayze');
const lazy = require('./basic/lazy');
const retry = require('./basic/retry');
const isCorrectEmailAddress = require('./isCorrectEmailAddress');
const isInvalidEmailAddress = require('./isInvalidEmailAddress');
const validate = require('./validation/validate');
const validateInput = require('./validation/validateInput');
const getCurrencySymbol = require('./getCurrencySymbol');
const {parseDateRanges, isDateInDateRanges} = require('./parseDateRanges');
const {parseDuration} = require('./parseDuration')
const pluralize = require('./basic/pluralize')
const formatMoney = require('./formatMoney')

module.exports = {
  delay,
  findRecord,
  verboseErrorMessage,
  ServiceError,
  RestifiedError,
  AxiosVerboseError,
  ValidationError,
  isDeniedDomain,
  parsePhone,
  arrayze,
  lazy,
  isCorrectEmailAddress,
  isInvalidEmailAddress,
  parseDateRanges,
  isDateInDateRanges,
  validate,
  validateInput,
  getCurrencySymbol,
  retry,
  parseDuration,
  pluralize,
  formatMoney,
};
