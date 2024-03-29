import { useState } from 'react';

import './main.css';
import team_discussing from './../../img/team_discussing.png'

const Main = () => {
    const [username, setUsername] = useState('Enter your user name');

    const handleChangeUsername = event => {
        setUsername(event.target.value);
    };
    
    const [userpass, setUserpass] = useState('Enter your Password');

    const handleChangeUserpass = event => {
        setUserpass(event.target.value); 
    };
    

    return (
        <div className='main'>
            <div className='main_container'>
                <div className='main_part1'>
                    
                    <h2 className='main_part1-title'>Welcome !</h2>
                    <h1 className='main_part1-text'>Sign in to</h1>
                    <h4 className='main_part1-text2'>Lorem Ipsum is simply</h4>
                    
                    <div className='main_part1-signin'>
                        <form action='#' >
                            <div className='main-part1-name'>
                                <label htmlFor="" className='main_part1-username'>User name</label><br />
                                <input type="text" 
                                    name="username" 
                                    id="username" 
                                    value={username} 
                                    className='main_part1-entername'
                                    onChange={handleChangeUsername}/>
                            </div>
                        
                        
                            <div className='main-part1-pass'>
                                <label htmlFor="" className='main_part1-userpass'>Password</label><br />
                                <input type="password" 
                                    name="userpass" 
                                    id="userpass" 
                                    value={userpass} 
                                    className='main_part1-enterpass'
                                    onChange={handleChangeUserpass}/>
                            </div>
                        
                            <div className='main_part1-check'>
                                <div className='main_part1-checkbox'>
                                    <input type="checkbox" className='main_part1-checkicon'/>
                                    <label htmlFor="" className='main_part1-check-text'> Remember me</label>
                                </div>
                                    <a href="#!" className='main_part1-forgotpass'>Forgot Password ?</a>
                            </div>
                        
                            <button type="submit" className='main_part1-login'>Login</button>
                        </form>
                    </div>
                    <div className='main_part1-register'>
                        <a href="#!" className='main_part1-registertext'>Don't have an Account ?</a>
                        <a href="#!" className='main_part1-registertext2'>Register</a>
                    </div>
                </div>
                <div className='main_part2'>
                    <img src={team_discussing} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main;