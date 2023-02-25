import { MongoHelper } from "./mongo-helper"

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await MongoHelper.connect()
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  it('should reconnect if mongo is down', async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
  })
})