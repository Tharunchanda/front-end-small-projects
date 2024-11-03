let cal_f_value = '';
      let cal_s_value = '';
      let ans = '';
      function Subscribe(){
        const buttonElement = document.querySelector('.js-subscribe-button');
          if(buttonElement.innerText =='Subscribe'){
            buttonElement.innerText='Subscribed';
            buttonElement.classList.add('is-subscribed');
          }else{
            buttonElement.innerText='Subscribe';
            buttonElement.classList.remove('is-subscribed')
          }
      }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
    const arr = [];
    const inputElement1 = document.querySelector('.arr1');
    function addToList1(){
      const element1= inputElement1.value;
      arr.push(element1);
      console.log(arr);
      inputElement1.value='';
    }
    let todoList2 = [];
    function addToList2(){
      const inputElement2 = document.querySelector('.arr2');
      const element2 = inputElement2.value;
      todoList2.push(element2);
      let todoListHTML='';
      for(let i=0;i<todoList2.length;i++){
        const todo = todoList2[i]
        const html = `<p>${todo}</p>`;
        todoListHTML+=html;
      }
      document.querySelector('.js-todo-list').innerHTML=todoListHTML;
      inputElement2.value='';
    }
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [{name: 'make dinner',dueDate: '2022-12-22'}, {name: 'wash dishes',dueDate: '2022-12-22'}];
    renderTodoList();
    function renderTodoList() {
      let todoListHTML = '';
        for (let i = 0; i < todoList.length; i++) {
          const todoObject = todoList[i];//instead of for loop we can use foreach() function
          //const name = todoObject.name;
          //const dueDate = todoObject.dueDate;
          const { name, dueDate } = todoObject;
          const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
              todoList.splice(${i}, 1);
              renderTodoList();
    
              // Whenever we update the todo list, save in localStorage.
              saveToStorage();
            " class="delete-todo-button">Delete</button>`;
        todoListHTML += html;}
      document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    }
    
    function addTodo() {
      const inputElement = document.querySelector('.js-name-input');
      const name = inputElement.value;
      const dateInputElement = document.querySelector('.js-due-date-input');
      const dueDate = dateInputElement.value;
      todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
      });
      inputElement.value = '';
      renderTodoList();
      // Whenever we update the todo list, save in localStorage.
      saveToStorage();
}
    function saveToStorage() {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~Advance functions~~~~~~~~~~~~~~~~`
    // var i =0;
    // while(i<=10){
    //   if(i%3===0){
    //     i++;
    //     continue;
    //   }
    //   console.log(i);
    //   i++;
    // }
    // const num =2;
    // const function1 = function greeting(){
    //   console.log('hello');
    // }
    // function1();
    // //or
    // const function2 = function(name){
    //   return `Hello! ${name}`;
    // };
    // console.log(function2('tharun'));
    // const object1 ={
    //   num :2,
    //   fun: function(){
    //     console.log('hello3');
    //   }
    // }
    // object1.fun();
    // setTimeout(function() {//every setTimeout function has its own id u can create a const or a var to store that id and can be used to clearTimeout function
    //   console.log('waited 3000ms')
    // },3000/*waiting time*/);
    // console.log('i will be first!!');
    // setInterval(function(){
    //   console.log('interval')
    // },3000/*interval gap*/)
    // [1,2,3,4,5].forEach(function(value,index){
    //   console.log(value , index);
    // })
    function change(){
      if(document.querySelector('.button').innerHTML=='Start'){
        setTimeout(function(){
          document.querySelector('.button').innerHTML='Finished!';
        },1000)
      }else{
        document.querySelector('.button').innerHTML='Start';
      }
    }
    let i = 0;
    const originalTitle = document.title;
    let blinkTitle = `(${i}) New messages`;
    let isOriginal = true;
    function add() {
      i += 1;
      blinkTitle = `(${i}) New messages`;
    }
    function remove() {
      i -= 1;
      blinkTitle = `(${i}) New messages`;
    }
    function toggleTitle() {
      if(i!==0 && i>0){
        document.title = isOriginal ? blinkTitle : originalTitle;
        isOriginal = !isOriginal;
      }
    }
    setInterval(toggleTitle, 1000);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const arrowFunction  = () => {
      console.log('hello');
    };
    arrowFunction();
    const oneParam = param => {
      return param +1
    };
    console.log(oneParam(2));
    const oneLine =()=>2+3;
    console.log(oneLine());
    // const object2 ={
    //   method:()=>{
    //     console.log('is same as');
    //   },
    //   method(){
    //     console.log('This');
    //   }
    // }------------------------now event listener------------
    const buttonElement1 = document.querySelector('.js-event-listener-button');
    const eventListener=()=>{
      console.log('click');
    };
    buttonElement1.addEventListener('click',eventListener);
    buttonElement1.removeEventListener('click',eventListener);
    buttonElement1.addEventListener('click',()=>{
      console.log('button clicked');
    });
    
    /*console.log([1,-2,3].filter((value,index)=>{
      //to remove negative numbers from this array,instead of true or false we can give a truthy or a falsy values also
      if(value>0){
        return true;
      }else{
        return false;
      }
    }));*/
    //new_a =[];
    /*[1,1,2].forEach((value,index)=>{
      new_a.push(value*2);
    });console.log(new_a);//instead of for each we can also use map()
    //map transforms an array into another array
    console.log([1,1,2].map((value,index)=>{
      return value+index;
    }));//short-cut for above works same
    console.log([1,1,2].map(value => value*2));*/
//~~~~~~~~~~~~~~~~~~~~~~~~PROMISES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//async await>>promise promise chaning>> callbacks callback hell
  function getData(dataID,getNextData){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('data',dataID);
        resolve('success');
      },2000);
    });
  }
  let promise = getData(123);
  promise.then((res)=>{
    console.log("fulffiled" ,res);
  });
  promise.catch((err)=>{
    console.log("rejected" ,err);
  })
  getData(1).then((res)=>{
    return getData(2);
  }).then(()=>{
    return getData(3);
  }).then((res)=>{
    console.log(res);
  })//this is promise chaining
//////////////////Async Await//////////////////////////
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".in-container form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
     

    
    
    

   
    



    
 
      //Type Coercion -auto converting a number to a string when they are added
      // Early return ;we use return to stop funtion or returning variables & values for escaping scope
      // function greet(name){name==undefined? console.log('Hello there!') : console.log(`Hello ${name}`);}
      // greet();
      // function calculateTax(price,taxPercent = 0.1 /*it's a default value setting*/){
      //   console.log(price*taxPercent);
      // }
      // calculateTax(5000,0.25);
      // calculateTax(1000);
      // Casing Styles : Camelcase(camelCase) Pascalcase(PascalCase) Snakecase(snake_case) Kebabcase(kebab-case)
      //console.log(Math.random()) it produces values between 0 to 1.
      // const message = 5 && 'hello'; As 5 considered to be true then message stores string 
      // console.log(message); Result : 'hello'
      //true && console.log('Think') result : Think
      //Short-cuts for if-Statements (-Ternary Operator ? : )
      //(-Guard Operator &&) this is and operator if the left is false then it will not check the right because it is false
      //(-Default Operator ||) this is or operator this checks if left value if true then by defualt it will not check right (if left value is false then it checks if right is true or not)
      //let v;console.log(v);//Result undefined
      //console.log('text'/5); // Result NaN
      //if(true){console.log('Hello');}else {console.log('Hey');}
      // Order of 1)() 2) * / 3) + - 4) comparision operators (> < >= <= === !==)
      //console.log(3 - 1 > 5 - 5) // prints true
      //==,!= will convert both types to one type and compares them
      //===, !== will not convert and then it compares
        let CartQuantity =JSON.parse(localStorage.getItem('quantity')) || 0;// if we want to change a variable we use let or var
        
      // const variable2 = 5;// const variable ( which can't be changed)
      // console.log(variable2);
      //there are three types of creating variables let,const,var !! var does not follow the scope rule else follows
      //console.log(typeof variable2);//we use typeof to check the variable type
      // var name = 'Tharun Chanda';
      // alert(`Hello! \nMy name is: ${name}`);
      //  alert('This is tharun\'s file'); this line creates a popup.
      // we use \ as a Escape Operator or we can use " ' " or ` " ' " ` .
      /* This is a mulgti-line comment*/
      // console.log(1+3);
      // console.log('tharun'+'\'s '+'work')
      //Falsy Values are false 0 '' NaN undefined null, any other values than this are truthy.

    //                 // Objects
    //     alert(`Name : ${info.name}
    // Collage : ${info.collage}
    // Age : ${info.age}`);it doesn't take any next line argument like \n
    // console.log(typeof console.log); // console is an object and log is a function in that object
    //     const info={
    //       name : 'Tharun' , 
    //       age :18 , 
    //       collage : 'IIT Mandi' ,
    //       more_info :{
    //         branch : 'CSE',
    //         school :'SCEE'
    //       },  
    //       intro : function intro(){
    //           console.log(' Hello I am Chanda Tharun,\nCurrently doing by BTech in CSE in IIT Mandi,\nThank You.')
    //       }
    //     };
    //     console.log(info);
    //     console.log(typeof info);console.log(info.name);
    //     console.log(info.age); //Here we used dot notation,  we can also use brackket ['box'] notation
    //     info.name = 'Chanda Tharun';//renaming
    //     console.log(info.name);console.log(info.more_info.branch);console.log(info.more_info.school);
    //     info.experience = "No";//Adding Element
    //     console.log(info.experience);
    //     delete info.experience;// Deleting Element
    //     info.intro();//Inside object function calling syntax
                          
                        // JSON - JavaScript Object Notation (it is simillar to JS obect but with less features)
    // Built-in JSON Object : convert JavaScript Object to JSON
    //    console.log(JSON.stringify(info)); //Now it is ready to communicate between computers.
        //type String 
    //: To convert JSON to JavaScript Object we use parse
    //   console.log(JSON.parse(JSON.stringify(info)));//type object

                        //localStorage - saves the information (no loss of information if you refresh the page)
        //It takes only strings . It has setItem,getItem,removeItem .etc
        //localStorage.setItem('quantity',JSON.stringify(CartQuantity));syntax
        
      //console.log('Hello'.length) //5
      //console.log('hello'.toUpperCase()); //HELLO
      //Objects are References    
    //     const object ={name:'Tharun'};t
    //     const object1 = object;
    //     console.log(object.name);
    //     object.name = "Chanda Tharun";
    //     console.log(object1.name);// This is called object Referencing
    //     const object2 = {name:'Chanda Tharun'};
    //     console.log(object);console.log(object1);console.log(object2);//prints same but
    //     console.log(object===object1);//true because they both connected to one variable(one address)
    //     console.log(object===object2);//false bcoz they have different Addresses
    //   const object3 ={name:'Tharun',Age :18}
    //   /*const name,Age = object3.name;is same as */ const { name,Age } = object3;// This is called Destructing
    //   console.log(name);console.log(Age);
    // const object4={name : name,/*Shorthand method*/ method(){console.log('Hello')}};console.log(object4);object4.method();

                            //DOM - Document Object Model
        //document obect represents or models the web-page
        //document.body.innerHTML = 'hello'; //Removes all the code and prints hello in web-page
        //document.title = 'title';//It changes the title of the web-page
        /*we can print the title using*/ //console.log(document.title);
        //console.log(document.body);//prints whole body' code and it is object type
        //console.log(document.body.innerHTML);//prints whole body' code and it is string type
        //document.querySelector('button').innerHTML = 'changed';//It by defaults selects first button only 
        //To select another buttons we use class atribute like document.querySelector('.className').innerHTML
        function calculateTotal(){
          var inputElement = document.querySelector('.amazon-txt');
          var cost =Number(inputElement.value);
          if(cost<=40){
            cost+=10;
          }
          document.querySelector('.amazon-total-cost').innerHTML=`$${cost}`;
        }
        function cart_display(){
          document.querySelector('.cart-display').innerHTML=`Cart Quantity : ${CartQuantity}`;
        }
        // const arr =[10,20,30];//array a list of values
        // console.log(arr);
        // arr[0]=99;
        // console.log(arr);
        // console.log(typeof [1,2]);//object
        // console.log(Array.isArray([1,2]));
        // console.log(arr.length);
        // arr.push(3);
        // console.log(arr);
        // arr.pop();
        // console.log(arr);
