function Employee(props){
    return ( 
           <>
                <h3>Employee name : {props.name}     ||      Role : {props.role ?props.role : 'no role'}</h3>   
           </>
     )
}

export default Employee;