const products = [
               { name: 'samsung s3 phone', price: 12000 },
               { name: 'asus laptop d34', price: 32000 },
               { name: 'apple smart watch', price: 18000 },
               { name: 'bosundhara binding paper', price: 80 },
               { name: 'lg smart phone', price: 10000 },
               { name: 'old granny land phone', price: 100 },
               { name: 'samsung watch', price: 1000 },
               { name: 'Dell laptop', price: 31000 },
               { name: 'lenovo laptop', price: 41000 },
               { name: 'smart phone', price: 1000 },
               { name: 'old granny land phone', price: 100 },
               { name: 'samsung watch-new', price: 5000 },
               { name: 'Dell laptop-new', price: 41000 },
               { name: 'lenovo laptop-new', price: 51000 },
           ]

           function searchProducts(products, searchText) {
               const matched = [];
               for (const product of products) {
                   const name = product.name;
                  if (name.indexOf(searchText) != -1) {
                       matched.push(product);
                   }
               }
               return matched; 
}

const matched = searchProducts(products, 'watch');
console.log(matched);
