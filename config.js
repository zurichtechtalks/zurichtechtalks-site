module.exports = {
    neo4j: process.env.NEO4J_URL || 'http://localhost:7474',
    twitter: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET || ''
    }
}