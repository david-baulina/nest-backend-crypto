import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { LanguageCode } from '../enums/languaje-code';
import type { Constructor } from '../helpers/types';
import type {
  AbstractDto,
  AbstractTranslationDto,
} from '../../application/dtos/abstract.dto';

export interface IAbstractEntity<DTO extends AbstractDto, O = never> {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  toDto(options?: O): DTO;
}

export abstract class AbstractEntity<
  DTO extends AbstractDto = AbstractDto,
  O = never,
> implements IAbstractEntity<DTO, O>
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  translations?: AbstractTranslationEntity[];

  private dtoClass: Constructor<DTO, [AbstractEntity, O?]>;

  toDto(options?: O): DTO {
    const dtoClass = this.dtoClass;

    if (!dtoClass) {
      throw new Error(
        `You need to use @UseDto on class (${this.constructor.name}) be able to call toDto function`,
      );
    }

    return new this.dtoClass(this, options);
  }
}

export class AbstractTranslationEntity<
  DTO extends AbstractTranslationDto = AbstractTranslationDto,
  O = never,
> extends AbstractEntity<DTO, O> {
  @Column({ type: 'enum', enum: LanguageCode })
  languageCode: LanguageCode;
}
