import { Pipe, PipeTransform } from '@angular/core';
import { HashingHelper } from 'src/app/shared/utils/hashing-helper';

@Pipe({
  name: 'gravatarSource',
})
export class GravatarSourcePipe implements PipeTransform {
  transform(seed: string): string {
    return (
      'https://www.gravatar.com/avatar/' +
      HashingHelper.getMd5Hash(seed) +
      '?d=identicon'
    );
  }
}
