const RestifiedError = require("./RestifiedError");

class RpcServer {
  constructor (initializer) {
    this.initializer = initializer;
  }

  async _initialize () {
    try {
      return await this.initializer();
    } catch (error) {
      console.error(error);
      throw error instanceof RestifiedError
        ? error
        : new RestifiedError('Initialization error');
    }
  }

  async _authorize (clients, authorization) {
    try {
      const [name, token] = new Buffer(authorization, 'base64').toString('utf-8').split(':');
      for (const client of clients) {
        if (client.name === name && client.token === token) {
          return client;
        }
      }
      throw new RestifiedError('Unauthorized', 403);
    } catch (error) {
      console.error(error);
      throw error instanceof RestifiedError
        ? error
        : new RestifiedError('Authorization error');
    }
  }

  async _execute (executor, client, context, params) {
    try {
      return await executor({client, context, params});
    } catch (error) {
      console.error(error);
      throw error instanceof RestifiedError
        ? error
        : new RestifiedError('Execution error');
    }
  }

  handler (executor) {
    const self = this;
    return async (request, response) => {
      try {
        const {context, clients} = await self._initialize();
        const client = await self._authorize(clients, request.headers.authorization);
        const result = await self._execute(executor, client, context, request.body);
        return response.json(result);
      } catch (error) {
        console.error(error);
        return error instanceof RestifiedError
          ? response.status(error.code).send(error.message)
          : response.status(500).send('Processing error');
      }
    }
  }
}

RpcServer.new = (initializer) => {
  return new RpcServer(initializer);
}

module.exports = RpcServer;
