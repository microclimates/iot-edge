var Router = require('express-promise-router')
var AuthC = require('./lib/authenticate')
var Status = require('./lib/status')
var publicDir = require('path').join(__dirname, 'public')
var publicFS = require('serve-static')(publicDir)

/**
 * This is the mini-app representing the site service
 *
 * It requires the normal domain, logging, body parsing, error handling middleware
 */
var router = module.exports = Router()

// Common middleware for /hub
router.use(AuthC.api)

// API routes
router.use(require('./lib/api/calendar'))
router.use(require('./lib/api/cam'))
router.use(require('./lib/api/cdn'))
router.use(require('./lib/api/databus'))
router.use(require('./lib/api/devices'))
router.use(require('./lib/api/flows'))
router.use(require('./lib/api/groups'))
router.use(require('./lib/api/hub'))
router.use(require('./lib/api/products'))
router.use(require('./lib/api/reports'))
router.use(require('./lib/api/users'))
router.use(require('./lib/api/watches'))
router.use(require('./lib/api/zones'))

// Standard routes
router.use  ('/public', publicFS)
router.get  ('/status', Status.getStatus)

// Specialty routes
router.use(require('./lib/register'));