const onSubmitHandler=(e)=>{
    e.preventDefault();

    const productName=e.target.productName.value;

    const obj={
        productName:productName
    }

    axios.post('http://localhost:3000/products',obj).then((result)=>{
console.log("Value returned from post request: ",result.data);
    })
}