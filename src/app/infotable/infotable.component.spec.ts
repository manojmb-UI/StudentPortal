import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotableComponent } from './infotable.component';

describe('InfotableComponent', () => {
  let component: InfotableComponent;
  let fixture: ComponentFixture<InfotableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfotableComponent]
    });
    fixture = TestBed.createComponent(InfotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
