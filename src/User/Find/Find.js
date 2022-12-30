import React, { Component } from 'react';
import './Find.css'

class Find extends Component {
    render() {
        return (
            <>
                <form>
                    <fieldset>
                    <h2>아이디 찾기</h2><br/>
                    <div className="id-find">
                    <div class="rendered-form">
                    <div className="formbuilder-text form-group field-text-1672212277435">
                    <label for="text-1672212277435" class="formbuilder-text-label">이름<span class="formbuilder-required"></span></label>
                    <input type="text" placeholder="이름" class="form-control" name="text-1672212277435" access="false" maxlength="" id="text-1672212277435" required="required" aria-required="true"/>
                    </div>
                    </div>
                    </div>
                    <div className="id-find">
                    <div className="formbuilder-text form-group field-text-1672210970933">
        <label for="text-1672210970933" className="formbuilder-text-label">이메일<span className="formbuilder-required"></span></label>
        <input type="email" placeholder="이메일" className="form-control" name="text-1672210970933" access="false" id="text-1672210970933" required="required" aria-required="true"/>
    </div>
                    </div>
                    <button type="submit" class="btn btn-secondary">확인</button>
                    </fieldset>
                </form>
                <form>
                    <fieldset>
                    <h2>비밀번호 찾기</h2><br/>
                    <div className="password-find">
                    <div class="rendered-form">
                    <div className="formbuilder-text form-group field-text-1672212277435">
                    <label for="text-1672212277435" class="formbuilder-text-label">이름<span class="formbuilder-required"></span></label>
                    <input type="text" placeholder="이름" class="form-control" name="text-1672212277435" access="false" maxlength="" id="text-1672212277435" required="required" aria-required="true"/>
                    </div>
                    </div>
                    </div><div className="password-find">
                    <label for="text-1672210761141" className="formbuilder-text-label">아이디<span className="formbuilder-required"></span></label>
        <input type="text" placeholder="아이디" className="form-control" name="text-1672210761141" access="false" maxlength="20" id="text-1672210761141" required="required" aria-required="true"/>
  
                    </div><div className="password-find">
                    <div className="formbuilder-text form-group field-text-1672210970933">
        <label for="text-1672210970933" className="formbuilder-text-label">이메일<span className="formbuilder-required"></span></label>
        <input type="email" placeholder="이메일" className="form-control" name="text-1672210970933" access="false" id="text-1672210970933" required="required" aria-required="true"/>
 
                    </div>
                    </div>
                    <button type="submit" class="btn btn-secondary">임시비밀번호 받기</button>
                    </fieldset>
                </form>
            </>
                




            
        );
    }
}


export default Find;



