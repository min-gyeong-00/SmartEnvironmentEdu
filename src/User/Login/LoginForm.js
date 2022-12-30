import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {customAxios} from "../../Common/CustomAxios";
import {RESPONSE_UNAUTHORIZED} from "../../Common/Response";
import './LoginForm.css'

function LoginForm()
{
    const {register,handleSubmit,formState: {errors}} = useForm();
    const navigate = useNavigate();

    function onSubmit(data)
    {
        customAxios.post("/login",{...data})
            .then((response)=> {
                navigate("/");
            })
            .catch((error)=>{
                if(error.response.request.status === RESPONSE_UNAUTHORIZED)
                {
                    alert("아이디 또는 비밀번호가 일치하지 않습니다");
                }
                else
                {
                    alert(error.response.request.status);
                }
            })
    }

    return (
        <>
        
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                <h1>로그인</h1>
                <div className="formbuilder-text form-group field-text-1672210761141">
        
        <input type="text" placeholder="아이디" className="form-control" name="text-1672210761141" access="false" maxlength="20" id="text-1672210761141" required="required" aria-required="true"/>
    </div>
    <div className="formbuilder-text form-group field-text-1672210872324">
        
        <input type="password" placeholder="비밀번호" className="form-control" name="text-1672210872324" access="false" maxlength="20" id="text-1672210872324" required="required" aria-required="true"/>
    </div>
                <button type="submit" class="btn btn-secondary">로그인</button>
                <div className="find">
                    <a href="/Find">아이디 / 비밀번호 찾기</a>
                    <a href="/Register">회원가입</a>
                </div>
                </fieldset>
            </form>
            
        </>
    );
}

export default LoginForm;