<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko-KR">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>WooCha</title>
	
	<!-- fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap&subset=korean">
	
	<!-- global style sheets -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
    <link rel="stylesheet" href="/styles/normalize.css">
    <link rel="stylesheet" href="/styles/global_settings.css">
    <!-- login style sheets -->
    <link rel="stylesheet" href="/styles/login/login_navigation.css">
    <!-- findPassword style sheet -->
    <link rel="stylesheet" href="/styles/login/find_password.css">
    
    <!-- javascripts -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js" defer></script>
	<script type="text/javascript" src="/js/login/findPassword.js" defer></script>
</head>
<body>
<div id="root">
	<div class="main">
		<nav class="navigation">
			<a class="navigation-image" href="/"></a>
			<ul class="navigation-login-area">
				<li>
					<a class="login-button" href="/login">로그인</a>
				</li>
			</ul>
		</nav>
		<main class="find-password-area">
			<div src="/images/login/login.jpg" class="find-password-image">
				<main class="find-password-box">
					<div class="find-password-content">
						<button class="back-button" onclick="history.back()"></button>
	               		<div class="find-password-title">비밀번호 재설정</div>
	                    <form>
	                        <div id="email-box" class="find-password-email-box">
	                        	<input name="email" class="find-password-input" autocomplete="off" data-valid="false" placeholder="이메일 (example@gmail.com)" type="email" value="">
	                        </div>
	                        <p>가입하신 이메일 주소를 입력해 주시면 비밀번호 재설정 메일이 발송됩니다. 메일 확인 후 새로운 비밀번호를 설정해 주세요.</p>
	                        <div class="find-password-button-box">
	                        	<button type="submit" class="find-password-button">확인</button>
	                        </div>
	                    </form>
					</div>
				</main>
			</div>
		</main>
	</div>
</div>
</body>
</html>