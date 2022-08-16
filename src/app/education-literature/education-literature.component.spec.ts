import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLiteratureComponent } from './education-literature.component';

describe('EducationLiteratureComponent', () => {
  let component: EducationLiteratureComponent;
  let fixture: ComponentFixture<EducationLiteratureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLiteratureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
