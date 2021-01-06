import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "breed",
    moduleId: module.id,
    templateUrl: "./breed.component.html",
    styleUrls:["./breed.component.css"]
})

export class BreedComponent implements OnInit {
    private breedName:any;
    private list:any;
    public isLoading:Boolean;
    
    constructor(private routerextensions: RouterExtensions, private route: ActivatedRoute) {
        // Use the component constructor to inject providers.
        this.route.params.subscribe((params)=>{this.breedName=params["args"]});
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.breedImage();
    }

    breedImage()
    {
        fetch("https://dog.ceo/api/breed/"+ this.breedName +"/images/random").then(r => r.json()).then(r => { this.list=r.message });
    }

}
