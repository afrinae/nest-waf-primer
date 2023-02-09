export class CreateCitizenDto {
    
    readonly votersID: number;
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly email: string;
    readonly dateOfBirth: Date;
    readonly townOfBirth: string
    readonly homeAddress: string
    readonly isActive: boolean;
}


