import { createClient } from 'redis';

const publisher = createClient();
const subscriber = createClient();

await publisher.connect();
await subscriber.connect();

export const publish = async (channel, message) => {
    await publisher.publish(channel, JSON.stringify(message));
};

export const subscribe = async (channel, callback) => {
    await subscriber.subscribe(channel, (message) => {
        callback(JSON.parse(message));
    });
};
