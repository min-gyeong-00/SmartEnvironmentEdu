import { useForm } from 'react-hook-form';
import {
  RESPONSE_BAD_REQ,
  RESPONSE_CONFLICT,
  RESPONSE_OK,
  RESPONSE_SERV_UNAVAILABLE,
} from '../../Common/Response';
import { customAxios } from '../../Common/CustomAxios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ROLE } from '../../Common/Role';
import './RegisterForm.css';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [passwordCheck, setPasswordCheck] = useState('');

  function onSubmit(data) {
    if (data.password === passwordCheck) {
      customAxios
        .post('/register', { ...data })
        .then((response) => {
          if (response.data.code === RESPONSE_OK) {
            alert(
              '입력하신 메일 주소로 인증번호를 전송했습니다. 가입 완료를 위해 인증번호를 입력해주세요'
            );
            navigate('/register/authentication', {
              state: {
                username: data.username,
                email: data.email,
                userRole: ROLE[0],
              },
            });
          }
        })
        .catch((error) => {
          if (error.response.request.status === RESPONSE_BAD_REQ) {
            alert('형식에 맞게 입력해주세요');
          } else if (error.response.request.status === RESPONSE_CONFLICT) {
            alert('이미 사용된 아이디 또는 이메일입니다');
          } else if (
            error.response.request.status === RESPONSE_SERV_UNAVAILABLE
          ) {
            alert('메일 전송에 실패했습니다');
          } else {
            alert(error.response.request.status);
          }
        });
    } else {
      alert('비밀번호를 확인해주세요');
    }
  }

  return (
    <div className='container'>
    <form>
      <filedset>
      <h1>회원가입</h1><br/>
      <div class="rendered-form">
      <div className="formbuilder-text form-group field-text-1672212277435">
      <label for="text-1672212277435" class="formbuilder-text-label">이름<span class="formbuilder-required"></span></label>
      <input type="text" placeholder="이름" class="form-control" name="text-1672212277435" access="false" maxlength="" id="text-1672212277435" required="required" aria-required="true"/>
      </div>
      </div>
      <div className="rendered-form">
    <div className="formbuilder-text form-group field-text-1672210761141">
        <label for="text-1672210761141" className="formbuilder-text-label">아이디<span className="formbuilder-required">*</span></label>
        <input type="text" placeholder="5~20자" className="form-control" name="text-1672210761141" access="false" maxlength="20" id="text-1672210761141" required="required" aria-required="true"/>
    </div>
    <div className="formbuilder-text form-group field-text-1672210872324">
        <label for="text-1672210872324" className="formbuilder-text-label">비밀번호<span className="formbuilder-required">*</span></label>
        <input type="password" placeholder="8~20자" className="form-control" name="text-1672210872324" access="false" maxlength="20" id="text-1672210872324" required="required" aria-required="true"/>
    </div>
    <div className="formbuilder-text form-group field-text-1672210921568">
        <label for="text-1672210921568" className="formbuilder-text-label">비밀번호 확인<span className="formbuilder-required">*</span></label>
        <input type="password" placeholder="비밀번호 확인" className="form-control" name="text-1672210921568" access="false" maxlength="20" id="text-1672210921568" required="required" aria-required="true"/>
    </div>
    <div className="formbuilder-text form-group field-text-1672210970933">
        <label for="text-1672210970933" className="formbuilder-text-label">이메일<span className="formbuilder-required">*</span></label>
        <input type="email" placeholder="이메일" className="form-control" name="text-1672210970933" access="false" id="text-1672210970933" required="required" aria-required="true"/>
    </div>
</div>
      <div className="rendered-form">
      <div className="rendered-form">
    <div className="formbuilder-select form-group field-select-1672187521433">
        <label for="select-1672187521433" class="formbuilder-select-label">성별<span className="formbuilder-required">*</span></label>
        <select className="form-control" name="select-1672187521433" id="select-1672187521433">
            <option value="option-1" selected="true" id="select-1672187521433-0">남성</option>
            <option value="option-2" id="select-1672187521433-1">여성</option>
        </select>
    </div>
</div>
    </div>
    <div className="formbuilder-select form-group field-select-1672186988770">
        <label for="select-1672186988770" className="formbuilder-select-label">소속<span className="formbuilder-required">*</span></label>
        <select className="form-control" name="select-1672186988770" id="select-1672186988770" required="required" aria-required="true" >
            <option value="option-1" selected="true" id="select-1672186988770-0">유아</option>
            <option value="option-2" id="select-1672186988770-1">초등학생</option>
            <option value="option-3" id="select-1672186988770-2">중학생</option>
            <option id="select-1672186988770-3">고등학생</option>
            <option id="select-1672186988770-4">환경지도사</option>
            <option id="select-1672186988770-5">교사</option>
            <option id="select-1672186988770-6">일반인</option>
        </select>
    </div>
    <div className="rendered-form">
    <div className="formbuilder-date form-group field-date-1672210634855">
        <label for="date-1672210634855" class="formbuilder-date-label">생년월일<span class="formbuilder-required">*</span></label>
        <input type="date" class="form-control" name="date-1672210634855" access="false" id="date-1672210634855" required="required" aria-required="true"/>
    </div>
</div>
      <button type="submit" class="btn btn-secondary">
        회원가입
      </button>
      
    </filedset>
    </form>
    </div>
  );
}

export default RegisterForm;
