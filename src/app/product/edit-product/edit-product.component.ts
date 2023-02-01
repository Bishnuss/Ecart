import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  productid:any
  productdata:any

  constructor(private activatedroute: ActivatedRoute,private Productservice: ProductserviceService,private router:Router){}

  ngOnInit():void{
    this.activatedroute.params.subscribe((data:any)=>{
      this.productid=data["id"]
    })

    this.Productservice.viewproduct(this.productid).subscribe((item:any)=>{
      this.productdata=item
    })
  }

  updateProduct(form:any){
    let updateProduct={
      id: form.value.id,
      productName:form.value.productName,
      categoryId: form.value.categoryId,
      description:form.value.description ,
      price:form.value.price ,
      isAvailable:form.value.isAvailable ,
      productImage:form.value.productImage,
      rating: form.value.rating,
      review: form.value.review,
      warrenty: form.value.warrenty
    }

    this.Productservice.updateProduct(this.productid,this.productdata).subscribe((data:any)=>{
      alert('updated product details')
      this.router.navigateByUrl('')
    })
  }
}
