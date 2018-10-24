import express from 'express';

import {
  listAllEvents,
  createEvents,
  getEventsById,
  updateEvents,
  deleteEvents,
} from '../controllers/events';

const router = express.Router();

router.get('/', listAllEvents);
router.post('/', createEvents);
router.get('/:id', getEventsById);
router.put('/:id', updateEvents);
router.delete('/:id', deleteEvents);

export default router;
