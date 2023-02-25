import { MongoClient } from "mongodb"
import env from "../../../main/config/env"

let connection = null
try {
  connection = new MongoClient(env.mongoUrl)
} catch (error) {
  console.log(error)
}

export default connection