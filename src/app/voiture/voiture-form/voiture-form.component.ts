import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-voiture-form',
  imports: [],
  templateUrl: './voiture-form.component.html',
  styleUrl: './voiture-form.component.css'
})
export class VoitureFormComponent implements OnInit {
  @Input() pokemon:undefined;

  // types:string[];
  constructor(){}
  ngOnInit(): void {
      // this.types=this.pokemonService.getPokemonTypeList();
  }

  hasType(type :string) :boolean{
    return true;
    // return this.pokemon.types.includes(type);
  }
  selectType($event:Event,type:string){
    const isChecked=($event.target as HTMLInputElement).checked;
    if(isChecked){
      // this.pokemon.types.push(type)
    }else{
      // mon code
      // this.pokemon.types.filter(type1=> type1!=type)e
      // code senior
      // const index=this.pokemon.types.indexOf(type);
      // this.pokemon.types.splice(index,1);
    }
  }
  isTypesValid(type:string):boolean{
    // if(this.pokemon.types.length==1 && this.hasType(type)){
    //   return false;
    // }
    // if(this.pokemon.types.length>2 && !this.hasType(type)){
    //   return false;
    // }

    return true;
  }
  onSubmit(){
    console.log('submit forme');
    // this.router.navigate(['/pokemon',this.pokemon.id])
  }
}
