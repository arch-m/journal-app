import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = notesSnap.docs.map(snapHijo => 
    ({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  );

  return notes;
}
