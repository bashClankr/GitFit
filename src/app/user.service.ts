import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

interface user {
    username: string,
    uid: string
}

@Injectable()
export class UserService {
    private user: user; 

    constructor(private firestore: AngularFirestore){}

    setUser(user: user) {
        this.user = user;
    }

    getUID() {
        return this.user.uid;
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
    
}