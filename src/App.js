import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Statement from './components/Statement';
import Home from './components/Home';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

export default function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Link to="/" style={{ color: 'white' }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" color="inherit" component="div">
              My Bank
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/statement" element={<Statement />} />
        </Routes>
      </div>
    </Router>
  );
}
