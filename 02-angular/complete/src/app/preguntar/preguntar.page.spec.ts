import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreguntarPage } from './preguntar.page';

describe('PreguntarPage', () => {
  let component: PreguntarPage;
  let fixture: ComponentFixture<PreguntarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
