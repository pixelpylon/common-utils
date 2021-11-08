const axios = require("axios");

class RpcClient {
  constructor (url) {
    const parsedUrl = new URL(url);

    const token = Buffer
      .from(`${parsedUrl.username}:${decodeURIComponent(parsedUrl.password)}`)
      .toString('base64');

    this.instance = axios.create({
      baseURL: `${parsedUrl.protocol}//${parsedUrl.host}`,
      headers: {Authorization: `Basic ${token}`}
    });
  }

  async call (method, params) {
    try {
      const {data} = await this.instance.post(method, params);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {error: error.response.data || 'Unknown error'};
      }
      console.error(error);
      return {error};
    }
  }
}

RpcClient.new = (url) => {
  return new RpcClient(url);
};

module.exports = RpcClient;


