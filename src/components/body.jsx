import React,{ Component } from 'react';
import '../css/body.css';
import {myFunction} from '../util/function.jsx'

class Body extends Component{
    render(){
		// let name = this.props.name;
		// let Age = this.props.age;


        return(
        
		<div className='body'>

			<div className='div1'>	
				<label htmlFor='name'>Name :</label> 
				<input type="text" id="name" placeholder="Enter Name..." />	
				<br/>
				<label htmlFor='age'>Age :</label>
			    <input type="number"  id="age" placeholder="Enter Age..."/>
				<br/>
				<label htmlFor='gender'>Gender :</label>
				 <input type="radio" name="gender" id="gfemale" value="Female" checked={true}/>
				 <label>Female</label>
				<input type="radio" name="gender" id="gmale" value="Male"/>
				<label>Male</label>
				<button onClick={myFunction}>Submit</button> 
			</div>
			<div className='div2'>
				<h2 >Print:</h2>
				<p id='invalid' className='invalid'/>
				<p id='uname' />
				<p id='uage' />
				<p id='ugender'/>
			</div>
		</div>


		);

    }
}
export default Body;