import { Request, Response } from 'express';
import { mockDatabase } from '../data/mockDatabase';

export const getClientByID = (req: Request,res: Response) => {
    const id = +req.params.id;
    const client = mockDatabase.clients.find((client) => client.id === id);
    if(client){
        res.status(200).json({data: client})
    }else{
        res.status(404).json({message: 'Client not found'})
    }
}

export const createClient = (req: Request,res: Response) => {
    const {name, email} = req.body;
    const newClient = {id: mockDatabase.clients.length + 1, name, email}
    mockDatabase.clients.push(newClient);
    res.status(201).json({data: newClient})
}

export const updateClient = (req: Request,res: Response) => {
    const id = +req.params.id;
    const {name, email} = req.body;
    const client = mockDatabase.clients.find((client) => client.id === id);
    if(client){
        name ? client.name = name : client.name = client.name;
        email ? client.email = email: client.email = client.email;
        res.status(200).json({data: client})
    }else{
        res.status(404).json({message: 'Client not found'})
    }
}

