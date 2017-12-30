import { ArrayUtils } from './array/array-utils.js'
import { DateUtils } from './date/date-utils.js'
import { ModelUtils } from './model/model-utils.js'

export class Utils {
  static get array() { return ArrayUtils }
  static get date() { return DateUtils }
  static get model() { return ModelUtils }
}
