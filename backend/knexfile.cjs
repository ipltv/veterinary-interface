require("dotenv").config();

// DB configuration for different environments
module.exports = {
    development: {
        client: "pg",
        connection: {
            host: process.env.DB_HOST || "127.0.0.1",
            port: process.env.DB_PORT || 5432,
            database: process.env.DB_NAME || "veterinary_dev",
            user: process.env.DB_USER || "postgres",
            password: process.env.DB_PASSWORD || "postgres",
        },
        migrations: {
            directory: "./migrations",
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./seeds",
        },
        pool: {
            min: 2,
            max: 10,
        },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./migrations",
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./seeds",
        },
        pool: {
            min: 10,
            max: 50,
        },
    },
    // test: {}
}