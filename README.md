The file covers the basics to the complexities of tthe python flask framework:

  it encompasses 5 major files, that is the;

    game file consisting of the :
        static files(html,bootstrap css and javascript and other bootstrap icons files)
  
    A virtual environent file for the app(titan)
  
    A app execution file(run.py) for sTarting the application
  
    -and a file containing some of the apps dependency file(requirements.txt )

 Commands to run the app ;

    I. normal python method
      1. python run.py or python3 run.py
    
    II.using a wsgi server for deployment such as gunicorn
      - note : ensure you have a reverse proxyserver such as nginx configured to listen on a channel(i.e ip address
      1. gunicorn -w 4 -b 0.0.0.0:8000 run:app
