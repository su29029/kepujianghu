var UserSQL = {
    insert: 'INSERT INTO user(uid,pswd) VALUES(?,?)',
    drop: 'DROP TABLE user',
    queryAll: 'SELECT * FROM user',
    getUserById: 'SELECT * FROM user WHERE uid=?'
};

module.exports = UserSQL;