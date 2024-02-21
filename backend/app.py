from flask import Flask,request,jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)

@app.route('/cart',methods=['POST'])
def addItemToCard():
    new_object = request.data
    new_object = json.loads(new_object)
    fname = 'JSON.json'
    with open(fname, 'r') as file:
        data = json.load(file)
    data['data'].append(new_object)
    with open(fname, 'w') as file:
        json.dump(data, file, indent=2)
    return jsonify('ok')


@app.route('/getCard' , methods=['GET','POST'])
def getCardItems():
    fname = 'JSON.json'
    with open(fname , 'r') as f:
        data = json.load(f)
   

    return jsonify(data)


@app.route('/getAllProducts' , methods=['POST','GET'])
def getAllProducts():
    fname ='products.json'
    with open(fname , 'r',encoding="utf8") as f:
        data = json.load(f)
    return jsonify(data)


@app.route('/removeItem' , methods = ['GET' , 'POST'])
def removeItems():
    fname = 'JSON.json'
    productId = request.data
    productId = json.loads(productId)
    obj  = json.load(open(fname))
    cardItems = obj['data']
    cardItems = [item for item in cardItems if item != productId]
   
   
    obj['data'] = cardItems
    with open(fname, 'w') as file:
        json.dump(obj, file)
    

    return jsonify('ok')

@app.route('/addWishList',methods=['POST'])
def addWishList():
    new_object = request.data
    new_object = json.loads(new_object)
   
    fname = 'wish-list.json'
    with open(fname, 'r') as file:
        data = json.load(file)
    data['data'].append(new_object)
    with open(fname, 'w') as file:
        json.dump(data, file, indent=2)
    return jsonify('ok')

@app.route('/wishList' , methods =['POST','GET'])
def getWishList():
   
    fname = 'wish-list.json'
    with open(fname , 'r') as f:
        data = json.load(f)
    

    return jsonify(data)


@app.route('/removeWishItem' , methods = ['GET' , 'POST'])
def removeWishItem():
    fname = 'wish-list.json'
    productId = request.data
    productId = json.loads(productId)
    
    obj  = json.load(open(fname))
    cardItems = obj['data']
    cardItems = [item for item in cardItems if item != productId]
   
   
    obj['data'] = cardItems
    with open(fname, 'w') as file:
        json.dump(obj, file)
    

    return jsonify('ok')


app.run(debug=True)