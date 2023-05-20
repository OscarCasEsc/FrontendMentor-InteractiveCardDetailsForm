import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardFormComponent } from "./card-form.component";

describe("CardFormComponent", () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;
  let myService: MyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: MyService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(MyService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy();
    });
  });
})