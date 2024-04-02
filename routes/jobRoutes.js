import { Router } from 'express';

const router = Router()

import {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
} from '../Controllers/jobController.js';

// router.get('/', getAllJobs)
// router.post('/', createJob)

//optional or diff technique mostly for chaining routes
router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getSingleJob).patch(updateJob).delete(deleteJob)

export default router;