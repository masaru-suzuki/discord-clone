import { CollectionReference, DocumentData, collection, getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Channel } from '../Types';
import { db } from '../firebase';

// custom hook参考になる
const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);

  useEffect(() => {
    let collectionRef: CollectionReference<DocumentData> = collection(db, data);

    // onSnapshotにしないと、即時更新されない！！！
    onSnapshot(collectionRef, (snapshot) => {
      let results: Channel[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, channelName: doc.data().channelName });
      });
      setDocuments(results);
    });
  }, [data]);

  return { documents };
};

export default useCollection;
