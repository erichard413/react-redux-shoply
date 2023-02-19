import { render, fireEvent, screen } from "@testing-library/react";
import App from './App';
import Store from './Store';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import rootReducerTest from './reducers/rootReducer-test';
import {useSelector, useDispatch, Provider} from 'react-redux';



const store = createStore(rootReducerTest);


test('renders store page with items', () => {
  render(<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>)
  expect(screen.getByText('TV')).toBeInTheDocument();
  expect(screen.getByText('PHONE')).toBeInTheDocument();
  expect(screen.getByText('MICROWAVE')).toBeInTheDocument();
  expect(screen.getByText('TOASTER OVEN')).toBeInTheDocument();
  expect(screen.getByText('CHAIR')).toBeInTheDocument();
  expect(screen.getByText('MIRROR')).toBeInTheDocument();
});
test('adds product to cart ', () => {
  let {container} = render(<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>)
  const tvLink = document.getElementById('link-tv');
  fireEvent.click(tvLink);
  const addBtn = document.querySelector('.addToCart');
  fireEvent.click(addBtn);
  expect(screen.getByText('Cart: 1'))
});
test('removes product from cart ', () => {
  render(<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>)
  const addBtn = document.querySelector('.addToCart');
  fireEvent.click(addBtn);
  expect(screen.getByText('Cart: 1'));
  const removeBtn =document.querySelector('.removeFromCart');
  fireEvent.click(removeBtn);
  expect(screen.getByText('Cart: 0'))
});
