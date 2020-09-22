# Progetto applicazioni web 2

Il progetto consiste in una applicazione web che permette all'utente di ordinare una pizza e farcirla 
con gli ingredienti preferiti. 

I prezzi di ingredienti e dimensione della pizza vengono richiesti al server ma il calcolo 
finale del prezzo è fatto sul frontend con javascript (è possibile anche farlo sul backend tramite una end point
già disponibile ma non lo ritengo necessario).


## 1. Backend

Il backend è stato fatto con:

* Spring boot.
* MySql per la persistenza dei dati.

### API

 
> POST /api/price

    Recive nel body la pizza e restituisce il prezzo
    Al momento non è utilizzato
 
> GET /api/pizzaIngredients

        Restituisce gli ingredienti
                                             
        [
           {
              "name":"FUNGHI",
              "imageUrl":"api/ingredient/FUNGHI/image",
              "price":4
           },
           {
              "name":"OLIVE",
              "imageUrl":"api/ingredient/OLIVE/image",
              "price":2
           },
           {
              "name":"PROSCIUTTO",
              "imageUrl":"api/ingredient/PROSCIUTTO/image",
              "price":5
           },
           {
              "name":"VERDURE",
              "imageUrl":"api/ingredient/VERDURE/image",
              "price":5
           }
        ]

> GET /api/pizzaSizes      

    Restituisce le dimensioni disponibili
    
    [
       {
          "name":"FAMIGLIARE",
          "price":16
       },
       {
          "name":"NORMALE",
          "price":10
       },
       {
          "name":"PICCOLA",
          "price":8
       }
    ]                                



## 2. Frontend

Il frontend è stato fatto con:

* React
* Axios per effettuare le richieste al backend.

I componenti di react sono tutti funzionali.

Per la gestione dello stato ho utilizzato il Hook useReducer che ha un concetto simile a quello di redux
e che facilita la transizione da uno stato precedente a quello prossimo.


## 3. Deploy dell'applicazione

Per il deploy dell'applicazione sul server isin ho utilizzato un plugin di maven che permette 
in modo automatizzato di:

* Fare il build del frontend di react eseguendo il comando npm run build.
* Spostare il contenuto della cartella build all'interno del progetto spring boot nella cartella public
per essere servito come una risorsa statica.
