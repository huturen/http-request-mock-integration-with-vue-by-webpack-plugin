/**
 * @url https://jsonplaceholder.typicode.com/header
 * @method get
 * @header application: application/json
 * @header abc: 123
 * @header xyz: aaa
 */
module.exports = () => {
  return  {
    ret: 0,
    msg: 'ok',
  };
}
