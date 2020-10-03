'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Bem Vindo ao Portal de transparência' }
})

// Route.post('/sessions', 'SessionController.create')

//Unico que não vai precisar de autenticação
Route.get('/units', 'UnitController.index')

Route.post('/units', 'UnitController.create')
Route.get('/units/:id', 'UnitController.show')
Route.put('/units/:id', 'UnitController.update')
Route.post('/units/:id/adm_structure', 'UnitController.addAdmStruture')
Route.post('/units/:id/contacts', 'UnitController.addContacts')
Route.post('/units/:id/selection_approval', 'UnitController.addSelectionApproval')
Route.post('/units/:id/management_contracts', 'UnitController.addManagementContracts')
Route.post('/units/:id/selective_proccess', 'UnitController.addSelectiveProccess')
Route.post('/units/:id/people', 'UnitController.addPeople')
Route.post('/units/:id/server', 'UnitController.addServer')
Route.post('/units/:id/mat_med', 'UnitController.addMatMed')
Route.post('/units/:id/accountability', 'UnitController.addAccountability')
Route.post('/units/:id/accounting_doc', 'UnitController.addAccountingDoc')

// Administrative Structure
Route.put('/adm_structure/:id', 'AdmStructureController.update')
Route.delete('/adm_structure/:id', 'AdmStructureController.delete')


// Accountability
Route.put('/accountability/:id', 'AccountabilityStructureController.update')
Route.delete('/accountability/:id', 'AccountabilityController.delete')


// AccountingDocs
Route.put('/accounting_doc/:id', 'AccountingDocController.update')
Route.delete('/accounting_doc/:id', 'AccountingDocController.delete')

// Contract
Route.put('/contact/:id', 'ContactController.update')
Route.delete('/contact/:id', 'ContactController.delete')

// 
Route.put('/management_contract/:id', 'ManagementContractController.update')
Route.delete('//:id', 'Controller.delete')

// 
Route.put('//:id', 'Controller.update')
Route.delete('//:id', 'Controller.delete')