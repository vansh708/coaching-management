import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const fetchStudents = async () => {
    try {
      const { data } = await axios.get('/api/students', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setStudents(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(user && user.role === 'admin') {
      fetchStudents();
    }
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to remove this scholar?')) {
      try {
        await axios.delete(`/api/students/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        fetchStudents();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', { name, email, password, contactNumber }, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setShowAdd(false);
      setName('');
      setEmail('');
      setPassword('');
      setContactNumber('');
      fetchStudents();
    } catch (error) {
       console.error(error);
       alert(error.response?.data?.message || 'Error adding student');
    }
  }

  if (loading) return <div className="p-8 text-on-surface-variant font-serif animate-pulse">Initializing Portal...</div>;

  return (
    <div className="p-8 pb-32">
       <div className="flex justify-between items-center mb-10 pb-6 border-b-[0.5px] border-outline-variant/30">
          <div>
            <h1 className="text-4xl font-serif font-bold text-on-surface">Administrative Overview</h1>
            <p className="text-on-surface-variant mt-2">Manage scholars and supervise the institution.</p>
          </div>
          <Button variant="primary" onClick={() => setShowAdd(!showAdd)}>
             {showAdd ? 'Close Panel' : 'Enroll New Scholar'}
          </Button>
       </div>

       {showAdd && (
          <Card className="mb-10 max-w-2xl bg-surface-lowest">
            <h3 className="font-serif text-2xl mb-6 text-primary">New Enrollment Profile</h3>
            <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="FULL NAME" value={name} onChange={e=>setName(e.target.value)} required />
              <Input label="EMAIL ADDRESS" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
              <Input label="INITIAL PASSPHRASE" value={password} onChange={e=>setPassword(e.target.value)} required />
              <Input label="CONTACT NUMBER" value={contactNumber} onChange={e=>setContactNumber(e.target.value)} />
              <div className="md:col-span-2 mt-4 flex justify-end">
                <Button variant="secondary" type="submit">Submit Record</Button>
              </div>
            </form>
          </Card>
       )}

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card hover={false} className="flex flex-col gap-2">
            <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest">Active Scholars</span>
            <span className="text-5xl font-serif text-primary">{students.length}</span>
          </Card>
       </div>

       <h3 className="font-serif text-xl mb-6">Directory of Scholars</h3>
       
       <div className="overflow-x-auto bg-surface-lowest border-[0.5px] border-outline-variant/30 rounded-xl">
         <table className="w-full text-left border-collapse">
           <thead>
             <tr className="border-b-[0.5px] border-outline-variant/30 bg-surface-high/50">
               <th className="p-4 text-xs tracking-widest text-on-surface-variant font-semibold uppercase">Scholar Identity</th>
               <th className="p-4 text-xs tracking-widest text-on-surface-variant font-semibold uppercase">Contact Matrix</th>
               <th className="p-4 text-xs tracking-widest text-on-surface-variant font-semibold uppercase">Courses</th>
               <th className="p-4 text-xs tracking-widest text-on-surface-variant font-semibold uppercase text-right">Actions</th>
             </tr>
           </thead>
           <tbody>
             {students.map(student => (
               <tr key={student._id} className="border-b-[0.5px] border-outline-variant/10 hover:bg-surface-high/30 transition-colors">
                 <td className="p-4">
                   <div className="font-serif text-lg text-on-surface">{student.user?.name}</div>
                   <div className="text-xs text-primary">{student.user?.email}</div>
                 </td>
                 <td className="p-4 text-sm text-on-surface-variant">{student.contactNumber || 'N/A'}</td>
                 <td className="p-4 flex gap-2">
                    {student.courses?.length > 0 ? (
                      student.courses.map((c, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-secondary-container text-primary rounded border border-primary/20">{c}</span>
                      ))
                    ) : (
                      <span className="text-xs text-outline-variant italic">No Courses</span>
                    )}
                 </td>
                 <td className="p-4 text-right">
                   <button onClick={() => handleDelete(student._id)} className="text-xs tracking-widest uppercase text-red-500 hover:text-red-400 font-semibold transition-colors">Expel</button>
                 </td>
               </tr>
             ))}
             {students.length === 0 && (
                <tr>
                   <td colSpan="4" className="p-8 text-center text-on-surface-variant italic font-serif">No scholars found in the registry.</td>
                </tr>
             )}
           </tbody>
         </table>
       </div>
    </div>
  );
};

export default AdminDashboard;
