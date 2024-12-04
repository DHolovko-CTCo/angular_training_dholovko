import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostPageComponent } from './blogpost-page.component';

describe('BlogpostPageComponent', () => {
  let component: BlogpostPageComponent;
  let fixture: ComponentFixture<BlogpostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogpostPageComponent]
    });
    fixture = TestBed.createComponent(BlogpostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
