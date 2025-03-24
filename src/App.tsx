// src/App.tsx
import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './App.css';
import logo from './assets/images/logo.jpg';
import banner from './assets/images/banner.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

interface ReservationForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: '',
  });
  const [loading, setLoading] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     await addDoc(collection(db, 'reservations'), formData);
  //     alert('訂位成功！');
  //     setFormData({ name: '', phone: '', date: '', time: '', people: '' });
  //   } catch (error) {
  //     console.error('Error adding reservation: ', error);
  //     alert('訂位失敗，請稍後再試');
  //   }
  //   setLoading(false);
  // };

  return (
    <>
      <header>
        <div className='banner' style={{ backgroundImage: `url(${banner})` }}></div>
        <div className='logo'><img src={logo} alt="" /></div>
        <div className='text'>吃紅餐館 JIA AN </div>
        <div className='search-box'>
          <div className="search-container">
            <input
              type="text"
              placeholder="搜尋美食..."
              className="search-input"
            />
            <button className="search-icon">
              <i className="fas fa-search"></i> {/* Font Awesome 放大鏡圖示 */}
            </button>
          </div>
        </div>

      </header >
    </>
  );
};

export default App;
