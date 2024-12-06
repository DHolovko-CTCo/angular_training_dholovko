import * as md5 from 'md5';

export class HashingHelper {
  static getMd5Hash(source: string): string {
    return md5(source.trim().toLowerCase());
  }
}
