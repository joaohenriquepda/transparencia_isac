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

Route.post('/login', 'SessionController.create')

Route.get('/log_actions', 'LogActionController.all')

// Users Routes
Route.get('/users', 'UserController.all').middleware(['auth:jwt'])
Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show').middleware(['auth:jwt'])
Route.put('/users/:id', 'UserController.update').middleware(['auth:jwt'])
Route.delete('/users/:id', 'UserController.delete').middleware(['auth:jwt'])
Route.post('/users/recovery', 'UserController.recoveryPassword')
Route.get('/users/:id/actions/', 'UserController.showActions').middleware(['auth:jwt'])

//Unico que não vai precisar de autenticação
Route.get('/units', 'UnitController.index')

Route.post('/units', 'UnitController.create').middleware(['auth:jwt'])
Route.get('/units/:id', 'UnitController.show')
Route.delete('/units/:id', 'UnitController.delete').middleware(['auth:jwt'])
Route.put('/units/:id', 'UnitController.update').middleware(['auth:jwt'])
Route.post('/units/:id/adm_structure', 'UnitController.addAdmStructure').middleware(['auth:jwt'])
Route.post('/units/:id/contacts', 'UnitController.addContacts').middleware(['auth:jwt'])
Route.post('/units/:id/selection_approval', 'UnitController.addSelectionApproval').middleware(['auth:jwt'])
Route.post('/units/:id/management_contracts', 'UnitController.addManagementContracts').middleware(['auth:jwt'])
Route.post('/units/:id/selective_proccess', 'UnitController.addSelectiveProccess').middleware(['auth:jwt'])
Route.post('/units/:id/people', 'UnitController.addPeople').middleware(['auth:jwt'])
Route.post('/units/:id/server', 'UnitController.addServer').middleware(['auth:jwt'])
Route.post('/units/:id/mat_med', 'UnitController.addMatMed').middleware(['auth:jwt'])
Route.post('/units/:id/accountability', 'UnitController.addAccountability').middleware(['auth:jwt'])
Route.post('/units/:id/accounting_doc', 'UnitController.addAccountingDoc').middleware(['auth:jwt'])
Route.post('/units/:id/politics', 'UnitController.addPolitics').middleware(['auth:jwt'])

// Administrative Structure
Route.put('/adm_structure/:id', 'AdmStructureController.update').middleware(['auth:jwt'])
Route.delete('/adm_structure/:id', 'AdmStructureController.delete').middleware(['auth:jwt'])

// Accountability
Route.put('/accountability/:id', 'AccountabilityStructureController.update').middleware(['auth:jwt'])
Route.delete('/accountability/:id', 'AccountabilityController.delete').middleware(['auth:jwt'])

// AccountingDocs
Route.put('/accounting_doc/:id', 'AccountingDocController.update').middleware(['auth:jwt'])
Route.delete('/accounting_doc/:id', 'AccountingDocController.delete').middleware(['auth:jwt'])

// Contract
Route.put('/contact/:id', 'ContactController.update').middleware(['auth:jwt'])
Route.delete('/contact/:id', 'ContactController.delete').middleware(['auth:jwt'])

// Management Contract
Route.put('/management_contract/:id', 'ManagementContractController.update').middleware(['auth:jwt'])
Route.delete('/management_contract/:id', 'Controller.delete').middleware(['auth:jwt'])

// MatMed
Route.put('/mat_med/:id', 'MatMedController.update').middleware(['auth:jwt'])
Route.delete('/mat_med/:id', 'MatMedController.delete').middleware(['auth:jwt'])

// Person
Route.put('/person/:id', 'PersonController.update').middleware(['auth:jwt'])
Route.delete('/person/:id', 'PersonController.delete').middleware(['auth:jwt'])

// Person
Route.put('/politics/:id', 'PoliticController.update').middleware(['auth:jwt'])
Route.delete('/politics/:id', 'PoliticController.delete').middleware(['auth:jwt'])

// PublicCall
Route.put('/public_call/:id', 'PublicCallController.update').middleware(['auth:jwt'])
Route.delete('//:id', 'PublicCallController.delete').middleware(['auth:jwt'])

// Selection Approval
Route.put('/selection_approval/:id', 'SelectionApprovalController.update').middleware(['auth:jwt'])
Route.delete('/selection_approval/:id', 'SelectionApprovalController.delete')

// Selective Proccess
Route.put('/selective_proccess/:id', 'SelectiveProccessController.update').middleware(['auth:jwt'])
Route.delete('/selective_proccess/:id', 'SelectiveProccessController.delete').middleware(['auth:jwt'])

// // 
// Route.put('//:id', 'Controller.update')
// Route.delete('//:id', 'Controller.delete')