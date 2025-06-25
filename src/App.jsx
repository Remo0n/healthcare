import React from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

const { Content } = Layout;

const doctorData = {
  name: "Dr. Emily Carter",
  specialty: "Cardiologist",
  location: "NY, Spain",
  bio: "Experienced and compassionate doctor specializing in cardiology",
  peers: 232,
  following: 124,
  patientServed: 1000,
  successRate: 95,
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor.",
  education: [
    {
      university: "Harvard Medical University",
      degree: "Cardiology Degree",
      specialization: "Specialization in Heart Health",
      date: "Sep 2015 - Jun 2020"
    }
  ]
};

function App() {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <Sidebar />
      <Layout className="ml-16">
        <Header doctorData={doctorData} />
        <Content className="py-6">
          <MainContent doctorData={doctorData} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
