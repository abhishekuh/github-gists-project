import { Component, OnInit } from '@angular/core';
import { GistsService } from '../gists-service.service';

@Component({
  selector: 'app-gist-list',
  templateUrl: './gist-list.component.html',
  styleUrls: ['./gist-list.component.sass']
})
export class GistListComponent implements OnInit {

  gists
  p = 1

  constructor(private gistService:GistsService) { }

  ngOnInit() {
    this.getAllGists()
  }

  getAllGists(){
    this.gistService.getAllGists().subscribe(res => {
      this.gists = res
    })
  }



  sortListing(sortType){
    if(sortType == 'Asc'){
      this.gists.sort((a, b) => (a.owner.login > b.owner.login) ? 1 : -1)
    }
    else{
      this.gists.sort((a, b) => (a.owner.login < b.owner.login) ? 1 : -1)
    }
  }

}
