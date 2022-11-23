const delay = require("./delay");

const retry = async (action, options) => {
    const {
        allowRetry = () => true,
        maxAttempts = 3,
        delayMs = 200,
    } = options || {};

    let attempt = 0;

    while (true) {
        attempt += 1;
        try {
            return await action();
        } catch (error) {
            if (!allowRetry(error)) {
                throw error;
            }

            if (attempt === maxAttempts) {
                throw error;
            }
            await delay(delayMs * attempt);
        }
    }
}

module.exports = retry;
