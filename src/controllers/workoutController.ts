import { Request, Response } from 'express';
import { mockDatabase } from '../data/mockDatabase';

export const getWorkouts = (req: Request,res: Response) => {
    res.status(200).json({data: mockDatabase.workouts})
}

export const createWorkout = (req: Request, res:Response) => {
    const {name} = req.body;
    const newWorkout = {id: mockDatabase.workouts.length + 1, name}
    mockDatabase.workouts.push(newWorkout);
    res.status(201).json({data: newWorkout})
}

export const updateWorkout = (req: Request, res: Response) => {
    const id = +req.params.id;
    const {name} = req.body;
    const workout = mockDatabase.workouts.find((workout) => workout.id == id);
    if(workout){
        name ? workout.name = name : workout.name = workout.name;
        res.status(200).json({data: workout})
        }else{
        res.status(404).json({message: 'Workout not found'})
        }
}

export const deleteWorkout = (req : Request , res : Response) => {
    const id = +req.params.id;
    const index = mockDatabase.workouts.findIndex((workouts) => workouts.id === id);
    if(index !== -1){
        mockDatabase.workouts.splice(index, 1);
        res.status(200).json({message: 'Workout deleted'})
    }else{
        res.status(404).json({message: 'Workout not found'})
    }
}