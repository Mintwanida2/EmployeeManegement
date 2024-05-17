function renderForm(emp){
    return ` 
    <!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Employee Form</title> 
</head>
<body class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased h-auto flex justify-center ">
    <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-3/5 relative sm:rounded-lg overflow-hidden">
    <h1 class="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Add Employee Details</h1>
    <div class="mx-auto w-full max-w-[550px]">
        <form action="/employee/save" method="post" class="space-y-4">
            <input type="hidden" id="empID" name="empID" value="${emp.empID}" />
            <div>
                <label for="firstname" class="mb-3 block text-base font-medium text-gray-700 dark:text-gray-200">First Name</label>
                <input type="text" id="firstname" name="empfName" value="${emp.empfName}" class="w-full border border-gray-300 rounded-md py-2 px-4" placeholder="Enter First Name "  required >
            </div>
            <div>
                <label for="lastname" class="mb-3 block text-base font-medium text-gray-700 dark:text-gray-200">Last Name</label>
                <input type="text" id="lastname" name="emplName" value="${emp.emplName}" class="w-full border border-gray-300 rounded-md py-2 px-4" placeholder="Enter Last Name"  required >
            </div>
            <div>
                <label for="Position" class="mb-3 block text-base font-medium text-gray-700 dark:text-gray-200">Position</label>
                <input type="text" id="Position" name="empPosition" value="${emp.empPosition}" class="w-full border border-gray-300 rounded-md py-2 px-4" placeholder="Enter Position" required >
            </div>
            <div>
                <label for="Salary" class="mb-3 block text-base font-medium text-gray-700 dark:text-gray-200">Salary</label>
                <input type="text" id="Salary" name="empSalary" value="${emp.empSalary}" class="w-full border border-gray-300 rounded-md py-2 px-4" placeholder="Enter Salary"  required >
            </div>
            <div>
                <label for="Tel" class="mb-3 block text-base font-medium text-gray-700 dark:text-gray-200">Phone Number</label>
                <input type="text" id="Tel" name="empTel" value="${emp.empTel}" class="w-full border border-gray-300 rounded-md py-2 px-4" placeholder="Enter Phone Number"  required >
            </div>
            <div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 w-full my-12 rounded-md">Save</button>
            </div>
        </form>
    </div>

</div>
</body>

</html>
`};
module.exports = renderForm;