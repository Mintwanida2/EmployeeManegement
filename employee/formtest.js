function renderForm(emp){
    return ` 
    <!DOCTYPE html>
    <html lang="en"> 
    <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Form</title> 
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
    <div class="flex items-center justify-center p-12">
        <!-- Author: FormBold Team -->
        <div class="mx-auto w-full max-w-[550px] bg-white">
            <form action="/employee/save" method="post">
                <div class="mb-5">
                    <input type="hidden" name="empID" id="empID" placeholder="Enter Employee ID" 
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value="${emp.empID}"/>
                </div>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                                First Name
                            </label>
                            <input  required  type="text" name="fname" id="fname" placeholder="First Name" 
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value="${emp.empfName}" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                                Last Name
                            </label>
                            <input  required  type="text" name="lname" id="lname" placeholder="Last Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value="${emp.emplName}"/>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <label for="position" class="mb-3 block text-base font-medium text-[#07074D]">
                        Position
                    </label>
                    <input  required  type="text" name="position" id="position" placeholder="Enter position"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value="${emp.empPosition}"/>
                </div>
                <div class="mb-5">
                    <label for="salary" class="mb-3 block text-base font-medium text-[#07074D]">
                        Salary
                    </label>
                    <input  required  type="text" name="salary" id="salary" placeholder="Enter salary"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value="${emp.empSalary}"/>
                </div>
                <div class="mb-5">
                    <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                        Phone Number
                    </label>
                    <input  required  type="text" name="phone" id="phone" placeholder="Enter phone number"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value="${emp.empTel}"/>
                </div>
                <div>
                    <button type="submit"
                        class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 mb-5 text-center text-base font-semibold text-white outline-none">
                        Save
                    </button>
                 
                </div>
            </form>
        </div>
    </div>
</body>
</html>
`};

module.exports = renderForm;
