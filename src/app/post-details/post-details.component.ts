import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NativeWindow } from '../window';
import { Post } from '../post';
import { User } from '../user';
import { Category } from '../category';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    @Inject(NativeWindow) private _window) { }

  ngOnInit(): void {
    this._activatedRoute
        .data
        .subscribe((data: { post: Post }) => {
          this.post = data.post;
          this._window.scrollTo(0, 0);
        });
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

  /*=========================================================================|
  | Red Path                                   DONE!!!                       |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts del autor indicado. Recuerda que para hacer esto necesitas         |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/users', pasando como parámetro el identificador del autor.       |
  |=========================================================================*/

  showAuthorPosts(author: User) {
    this._router.navigateByUrl('/posts/users/' + author.id);
  }

  /*=========================================================================|
  | Yellow Path                                     DONE!!!                  |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts de la categoría indicada. Recuerda que para hacer esto necesitas   |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/categories', pasando como parámetro el identificador de la       |
  | categoría.                                                               |
  |=========================================================================*/

  showCategoryPosts(category: Category) {
    this._router.navigateByUrl('/posts/categories/' + category.id);
  }

}
