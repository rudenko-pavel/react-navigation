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

	9. Create `src/components/SecondPage/SecondPage.scss`, `src/components/SecondPage/SecondPage.js`
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

 ## ***************** Route menu between twice pages (v.1.0) ************************* ##

# STEP 4:
## Change menu according to the rules REDUX Cycle 

	## Action Creator - to change state of our app
	## Action 
	## dispatch 
	## Middleware 
	## Reducers 
	## State 

	18. Create `public/json/headermenu.json`
		## create file with data (menu items):
		{
			"headermenu" : [
				{"id": 1, "name": "One", "link": "/"},
				{"id": 2, "name": "Two", "link": "/second"}
			]
		}
		
	19. console:
		npm i --save axios@0.18.1
		
	20. Create configuration file with pre-configuration `src/apis/headermenu.js`:
		## данные не меняются (константы)
		import axios from 'axios';

		export default axios.create({
			baseURL: '/'
		});
		
	21. Create `src/actions/index.js`
		## `Action creator` + `Action`:
		import headermenu from '../apis/headermenu';
		export const fetchMenuitems = () => async dispatch =>{
			const responce = await headermenu.get('/headermenu.json');
			dispatch( {type: 'FETCH_MENUITEMS', payload: responce.data.headermenu } )
		};
		
	22. console:
		npm i --save redux-thunk
		npm i --save redux react-redux
		
	23. Create `src/reducers/index.js`
		## если нет данных для передачи, мы все-равно должны что-то передавать.
		## Поэтому или убираем `import reducers from './reducers';` или добавлем `dummy reducers`:
		import { combineReducers } from 'redux';
		export default combineReducers({
			dummyKey: 'replaceMe'
		});
		
	23. Edit `src/index.js`:
		import { Provider } from 'react-redux';
		import { createStore, applyMiddleware } from 'redux';
		import reducers from './reducers';
		import thunk from 'redux-thunk';

		const store = createStore(reducers, applyMiddleware(thunk));

		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>, 
			document.querySelector("#root")
		);
	
	24. Create `src/reducers/menuitemsReducer.js`
		export default () => {
			return 'replaceMe';
		}
	
	25. Edit `src/reducers/index.js`
	## import
		import menuitemsReducer from './menuitemsReducer';
		...
		export default combineReducers({
			menuitems: menuitemsReducer
		});
	
	26. Edit `src/reducers/menuitemsReducer.js`
		## Switch Statements in Reducers:
		export default (state=[], action) => {
			switch (action.type){ // see to `src/actions/index.js`
				case 'FETCH_MENUITEMS':
					return action.payload;
				
				default: 
					return state;
			}
		}
	
	
	29. Edit `src/components/HeaderMenu/HeaderMenu.js`:
	## функция connect() создает для нас компонент. 
	import { fetchMenuitems } from '../../actions';
	import { connect } from 'react-redux';
	...
	componentDidMount (){
		this.props.fetchMenuitems();
    };
	...
	## dispatching correct values - получаем значения
	const mapStateToProps = (state) =>{ // see to `src/reducers/index.js`
		return { 
			menuitems: state.menuitemsReducer
		};
	}

	export default connect(mapStateToProps,{
		fetchMenuitems: fetchMenuitems 		// see to `src/actions/index.js`
	})(HeaderMenu);
	
	## список кнопочек мы получили
	
	
	30. Edit `src/components/HeaderMenu/HeaderMenu.js`:
	## вывод данных на экран
	## создаем функцию, которая перебирает элементы масасива, который мы получили в `this.props.menuitems`
	## добавляем css: 
    renderList(){
        return this.props.menuitems.map(menuitem =>{
            return (
                <Link to={menuitem.link} className = "ui button" key={menuitem.id}>
                    {menuitem.name}
                </Link>
            );
        });
    }
	
	## выводим на экран результат выполнения функции:
    return( 
        <div className="row">
            <div className = "column HeaderMenu">
                <div className="ui basic buttons">
                    {this.renderList()}
                </div>
            </div>
        </div>
    );
	

	