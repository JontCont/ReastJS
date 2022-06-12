let style_bg_blue = { background: 'blue', margin: '10px'}

let clickAlert = ()=>{
    alert('你已經點下我了');
}

let btnFunctionDemo =()=> {
    return( 
      <div style={style_bg_blue}>
        <button onClick={clickAlert}>請點我</button>
      </div> );
}

export default btnFunctionDemo;



// function example_01(){
//     return (
//         <div>
//             <p>使用這方式也能正常產生文字</p>
//         </div>
//     );
// };