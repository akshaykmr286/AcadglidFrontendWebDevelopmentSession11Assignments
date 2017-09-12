import { Component, OnInit,Input } from '@angular/core';
import { ICricketList } from '../../interface/cricketer-list';
@Component({
  selector: 'app-cricketer-ass4',
  templateUrl: './cricketer-ass4.component.html',
  styleUrls: ['../../ass1/cricketer/cricketer.component.css']
})
export class CricketerAss4Component implements OnInit {

  /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail: ICricketList[];

  private searchData: string;

  private imageUrl: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';

  ngOnInit() {
    this.searchData = '';
  }
}
