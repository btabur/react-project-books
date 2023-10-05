# react-rpoject-books

- json server ve axios kullanarak verileri çekerek ekranda gösterdiğim bir kaç sayfadan oluşan bir uygulama
- react-router-dom kullanıldı.
- dinamik url nasıl verilir ?
- react-router-dom: syfalar göstemek için geliştirilmiş bir kütüphane. böylelikle sayfa yenlenmeden daha hızlı bir şekilde sayfalar yüklenebilmektedir.

- en dışta browserRouter yer alır onun altında Routes ve Route şeklinde yollar verilir

```javascript
<BrowserRouter>
      <Routes>
        <Route path='/' element= {<MainPage/>}/>
        <Route path='/ürünler' element = {<ProductsPage/>} />
      </Routes>
    </BrowserRouter>
```

- ekran gif

![](ekran.mov)