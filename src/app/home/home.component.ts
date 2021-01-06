import { debugOutputAstAsTypeScript } from "@angular/compiler";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {Router} from "@angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls:["./home.component.css"]
})

export class HomeComponent implements OnInit {
    public list:any;
    public searchPhrase: string;

    constructor(private router: Router) {
        // Use the component constructor to inject providers.   
    }
    
    ngOnInit(): void {
        // Init your component properties here.
        this.breedList();
    }

    breedList()
    {
        fetch('https://dog.ceo/api/breeds/list').then(r => r.json()).then(r => { this.list=r.message });
    }

    gotoBreed(arg)
    {
        this.router.navigate(["home/breed",arg]);
    }
    
    dogfilter()
    {
        let searchItem=this.searchPhrase;
        fetch('https://dog.ceo/api/breeds/list')
        .then(r => r.json())
        .then(r => {
            this.list=r.message.filter(function (temp) {
                return temp.match(searchItem)
            });
        });
        // this.inPatients = this.inPatients.filter(function (patient) {
        //     return patient.ipCode.match(searchTerm) || patient.patient_name.match(searchTerm) || patient.roomCode.match(searchTerm);
        // });
    }

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        this.searchPhrase=searchBar.text;
        this.dogfilter();
        //console.log(this.searchPhrase);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        this.searchPhrase=searchBar.text;
        this.dogfilter();
        //console.log(`Input changed! New value: ${searchBar.text}`);
        //this.list = this.list.filter((s) => s.text.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        this.searchPhrase="";
        fetch('https://dog.ceo/api/breeds/list').then(r => r.json()).then(r => { this.list=r.message });
        //console.log(`Clear event raised`);
    }


}
