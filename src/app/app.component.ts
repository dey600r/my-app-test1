import { Component } from '@angular/core';
import { MotoServiceModel, MotoModel, MotosService, ReturnModel } from 'my-moto-track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-test1';

  motoTable: ReturnModel = new ReturnModel([], [], false, false);

  mService: MotoServiceModel[] = [];
  cols: any[];

  property: string = "hola";
  valueProperty: string = "";

  constructor(private motosService: MotosService) { 
  }

  ngOnInit() {
    this.cols = [
      { field: 'brand', header: 'brand' },
      { field: 'model', header: 'model' },
      { field: 'year', header: 'year' }
    ];
    //this.motoTable = new ReturnModel(this.getListMotos().map(x => x.motos), this.cols, false, true, true, true, true);
    this.motosService.getListMotos().subscribe(motos => {
      this.motoTable = new ReturnModel(motos, this.cols, false, true, true, true, true);
    });  
  }


  manageOutput(event: any) {

  }

  changeProperty() {
    this.property = this.valueProperty;
  }

  getListMotos(): MotoServiceModel[] {
    let result: MotoServiceModel[] = [];
    let testMotoServ: MotoServiceModel = new MotoServiceModel();
    
    let motoTest: MotoModel = new MotoModel();
    motoTest.brand = "Yamaha"
    motoTest.model = "R6";
    motoTest.year = 2005;
    testMotoServ.motos =  motoTest;
    result = [...result, testMotoServ];
    testMotoServ = new MotoServiceModel();
    motoTest = new MotoModel()
    motoTest.brand = "Hyosung"
    motoTest.model = "gtr 125";
    motoTest.year = 2006;
    testMotoServ.motos =  motoTest;
    result = [...result, testMotoServ];
    return result;
  }
}
