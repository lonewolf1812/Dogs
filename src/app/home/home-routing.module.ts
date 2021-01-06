import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { BreedComponent } from "./breed.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "breed/:args", component: BreedComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
//export const dogFood:any=[HomeComponent,BreedComponent]