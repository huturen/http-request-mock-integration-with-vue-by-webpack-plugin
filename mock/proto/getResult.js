/**
 * @url /getResult
 * @delay 10
 * @method any
 */
/* eslint-disable */
const faker = require('http-request-mock/plugin/faker.js');
module.exports = (request) => {
  return {
    code: 0,
    msg: "ok",
    data: {
      int32: faker.integer(1, 10000),
      int64: faker.integer(1, 10000).toString(),
      string: faker.string(5, 12),
      bool: faker.bool(),
      double: faker.float(0, 10000, 2),
      float: faker.float(0, 10000, 2),
      uint32: faker.integer(0, 10000),
      uint64: faker.integer(0, 10000),
      sint32: faker.integer(-10000, 10000),
      sint64: faker.integer(-10000, 10000),
      fixed32: faker.integer(0, 10000),
      fixed64: faker.integer(0, 10000),
      sfixed32: faker.integer(-10000, 10000),
      sfixed64: faker.integer(-10000, 10000),
      bytes: faker.bytes(),

      title: faker.text(),
      name: faker.name(),
      url: faker.url(),
      email: faker.email(),
      avatar: faker.avatar(),
      image: faker.image(),
      datetime: faker.datetime(),
      ip: faker.ip(),
      phone: faker.phone(),
      address: faker.address(),
      guid: faker.guid(),
    },
  }
};
