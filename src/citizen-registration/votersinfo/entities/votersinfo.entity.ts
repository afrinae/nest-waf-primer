import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export class Votersinfo {
    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column() 
    firstName: string;
    
}