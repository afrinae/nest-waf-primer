import { PartialType } from '@nestjs/mapped-types';
import { CreateVotersinfoDto } from './create-votersinfo.dto';

export class UpdateVotersinfoDto extends PartialType(CreateVotersinfoDto) {}
