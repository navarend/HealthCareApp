import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: []
})
export class BreadCrumbsComponent implements OnInit {
 titleBread: string;
  constructor( private route: Router, private title: Title, private meta: Meta ) {
     this.GetDataRoute().subscribe( data => {
      this.titleBread = data;
      this.title.setTitle(this.titleBread);
      const metaTag: MetaDefinition = { name: 'description', content: this.titleBread };
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

 GetDataRoute(){
   return this.route.events.pipe(
     filter( event => event instanceof ActivationEnd ),
     filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
     map( (event: ActivationEnd) => event.snapshot.data.title )
   )
 };

}
