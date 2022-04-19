import styled from "styled-components"


// const Button = styled.button`
//    border:${(props)=>(props.theme ==="light"?"none":"1px solid black")};
//    border-radius: 5px;
//    padding: 10px;
//    padding-top: 8px;
//    text-align: center;
//    background-color: ${(props)=>(props.theme==="light"?"#2490fe":"white")};
//    color: ${(props)=>(props.theme==="light"?"white":"black")};
//    cursor: pointer;
//    margin: 5px;
//    border: ${(props)=>(props.dash ==="dash"?"dashed":"1px solid black")};;

   
//    `;

let Button1 = styled.button`
    border:none;
    border-radius: 5px;
    padding: 10px;
    padding-top: 8px;
    text-align: center;
   background-color: ${(props)=>(props.name==="primary"?"#2490fe":"white")};
   color: white;
   cursor: pointer;
   margin: 5px; 
`
let Button2 = styled.button`
    border:${(props)=>(props.name ==="default"?"1px solid black":"none")};
    border-radius: 5px;
    padding: 10px;
    padding-top: 8px;
    text-align: center;
   background-color:white;
   color: black;
   cursor: pointer;
   margin: 5px; 
`
let Button3 = styled.button`
    border:${(props)=>(props.name ==="dash"?"dashed":"none")};
    border-radius: 5px;
    padding: 10px;
    padding-top: 8px;
    text-align: center;
   background-color:white;
   color: black;
   cursor: pointer;
   margin: 5px; 
`
let Button4 = styled.button`
    border:${(props)=>(props.name ==="dash"?"dashed":"none")};
    border-radius: 5px;
    padding: 10px;
    padding-top: 8px;
    text-align: center;
   background-color:white;
   color: black;
   cursor: pointer;
   margin: 5px; 
`
let Button5 = styled.button`
    border:${(props)=>(props.name ==="dash"?"dashed":"none")};
    border-radius: 5px;
    padding: 10px;
    padding-top: 8px;
    text-align: center;
   background-color:white;
   color: #2490fe;
   cursor: pointer;
   margin: 5px; 
`
export {Button1,Button2,Button3,Button4,Button5}