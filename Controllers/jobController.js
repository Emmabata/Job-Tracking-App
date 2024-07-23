import Job from '../models/jobModel.js';
import { StatusCodes } from 'http-status-codes';




//GET ALL JOBS
export const getAllJobs = async (req, res) => {
    console.log(req.user);
    const jobs = await Job.find({ createdBy: req.user.userId });
    res.status(StatusCodes.OK).json({ jobs });
}


//CREATE JOB
//i prefer to use try and catch on the createJob function but use the error middleware on the rest by installing express-async-error package
export const createJob = async (req, res) => {
    try{
        req.body.createdBy = req.user.userId;
        const job = await Job.create(req.body);
        res.status(StatusCodes.CREATED).json({job});
    }catch(error) {
        res.status(500).json({msg: 'server error'})
    }
    
}


//GET A SINGLE JOB
export const getSingleJob = async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.status(StatusCodes.OK).json({ job });
}


//UPDATE JOB CONTROLLER
export const updateJob = async (req, res) => {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(req.param.id, req.body, {
        //this below updates the new job
        new:true
    })
    res.status(StatusCodes.OK).json({ msg: `job modified`, job:updatedJob });
}


//delete job controller
export const deleteJob = async (req, res) => {
    const removedJob = await Job.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: 'job deleted', job:removedJob })
}

