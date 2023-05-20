import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardFrontComponent } from './card-front.component';
import { CardService } from '../card.service';

describe('CardFrontComponent', () => {
  let component: CardFrontComponent;
  let fixture: ComponentFixture<CardFrontComponent>;
  let myService: CardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFrontComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: CardService, useValue: {} }],
      imports: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(CardService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy();
    });
  });
});
