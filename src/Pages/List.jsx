import React, { useState ,useEffect} from 'react'
import { Button, Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useFireBase } from '../context/FireBase';



function ListingPage() {
const[name,setName]=useState('');
const[coverPic,setcoverpic]=useState('');
const[isbnNum,setisbnNum]=useState('');
const[price,setprice]=useState('');


const {handleCreateNewListing} = useFireBase();

// upload image into cloudinary
const uploadImag= async (file)=>{

    const formData=new FormData();

    formData.append("file",file);
     formData.append("upload_preset", "my_unsigned_preset");
     formData.append("cloud_name","dkmrnhhbb");

    const res = await fetch(
    "https://api.cloudinary.com/v1_1/dkmrnhhbb/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data=await res.json();

  return data.secure_url;
}

const handleSubmit=async(e)=>{
e.preventDefault();
if(!coverPic) return ;
const imageUrl=await uploadImag(coverPic);
console.log(imageUrl);
await handleCreateNewListing(name,isbnNum,price,imageUrl)

}


  return (
    <div className='container mt-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Book Name" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            value={isbnNum}
            onChange={(e) => setisbnNum(e.target.value)}
            type="number" placeholder=" ISBN Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setprice(e.target.value)}
             type="number" placeholder=" Enter Price " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cover Pic</Form.Label>
          <Form.Control
           
            onChange={(e) => setcoverpic(e.target.files[0])}
            type="file"   />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={handleSubmit}>
        Create
        </Button>
      </Form>
      
     

    </div>
  )
}


export default ListingPage;









