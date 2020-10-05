import firebase from "firebase";

export type Location = {
  address: string;
  geopoint: firebase.firestore.GeoPoint;
};
