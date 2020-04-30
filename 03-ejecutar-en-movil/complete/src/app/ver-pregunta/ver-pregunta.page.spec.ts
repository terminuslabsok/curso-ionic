import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerPreguntaPage } from './ver-pregunta.page';

describe('VerPreguntaPage', () => {
  let component: VerPreguntaPage;
  let fixture: ComponentFixture<VerPreguntaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPreguntaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerPreguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
