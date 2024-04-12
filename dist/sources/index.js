const delay = require('./basic/delay')
const arrayze = require('./basic/arrayze')
const lazy = require('./basic/lazy')
const retry = require('./basic/retry')
const pluralize = require('./basic/pluralize')
const findRecord = require('./findRecord')
const verboseErrorMessage = require('./verboseErrorMessage')
const formatAxiosRequest = require('./formatAxiosRequest')
const isDeniedDomain = require('./isDeniedDomain')
const ServiceError = require('./errors/ServiceError')
const RestifiedError = require('./errors/RestifiedError')
const AxiosVerboseError = require('./errors/AxiosVerboseError')
const ValidationError = require('./errors/ValidationError')
const parsePhone = require('./parsePhone')
const isCorrectEmailAddress = require('./isCorrectEmailAddress')
const isInvalidEmailAddress = require('./isInvalidEmailAddress')
const validate = require('./validation/validate')
const validateInput = require('./validation/validateInput')
const getCurrencySymbol = require('./getCurrencySymbol')
const {parseDateRanges, isDateInDateRanges} = require('./parseDateRanges')
const {parseDuration} = require('./parseDuration')
const formatMoney = require('./formatMoney')

module.exports = {
  delay,
  findRecord,
  verboseErrorMessage,
  formatAxiosResponse: formatAxiosRequest,
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
}
