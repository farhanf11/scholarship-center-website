import React from 'react';
import '../../App.css';
import  './SignUp.css';
import {Button} from '../Button';

export default function LogIn() {
  return (
    <>
      <div className='sign-up'>
        <div>
          <p className='name'>Nama Lengkap</p>
          <input id='name' type={'text'}/>
        </div>
        <div>
          <p className='email'>Email</p>
          <input id='email' type={'email'}/>
        </div>
        <div>
          <p className='password'>Password</p>
          <input id='password' type={'text'}/>
        </div>
        <div>
          <p className='password'>Confirm Password</p>
          <input id='password' type={'text'}/>
        </div>
        <Button>
          LOG IN
        </Button>
      </div>
    </>
  );
}
