import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../AngularMaterialModule/AngularMaterialModule";
import { APICallerService } from "./Services/apiCaller.service";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: [APICallerService]
})

export class SharedModule { }
