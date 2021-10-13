import './App.css';
import UserContainer from "./components/users/userContainer";
import store from "./components/users/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>

        <div className = "App" >

            <UserContainer/>
    </div>
        </Provider>
    );
}

export default App;