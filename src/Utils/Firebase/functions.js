const getAll = (dbCollection, setState) => {
  db.collection(dbCollection)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setState(doc.data());
        // doc.data() is never undefined for query doc snapshots
      });
    });
};
