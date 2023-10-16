
1.DUPLICATE ARRAY REMOVE IN JS
let arr = ["apple", "mango", "apple","apple",
          "orange", "mango","apple", "mango"]; 
         

Method:01:
  let fin = [... new Set(arr)]
         console.log(fin)

Method:02
         
          let final = arr.filter((item,inx)=>{
            return arr.indexOf(item) == inx
          })
          
          console.log(final)

Output:
[ 'apple', 'mango', 'orange' ]

-------------------------------------------------------------------
2.Duplicate Array Json removing and sort method
const arr = [{
  id: 1,
  name: 'one'
}, {
  id: 2,
  name: 'two'
}, {
  id: 1,
  name: 'one'
},  {
  id: 3,
  name: '"three"'
}];


Method:01:

const ids = arr.map(({id}) => id);
console.log(ids)

const filtered = arr.filter(({ id }, index) => {
 return !ids.includes(id,index + 1) 
})
console.log(filtered)

let sortingFilter = filtered.sort((a,b)=>{
  return a.id - b.id
})

console.log(sortingFilter);

output:
[ 1, 2, 1, 3 ]
[
  { id: 2, name: 'two' },
  { id: 1, name: 'one' },
  { id: 3, name: '"three"' }
]
[
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: '"three"' }
]

Method :02

const arr = [{
  id: 2,
  name: 'one'
}, {
  id: 1,
  name: 'two'
}, {
  id: 1,
  name: 'one'
},  {
  id: 3,
  name: '"three"'
}];

let arrVal=[]
let json={}
arr.map(item=>{
  let id =item.id
  json[id]=item
})

for(let key in json){
  arrVal.push(json[key])
}
console.log(arrVal)

output
[
  { id: 1, name: 'one' },
  { id: 2, name: 'one' },
  { id: 3, name: '"three"' }
]
------------------------------------------------------------------------------------------

React Native 

passing data from one page to another page
page 1.js
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();

lixit-page Name
userValue - params
{navigation.navigate('Lixt',{
userValue})
}}

page 2.js
import { useRoute } from '@react-navigation/native';
const { userValue } = route.params;
---------------------------------------------------------------------------

React Js

page 1.js
import {Link, useNavigate} from 'react-router-dom';
  const navigate = useNavigate();
navigate('/componentB',{state:{id:1,name:'sabaoon'}});


page 2.js
import {useLocation} from 'react-router-dom';
const location = useLocation();
<div>{location.state.name}</div>
----------------------------------------------------------------------------------
Duplicate values remove from object
books = [
        { title: "C++", author: "Bjarne" },
        { title: "Java", author: "James" },
        { title: "Python", author: "Guido" },
        { title: "Java", author: "Nithan" },
    ];
 
    // Declare a new array
    let newArray = [];
 
    // Declare an empty object
    // let uniqueObject = {};
    
    
      let uniqueObject = {};
    books.map(item=>{
      let titleObj= item.title
      uniqueObject[titleObj] =item
    })
    
    
     console.log(uniqueObject)

 for (i in uniqueObject) {
        newArray.push(uniqueObject[i]);
    }

output:
[
  { title: 'C++', author: 'Bjarne' },
  { title: 'Java', author: 'Nithan' },
  { title: 'Python', author: 'Guido' }
]
-----------------------------------------------------------
One Array having entire json
var data = [
    { birthdate: "1993", name: "Ben" },
    { birthdate: "1994", name: "John" },
    { birthdate: "1995", name: "Larry" },
    { birthdate: "1995", name: "Nicole" },
    { birthdate: "1996", name: "Jane" },
    { birthdate: "1996", name: "Janet" },
    { birthdate: "1996", name: "John" }
  ];

using loadash you can use 
 let list = _.groupBy(data, (b)=> {
      return b.birthdate;
    });
    console.log(list);

output
{
1993:[{birthdate: "1993",
name: "Ben"}]
....
1996:[{birthdate: "1996"
name: "Jane"},{birthdate: "1996"
name: "Janet"},{
birthdate: "1996"
name: "John"}]
}
---------------------------------



