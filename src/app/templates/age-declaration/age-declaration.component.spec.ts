import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDeclarationComponent } from './age-declaration.component';

describe('AgeDeclarationComponent', () => {
  let component: AgeDeclarationComponent;
  let fixture: ComponentFixture<AgeDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
