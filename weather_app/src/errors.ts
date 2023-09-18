class InvalidLocation extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'InvalidLocation'
    }
  }
  
  class MissingAPIKey extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'MissingAPIKey'
    }
  }
  
  class InvalidAPIRequest extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'InvalidAPIRequest'
    }
  }
  
  class MissingParameter extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'MissingParameter'
    }
  }
  
  class InvalidAPIKey extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'InvalidAPIKey'
    }
  }
  
  class UndefinedErrorCode extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'UndefinedErrorCode'
    }
  }

  export { InvalidLocation, MissingAPIKey, MissingParameter, InvalidAPIRequest, InvalidAPIKey, UndefinedErrorCode }