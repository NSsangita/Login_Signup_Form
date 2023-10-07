import React from 'react'
import cmp1 from '../Components/Assets/cmp1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const{register, handleSubmit, watch, formState:{ errors }} = useForm()
    const onSubmit = data =>console.log(data) ;
    //callback function is used to value of these input text boxes.

  return (
   <section> 
   <div className="register">
   <div className="col-1">
   <h2>Sign In</h2>
<span>register and enjoy the service</span>

<form id='form'className='flex flex-col' onSubmit= {handleSubmit(onSubmit)}>
<input type="text" {...register("username")}placeholder='username'/>
<input type="text"{...register("password")}placeholder='password'/>
<input type="text"{...register("confirm password")}placeholder='confirm password'/>
<input type="text"{...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number'/>
{errors.mobile?.type === "required" && "mobile Number is required"}
{errors.mobile?.type === "maxLength" && "max Length Exceed"}

<button className='btn'>Sign In</button>
</form>
</div>
<div className='col-2'>
<img src={cmp1} alt=""/></div>
   </div>

   </section>
  );
};

// Flex property is the combination of flex-grow, flex-shrink, and flex-basis properties. It is used to set the length of flexible items.
// Flexbox is a new concept in CSS to achieve a responsive webpage with some important properties of flexbox.

//The <span> tag is an inline container used to mark up a part of a text, or a part of a document.
//The <span> tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute.
//The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.

//using the Use form u can get regester function.
//hadleevent is used to add event handler to your form
//form state property is used to access errors.
//in input text box we used spread operator.

//Spread Operator is a very simple and powerful feature introduced in the ES6 standard of JavaScript, 
//which helps us to write nicer and shorter code. The JavaScript spread operator is denoted by three dots (…).
// The spread operator helps the iterable objects to expand into individual elements.
