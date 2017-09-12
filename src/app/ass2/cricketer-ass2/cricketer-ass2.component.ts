import { Component, OnInit,Input } from '@angular/core';
import { ICricketList } from '../../interface/cricketer-list';
@Component({
  selector: 'app-cricketer-ass2',
  templateUrl: './cricketer-ass2.component.html',
  styleUrls: ['../../ass1/cricketer/cricketer.component.css']
})
export class CricketerAss2Component implements OnInit {

  /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail;

  criketerList: ICricketList;
    private imageUrl: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';
  constructor() { }

  ngOnInit() {
  }
}
