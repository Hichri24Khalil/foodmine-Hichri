import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { sample_Porducts } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }



getAll():Product[]{
  return sample_Porducts ;
}

}
