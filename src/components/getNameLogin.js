import  { useState } from 'react';

export default function GetName(){
    const [loginName, setLoginName] = useState('');
    return {loginName, setLoginName};
}