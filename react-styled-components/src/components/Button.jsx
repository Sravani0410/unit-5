// import "./Button.css"
import styled from "styled-components"
// export const Button = ({children,onClick})=>{
//     return <button onClick={onClick} className="btn">{children}</button>
// }

const Button=styled.button 
`
border:none;
border-radius:4px;
padding:15px;
padding-top:10px;
text-align:center;
background: ${(props)=>(props.theme==="light" ? "#FCD900" :"#001E6C")} ;
color:${(props)=>(props.theme==="light" ? "#001E6C" :"#FCD900")} ;;
cursor:pointer;
margin:5px;
&:hover{
    box-shadow: #17bb61 0 10px 20px -10px;
}
`;
 export {Button}