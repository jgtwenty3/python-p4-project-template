#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, session
# Local imports

from config import app, db, migrate, api
# Add your model imports
from models import db, User, Shelter, Animal


# Views go here!

@app.route('/')
def home():
    return ''

@app.route('/signup')
def signup():
    pass
@app.route('/login', methods = ['POST'])
def login():
    json_data = request.get_json()

    user = User.query.filter(User.username == json_data.get('username')). first()

    if not user: 
        return {'error': 'user not found'}, 404
    if not user.authenticate(json_data.get('password')):
        return {'error': 'invalild password'}, 401
    
    session['user_id'] = user.id
    return user.to_dict(), 200

@app.route('/logout', methods = ['DELETE'])
def logout():
    session.pop('user_id', None)
    return {}, 204

@app.route('/check_session')
def check_session():
    user_id = session.get('user_id')

    user = User.query.filter(User.id == user_id).first()

    if not user:
        return{'error': 'unauthorized'}, 401
    
    return user.to_dict(),200

@app.route('/animals', methods=['GET', 'POST'])
def all_animals():

    if request.method == 'GET':
        all_animals = Animal.query.all()
        results = []
        for animal in all_animals:
            results.append(animal.to_dict())
        return results, 200

    elif request.method == 'POST':
        json_data = request.get_json()

        try:
            new_animal = Animal(
                name=json_data.get('name'),
                image=json_data.get('image'),
                arrival_date=json_data.get('arrival_date'),
                species=json_data.get('species'),
                age=json_data.get('age'),
                sex=json_data.get('sex'),
                breed=json_data.get('breed'),
                color=json_data.get('color'),
                weight=json_data.get('weight'),
                description=json_data.get('description'),
                vaxstatus=json_data.get('vaxstatus'),
                special_needs=json_data.get('special_needs'),
                adoption_status=json_data.get('adoption_status'),
                destination=json_data.get('destination'),
                shelter_id=json_data.get('shelter_id'),
                user_id=json_data.get('user_id')
            )
            db.session.add(new_animal)
            db.session.commit()

            return new_animal.to_dict(), 201
        except:
            return "Error adding the animal", 400

@app.route('/animals/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def animals_by_id(id):
    
    animal = Animal.query.filter(Animal.id == id).first()

    if animal is None: 
        return {'error': "Animal not found"}, 404
    if request.method == 'GET':
        return animal.to_dict(), 200
    elif request.method == 'DELETE': 
        db.session.delete(animal)
        db.session.commit()
        return{}, 204
    elif request.method == 'PATCH':
        json_data = request.get_json()

        for field in json_data: 
            setattr(animal, field, json_data[field])
        
        db.session.add(animal)
        db.session.commit()

        return animal.to_dict(), 200

@app.route('/shelters', methods = ['GET', 'POST'])
def all_shelters ():
    if request.method == 'GET':
        all_shelters = Shelter.query.all()
        results = []
        for shelter in all_shelters:
            results.append(shelter.to_dict())
        return results, 200

    elif request.method == 'POST':
        json_data = request.get_json()

        try:
            new_shelter = Shelter(
                user_id = json_data.get('user_id'),
                name=json_data.get('name'),
                owner_name = json_data.get('owner_name'),
                address = json_data.get('address'),
                email = json_data.get('email'),
                phone_number = json_data.get('phone_number'),
                about = json_data.get('about')
            )
            db.session.add(new_shelter)
            db.session.commit()

            return new_shelter.to_dict(), 201
        except:
            return "Error adding new shelter", 400

@app.route('/shelters/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def shelters_by_id(id):
    shelter = Shelter.query.filter(Shelter.id == id).first()

    if shelter is None: 
        return {'error': "Shelter not found"}, 404
    if request.method == 'GET':
        return shelter.to_dict(), 200
    elif request.method == 'DELETE': 
        db.session.delete(shelter)
        db.session.commit()
        return{}, 204
    elif request.method == 'PATCH':
        json_data = request.get_json()

        for field in json_data: 
            setattr(shelter, field, json_data[field])
        
        db.session.add(shelter)
        db.session.commit()

        return shelter.to_dict(), 200



if __name__ == '__main__':
    app.run(port=5555, debug=True)



