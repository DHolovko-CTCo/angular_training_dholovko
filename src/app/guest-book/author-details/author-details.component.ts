import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import * as md5 from 'md5';

@Component({
  selector: 'bpt-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss'],
})
export class AuthorDetailsComponent {
  protected authorEmail = inject<string>(MAT_DIALOG_DATA);

  protected generateGravatarSource() {
    return (
      'https://www.gravatar.com/avatar/' + this.getAuthorHash() + '?d=identicon'
    );
  }

  protected generateBio(): string {
    const hash = this.getAuthorHash();
    faker.seed(parseInt(hash.substring(0, 8), 16));
    return faker.lorem.paragraphs(5);
  }

  private getAuthorHash(): string {
    return md5(this.authorEmail.trim().toLowerCase());
  }
}
