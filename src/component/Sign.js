import React, { useState } from 'react';
import './sign.css';

function Sign() {
  const [isSignMode, setIsSignMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleMode = () => {
    setIsSignMode(!isSignMode);
  };

  const handleSubmit = () => {
    // 로그인 또는 회원가입 처리 로직을 구현합니다.
    if (isSignMode) {
      if (username === 'user' && password === 'password') {
        alert('로그인 성공!');
      } else {
        alert('로그인 실패!');
      }
    } else {
      // 회원가입 처리 로직을 추가합니다.
      alert('회원가입 완료!');
    }
  };

  return (
    <div className="Sign-container">
      <h2>{isSignMode ? '로그인' : '회원가입'}</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="사용자명"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="Sign-button" onClick={handleSubmit}>
        {isSignMode ? '로그인' : '회원가입'}
      </button>
      <p onClick={handleToggleMode}>
        {isSignMode ? '회원가입으로 전환' : '로그인으로 전환'}
      </p>
    </div>
  );
}

export default Sign;