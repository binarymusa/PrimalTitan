COmmands to run the app ;
  I. normal python method
    1. python run.py or python3 run.py
  II.using a wsgi server for deployment such as gunicorn
    - note : ensure you have a reverse proxyserver such as nginx configured to listen on a channel(i.e ip address
    1. gunicorn -w 4 -b 0.0.0.0:8000 run:app
