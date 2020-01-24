# react
project: REACT-navigation 

## ## ## ## lesson from www.udemy.com (chapter 16: Navigation with React Router)
	## Проект будет состоять из: 
	-  Компонент `FirstPage` - отдельная страница
	-  Компонент `SecondPage` - отдельная страница
	-  Компонент `HeaderMenu` - меню вверху страницы с сылками на компоненты `FirstPage` и  `SecondPage`


## ## ## Instruction

# STEP 1:
## preparation of project (Подготовка проекта) 
	1. console
		## создаем проект
		create-react-app navigation
		cd navigation
		npm start

	2. delete all files from `client/src`

	3. Create `src/index.js`:
		import React from 'react';
		import ReactDOM from 'react-dom';
		import App from './components/App';
		ReactDOM.render( <App />, document.querySelector('#root'));

	4. Create `src/components/App.js`:
		import React from 'react';
		const App = () =>{
			return(<div>App</div>)
		}
		export default App;

	5. Add some css: 		// optional
		## console
			npm i --save semantic-ui-css
			npm i --save sass node-sass
		## Create files `src/index.scss`, `src/components/App.scss`
		## import `css`
		5.1. Edit `src/index.js`:
			import 'semantic-ui-css/semantic.min.css';
			import './index.scss'; 
		5.2. Edit `src/components/App.js`:
			import './App.scss'; 
			return(<div className="ui container">App</div>)

	6. console
		## добавляем библиотеку в зависимости:
		npm install --save react-router-dom

	7. Edit `src/components/App.js`:
		## import
		import { BrowserRouter, Route } from 'react-router-dom';


# STEP 2:
## создаем компоненты. Каждый компонент будет отображаться на отдельной странице
	8. Create `src/components/FirstPage/FirstPage.scss`, `src/components/FirstPage/FirstPage.js`
		import React, { Component } from 'react';
		import './FirstPage.scss';

		class FirstPage extends Component{
			render(){
				return( 
					<div className = "FirstPage">
						First Page
					</div>
				);
			}
		}
		export default FirstPage;

	9. Create `src/components/SecondtPage/SecondtPage.scss`, `src/components/SecondtPage/SecondtPage.js`
		import React, { Component } from 'react';
		import './SecondPage.scss';

		class SecondPage extends Component{
			render(){
				return( 
					<div className = "SecondPage">
						Second tPage
					</div>
				);
			}
		}
		export default SecondPage;

	## создаем компонент `HeaderMenu`:
	10. Create `src/components/HeaderMenu/HeaderMenu.scss`, `src/components/HeaderMenu/HeaderMenu.js`
		import React, { Component } from 'react';
		import './HeaderMenu.scss';

		class HeaderMenu extends Component{
			render(){
				return( 
					<div className = "HeaderMenu">
						Header Menu
					</div>
				);
			}
		}
		export default HeaderMenu;

# STEP 3:
## создаем рероутинг
	11. Edit `src/component/App.js`:
		## Импортируем созданные компоненты:
		import FirstPage from './FirstPage/FirstPage';
		import SecondPage from './SecondPage/SecondPage';
		import HeaderMenu from './HeaderMenu/HeaderMenu';

	12. Edit `src/component/App.js`:
		## добавляем экземпляр BrowserRouter:
		    return(
				<div className="ui container">
					<BrowserRouter>
						<div>
							<Route path="/" exact component={FirstPage} />
							<Route path="/second" exact component={SecondPage} />
						</div>
					</BrowserRouter>
				</div>
			)

	13. Edit `src/component/App.js`:
		## add css:
		return(
			<div className="ui container">
				<BrowserRouter>
					<div>
						<HeaderMenu />
						<Route path="/" exact component={FirstPage} />
						<Route path="/second" component={SecondPage} />
					</div>
				</BrowserRouter>
			</div>
		)
		## отображаются все компоненты, `Route path` которых содержится в URL
		## т.е. если адрес будет `localhost:3000/second`, то он содержит и "/" и "/second"
		## Отображаются оба компонента
		## для исправления ситуации и применяю `exact` - не содержание, а точное равенство

	14. Edit `src/components/HeaderMenu/HeaderMenu.js`:
		## add css:
		render(){
			return( 
				<div className="row">
					<div className = "column HeaderMenu">
						<div className="ui buttons">
							<a className = "ui button">One</a>
							<a className = "ui button">Two</a>
						</div>
					</div>
				</div>
			);
		}

	15. Edit `src/components/HeaderMenu/HeaderMenu.js`:
		## добавляем ссылки
		<a href="/" className = "ui button">One</a>
        <a href="/second" className = "ui button">Two</a>

		## URL-ссылки беруться из `src/components/App.js`
		## Но при переходе по ссылке страница перегружается.
		## Для того, чтобы страница не перегружалась, необходимо:

	16. Edit `src/component/HeaderMenu/HeaderMenu.js`:
		## import `Link`
		import { Link } from 'react-router-dom';

	17. Edit `src/components/HeaderMenu/HeaderMenu.js`:
		## меняем тег `<a>` на тег `<Link>`
		<Link href="/" className = "ui button">One</Link>
        <Link href="/second" className = "ui button">Two</Link>
