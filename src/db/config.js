require('dotenv').config()

import { config } from '../configs'

module.exports = {
  "development": {
    "username": config.db_user,
    "password": config.db_password,
    "database": config.db_name,
    "host": config.db_host,
    "dialect": "postgres"
  },
  "test": {
    "username": config.db_user,
    "password": config.db_password,
    "database": config.db_name,
    "host": config.db_host,
    "dialect": "postgres"
  },
  "production": {
    "username": config.db_user,
    "password": config.db_password,
    "database": config.db_name,
    "host": config.db_host,
    "dialect": "postgres"
  }
}
