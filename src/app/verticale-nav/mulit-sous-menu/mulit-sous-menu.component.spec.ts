import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitSousMenuComponent } from './mulit-sous-menu.component';

describe('MulitSousMenuComponent', () => {
  let component: MulitSousMenuComponent;
  let fixture: ComponentFixture<MulitSousMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulitSousMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulitSousMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
