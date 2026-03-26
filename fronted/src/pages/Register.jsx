import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Only pass contactNumber if student
    const res = await register({ 
      name, 
      email, 
      password, 
      role, 
      contactNumber: role === 'student' ? contactNumber : undefined 
    });

    if(res.success) {
      navigate('/');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-8 py-16 relative">
      <div className="absolute inset-0 bg-surface-lowest pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>
      
      <Card className="w-full max-w-md z-10 glass-panel shadow-ambient" hover={false}>
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded mb-4 bg-gradient-to-br from-primary to-primary-container shadow-[0_0_15px_rgba(242,202,80,0.4)] flex items-center justify-center text-surface-lowest font-serif text-2xl leading-none">
            G
          </div>
          <h2 className="text-3xl font-serif font-bold text-on-surface">Apply for Admission</h2>
        </div>

        {error && <div className="bg-red-900/40 border-[0.5px] border-red-500/50 text-red-100 p-3 rounded mb-6 text-sm flex items-center gap-2">⚠️ {error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input 
            label="FULL NAME" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Jane Doe"
          />

          <Input 
            label="EMAIL ADDRESS" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="scholar@glorious.edu"
          />
          
          <div className="flex gap-4 items-center mt-2">
            <span className="text-sm font-medium text-on-surface-variant uppercase">Role Selection:</span>
            <label className="flex items-center gap-2 text-sm text-on-surface hover:text-primary cursor-pointer transition-colors">
               <input type="radio" className="accent-primary" checked={role === 'student'} onChange={() => setRole('student')} />
               Student
            </label>
            <label className="flex items-center gap-2 text-sm text-on-surface hover:text-primary cursor-pointer transition-colors">
               <input type="radio" className="accent-primary" checked={role === 'admin'} onChange={() => setRole('admin')} />
               Administrator
            </label>
          </div>

          {role === 'student' && (
             <Input 
                label="CONTACT IDENTIFIER (optional)" 
                type="text" 
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="+1 800 555 1234"
              />
          )}

          <Input 
            label="PASSPHRASE" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
          
          <Button variant="primary" type="submit" className="w-full mt-4">Confirm Application</Button>
        </form>
        
        <p className="text-center text-sm text-on-surface-variant mt-8">
          Already verified? <Link to="/login" className="text-primary hover:underline underline-offset-4">Authenticate Instead.</Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
