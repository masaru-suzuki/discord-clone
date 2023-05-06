import { CollectionReference, DocumentData, collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Channel, Message } from '../Types';
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';

// custom hook参考になる
const useSubCollection = (collectionName: string, subCollectionName: string) => {
  const [subDocuments, setSubDocuments] = useState<Message[]>([]);
  const channelID = useAppSelector((state) => state.channel.id);

  useEffect(() => {
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      collectionName,
      String(channelID),
      subCollectionName
    );

    // TODO: ここ見返す
    // sortはqueryで行う
    const orderByRef = query(collectionRef, orderBy('timestamp', 'desc'));

    onSnapshot(orderByRef, (snapshot) => {
      let result: Message[] = [];
      snapshot.forEach((doc) => {
        result.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(result);
    });

    // メッセージ情報を取得する
  }, [channelID]);

  return { subDocuments };
};

export default useSubCollection;
