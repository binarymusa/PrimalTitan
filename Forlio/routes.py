
from Forlio import app
from flask import render_template



@app.route('/')
@app.route('/Author')
def Author():
    return render_template('author.html')


@app.route('/Projects')
def projectforlio():
    return render_template('projectforlio.html')