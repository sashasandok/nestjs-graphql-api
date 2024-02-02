import { Injectable } from '@nestjs/common'
import { Pet } from './pet.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePetInput } from 'src/dto/create-pet.input'

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}

  createPet(createInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createInput)
    return this.petsRepository.save(newPet)
  }

  findAll(): Promise<Pet[]> {
    return this.petsRepository.find()
  }
}
