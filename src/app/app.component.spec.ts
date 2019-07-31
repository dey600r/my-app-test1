import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DebugElement } from '@angular/core';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule,
        FormsModule,InputTextModule,ButtonModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    compiled = debugElement.nativeElement;
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app-test1'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app-test1');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app-test1!');
  });

  it('should change property', () => {
    // debugElement
    //   .query(By.css('p-button.changeProperty'))
    //   .triggerEventHandler('click', null);
    compiled.querySelector('#input2').value = "adios";
    //const submitEl = fixture.debugElement.query(By.css('button'));
    
     //const onClickMock = spyOn(compiled, 'click');
     //const submitEl = debugElement.query(By.css('button'));
     //compiled.querySelector("#button1").triggerEventHandler('click', null);
     let selectedHero: any;
     //compiled.querySelector("#button1").click();
     //submitEl.triggerEventHandler('click', null);
     //fixture.detectChanges();
     const comp = new AppComponent();
     fixture.componentInstance.changeProperty();
     fixture.whenStable().then(() => {
      expect(compiled.querySelector('#input1').value).toContain('adios');
      //expect(onClickMock).toHaveBeenCalled();
      //expect(compiled.querySelector('#input1').value).toContain('adios');
      //expect(component.onEditButtonClick).toHaveBeenCalled();
    });
     
  });
});
