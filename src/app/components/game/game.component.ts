import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
    name:string = 'Counter-Strike';
    price:number = 600;
    version:string = '2.35.1';
    game_type!: Game_type;
    options!: string[];
    isEdit:boolean = false;

  constructor() { }

  ngOnInit(): void {
  this.game_type = {
  ftype : 'Shouter',
  stype : '3d-Action',
  ttype : 'Simulator'
  };
  this.options = ["Top 1 online","Tournaments","Cybersport"];
  }

  gameSelect(gameName:string){
    if(gameName=='cs')
    {
      this.name = 'Counter-Strike';
      this.price = 600;
      this.version = '2.35.1';
      this.game_type = {
      ftype : 'Shouter',
      stype : '3d-Action',
      ttype : 'Simulator'
      };
      this.options = ["Top 1 online","Tournaments","Cybersport"];
      }

      else if (gameName == 'dota')
      {
        this.name = 'Dota 2';
        this.price = 100;
        this.version = '2.00.1';
        this.game_type = {
          ftype : 'RPG',
          stype : '3d-Action',
          ttype : 'Simulator'
        };
        this.options = ["Top 2 online","Tournaments","Cybersport"];
      }

      else
      {
        this.name = 'Fortnite';
        this.price = 500;
        this.version = '1.1.16';
        this.game_type = {
          ftype : 'Strategy',
          stype : '3d-Action',
          ttype : 'Simulator'
        };
        this.options = ["Top 5 online","Tournaments","Cybersport"];
      }
  }

  addOpt(option:string)
  {
    this.options?.unshift(option);
    return false;
  }

  deleteOpt(option:string){
    for(let i = 0; i < this.options?.length; i++)
    {
      if(this.options[i] == option)
      {
        this.options?.splice(i, 1);
        break;
      }
    }
  }

  showEdit() {
    this.isEdit = !this.isEdit;

  }
}



interface Game_type{
  ftype: string;
  stype: string;
  ttype: string;
}
function showEdit() {
  throw new Error('Function not implemented.');
}

