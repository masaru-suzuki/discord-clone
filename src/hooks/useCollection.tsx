import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Channel } from '../Types';
import { db } from '../firebase';

// custom hook参考になる
const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);

  // firestoreから'channels'コレクションを非同期で取得する
  const fetchDBDocuments = async () => {
    const channelCollection = collection(db, data);
    const response = await getDocs(channelCollection);
    const dbDocs = response.docs.map((doc) => {
      const channelResult: Channel = {
        id: doc.id,
        channelName: doc.data().channelName,
      };
      return channelResult;
    });
    return dbDocs;
  };

  useEffect(() => {
    (async () => {
      const dbDocs = await fetchDBDocuments();
      setDocuments(dbDocs);
    })();
  }, []);

  return { documents };
};

export default useCollection;
