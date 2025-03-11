const express = require("express");
const { createClient: createRedisClient } = require("redis");

(async function () {
    const app = express();

    const redisHost = process.env.REDIS_HOST || 'localhost';
    const redisPort = process.env.REDIS_PORT || '6379';

    const redisUrl = `redis://${redisHost}:${redisPort}`;

    console.log(`Connecting to Redis at ${redisUrl}`);

    const redisClient = createRedisClient({
        url: redisUrl
    });

    redisClient.on('error', (err) => console.error('Redis Client Error', err));

    await redisClient.connect();
    console.log('Connected to Redis!');

    app.get("/", async (req, res) => {
        try {
            const counterValue = await redisClient.get("counter");
            const newCounterValue = (parseInt(counterValue) || 0) + 1;
            await redisClient.set("counter", newCounterValue);
            res.send(`Page loads: ${newCounterValue}`);
        } catch (err) {
            console.error(err);
            res.status(500).send('Something went wrong');
        }
    });

    const PORT = process.env.APP_PORT || 90;
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
})();
