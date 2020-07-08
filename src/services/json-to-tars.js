/*
 Js-to-Go
 by ljun20160606
 https://github.com/ljun20160606/jsonToGo
 */

/*
@param options e.g.
{
  tags: [
      {key: 'json'},
      {key: 'db', isSnake: true}
  ]
}

{
  "code": 200,
  "data": "xxxx",
  "id": "qmCeJOT9eCRGNC7rufDX",
  "msg": "success"
}
 */
import jsToTars from './js-to-tars';

function jsonToTars(json, typename, options) {
  // debugger;
  let data;
  try {
    data = JSON.parse(json.replace(/\.0/g, '.1')); // hack that forces floats to stay as floats
  } catch (e) {
    return {
      go: '',
      error: e.message
    };
  }
  return jsToTars(data, typename, options);
}

export default jsonToTars;
