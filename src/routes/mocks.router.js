const { Router } = require('express');
const { getMockingUsers, getMockingPets, generateData } = require('../controllers/mocks.controller');

const router = Router();

// Endpoint GET /api/mocks/mockingusers
router.get('/mockingusers', getMockingUsers);

// Endpoint GET /api/mocks/mockingpets (Migrado)
router.get('/mockingpets', getMockingPets);

// Endpoint POST /api/mocks/generateData
router.post('/generateData', generateData);

module.exports = router;
