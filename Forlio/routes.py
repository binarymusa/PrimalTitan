
from Forlio import app
from flask import render_template



@app.route('/')
@app.route('/Home')
def Home():
    return render_template('home.html')


@app.route('/Projects')
def projectforlio():
    return render_template('projectforlio.html')