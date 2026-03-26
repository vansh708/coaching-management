import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import Card from '../../components/ui/Card';

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get('/api/students/me/details', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if(user && user.role === 'student') {
      fetchDetails();
    }
  }, [user]);

  if (loading) return <div className="p-8 text-on-surface-variant font-serif animate-pulse">Accessing Secure Records...</div>;

  return (
    <div className="p-8 pb-32">
       <div className="mb-12 pb-6 border-b-[0.5px] border-outline-variant/30">
          <h1 className="text-4xl font-serif font-bold text-on-surface">Scholar Profile</h1>
          <p className="text-on-surface-variant mt-2">Welcome to your personal Sovereign matrix, {user?.name}.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card hover={false} className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-primary border-b-[0.5px] border-outline-variant/30 pb-4">Personal Identification</h3>
            <div className="space-y-4">
              <div>
                 <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest block mb-1">Full Legal Name</span>
                 <span className="text-lg">{details?.user?.name}</span>
              </div>
              <div>
                 <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest block mb-1">Registered Email</span>
                 <span className="text-lg">{details?.user?.email}</span>
              </div>
              <div>
                 <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest block mb-1">Contact Protocol</span>
                 <span className="text-lg">{details?.contactNumber || 'Unspecified'}</span>
              </div>
              <div>
                 <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest block mb-1">Date of Enrollment</span>
                 <span className="text-lg">{new Date(details?.joinDate).toLocaleDateString()}</span>
              </div>
            </div>
          </Card>

          <Card hover={false} className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-primary border-b-[0.5px] border-outline-variant/30 pb-4">Enrolled Curricula</h3>
             {details?.courses && details.courses.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {details.courses.map((course, i) => (
                    <div key={i} className="px-4 py-2 bg-secondary-container/50 border border-primary/20 text-on-surface rounded-lg shadow-sm">
                      {course}
                    </div>
                  ))}
                </div>
             ) : (
                <p className="text-on-surface-variant italic py-8 text-center text-sm border border-dashed border-outline-variant/30 rounded-xl">
                   No specific curricula assigned. Please contact the administrator.
                </p>
             )}
          </Card>
       </div>
       
       <h3 className="font-serif text-2xl mb-6">Course Material & Notes</h3>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details?.notes && details.notes.length > 0 ? (
             details.notes.map((note, i) => (
                <Card key={i} className="cursor-pointer group">
                  <h4 className="font-serif text-xl border-b-[0.5px] border-outline-variant/30 pb-2 mb-4 group-hover:text-primary transition-colors">{note.title}</h4>
                  <p className="text-sm text-on-surface-variant line-clamp-3">{note.content}</p>
                </Card>
             ))
          ) : (
            <div className="col-span-3">
              <Card hover={false} className="text-center py-16">
                 <p className="text-on-surface-variant italic mb-4">You have zero authorized reading materials available.</p>
                 <div className="w-16 h-16 mx-auto rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center text-2xl">📖</div>
              </Card>
            </div>
          )}
       </div>
    </div>
  );
};

export default StudentDashboard;
