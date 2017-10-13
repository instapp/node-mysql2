var reqs = [
  require('./client_handshake.js'),
  require('./server_handshake.js'),
  require('./query.js'),
  require('./prepare.js'),
  require('./close_statement.js'),
  require('./execute.js'),
  require('./ping.js'),
  require('./register_slave.js'),
  require('./binlog_dump.js'),
  require('./change_user.js'),
  require('./quit.js')
]

'client_handshake server_handshake query prepare close_statement execute ping register_slave binlog_dump change_user quit'
  .split(' ')
  .forEach(function(name, i) {
    var ctor = reqs[i];
    module.exports[ctor.name] = ctor;
  });