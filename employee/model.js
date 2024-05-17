const mysql = require('mysql2');
const connection = mysql.createConnection('mysql://3y1UAf1ML5yEX6s.root:gtm2377L54Gf78ms@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/Employees-db?ssl={"rejectUnauthorized":true}')

async function getAll() {
    const query = 'SELECT * FROM employee';
    const [data] = await connection.promise().query(query);
    return data;
}

async function remove(id) {
    const query = 'DELETE FROM employee WHERE empID = ?';
    await connection.promise().query(query, [id]);
    return;
}

async function insert(emp) {
    const query = 'INSERT INTO employee (empfName, emplName, empPosition, empSalary, empTel) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.promise().query(query, [emp.empfName, emp.emplName, emp.empPosition, emp.empSalary, emp.empTel]);
    return { ...emp, id: result.insertId };
}

async function update(emp) {
    const query = 'UPDATE employee SET empfName = ?, emplName = ?, empPosition = ?, empSalary = ?, empTel = ? WHERE empID = ?';
    await connection.promise().query(query, [emp.empfName, emp.emplName, emp.empPosition, emp.empSalary, emp.empTel, emp.empID]);
    return emp;
}

async function get(id) {
    const query = 'SELECT * FROM employee WHERE empID = ?';
    const [data] = await connection.promise().query(query, [id]);
    return data.pop();
}

async function save(emp) {
    if (!emp.empID) {
        return insert(emp);
    } else {
        return update(emp);
    }
}

module.exports = { getAll, remove, get, save };