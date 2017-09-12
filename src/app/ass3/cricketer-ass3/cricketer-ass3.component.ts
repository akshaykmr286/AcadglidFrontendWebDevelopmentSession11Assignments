import { Component, OnInit, Input } from '@angular/core';
import { ICricketList } from '../../interface/cricketer-list';
@Component({
  selector: 'app-cricketer-ass3',
  templateUrl: './cricketer-ass3.component.html',
  styleUrls: ['../../ass1/cricketer/cricketer.component.css']
})
export class CricketerAss3Component implements OnInit {

  /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail;
  private imageUrl: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';
  criketerList: ICricketList;
  constructor() { }

  ngOnInit() {
  }
}
