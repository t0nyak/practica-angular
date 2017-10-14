import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../category';

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.css']
})
export class CategoryBoxComponent {

  @Input() categories: Category[];

  /*=========================================================================|
  | Yellow Path                                DONE!!!                       |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | dicho atributo debe permitir la emisión de eventos; la idea es enviar al |
  | componente padre la categoría sobre el cuál se ha hecho clic. Y puesto   |
  | que dicho clic se realiza en el template de este componente, necesitas,  |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  @Output() onClickCategory = new EventEmitter<Category>();
  clickCategory(categoryName: string) { 
    let category;
    this.categories.forEach( cat => {
      if(cat.name == categoryName){
        this.onClickCategory.emit(cat);
      }
    });
  }

}
