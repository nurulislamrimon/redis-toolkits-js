import client from './connection.js';

export const getOrSetCache = async (key, cb, expire = 3600) => {
    try {
        const cached = await client.get(key);
        if (cached) {
            return JSON.parse(cached);
        }

        const freshData = await cb();
        await client.setEx(key, expire, JSON.stringify(freshData));
        return freshData;
    } catch (error) {
        throw error;
    }
};

export const clearCache = async (key) => {
    try {
        return await client.del(key);
    } catch (error) {
        throw error;
    }
};
