import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurevueComponent } from './utilisateurevue.component';

describe('UtilisateurevueComponent', () => {
  let component: UtilisateurevueComponent;
  let fixture: ComponentFixture<UtilisateurevueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurevueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurevueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
