interface Config {
    debug: boolean
    sql_debug: boolean
    port: number
    enviroment: string
    service_db: DbConfig
    rabbit: RabbitConfig
    redis_queue: RedisQueueConfig
    discord_url: string
    elastic: ElasticConfig
}

interface DbConfig {
    host: string
    database: string
    user: string
    password: string
    port: number
}

interface RabbitConfig {
    host: string
    user: string
    password: string
    port: number
    queue: string
    reconnection_delay: number
}

interface RedisQueueConfig {
    host: string
    port: number
    db: number
}

interface ElasticConfig {
    host: string
    prefix: string
    user: string,
    password: string
}

export {
    Config,
    DbConfig,
    RabbitConfig,
    RedisQueueConfig,
    ElasticConfig
}