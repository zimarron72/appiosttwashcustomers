import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';

interface Items {

    [index: number]: Item
}

interface Item {

    order_id : number;
    order_number : string;
    order_total : number;
    order_subtotal :  number;
    order_discount : number;
    order_status : number;
    order_date : string;
    order_item_id : number;
    product_item_price : number;
    product_name : string;
    mimap : string;
    cita : string;
    citahora : string;
    vehiculotipo : string;
    Order_Item_Status : string;
    wash_id : number;
    latitud : number;
    longitud : number;
    discount_item : string;
    total_item : string;
    rp_monto_item : string;
    rp_concepto_item : string;
    rp_aprobacion_item : string;
    vercharge_item : boolean;
    verenlace3_item : boolean

}

interface Pays {

  [index: number]: Pay
}


interface Pay {

  txn_id : string,
  status : string,
  fechapago : string,
  amount : string,
  userid : number,
  order_id : number,
  order_item_id : number,
  order_number : number ,
  service : string,
  price : string ,
  descuento : string,
  propina : string

}

@Injectable()
export class DatabaseService {

  status_item : string
  status_pay : string
  date_pay : string
  botonborrar : boolean
  botonpagar : boolean
    private database: SQLiteObject;
  private dbReady = new BehaviorSubject<boolean>(false);

  constructor(private platform: Platform, private sqlite: SQLite) { 

    this.platform.ready().then(()=>{
        this.sqlite.create({
          name: 'todos.db',
          location: 'default'
        })
        .then((db:SQLiteObject)=>{
          this.database = db;
  
         this.createTables().then(()=>{     
            //communicate we are ready!
            this.dbReady.next(true);
          });
        })
  
      });

   
}


private async createTables(){
  
     return this.database.executeSql(

            `CREATE TABLE IF NOT EXISTS Mybooks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER,
        order_number TEXT,
        order_total REAL,
        order_subtotal REAL,
        order_discount REAL,
        order_status INTEGER,
        order_date TEXT,
        order_item_id INTEGER,
        product_item_price REAL,
        product_name TEXT,
        mimap TEXT,
        cita TEXT,
        citahora TEXT,
        vehiculotipo TEXT,
        Order_Item_Status INTEGER,
        wash_id INTEGER,
        latitud REAL,
        longitud REAL,
        discount_item REAL,
        total_item REAL,
        rp_monto REAL,
        rp_concepto TEXT,
        rp_aprobacion REAL


      );`,
            []
            )
   .then(()=>{
    return this.database.executeSql(

      `CREATE TABLE IF NOT EXISTS Mypays (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  txn_id TEXT,
  status TEXT,
  fechapago TEXT,
  amount REAL,
  userid INTEGER,
  order_id INTEGER,
  order_item_id INTEGER,
  order_number TEXT,
  service TEXT,
  price REAL,
  descuento REAL,
  propina REAL,
  total REAL
  

);`,
      [])

   }).catch((err)=>console.log("error detected creating tables", err));

   
   

  }


private isReady() {
    
 return new Promise<void>((resolve, _reject) =>{
      //if dbReady is true, resolve
      if(this.dbReady.getValue()){
        resolve();
      }
      //otherwise, wait to resolve until dbReady returns true
      else{
        this.dbReady.subscribe((ready)=>{
          if(ready){ 
            resolve(); 
          }
        });
      }  
    })
  }


  async addOrder(items : any){
    await this.isReady();
    //var items = Object.values(datos)
    for (let item of items) 
    {
      
 
      this.database.executeSql(`INSERT INTO Mybooks(
          
        order_id,
        order_number ,
        order_total,
        order_subtotal ,
        order_discount,
        order_status ,
        order_date,
        order_item_id ,
        product_item_price ,
        product_name,
        mimap ,
        cita ,
        citahora ,
        vehiculotipo,
        Order_Item_Status ,
        wash_id ,
        latitud ,
        longitud ,
        discount_item,
        total_item
        
        
        
        ) VALUES (
        
        '${item.order_id}',
        '${item.order_number}',
        '${item.order_total}',
        '${item.order_subtotal}',
        '${item.order_discount}',
        '${item.order_status}',
        '${item.order_date}',
        '${item.order_item_id}',
        '${item.product_item_price}',
        '${item.product_name}',
        '${item.mimap}',
        '${item.cita}',
        '${item.citahora}',
        '${item.vehiculotipo}',
        '${item.Order_Item_Status}',
        '${item.wash_id}',
        '${item.latitud}',
        '${item.longitud}',
        '${item.discount}',
        '${item.total}',
        '${item.rp_monto}',
        '${item.rp_concepto}',
        '${item.rp_aprobacion}'

        );`, []);
      }       
        
  }




  async addMypays (pays : any) {
    await this.isReady();
    for (let pay of pays) 
    {
      
 
      this.database.executeSql(`INSERT INTO Mypays(
          
        txn_id,
        status,
        fechapago,
        amount,
        userid,
        order_id,
        order_item_id,
        order_number,
        service,
        price,
        descuent,
        propina,
        total
         
        
        
        ) VALUES (
        
        '${pay.txn_id}',
        '${pay.status}',
        '${pay.payment_date}',
        '${pay.auth_amount}',
        '${pay.user_id}',
        '${pay.order_id}',
        '${pay.order_item_id}',
        '${pay.order_number}',
        '${pay.service}',
        '${pay.precio}',
        '${pay.discount}',
        '${pay.propina}',
        '${pay.total}',
         
       
        );`, []);
      } 



  }

  /*async addTokenFcm( token : string) {
    await this.isReady();
    this.database.executeSql(`INSERT INTO TokenFCM(
          
      token    
      
      ) VALUES (
      
      '${token}'
       
     
      );`, []);

  }

  async gettokenFCM() {
    await this.isReady();
    const data = await this.database.executeSql(`SELECT * from TokenFCM`, []);
let token = data.rows.item(0).token

return token

  }*/


  async getTodosItems(){
   
    await this.isReady();
    const data = await this.database.executeSql(`SELECT * from Mybooks`, []);
    
    let mybooks = [];
    for (let i = 0; i < data.rows.length; i++) {
if(data.rows.item(i).Order_Item_Status == '1' 
|| data.rows.item(i).Order_Item_Status == '2' 
|| data.rows.item(i).Order_Item_Status == '7'
|| data.rows.item(i).Order_Item_Status == '8' ) {
  
switch(data.rows.item(i).Order_Item_Status)
{
  case 1: // por confirmar
    this.status_item = 'on hold'
    this.botonpagar = false
    let now = Date.now();
    let dosdiasenmilisegundos = 2*24*60*60*1000    
    let fecha = new Date(data.rows.item(i).order_date)
    let fechadeordenmili = fecha.getTime()
    let fechaDentroDedosdias = fechadeordenmili + dosdiasenmilisegundos 
    if(now >= fechaDentroDedosdias) {
      this.botonborrar = false
    }
    else {
      this.botonborrar = true
    }

    
   
  break;
  case 2: // confirmada por un lavador
    this.status_item = 'accepted'
    this.botonborrar = false
    this.botonpagar = false
  break;
  case 7: // atendida pendiente de pago
    this.status_item = 'to pay'
    this.botonborrar = false
    this.botonpagar = true
  break; 
  case 8: // pagada
    this.status_item = 'paid out'
    this.botonborrar = false
    this.botonpagar = false
  break;  
}


      mybooks.push({
        id: data.rows.item(i).id,
        order_id: data.rows.item(i).order_id,
        Order: data.rows.item(i).order_number,
        total: data.rows.item(i).order_total,
        subtotal: data.rows.item(i).order_subtotal,
        discount: data.rows.item(i).order_discount,
        order_status: data.rows.item(i).order_status,
        order_date: data.rows.item(i).order_date,
        order_item_id: data.rows.item(i).order_item_id,
        Price: data.rows.item(i).product_item_price,
        product_name: data.rows.item(i).product_name,
        mimap: data.rows.item(i).mimap,
        Appointment: data.rows.item(i).cita,
        citahora: data.rows.item(i).citahora,
        vehiculotipo: data.rows.item(i).vehiculotipo,
        Status: this.status_item,
        wash_id: data.rows.item(i).wash_id,
        longitud: data.rows.item(i).longitud,
        latitud: data.rows.item(i).latitud,
        discount_item: data.rows.item(i).discount_item,
        total_item: data.rows.item(i).total_item,
        verborrar: this.botonborrar,
        verpagar: this.botonpagar
      });
    }
    }
  
    return mybooks;
  }

  async getTodosPays() {
    await this.isReady();
    const data = await this.database.executeSql(`SELECT * from Mypays`, []);
    let mypays = [];
    for (let i = 0; i < data.rows.length; i++) {


 mypays.push({
  id: data.rows.item(i).id,
  txn_id: data.rows.item(i).txn_id,
  status : data.rows.item(i).status,
  fechapago: data.rows.item(i).fechapago,
  amount: data.rows.item(i).amount,
  userid: data.rows.item(i).userid,
  order_id: data.rows.item(i).order_id,
  order_item_id: data.rows.item(i).order_item_id,
  order_number: data.rows.item(i).order_number,
  service: data.rows.item(i).service,
  price: data.rows.item(i).price,
  descuento: data.rows.item(i).descuento,
  propina: data.rows.item(i).propina,
  total: data.rows.item(i).total,
  
 
});


    }
  }

  async getItems(n : number){

    const formatter$ = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    
    await this.isReady();
    const data = await this.database.executeSql(`SELECT * from Mybooks`, []);
    
    let Items = [];
    for (let i = 0; i < data.rows.length; i++) {
if(data.rows.item(i).Order_Item_Status == n 
) {
  
switch(data.rows.item(i).Order_Item_Status)
{
  case 1: // por confirmar
    this.status_item = 'on hold'   
  break;
  case 2: // confirmada por un lavador
    this.status_item = 'accepted'
    
  break;
  case 7: // atendida pendiente de pago
    this.status_item = 'to pay'
   
  break; 
  case 8: // pagada
    this.status_item = 'paid out'
   
  break;
  case 9: // cancelado
    this.status_item = 'cancelled'
   
  break;   
}

if(!data.rows.item(i).wash_id) {
  var washid = "ND"
}
else {
  washid = data.rows.item(i).wash_id
}

var status = ''
var vercharge = false
var verenlace3 = false
switch(data.rows.item(i).rp_aprobacion){

case 0:
  status = 'Without approval'
  vercharge = true
  var verenlace3 = false
break;
case 1:
  status = 'Waiting for approval'
  vercharge = true
  var verenlace3 = false
break;
case 2:
  status = 'Passed'
  vercharge = true
  var verenlace3 = false
break;
default:  
vercharge = false
var verenlace3 = true
}


      Items.push({
        id: data.rows.item(i).id,
        order_id: data.rows.item(i).order_id,
        Order: data.rows.item(i).order_number,
        total: data.rows.item(i).order_total,
        subtotal: data.rows.item(i).order_subtotal,
        discount: data.rows.item(i).order_discount,
        order_status: data.rows.item(i).order_status,
        order_date: data.rows.item(i).order_date,
        order_item_id: data.rows.item(i).order_item_id,
        Price: data.rows.item(i).product_item_price,
        Service: data.rows.item(i).product_name,
        mimap: data.rows.item(i).mimap,
        Appointment: data.rows.item(i).cita,
        citahora: data.rows.item(i).citahora,
        vehiculotipo: data.rows.item(i).vehiculotipo,
        Status: this.status_item,
        wash_id: washid,
        longitud: data.rows.item(i).longitud,
        latitud: data.rows.item(i).latitud,
        discount_item: data.rows.item(i).discount_item,
        total_item: data.rows.item(i).total_item,

        Price_item_string : formatter$.format(data.rows.item(i).product_item_price),
        Descuento_item_string : formatter$.format(data.rows.item(i).discount_item),
        Total_item_string : formatter$.format(data.rows.item(i).total_item),

        rp_monto_item : formatter$.format(data.rows.item(i).rp_monto),
        rp_concepto_item : data.rows.item(i).rp_concepto,
        rp_aprobacion_item : status,
        vercharge_item :vercharge,
        verenlace3_item : verenlace3
       
      });
    }
    }
  
    return Items;
  }

  async getPays (p : string) {


    const formatter$ = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });


  await this.isReady();
  const data = await this.database.executeSql(`SELECT * from Mypays`, []);
  let Pays = [];
  for (let i = 0; i < data.rows.length; i++) {
    if(data.rows.item(i).status == p 
    ) {
      
    switch(data.rows.item(i).status)
    {
      case 'Verifying': // verificando
        this.status_pay = 'IN REVIEW'   
      break;
      case 'Denied': // negado
        this.status_pay = 'REJECT'
        
      break;
      case 'Processed': // aceptado
        this.status_pay = 'ADMITTED'
       
      break;
    }
    
    var date = new Date(data.rows.item(i).fechapago);
    var dia = date.getDate();
    var mesIndex = date.getMonth();
    var year = date.getFullYear();
    if(mesIndex >= 9) {
      this.date_pay = (mesIndex+1)+'-'+dia+'-'+year;
      }
      else {
        this.date_pay = '0'+(mesIndex+1)+'-'+dia+'-'+year;
      }



    
          Pays.push({
       
            id: data.rows.item(i).id,
            txn_id: data.rows.item(i).txn_id,
            status : this.status_pay,
            fechapago: this.date_pay,
            amount: data.rows.item(i).amount,
            userid: data.rows.item(i).userid,
            order_id: data.rows.item(i).order_id,
            order_item_id: data.rows.item(i).order_item_id,
            order_number: data.rows.item(i).order_number,
            service: data.rows.item(i).service,
            price: data.rows.item(i).price,
            descuento: data.rows.item(i).descuento,
            propina: data.rows.item(i).propina,
            total: data.rows.item(i).total,

            Price_item_string : formatter$.format(data.rows.item(i).price),
            Descuento_item_string : formatter$.format(data.rows.item(i).descuento),
            Total_item_string : formatter$.format(data.rows.item(i).total),
            Propina_string : formatter$.format(data.rows.item(i).propina),
            Amount_string : formatter$.format(data.rows.item(i).amount),
           
          });
        }
        }
      
        return Pays;

}
 


  async borrarTobook(id:number){
    await this.isReady();
    return await this.database.executeSql(`DELETE FROM Mybooks WHERE order_item_id = ${id}`, []);    
  }



  async UpdateOrders(items: any) {
  await this.isReady();
  if(items.length !== 0) {

    for (let item of items) 
    {
      const data = await this.database.executeSql(`SELECT * from Mybooks WHERE order_item_id = ${item.order_item_id}`, []);
      if(data.rows.length == 1 ) {
        await this.database.executeSql(`UPDATE Mybooks SET      
      
        Order_Item_Status = ?,
        wash_id = ?
        WHERE order_item_id = ${item.order_item_id}
        `, [
          item.Order_Item_Status,
          item.wash_id         

        ]);
      }

      else {
        this.database.executeSql(`INSERT INTO Mybooks(
          
          order_id,
          order_number ,
          order_total,
          order_subtotal ,
          order_discount,
          order_status ,
          order_date,
          order_item_id ,
          product_item_price ,
          product_name,
          mimap ,
          cita ,
          citahora ,
          vehiculotipo,
          Order_Item_Status ,
          wash_id ,
          latitud ,
          longitud,
          discount_item,
          total_item ,
          rp_monto,
          rp_concepto,
          rp_aprobacion 
          
          
          
          ) VALUES (
          
          '${item.order_id}',
          '${item.order_number}',
          '${item.order_total}',
          '${item.order_subtotal}',
          '${item.order_discount}',
          '${item.order_status}',
          '${item.order_date}',
          '${item.order_item_id}',
          '${item.product_item_price}',
          '${item.product_name}',
          '${item.mimap}',
          '${item.cita}',
          '${item.citahora}',
          '${item.vehiculotipo}',
          '${item.Order_Item_Status}',
          '${item.wash_id}',
          '${item.latitud}',
          '${item.longitud}',
          '${item.discount}',
          '${item.total}'
          );`, []);

      }


    }  
    
  }

  else {

    return this.database.executeSql(

      `DELETE FROM Mybooks`,
      [])  

  }


}

  async UpdatePays (pays: any) {
  await this.isReady();

 if(pays.length !== 0) {

  for (let pay of pays) 
  {
    const data = await this.database.executeSql(`SELECT * from Mypays WHERE order_item_id = ${pay.order_item_id}`, []);
    if(data.rows.length == 1 ) {
      await this.database.executeSql(`UPDATE Mypays SET      
    
      status = ?
      WHERE order_item_id = ${pay.order_item_id}
      `, [
        pay.status,
              

      ]);
    }

    else {
      this.database.executeSql(`INSERT INTO Mypays(
        
        txn_id,
        status,
        fechapago,
        amount,
        userid,
        order_id,
        order_item_id,
        order_number,
        service,
        price,
        descuento,
        propina,
        total   
        
        
        
        ) VALUES (
        
        '${pay.txn_id}',
        '${pay.status}',
        '${pay.payment_date}',
        '${pay.auth_amount}',
        '${pay.user_id}',
        '${pay.order_id}',
        '${pay.order_item_id}',
        '${pay.order_number}',
        '${pay.service}',
        '${pay.precio}',
        '${pay.discount}',
        '${pay.propina}' ,
        '${pay.total}' 

        );`, []);

    }


  } 

 }

 else {
  return this.database.executeSql(

    `DELETE FROM Mypays`,
    [])

 }
  



}


}

