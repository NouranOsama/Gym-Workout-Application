import { Client } from "../types/Client";
import { Workout } from "../types/Workout";

export const mockDatabase = {
    clients: [
        { id: 1, name: 'Nouran', email: 'nouran@test.com' },
        { id: 2, name: 'Boules', email: 'boules@test.com' },
        { id: 3, name: 'Hassan', email: 'hassan@test.com' },
        { id: 4, name: 'Sandra', email: 'sandra@test.com' },
    ] as Client[],

    workouts: [
        { id: 1, name: 'Cardio Blast'},
        { id: 2, name: 'Yoga Flow'},
        { id: 3, name: 'Strength Training'},
        { id: 4, name: 'HIIT'},
    ] as Workout[],
}