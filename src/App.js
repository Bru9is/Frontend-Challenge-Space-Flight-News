import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ArticleDetailsPage from './Pages/ArticleDetailsPage';

function App() {

  return (
    <div className="container-fluid">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/:id" element={<ArticleDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
