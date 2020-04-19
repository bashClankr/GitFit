import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';




interface user {
    username: string,
    uid: string
}

@Injectable()
export class UserService {
    private user: user; 
    
    constructor(
        private firestore: AngularFirestore, 
        public afAuth: AngularFireAuth
        ){}
    
    user1 = this.afAuth.auth;

    getUID() {
        return this.user1.currentUser.uid;
    }
    create_NewWorkout(record) {
        return this.firestore.collection('Workouts').add(record);
    }
    
    read_Workouts() {
        return this.firestore.collection('Workouts').snapshotChanges();
    }
  
    
    update_Workout(recordID,record){
        this.firestore.doc('Workouts/' + recordID).update(record);
    }
    
    delete_Workout(record_id) {
    this.firestore.doc('Workouts/' + record_id).delete();
    }
    create_Favorite(record, nameID){
        
        return this.firestore.collection('Users').doc(this.user1.currentUser.uid).collection('Favorites').doc(nameID).set({
            WorkoutName: record['Name'],
            WorkoutDescript: record['Descript'],
            Image: record['Image']
        });
    }

    read_Favorites() {
        return this.firestore.collection('Users').doc(this.user1.currentUser.uid).collection('Favorites').snapshotChanges();
    }

    update_Favorite(recordID, record){
        this.firestore.doc('Users/' +  this.user1.currentUser.uid + 'Favorites/' + recordID).update(record);
    }
    delete_Favorite(record_id){
        
        this.firestore.doc('Users/' + this.user1.currentUser.uid + '/Favorites/' + record_id).delete();
    }
    
}