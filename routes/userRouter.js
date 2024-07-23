import { Router } from "express";
import { 
    getCurrentUser, 
    getApplicationStats, 
    updateUser 
} from "../Controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";

const router = Router();
router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStats);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;