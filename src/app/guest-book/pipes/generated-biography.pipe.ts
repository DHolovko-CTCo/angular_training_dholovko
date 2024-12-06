import { Pipe, PipeTransform } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HashingHelper } from 'src/app/shared/utils/hashing-helper';

@Pipe({
  name: 'generatedBiography',
})
export class GeneratedBiographyPipe implements PipeTransform {
  transform(seed: string): string {
    const hash = HashingHelper.getMd5Hash(seed);
    faker.seed(parseInt(hash.substring(0, 8), 16));
    return faker.lorem.paragraphs(5);
  }
}
