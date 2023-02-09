
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
//import { Votersinfo } from "src/citizen-registration/votersinfo/entities/votersinfo.entity";

export class Citizen {
    @PrimaryGeneratedColumn()
    votersID: number;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;
    
    @Column() 
    email: string;

    @Column({default: new Date()})
    dateOfBirth: Date;

    @Column() 
    townOfBirth: string

    @Column() 
    homeAddress: string

    @Column({ default: true }) 
    isActive: boolean;
}   


