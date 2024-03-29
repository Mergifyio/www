
const imagerobot = document.querySelector('#hero-robot img');
imagerobot.parentElement.parentElement.innerHTML = `<div class="a-merg">
  <div class="a-merg__robot">
    <div class="a-merg__robot__head">
      <div class="a-merg__eyes a-merg__eye--left"></div>
      <div class="a-merg__mouth"></div>
      <div class="a-merg__eyes a-merg__eye--right"></div>
    </div>
    <div class="a-merg__robot__loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="a-merg__robot__shadow"></div>
  </div>
  <div class="a-merg__items-list">
    <!-- item ------------------------------------->
    <div class="a-merg__item">
      <div class="a-merg__item__thumb-cont">
	<div class="a-merg__thumb a-merg__thumb--requested">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.95" height="30.48" viewBox="0 0 25.95 30.48">
	    <path d="M8.44,4.22A4.22,4.22,0,1,0,3.31,8.34v13.8a4.22,4.22,0,1,0,1.82,0V8.34A4.23,4.23,0,0,0,8.44,4.22Zm-6.63,0a2.41,2.41,0,1,1,2.41,2.4A2.41,2.41,0,0,1,1.81,4.22Zm4.81,22a2.41,2.41,0,1,1-2.4-2.4A2.41,2.41,0,0,1,6.62,26.26Z" fill="#fff"/>
	    <path d="M22.64,22.14v-11a7.83,7.83,0,0,0-7.38-7.81V1.25A.45.45,0,0,0,14.5.93L11.28,4.15a.44.44,0,0,0,0,.63L14.5,8a.45.45,0,0,0,.76-.32V5.18a6,6,0,0,1,5.57,6v11a4.22,4.22,0,1,0,1.81,0Zm-.9,6.53a2.41,2.41,0,1,1,2.4-2.41A2.41,2.41,0,0,1,21.74,28.67Z" fill="#fff"/>
	  </svg>
	</div>
	<div class="a-merg__thumb a-merg__thumb--merged">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="30.12" viewBox="0 0 25.65 30.12">
	    <path d="M21.48,13.38a4.19,4.19,0,0,0-4.07,3.25A14.5,14.5,0,0,1,5.7,9.46L5.07,8.37V8.24a4.17,4.17,0,1,0-1.8,0V21.88a4.17,4.17,0,1,0,1.8,0V11.76A16.33,16.33,0,0,0,17.4,18.43a4.17,4.17,0,1,0,4.08-5ZM1.79,4.17A2.38,2.38,0,1,1,4.17,6.55,2.39,2.39,0,0,1,1.79,4.17ZM6.55,26a2.38,2.38,0,1,1-2.38-2.37A2.39,2.39,0,0,1,6.55,26Zm14.93-6a2.38,2.38,0,1,1,2.37-2.38A2.39,2.39,0,0,1,21.48,19.93Z" fill="#fff"/>
	  </svg>
	</div>
      </div>
      <div class="a-merg__item__content">
	<span class="a-merg__item__title">Awesome feature</span>
	<span class="a-merg__item__infos">#2137 opened 2 hours ago by jd</span>
      </div>
    </div>
    <!-- item ------------------------------------->
    <div class="a-merg__item">
      <div class="a-merg__item__thumb-cont">
	<div class="a-merg__thumb a-merg__thumb--requested">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.95" height="30.48" viewBox="0 0 25.95 30.48">
	    <path d="M8.44,4.22A4.22,4.22,0,1,0,3.31,8.34v13.8a4.22,4.22,0,1,0,1.82,0V8.34A4.23,4.23,0,0,0,8.44,4.22Zm-6.63,0a2.41,2.41,0,1,1,2.41,2.4A2.41,2.41,0,0,1,1.81,4.22Zm4.81,22a2.41,2.41,0,1,1-2.4-2.4A2.41,2.41,0,0,1,6.62,26.26Z" fill="#fff"/>
	    <path d="M22.64,22.14v-11a7.83,7.83,0,0,0-7.38-7.81V1.25A.45.45,0,0,0,14.5.93L11.28,4.15a.44.44,0,0,0,0,.63L14.5,8a.45.45,0,0,0,.76-.32V5.18a6,6,0,0,1,5.57,6v11a4.22,4.22,0,1,0,1.81,0Zm-.9,6.53a2.41,2.41,0,1,1,2.4-2.41A2.41,2.41,0,0,1,21.74,28.67Z" fill="#fff"/>
	  </svg>
	</div>
	<div class="a-merg__thumb a-merg__thumb--merged">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="30.12" viewBox="0 0 25.65 30.12">
	    <path d="M21.48,13.38a4.19,4.19,0,0,0-4.07,3.25A14.5,14.5,0,0,1,5.7,9.46L5.07,8.37V8.24a4.17,4.17,0,1,0-1.8,0V21.88a4.17,4.17,0,1,0,1.8,0V11.76A16.33,16.33,0,0,0,17.4,18.43a4.17,4.17,0,1,0,4.08-5ZM1.79,4.17A2.38,2.38,0,1,1,4.17,6.55,2.39,2.39,0,0,1,1.79,4.17ZM6.55,26a2.38,2.38,0,1,1-2.38-2.37A2.39,2.39,0,0,1,6.55,26Zm14.93-6a2.38,2.38,0,1,1,2.37-2.38A2.39,2.39,0,0,1,21.48,19.93Z" fill="#fff"/>
	  </svg>
	</div>
      </div>
      <div class="a-merg__item__content">
	<span class="a-merg__item__title">Fix a nasty issue</span>
	<span class="a-merg__item__tag a-merg__item__tag--bug">bug</span>
	<span class="a-merg__item__infos">#2137 opened 3 days ago by sileht</span>
      </div>
    </div>
    <!-- item ------------------------------------->
    <div class="a-merg__item">
      <div class="a-merg__item__thumb-cont">
	<div class="a-merg__thumb a-merg__thumb--requested">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.95" height="30.48" viewBox="0 0 25.95 30.48">
	    <path d="M8.44,4.22A4.22,4.22,0,1,0,3.31,8.34v13.8a4.22,4.22,0,1,0,1.82,0V8.34A4.23,4.23,0,0,0,8.44,4.22Zm-6.63,0a2.41,2.41,0,1,1,2.41,2.4A2.41,2.41,0,0,1,1.81,4.22Zm4.81,22a2.41,2.41,0,1,1-2.4-2.4A2.41,2.41,0,0,1,6.62,26.26Z" fill="#fff"/>
	    <path d="M22.64,22.14v-11a7.83,7.83,0,0,0-7.38-7.81V1.25A.45.45,0,0,0,14.5.93L11.28,4.15a.44.44,0,0,0,0,.63L14.5,8a.45.45,0,0,0,.76-.32V5.18a6,6,0,0,1,5.57,6v11a4.22,4.22,0,1,0,1.81,0Zm-.9,6.53a2.41,2.41,0,1,1,2.4-2.41A2.41,2.41,0,0,1,21.74,28.67Z" fill="#fff"/>
	  </svg>
	</div>
	<div class="a-merg__thumb a-merg__thumb--merged">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="30.12" viewBox="0 0 25.65 30.12">
	    <path d="M21.48,13.38a4.19,4.19,0,0,0-4.07,3.25A14.5,14.5,0,0,1,5.7,9.46L5.07,8.37V8.24a4.17,4.17,0,1,0-1.8,0V21.88a4.17,4.17,0,1,0,1.8,0V11.76A16.33,16.33,0,0,0,17.4,18.43a4.17,4.17,0,1,0,4.08-5ZM1.79,4.17A2.38,2.38,0,1,1,4.17,6.55,2.39,2.39,0,0,1,1.79,4.17ZM6.55,26a2.38,2.38,0,1,1-2.38-2.37A2.39,2.39,0,0,1,6.55,26Zm14.93-6a2.38,2.38,0,1,1,2.37-2.38A2.39,2.39,0,0,1,21.48,19.93Z" fill="#fff"/>
	  </svg>
	</div>
      </div>
      <div class="a-merg__item__content">
	<span class="a-merg__item__title">Fix the Internet</span>
	<span class="a-merg__item__infos">#2130 opened 1 hour ago by Yves</span>
      </div>
    </div>
    <!-- item ------------------------------------->
    <div class="a-merg__item">
      <div class="a-merg__item__thumb-cont">
	<div class="a-merg__thumb a-merg__thumb--requested">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.95" height="30.48" viewBox="0 0 25.95 30.48">
	    <path d="M8.44,4.22A4.22,4.22,0,1,0,3.31,8.34v13.8a4.22,4.22,0,1,0,1.82,0V8.34A4.23,4.23,0,0,0,8.44,4.22Zm-6.63,0a2.41,2.41,0,1,1,2.41,2.4A2.41,2.41,0,0,1,1.81,4.22Zm4.81,22a2.41,2.41,0,1,1-2.4-2.4A2.41,2.41,0,0,1,6.62,26.26Z" fill="#fff"/>
	    <path d="M22.64,22.14v-11a7.83,7.83,0,0,0-7.38-7.81V1.25A.45.45,0,0,0,14.5.93L11.28,4.15a.44.44,0,0,0,0,.63L14.5,8a.45.45,0,0,0,.76-.32V5.18a6,6,0,0,1,5.57,6v11a4.22,4.22,0,1,0,1.81,0Zm-.9,6.53a2.41,2.41,0,1,1,2.4-2.41A2.41,2.41,0,0,1,21.74,28.67Z" fill="#fff"/>
	  </svg>
	</div>
	<div class="a-merg__thumb a-merg__thumb--merged">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="30.12" viewBox="0 0 25.65 30.12">
	    <path d="M21.48,13.38a4.19,4.19,0,0,0-4.07,3.25A14.5,14.5,0,0,1,5.7,9.46L5.07,8.37V8.24a4.17,4.17,0,1,0-1.8,0V21.88a4.17,4.17,0,1,0,1.8,0V11.76A16.33,16.33,0,0,0,17.4,18.43a4.17,4.17,0,1,0,4.08-5ZM1.79,4.17A2.38,2.38,0,1,1,4.17,6.55,2.39,2.39,0,0,1,1.79,4.17ZM6.55,26a2.38,2.38,0,1,1-2.38-2.37A2.39,2.39,0,0,1,6.55,26Zm14.93-6a2.38,2.38,0,1,1,2.37-2.38A2.39,2.39,0,0,1,21.48,19.93Z" fill="#fff"/>
	  </svg>
	</div>
      </div>
      <div class="a-merg__item__content">
	<span class="a-merg__item__title">Fix typo</span>
        <span class="a-merg__item__tag a-merg__item__tag--documentation">docs</span>
	<span class="a-merg__item__infos">#2137 opened 7 hours ago by GuillaumeOj</span>
      </div>
    </div>
    <!-- item ------------------------------------->
    <div class="a-merg__item a-merg__item--waiting">
      <div class="a-merg__item__thumb-cont">
	<div class="a-merg__thumb a-merg__thumb--requested">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.95" height="30.48" viewBox="0 0 25.95 30.48">
	    <path d="M8.44,4.22A4.22,4.22,0,1,0,3.31,8.34v13.8a4.22,4.22,0,1,0,1.82,0V8.34A4.23,4.23,0,0,0,8.44,4.22Zm-6.63,0a2.41,2.41,0,1,1,2.41,2.4A2.41,2.41,0,0,1,1.81,4.22Zm4.81,22a2.41,2.41,0,1,1-2.4-2.4A2.41,2.41,0,0,1,6.62,26.26Z" fill="#fff"/>
	    <path d="M22.64,22.14v-11a7.83,7.83,0,0,0-7.38-7.81V1.25A.45.45,0,0,0,14.5.93L11.28,4.15a.44.44,0,0,0,0,.63L14.5,8a.45.45,0,0,0,.76-.32V5.18a6,6,0,0,1,5.57,6v11a4.22,4.22,0,1,0,1.81,0Zm-.9,6.53a2.41,2.41,0,1,1,2.4-2.41A2.41,2.41,0,0,1,21.74,28.67Z" fill="#fff"/>
	  </svg>
	</div>
	<div class="a-merg__thumb a-merg__thumb--merged">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="30.12" viewBox="0 0 25.65 30.12">
	    <path d="M21.48,13.38a4.19,4.19,0,0,0-4.07,3.25A14.5,14.5,0,0,1,5.7,9.46L5.07,8.37V8.24a4.17,4.17,0,1,0-1.8,0V21.88a4.17,4.17,0,1,0,1.8,0V11.76A16.33,16.33,0,0,0,17.4,18.43a4.17,4.17,0,1,0,4.08-5ZM1.79,4.17A2.38,2.38,0,1,1,4.17,6.55,2.39,2.39,0,0,1,1.79,4.17ZM6.55,26a2.38,2.38,0,1,1-2.38-2.37A2.39,2.39,0,0,1,6.55,26Zm14.93-6a2.38,2.38,0,1,1,2.37-2.38A2.39,2.39,0,0,1,21.48,19.93Z" fill="#fff"/>
	  </svg>
	</div>
      </div>
      <div class="a-merg__item__content">
	<span class="a-merg__item__title">Support Docker</span>
	<span class="a-merg__item__infos">#2137 opened 3 days ago by Greesb</span>
      </div>
    </div>
    <!-- item ------------------------------------->
    <div class="a-merg__item a-merg__item--waiting">
      <div class="a-merg__item__thumb-cont">
	<div class="a-merg__thumb a-merg__thumb--requested">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.95" height="30.48" viewBox="0 0 25.95 30.48">
	    <path d="M8.44,4.22A4.22,4.22,0,1,0,3.31,8.34v13.8a4.22,4.22,0,1,0,1.82,0V8.34A4.23,4.23,0,0,0,8.44,4.22Zm-6.63,0a2.41,2.41,0,1,1,2.41,2.4A2.41,2.41,0,0,1,1.81,4.22Zm4.81,22a2.41,2.41,0,1,1-2.4-2.4A2.41,2.41,0,0,1,6.62,26.26Z" fill="#fff"/>
	    <path d="M22.64,22.14v-11a7.83,7.83,0,0,0-7.38-7.81V1.25A.45.45,0,0,0,14.5.93L11.28,4.15a.44.44,0,0,0,0,.63L14.5,8a.45.45,0,0,0,.76-.32V5.18a6,6,0,0,1,5.57,6v11a4.22,4.22,0,1,0,1.81,0Zm-.9,6.53a2.41,2.41,0,1,1,2.4-2.41A2.41,2.41,0,0,1,21.74,28.67Z" fill="#fff"/>
	  </svg>
	</div>
	<div class="a-merg__thumb a-merg__thumb--merged">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="30.12" viewBox="0 0 25.65 30.12">
	    <path d="M21.48,13.38a4.19,4.19,0,0,0-4.07,3.25A14.5,14.5,0,0,1,5.7,9.46L5.07,8.37V8.24a4.17,4.17,0,1,0-1.8,0V21.88a4.17,4.17,0,1,0,1.8,0V11.76A16.33,16.33,0,0,0,17.4,18.43a4.17,4.17,0,1,0,4.08-5ZM1.79,4.17A2.38,2.38,0,1,1,4.17,6.55,2.39,2.39,0,0,1,1.79,4.17ZM6.55,26a2.38,2.38,0,1,1-2.38-2.37A2.39,2.39,0,0,1,6.55,26Zm14.93-6a2.38,2.38,0,1,1,2.37-2.38A2.39,2.39,0,0,1,21.48,19.93Z" fill="#fff"/>
	  </svg>
	</div>
      </div>
      <div class="a-merg__item__content">
	<span class="a-merg__item__title">Improve reporting</span>
	<span class="a-merg__item__tag a-merg__item__tag--enhancement">enhancement</span>
	<span class="a-merg__item__infos">#2137 opened 3 days ago by Syfe</span>
      </div>
    </div>
    <!-- item ------------------------------------->
    <div class="a-merg__item a-merg__item--waiting">
      <div class="a-merg__item__thumb-cont">
	<div class="a-merg__thumb a-merg__thumb--requested">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.95" height="30.48" viewBox="0 0 25.95 30.48">
	    <path d="M8.44,4.22A4.22,4.22,0,1,0,3.31,8.34v13.8a4.22,4.22,0,1,0,1.82,0V8.34A4.23,4.23,0,0,0,8.44,4.22Zm-6.63,0a2.41,2.41,0,1,1,2.41,2.4A2.41,2.41,0,0,1,1.81,4.22Zm4.81,22a2.41,2.41,0,1,1-2.4-2.4A2.41,2.41,0,0,1,6.62,26.26Z" fill="#fff"/>
	    <path d="M22.64,22.14v-11a7.83,7.83,0,0,0-7.38-7.81V1.25A.45.45,0,0,0,14.5.93L11.28,4.15a.44.44,0,0,0,0,.63L14.5,8a.45.45,0,0,0,.76-.32V5.18a6,6,0,0,1,5.57,6v11a4.22,4.22,0,1,0,1.81,0Zm-.9,6.53a2.41,2.41,0,1,1,2.4-2.41A2.41,2.41,0,0,1,21.74,28.67Z" fill="#fff"/>
	  </svg>
	</div>
	<div class="a-merg__thumb a-merg__thumb--merged">
	  <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="30.12" viewBox="0 0 25.65 30.12">
	    <path d="M21.48,13.38a4.19,4.19,0,0,0-4.07,3.25A14.5,14.5,0,0,1,5.7,9.46L5.07,8.37V8.24a4.17,4.17,0,1,0-1.8,0V21.88a4.17,4.17,0,1,0,1.8,0V11.76A16.33,16.33,0,0,0,17.4,18.43a4.17,4.17,0,1,0,4.08-5ZM1.79,4.17A2.38,2.38,0,1,1,4.17,6.55,2.39,2.39,0,0,1,1.79,4.17ZM6.55,26a2.38,2.38,0,1,1-2.38-2.37A2.39,2.39,0,0,1,6.55,26Zm14.93-6a2.38,2.38,0,1,1,2.37-2.38A2.39,2.39,0,0,1,21.48,19.93Z" fill="#fff"/>
	  </svg>
	</div>
      </div>
      <div class="a-merg__item__content">
	<span class="a-merg__item__title">Make everything async</span>
	<span class="a-merg__item__infos">#2137 opened 10 days ago by Zerdanes</span>
      </div>
    </div>
  </div>
</div>
`;
