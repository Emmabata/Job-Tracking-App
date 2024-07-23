import { Router } from 'express';
const router = Router()

import {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
} from '../Controllers/jobController.js';
import { validateJobInput, validateIdParam, } from '../middleware/validationMiddleware.js';

// router.get('/', getAllJobs)
// router.post('/', createJob)

//optional or diff technique mostly for chaining routes
router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router
    .route('/:id')
    .get(validateIdParam, getSingleJob)
    .patch(validateJobInput, validateIdParam,updateJob)
    .delete(validateIdParam, deleteJob);

export default router;