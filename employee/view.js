function render(emps){
    return ` 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Data</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <button><a href="/employee/form">add product</a></button>
    <table>
        <th>รหัสพนักงาน</th>
        <th>ชื่อ</th>
        <th>นามสกุล</th>
        <th>ตำแหน่ง</th>
        <th>เงินเดือน</th>
        <th>เบอร์โทร</th>
        ${emps
            .map((emp)=>`<tr>
            <td>${emp.empID}</td>
            <td>${emp.empfName}</td>
            <td>${emp.emplName}</td>
            <td>${emp.empPosition}</td>
            <td>${emp.empSalary}</td>
            <td>${emp.empTel}</td>
            <td><a href="/employee/delete/${emp.empID}">delete</a></td>
        </tr>`)
        .join('')}
       
      
    </table>
</body>
</html>
`};

module.exports = render;



