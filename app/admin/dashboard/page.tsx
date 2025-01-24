'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { clientMessage, markSeenUpdate, messageDelete } from './server-action';
import { admin } from './career/server-action';
import moment from 'moment';
import Swal from "sweetalert2";
import { MdDelete } from 'react-icons/md';

interface MessageItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: String;
  createdAt: string;
}

interface MessageResponse {
  data: MessageItem[];
  valid: boolean;
}

const Page = () => {
  const [adminData, setAdminData] = useState<Record<string, any> | null>(null);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [seenMessages, setSeenMessages] = useState<Set<number>>(new Set());
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); 
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const adminStringify = await localStorage.getItem('admin');
        if (adminStringify) {
          const admins = JSON.parse(adminStringify);
        if (!admins.expiryTime || isNaN(new Date(admins.expiryTime).getTime())) {
          localStorage.removeItem('admin');
          router.push('/');
          return;
        }
          if (!intervalId) {
            const newIntervalId = setInterval(() => {
              if (Date.now() > admins.expiryTime) {
                localStorage.removeItem('admin');
                localStorage.removeItem("otpStartTime");
                clearInterval(newIntervalId); 
                setIntervalId(null);
                router.push('/');
              }
            }, 1000); 
            setIntervalId(newIntervalId);
          }  
          const adminServer = await admin(admins);

          if (!adminServer.bool) {
            router.push('/');
            return;
          }
          setAdminData(admins);
        } else {
          router.push('/');
          return;
        }

        const result = await clientMessage();
        setMessages(result.data || []);
        const seenIds = result.data
          .filter((msg: MessageItem) => msg.status) 
          .map((msg: MessageItem) => msg.id);
        setSeenMessages(new Set(seenIds));
      } catch (error) {
        router.push('/');
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
 return () => {
  if (intervalId) {
    clearInterval(intervalId);
    setIntervalId(null); 
  }
};
  }, [router,intervalId]);

  const markAsSeen = async (id: number) => {
    try {
      const result = await markSeenUpdate(id);
      if (result.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your status is updated successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'bg-[#05163B]  text-white rounded-lg'
          }
        });
        setSeenMessages((prev) => new Set(prev).add(id));
      }else{
        Swal.fire({
          position: "center",
          icon: "error" ,
          title: "Your status is not updated successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'bg-[#05163B]  text-white rounded-lg'
          }
        });
      }
    } catch (error) {
      
    }
  };

  const deletePost = async (id: number) => {
    try {
      const result = await messageDelete(id);
      if (result.success) {
      
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item deleted successfully",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-[#05163B]  text-white rounded-lg'
            }
          });
        setMessages((prev) => prev.filter((message) => message.id !== id));
      }
      else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Item is not deleted successfully!",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-[#05163B]  text-white rounded-lg'
            }
          });
      }
    } catch (error) {
      
    }
  };

  const handleSeeMore = (message: string) => {
    setModalMessage(message);
  };

  const handleCloseModal = () => {
    setModalMessage(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  if (!adminData) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-zinc-200 p-6 mt-16 mb-12">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Admin Dashboard</h1>

      {messages.length > 0 ? (
        <div className="space-y-4">
          {messages.slice().reverse().map((message) => (
            <div
              key={message.id}
              className="flex flex-col md:flex-row justify-between items-start p-6 rounded-lg shadow-lg bg-slate-300 transition-shadow duration-300"
            >
              <div className="flex-1 space-y-2 text-gray-600">
                <h2 className="text-xl font-bold text-gray-800">{message.name}</h2>
                <p>
                  <strong>Email:</strong> {message.email}
                </p>
                <p>
                  <strong>Phone:</strong> {message.phone}
                </p>
                <p>
                  <strong>Time:</strong> {moment(message.createdAt).format('MMMM D, YYYY, h:mm:ss A')} (
                  {moment(message.createdAt).fromNow()})
                </p>
                <p>
                  <strong>Message:</strong>{' '}
                  {message.message.length > 26 ? (
                    <>
                      {message.message.slice(0, 26)}...
                      <button
                        onClick={() => handleSeeMore(message.message)}
                        className="text-blue-500 hover:underline"
                      >
                        See More
                      </button>
                    </>
                  ) : (
                    message.message
                  )}
                </p>
              </div>
              <button
                onClick={() => markAsSeen(message.id)}
                className={`px-4 py-2 mt-4 md:mt-0 rounded-md text-white ${
                  seenMessages.has(message.id) ? 'bg-green-500' : 'bg-red-500'
                } hover:bg-opacity-90 transition duration-300`}
              >
                {seenMessages.has(message.id) ? 'Seen' : 'Mark as Seen'}
              </button>
              <button
                onClick={() => deletePost(message.id)}
                className="md:mx-4 lg:mx-4 text-white bg-red-500 px-4 py-2 mt-4 md:mt-0 rounded-md transition duration-300 text-md"
              >
                <MdDelete className="text-2xl" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-red-600">
          <p>No data available</p>
        </div>
      )}

      {modalMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-slate-300 p-8 rounded-lg w-8/12 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Full Message</h2>
            <p className="text-black">{modalMessage}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
