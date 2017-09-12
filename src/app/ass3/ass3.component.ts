import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CricketerService } from '../services/cricketer.service';
import { CriketerDropDownService } from '../services/criketer-drop-down.service';
import { ICricketList, ICricketerModel } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonFunction } from "../common";

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['../ass1/ass1.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [CricketerService,CriketerDropDownService]
})
export class Ass3Component implements OnInit {
 /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: IPlayerType[] = [];

  private searchData: string;
  cricketerModel: ICricketList;
  cricketerDetail: ICricketList;
constructor(private router:Router,private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService) { }
  
  ngOnInit() {
    this.cricketModel();
    this.playerType = this._cricketerDropDown.getPlayerType();
    this.cricketersArray = this._cricketService.getCricketerList();
  }

  cricketModel() {
    /**Define default values */
    return this.cricketerModel = {
      firstName: '',
      lastName: '',
      favShot: '',
      playerType: '',
      yearlyIncome: null,
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a cricket */
  addCriketer(values) {
    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      playerType: values.playerType,
      yearlyIncome: values.YearlyIncome,
      dob: values.Dob
    };
    // /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    // Using 3rd party library to show message.
    this._cricketService.getCricketerList();
  };
}
