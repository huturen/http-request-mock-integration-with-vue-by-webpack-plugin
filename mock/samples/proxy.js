/**
 * @url https://jsonplaceholder.typicode.com/proxy-mode
 * @proxy
 * @header content-type: application/json
 * @method get
 */
module.exports = () => {
  console.log(111);
  return {
    msg: 'Proxy to local proxy server.',
    xx: process.version,
  };
}

