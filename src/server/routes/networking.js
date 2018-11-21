import express from 'express';

import {
  listAllNetworking,
  createNetworking,
  getNetworkingById,
  updateNetworking,
  deleteNetworking,
  searchNetworking
} from '../controllers/networking';

const router = express.Router();

router.get('/', listAllNetworking);
router.post('/', createNetworking);
router.get("/search", searchNetworking);
router.get('/:id', getNetworkingById);
router.put('/:id', updateNetworking);
router.delete('/:id', deleteNetworking);

export default router;
