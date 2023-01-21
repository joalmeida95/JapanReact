import './Login.css';

export default function Login (){
    return(
        <>
            <h1 className="login-trigger" href="#" data-target="#login" data-toggle="modal">Login</h1>

            <div id="login" class="modal fade" role="dialog">
            <div className="modal-dialog">
                
                <div className="modal-content">  
                    
                    <form className='form-log'>
                    <input type="text" name="username" class="username form-control" placeholder="Username"/>
                    <input type="password" name="password" class="password form-control" placeholder="Password"/>
                    <input class="btn login" type="submit" value="Login" />
                    <input class="btn login" type="submit" value="Sign in" />
                    </form>
                </div>
                </div>         
            </div>
        </>
    )

    
}