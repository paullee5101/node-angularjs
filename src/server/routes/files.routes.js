'use strict';

import { Router } from "express";
const router = new Router();

import Files from '../controllers/files/files.controller';
const FilesController = new Files();

// Get all file list
router.route('/list').get(FilesController.getFileList);

// Get specific fileinfo
router.route('/info/:file_id').get(FilesController.getFileInfo);

// Create new file
router.route('/').post(FilesController.createFile);

// Update existing file info
router.route('/:file_id').put(FilesController.updateFile);

//Delete file
router.route('/:file_id').delete(FilesController.deleteFile);

export default router;