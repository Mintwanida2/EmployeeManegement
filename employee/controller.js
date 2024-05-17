const { getAll, remove, save,get } = require('./model');
const render = require('./viewtest');
const renderForm = require('./form');

async function listAction(request, response) {
    const emps = await getAll();
    const view = render(emps);
    response.send(view);
}

async function removeAction(request, response) {
    const id = parseInt(request.params.id, 10);
    await remove(id);
    response.redirect(request.baseUrl);
}

async function formAction(request, response) {
    let emp = { empID: '', empfName: '', emplName: '', empPosition: '', empSalary: '', empTel: '' };
    if (request.params.id) {
        emp = await get(parseInt(request.params.id, 10));
    }
    const body = renderForm(emp);
    response.send(body);
}


async function saveAction(request, response) {
    const emp = {
        empID: request.body.empID,
        empfName: request.body.empfName,
        emplName: request.body.emplName,
        empPosition: request.body.empPosition,
        empSalary: request.body.empSalary,
        empTel: request.body.empTel,
    };
    await save(emp);
    response.redirect(request.baseUrl);
}


module.exports = { listAction, removeAction, formAction, saveAction };

