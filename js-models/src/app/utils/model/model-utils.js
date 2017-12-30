export class ModelUtils {
  static hasPropertyOf(clazz, obj) {
    const model = new clazz()
    const modelKeys = Object.keys(model)

    for (const key of modelKeys) {
      if(obj.hasOwnProperty(key)) {
        return true
      }
    }

    return false
  }

  static isInstanceOf(clazz, obj) {
    if (clazz == null) { return false }
    const model = new clazz()
    const modelKeys = Object.keys(model)

    for (const key of modelKeys) {
      if(!obj.hasOwnProperty(key)) {
        return false
      }
    }

    return true
  }
}
