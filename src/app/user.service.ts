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
    
    //accesses Workout collection and reads documents in it
    read_Workouts() {
        return this.firestore.collection('Workouts').snapshotChanges();
    }
  
    //updates information in certain workout with record info
    update_Workout(recordID,record){
        this.firestore.doc('Workouts/' + recordID).update(record);
    }
    
    //deletes workout from database
    delete_Workout(record_id) {
    this.firestore.doc('Workouts/' + record_id).delete();
    }

    //creates favorite in user's personal collection
    create_Favorite(record, nameID){
        
        return this.firestore.collection('Users').doc(this.user1.currentUser.uid).collection('Favorites').doc(nameID).set({
            WorkoutName: record['Name'],
            WorkoutDescript: record['Descript'],
            Image: record['Image']
        });
    }

    //reads favorites from user's collection
    read_Favorites() {
        return this.firestore.collection('Users').doc(this.user1.currentUser.uid).collection('Favorites').snapshotChanges();
    }

    //updates favorite in case information has changed
    update_Favorite(recordID, record){
        this.firestore.doc('Users/' +  this.user1.currentUser.uid + 'Favorites/' + recordID).update(record);
    }

    //deletes favorite with specified id
    delete_Favorite(record_id){
        
        this.firestore.doc('Users/' + this.user1.currentUser.uid + '/Favorites/' + record_id).delete();
    }

    search_Workouts(workout_name){
        return this.firestore.collection('Workouts', ref => ref.where('Name', '==', workout_name)).snapshotChanges();
    }
    
}