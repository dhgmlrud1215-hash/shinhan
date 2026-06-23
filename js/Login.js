function Login() {
  const [loginType, setLoginType] = React.useState("id");
  const [showQr, setShowQr] = React.useState(false);

  const handleLogin = (e) => {
    if (e) e.preventDefault();

    localStorage.setItem("isLogin", "true");
    localStorage.setItem("userName", "포트폴리오 회원");

    alert("포트폴리오용 로그인 처리되었습니다.");
    window.location.href = "#/mypage";
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <h2>로그인</h2>
        <p className="login-sub">신한카드 회원 서비스를 이용해보세요.</p>

        <div className="login-tabs">
          <button onClick={() => setLoginType("easy")}>간편 로그인</button>
          <button onClick={() => setLoginType("id")}>아이디 로그인</button>
          <button onClick={() => setLoginType("qr")}>QR 인증</button>
          <button onClick={() => setLoginType("cert")}>인증서</button>
        </div>

        {loginType === "id" && (
          <form className="login-form" onSubmit={handleLogin}>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
          </form>
        )}

        {loginType === "easy" && (
          <div className="login-guide">
            <p>간편비밀번호 또는 앱 인증으로 로그인합니다.</p>
            <button onClick={handleLogin}>간편 로그인 체험하기</button>
          </div>
        )}

        {loginType === "qr" && (
          <div className="login-guide">
            <p>신한 SOL페이 앱에서 QR 인증을 진행해주세요.</p>
            <button onClick={() => setShowQr(true)}>QR 인증 보기</button>
          </div>
        )}

        {loginType === "cert" && (
          <div className="login-guide">
            <p>공동인증서 / 금융인증서 로그인 영역입니다.</p>
            <button onClick={() => alert("포트폴리오용 화면입니다.")}>
              인증서 로그인
            </button>
          </div>
        )}

        <p className="login-notice">
          ※ 본 프로젝트는 포트폴리오용으로 실제 금융 인증은 제공하지 않습니다.
        </p>
      </section>

      {showQr && (
        <div className="modal-bg">
          <div className="qr-modal">
            <button className="close-btn" onClick={() => setShowQr(false)}>
              ×
            </button>
            <h3>QR 인증 로그인</h3>
            <div className="qr-box">QR</div>
            <p>신한 SOL페이 앱으로 QR을 스캔해주세요.</p>
            <button className="complete-btn" onClick={handleLogin}>
              인증 완료 체험
            </button>
          </div>
        </div>
      )}
    </main>
  );
}