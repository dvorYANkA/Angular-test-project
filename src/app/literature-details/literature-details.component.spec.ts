import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureDetailsComponent } from './literature-details.component';

describe('LiteratureDetailsComponent', () => {
  let component: LiteratureDetailsComponent;
  let fixture: ComponentFixture<LiteratureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteratureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteratureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
