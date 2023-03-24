import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  row_Control_1 = true; // this to allow play on row 1
  row_Control_2 = true; // this to allow play on row 2
  row_Control_3 = true; // this to allow play on row 3
  row_Control_4 = true; // this to allow play on row 4

  // this structure array for row 1
  row1: any[] = [1];
  // this structure array for row 2
  row2: any[] = [1,1,1];
  // this structure array for row 3
  row3: any[] = [1,1,1,1,1];
  // this structure array for row 4
  row4: any[] = [1,1,1,1,1,1,1];

  // now we will implement the methods of playing the game.. 

  // first of all, we have rowOne() method, and this method
  // will deal with the fist row

  rowOne(){
      // chick if this row is allow to play with
      if(this.row_Control_1){
      // stop the user to play from other rows
      this.row_Control_2 = false; // stop control in row 2 
      this.row_Control_3 = false; // stop control in row 3
      this.row_Control_4 = false; // stop control in row 4 
      
      // now delete form row1 array 
      this.row1.pop();
      }
  }

  rowTwo(){
    // chick if this row is allow to play with
    if(this.row_Control_2){
    // stop the user to play from other rows
    this.row_Control_1 = false; // stop control in row 1
    this.row_Control_3 = false; // stop control in row 3
    this.row_Control_4 = false; // stop control in row 4 
    
    // now delete form row2 array 
    this.row2.pop();
    }
  }

  rowThree(){
    // chick if this row is allow to play with
    if(this.row_Control_3){
    // stop the user to play from other rows
    this.row_Control_1 = false; // stop control in row 1 
    this.row_Control_2 = false; // stop control in row 2
    this.row_Control_4 = false; // stop control in row 4 
    
    // now delete form row3 array 
    this.row3.pop();
    }
  }

  rowFour(){
    // chick if this row is allow to play with
    if(this.row_Control_4){
    // stop the user to play from other rows
    this.row_Control_1 = false; // stop control in row 1 
    this.row_Control_2 = false; // stop control in row 2
    this.row_Control_3 = false; // stop control in row 3 
    
    // now delete form row4 array 
    this.row4.pop();
    }
  }

  // start making check421 function

  ones: any; // 1s counter
  twos: any; // 2s counter
  fours: any; // 3s counter

  // the bellow four variables will be use to store the length of the row 
  //in check421 method
  row_length_1: any; 
  row_length_2: any; 
  row_length_3: any; 
  row_length_4: any; 

    check421(){

      // reset the counters
        this.ones = 0; 
        this.twos = 0;
        this.fours = 0;

      // store the lengths of each rows
        this.row_length_1 = this.row1.length;
        this.row_length_2 = this.row2.length;
        this.row_length_3 = this.row3.length;
        this.row_length_4 = this.row4.length;

          // dealing with row 1
          if(this.row_length_1 == 1){
            this.ones++; // increase the counter of 1s
            this.row_length_1--; // decrease the row_length_1 by 1
          }

          // dealing with row 2
          while(this.row_length_2 > 0){

              if(this.row_length_2 >= 2){
                this.twos+= 2; // increase the counter of 2s
                this.row_length_2 = this.row_length_2 - 2;
              }
              else if(this.row_length_2 ==1){
                this.ones++; // increase the counter of 1s
                this.row_length_2--; // decrease the row_length_2 by 1
              }
          }

          // dealing with row 3
          while(this.row_length_3 > 0){

            if(this.row_length_3 >=4){

              this.fours+= 4; // increase the counter of 4s
              this.row_length_3 = this.row_length_3 - 4;
              // decrease the row_length_3 by 4

            }
            else if(this.row_length_3 >= 2){

              this.twos+= 2; // increase the counter of 2s
              this.row_length_3 = this.row_length_3 - 2;
              // decrease the row_length_3 by 2

            }
            else if(this.row_length_3 ==1){

              this.ones++; // increase the counter of 1s
              this.row_length_3--; // decrease the row_length_3 by 1

            }
          }

            // dealing with row 4
            while(this.row_length_4 > 0){

              if(this.row_length_4 >=4){
      
                this.fours+= 4; // increase the counter of 4s
                this.row_length_4 = this.row_length_4 - 4;
                // decrease the row_length_4 by 4
      
              }
              else if(this.row_length_4 >= 2){
      
                this.twos+= 2; // increase the counter of 2s
                this.row_length_4 = this.row_length_4 - 2;
                // decrease the row_length_4 by 2
      
              }
              else if(this.row_length_4 ==1){
      
                this.ones++; // increase the counter of 1s
                this.row_length_4--; // decrease the row_length_4 by 1
      
              }
            } 

            alert('fours: ' + this.fours + ' | twos: ' + this.twos + ' | ones: ' + this.ones);
                    
    } // end of check421 funtion ---------------------------------------------


    // these arraies only for know what is the best next step that AI should take
    list_1: any[] = [];
    list_2: any[] = [];
    list_3: any[] = [];
    list_4: any[] = [];

    temp_array: any[] = [];
    temp: any;

    //this list used to save the cases and check what is the best one to play
    case_list: any[]= [];

    copyArray(){

      for(var i=0;i<this.row1.length;i++){ // copy row 1
        this.temp = this.row1[i];
        this.list_1[i] = this.temp;
      }

      for(var i=0;i<this.row2.length;i++){ // copy row 2
        this.temp = this.row2[i];
        this.list_2[i] = this.temp;
      }

      for(var i=0;i<this.row3.length;i++){ // copy row 3
        this.temp = this.row3[i];
        this.list_3[i] = this.temp;
      }

      for(var i=0;i<this.row4.length;i++){ // copy row 4
        this.temp = this.row4[i];
        this.list_4[i] = this.temp;
      }    
    }

    pass(){

      this.case_list.length = 0;

      this.copyArray();

      // now we have to go through all possible cases and chose a safe one

      if(this.list_1.length == 1){ // start dealing with row 1
        
        this.list_1.pop();

        this.temp_array.push(this.list_1.length);
        this.temp_array.push(this.list_2.length);
        this.temp_array.push(this.list_3.length);
        this.temp_array.push(this.list_4.length);

        for(var i=0 ; i < this.temp_array.length-1; i++){

          for(var j=i+1; j < this.temp_array.length; j++){
            
            if(this.temp_array[i]<this.temp_array[j]){

              this.temp = this.temp_array[i];
              this.temp_array[i] = this.temp_array[j];
              this.temp_array[j] = this.temp;

            }
          }

        }

        this.case_list.push(String(this.temp_array[0])+
                            String(this.temp_array[1])+ 
                            String(this.temp_array[2])+ 
                            String(this.temp_array[3]));

        this.temp_array.length = 0;
                          
  
      } // end of dealing with row 1

      this.copyArray();

      while(this.list_2.length > 0){ //start dealing with row 2

        // alert(this.list_2.length);
        this.list_2.pop();
        

        this.temp_array.push(this.list_1.length);
        this.temp_array.push(this.list_2.length);
        this.temp_array.push(this.list_3.length);
        this.temp_array.push(this.list_4.length);

        for(var i=0 ; i < this.temp_array.length-1; i++){

          for(var j=i+1; j < this.temp_array.length; j++){
            
            if(this.temp_array[i]<this.temp_array[j]){

              this.temp = this.temp_array[i];
              this.temp_array[i] = this.temp_array[j];
              this.temp_array[j] = this.temp;

            }
          }

        }

        this.case_list.push(String(this.temp_array[0])+
                            String(this.temp_array[1])+ 
                            String(this.temp_array[2])+ 
                            String(this.temp_array[3]));

        this.temp_array.length = 0;
                   
      } // end of dealing with row 2

      this.copyArray();

      while(this.list_3.length > 0){ //start dealing with row 3

        this.list_3.pop();

        this.temp_array.push(this.list_1.length);
        this.temp_array.push(this.list_2.length);
        this.temp_array.push(this.list_3.length);
        this.temp_array.push(this.list_4.length);

        for(var i=0 ; i < this.temp_array.length-1; i++){

          for(var j=i+1; j < this.temp_array.length; j++){
            
            if(this.temp_array[i]<this.temp_array[j]){

              this.temp = this.temp_array[i];
              this.temp_array[i] = this.temp_array[j];
              this.temp_array[j] = this.temp;

            }
          }

        }

        this.case_list.push(String(this.temp_array[0])+
                            String(this.temp_array[1])+ 
                            String(this.temp_array[2])+ 
                            String(this.temp_array[3]));

        this.temp_array.length = 0;
                         

      } // end of dealing with row 3

      this.copyArray();

      while(this.list_4.length > 0){ //start dealing with row 4

        this.list_4.pop();

        this.temp_array.push(this.list_1.length);
        this.temp_array.push(this.list_2.length);
        this.temp_array.push(this.list_3.length);
        this.temp_array.push(this.list_4.length);

        for(var i=0 ; i < this.temp_array.length-1; i++){

          for(var j=i+1; j < this.temp_array.length; j++){
            
            if(this.temp_array[i]<this.temp_array[j]){

              this.temp = this.temp_array[i];
              this.temp_array[i] = this.temp_array[j];
              this.temp_array[j] = this.temp;

            }
          }

        }

        this.case_list.push(String(this.temp_array[0])+
                            String(this.temp_array[1])+ 
                            String(this.temp_array[2])+ 
                            String(this.temp_array[3]));
        
        this.temp_array.length = 0;
                         

      } // end of dealing with row 4



      // reset the smart_Move array to avoid dealing with previous data 
      //before intering the next loop

      this.smart_Move.length = 0; 
      this.first_turn =0;
      // select each element from case_list array and compare it with
      // accepted_Move array elements
      
      for(var i=0 ; i < this.case_list.length ; i++) {

        for(var j=0 ; j < this.accepted_Move.length ; j++){

          if(this.case_list[i] == this.accepted_Move[j]){
            this.smart_Move.push(i);
            this.first_turn++;
          }

        }
      }

      this.copyArray(); // restore the rows values inside lists
      this.counter = 0;
      // get a random index element from smart_Move array to play it
      this.myMove = Math.floor(Math.random()* this.smart_Move.length);
      if(this.first_turn == 0){
        this.myMove = this.first_turn;
        this.smart_Move.push(0);
      }
      

      // now after we got our playing index, we will compare it with the counter
      // if we reached to the same index, thats mean our play step

      if(this.list_1.length == 1){ // dealing with row 1 play
        
        this.list_1.pop();

        if(this.counter == this.smart_Move[this.myMove]){
          this.temp = this.list_1.length;
          this.row1.length = this.temp; 
          this.counter++;
   
          // we made the row length equal to the length of smart move 
        }
        else{this.counter++;}
      } // end dealing with row 1 play

      while(this.list_2.length >0){ // dealing with row 2 play
        this.list_2.pop();

        if(this.counter == this.smart_Move[this.myMove]){
          this.temp = this.list_2.length;
          this.row2.length = this.temp; 
          this.counter++;
          // we made the row length equal to the length of smart move 
        }
        else{this.counter++;}

      }// end dealing with row 2 play

      while(this.list_3.length >0){ // dealing with row 3 play
        this.list_3.pop();
        if(this.counter == this.smart_Move[this.myMove]){
          this.temp = this.list_3.length;
          this.row3.length = this.temp; 
          this.counter++;

          
          // we made the row length equal to the length of smart move 
        }
        else{this.counter++;}

      }// end dealing with row 3 play

      while(this.list_4.length >0){ // dealing with row 4 play
        this.list_4.pop();
        if(this.counter == this.smart_Move[this.myMove]){
          this.temp = this.list_4.length;
          this.row4.length = this.temp; 
          this.counter++; 
          // we made the row length equal to the length of smart move 
        }
        else{this.counter++;}

      }// end dealing with row 4 play

      this.row_Control_1 = true; // this to allow play on row 1
      this.row_Control_2 = true; // this to allow play on row 2
      this.row_Control_3 = true; // this to allow play on row 3
      this.row_Control_4 = true; // this to allow play on row 4

    this.ending = this.row1.length + this.row2.length + this.row3.length + this.row4.length;

    if(this.ending == 0){
      this.end = true;
    }

} // end pass function

accepted_Move: any[] = [ 
                          7421, 6521, 6431, 5511, 4411, 3311, 2211,
                          7520, 7430, 6530, 6420, 5410, 3210, 1110,
                          5500, 4400, 3300, 2200, 1000 
                       ];

// smart_Move array contain the index of accepted
// element to play from case_list
smart_Move: any[] = []; 
counter: any = 0;
myMove: any = null;
ending: any = null;
first_turn = 0;
end = false;


reload(){
  window.location.reload();
}

}
