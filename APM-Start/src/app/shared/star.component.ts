import { EventEmitter ,Component, OnChanges, Input, Output } from '@angular/core';


@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html' ,
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() rating : number;
    starWidth : number ;

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>() ;

    ngOnChanges(): void {
        this.starWidth = this.rating*75/5;
    }

    onClick():void{
        //rize the click event to the container
        this.ratingClicked.emit(`the ratinf ${this.rating} was clicked`) ;
    }
}
