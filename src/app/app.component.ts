import { Component,Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public numItem=0;
  public cartName=[];
  public cartPrice=[];
  public cartDesc=[];
  public Total=0;
  title = 'shopping-cart';
  public List = [
    {name:'White Casual T-Shirt',price:350,image:"https://images.bewakoof.com/t540/jaane-ka-nai-half-sleeve-t-shirt-men-s-printed-t-shirts-271556-1586157834.jpg",desc:"White Printed Round Neck Shaped"},
    {name:"Red Casual T-Shirt",price:350,image:"https://images.bewakoof.com/t540/pocket-jerry-half-sleeve-t-shirt-tjl-men-s-printed-t-shirts-241993-1585744299.jpg",desc:"Red Round Neck Shaped"},
    {name:"Pink Casual T-Shirt",price:350,image:"https://images.bewakoof.com/t540/rebel-sight-half-sleeve-t-shirt-men-s-printed-t-shirts-271985-1586155795.jpg",desc:"Rebel Half Sleeve"},
    {name:"Grey Casual T-Shirt",price:350,image:"https://images.bewakoof.com/t540/rebel-sight-half-sleeve-t-shirt-men-s-printed-t-shirts-268944-1585800683.jpg",desc:"Rebel Half Sleeve"},

    {name:"Baby Pink T-Shirt",price:270,image:"https://images.bewakoof.com/t540/baby-pink-half-sleeve-t-shirt-men-s-plain-t-shirts-235437-1586169580.jpg",desc:"Casual Plain T-Shirt"},
    {name:"Greenish T-Shirt",price:350,image:"https://images.bewakoof.com/t540/lost-in-time-half-sleeve-t-shirt-men-s-printed-t-shirts-271576-1585635829.jpg",desc:"Lost in Time Print"},
    {name:"Grey Casual T-Shirt",price:350,image:"https://images.bewakoof.com/t540/marvelrine-half-sleeve-t-shirt-xml-men-s-printed-t-shirts-272202-1582892210.jpg",desc:"Marvelrine Print T-Shirt"},
    {name:"Multicolor Casual T-Shirt",price:400,image:"https://images.bewakoof.com/t540/swag-jersey-color-block-t-shirt-men-s-90-s-vibe-half-sleeves-printed-three-panel-t-shirt-271892-1585818630.jpg",desc:"Swag Jersey T-shirt"},
    {name:"Greenish Casual T-Shirt",price:350,image:"https://images.bewakoof.com/t540/save-the-planet-tree-half-sleeve-t-shirt-men-s-printed-t-shirts-272965-1583465556.jpg",desc:"Save the Tree Print"},
    {name:"Black Casual T-Shirt",price:350,image:"https://images.bewakoof.com/t540/iron-man-of-war-half-sleeve-t-shirt-avl-men-s-printed-t-shirts-220650-1584415921.jpg",desc:"Iron Man Print"}
  ];
  
  get(name,price){
    this.numItem=this.numItem + 1;
    this.cartName.push(name);
    this.cartPrice.push(price);
    this.Total=this.Total+price;
  }
  show(){
    window.alert("Name:"+this.cartName+"   "+"Price:"+this.cartPrice+"  "+"Total:"+this.Total);
  }

  public isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

}
